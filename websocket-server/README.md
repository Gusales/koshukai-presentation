# Koshukai Presentation WebSocket Server

Um servidor WebSocket robusto e escalável desenvolvido com **Python**, **websockets** e **asyncio**, focado em fornecer comunicação em tempo real para apresentações sobre "Educação, Ciência e Tecnologia no Brasil".

## 🎯 Sobre o Projeto

Koshukai Presentation WebSocket Server é um servidor de comunicação em tempo real construído com tecnologias modernas do ecossistema Python. O projeto destaca-se pela capacidade de gerenciar múltiplas conexões simultâneas, suporte a broadcasting de mensagens e uma arquitetura limpa e extensível.

## 🚀 Tecnologias Utilizadas

- **Python 3.8+** - Linguagem de programação versátil e poderosa
- **websockets** - Biblioteca Python para comunicação WebSocket
- **asyncio** - Framework assíncrono para I/O não-bloqueante
- **python-dotenv** - Gerenciamento de variáveis de ambiente
- **pip** - Gerenciador de pacotes Python

## 📋 Pré-requisitos

- Python 3.8+
- pip (gerenciador de pacotes Python)
- virtualenv ou venv (recomendado para isolamento de ambiente)

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone <repository-url>
cd koshukai-presentation-websocket-server
```

2. Crie um ambiente virtual:
```bash
python -m venv env
# Windows
env\Scripts\activate
# macOS/Linux
source env/bin/activate
```

3. Instale as dependências:
```bash
pip install -r requirements.txt
```

## 📦 Scripts Disponíveis

- **`python main.py`** - Inicia o servidor WebSocket
- **`pip install -r requirements.txt`** - Instala todas as dependências do projeto
- **`pip freeze > requirements.txt`** - Atualiza a lista de dependências

## 🌍 Comunicação em Tempo Real

O servidor WebSocket suporta:

- **Conexões Persistentes** - Mantém conexões abertas com múltiplos clientes
- **Broadcasting** - Envia mensagens para todos os clientes conectados
- **Mensagens Privadas** - Comunicação direcionada entre clientes
- **Gerenciamento de Conexões** - Rastreamento e gerenciamento automático de clientes

### Exemplo de Uso

```python
import asyncio
import websockets

async def handler(websocket, path):
    async for message in websocket:
        # Processa a mensagem recebida
        await websocket.send(f"Echo: {message}")

async def main():
    async with websockets.serve(handler, "localhost", 8765):
        await asyncio.Future()  # Executa indefinidamente

asyncio.run(main())
```

## 📁 Estrutura do Projeto

```
koshukai-presentation-websocket-server/
├── main.py                    # Arquivo principal do servidor
├── requirements.txt           # Dependências do projeto
├── .env                       # Variáveis de ambiente (não versionado)
├── .env.example               # Exemplo de variáveis de ambiente
├── env/                       # Ambiente virtual Python
│   ├── Scripts/              # Executáveis do ambiente (Windows)
│   ├── Lib/                  # Bibliotecas instaladas
│   └── pyvenv.cfg            # Configuração do ambiente virtual
├── LICENSE                    # Licença MIT
└── README.md                  # Este arquivo
```

## ⚙️ Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` baseado em `.env.example`:

```env
# Configuração do servidor
HOST=0.0.0.0
PORT=8765
```

Para acessar as variáveis no código:

```python
from dotenv import load_dotenv
import os

load_dotenv()

HOST = os.getenv("HOST", "0.0.0.0")
PORT = int(os.getenv("PORT", "8765"))
```

## 🚀 Executando o Servidor

```bash
# Ative o ambiente virtual (se ainda não estiver ativado)
source env/bin/activate  # macOS/Linux
# ou
env\Scripts\activate     # Windows

# Inicie o servidor
python main_old.py
```

O servidor estará disponível em `ws://localhost:8765`

## 🔌 Arquitetura do Servidor

O servidor implementa:

1. **Handler de Conexões** - Gerencia conexões de novos clientes
2. **Pool de Conexões** - Mantém registro de clientes conectados
3. **Sistema de Broadcasting** - Distribui mensagens para todos os clientes
4. **Tratamento de Erros** - Captura exceções e reconecta clientes

## 📊 Monitoramento

Para monitorar a atividade do servidor:

```python
# Adicione logging ao seu main_old.py
import logging

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

logger.info("Servidor iniciado em ws://localhost:8765")
```

## 🛡️ Segurança

Recomendações de segurança:

- Use variáveis de ambiente para credenciais
- Implemente autenticação de clientes
- Valide todas as mensagens recebidas
- Use WSS (WebSocket Secure) em produção
- Configure CORS apropriadamente

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 👥 Contribuidores

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/gusales">
        <img src="https://avatars.githubusercontent.com/u/85498221?v=4&s=100" width="100px;" alt="Gustavo Sales" style="border-radius: 50%;"/>
        <br />
        <sub><b>Gustavo Sales</b></sub>
      </a>
      <br />
      🚀 Maintainer
    </td>
  </tr>
</table>

---

## 📄 Licença

Este projeto está licenciado sob a **MIT License**.

**MIT License © 2026 Gustavo Sales**

Permissão é concedida, gratuitamente, a qualquer pessoa que obtenha uma cópia deste software e dos arquivos de documentação associados (o "Software"), para usar o Software sem restrições, incluindo, sem limitação, os direitos de usar, copiar, modificar, mesclar, publicar, distribuir, sublicenciar e/ou vender cópias do Software.

Para mais detalhes, veja o arquivo [LICENSE](LICENSE) no repositório.

---

## 👨‍💻 Autor

Desenvolvido com ❤️ para comunicação em tempo real em apresentações multilíngues sobre educação, ciência e tecnologia.
