import os, json, asyncio
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
import redis.asyncio as redis

app = FastAPI()

redis_client = redis.from_url(os.environ["REDIS_URL"], decode_responses=True)
CHANNEL = "broadcast"

connections: set[WebSocket] = set()

@app.websocket("/ws")
async def ws(ws: WebSocket):
    await ws.accept()
    connections.add(ws)

    pubsub = redis_client.pubsub()
    await pubsub.subscribe(CHANNEL)

    async def reader():
        async for msg in pubsub.listen():
            if msg["type"] == "message":
                for client in list(connections):
                    await client.send_text(msg["data"])

    reader_task = asyncio.create_task(reader())

    try:
        while True:
            data = await ws.receive_text()
            await redis_client.publish(CHANNEL, data)
    except WebSocketDisconnect:
        connections.remove(ws)
        reader_task.cancel()
        await pubsub.unsubscribe(CHANNEL)
