 
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useRef, type ReactNode } from "react";

import { useState } from "react";
import { Steps } from "../contants";
import type { StepType } from "../types/step.type";

export interface StepContextInterface {
    step: StepType,
    connected: boolean
    stepPosition: number
    nextStep: () => void
    previousStep: () => void
    handleSetStep: (step: number) => void
}

export const StepContext = createContext<StepContextInterface>({} as StepContextInterface)

export const StepContextProvider = ({ children }: { children: ReactNode }) => {
    const [step, setStep] = useState<number>(0);
    const [isReady, setIsReady] = useState(false)
    const webSocket = useRef<WebSocket | null>(null)

    useEffect(() => {
        function connect() {
            const webSocketUrl: string = import.meta.env.VITE_WEBSOCKET_SERVER_URL || "ws://127.0.1.1:8756" // ONLY LOCAL
            try {
                const ws = new WebSocket(webSocketUrl)

                ws.onopen = () => setIsReady(true)

                ws.onclose = () => {
                    setIsReady(false)
                    console.warn('Conexão com servidor WebSocket encerrada.')
                }

                ws.onmessage = ({ data }) => {
                    console.log("Mensagem recebida")
                    console.log(data)

                    setStep(Number(data))
                }

                webSocket.current = ws

            } catch (error) {
                console.log('Não foi possível se conectar com o servidor WebSocket. A apresentação não será assistida.')
                console.log(JSON.stringify(error, null, 2))

                setIsReady(false)
            }
        }

        connect()
    }, [])

    function nextStep() {
        setStep((current) => {
            if (current === Steps.length) return current;
            const newStep = current += 1;
            webSocket.current?.send(JSON.stringify(newStep))
            return newStep;
        })
    }

    function previousStep() {
        setStep((current) => {
            if (current === 0) return current;
            const newStep = current -= 1;
            webSocket.current?.send(JSON.stringify(newStep))
            return newStep;
        })
    }

    function handleSetStep(step: number) {
        setStep(step)
        webSocket.current?.send(JSON.stringify(step))
    }

    const value: StepContextInterface = {
        step: Steps[step],
        stepPosition: step,
        handleSetStep,
        connected: isReady,
        nextStep,
        previousStep
    }

    return (
        <StepContext value={value}>
            { children }
        </StepContext>
    )
}

export const useStep = () => {
    return useContext(StepContext)
}
