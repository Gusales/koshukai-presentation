# Koshukai Presentation

Uma aplicação web moderna e interativa desenvolvida com **React**, **TypeScript** e **Vite**, focada em apresentar conteúdo sobre "Educação, Ciência e Tecnologia no Brasil" com suporte multi-idioma.

## 🎯 Sobre o Projeto

Koshukai Presentation é uma aplicação responsiva construída com tecnologias modernas do ecossistema JavaScript/TypeScript. O projeto destaca-se pelo suporte multilíngue (Português, Japonês e Inglês) e uma interface limpa e profissional.

## 🚀 Tecnologias Utilizadas

- **React 19** - Biblioteca JavaScript para construção de interfaces de usuário
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool moderno e rápido (rolldown-vite)
- **Tailwind CSS** - Framework utility-first para estilização
- **React i18next** - Solução completa de internacionalização (i18n)
- **ESLint** - Ferramenta de análise de código
- **Bun** - Runtime JavaScript e gerenciador de pacotes rápido

## 📋 Pré-requisitos

- Node.js 18+ ou Bun
- npm, yarn, pnpm ou bun como gerenciador de pacotes

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone <repository-url>
cd koshukai-presentation
```

2. Instale as dependências:
```bash
bun install
# ou
npm install
```

## 📦 Scripts Disponíveis

- **`bun dev`** - Inicia o servidor de desenvolvimento com HMR (Hot Module Replacement)
- **`bun build`** - Compila TypeScript e cria build de produção otimizado
- **`bun lint`** - Executa análise de código com ESLint
- **`bun preview`** - Visualiza a build de produção localmente

## 🌍 Suporte Multilíngue

O projeto suporta três idiomas através da configuração i18n:

- **Português** (pt)
- **Japonês** (jp)
- **Inglês** (en)

Os arquivos de tradução estão localizados em `src/locales/`:
- `pt.json` - Traduções em português
- `jp.json` - Traduções em japonês
- `en.json` - Traduções em inglês

### Usando Traduções

```tsx
import { useTranslation } from "react-i18next"

export const MyComponent = () => {
    const { t } = useTranslation()
    return <h1>{t('home.title')}</h1>
}
```

## 📁 Estrutura do Projeto

```
koshukai-presentation/
├── src/
│   ├── components/           # Componentes React
│   │   ├── app/             # Componente principal da aplicação
│   │   └── select-language/  # Seletor de idioma
│   ├── lib/
│   │   └── i18n.ts          # Configuração de internacionalização
│   ├── locales/             # Arquivos de tradução
│   │   ├── en.json
│   │   ├── jp.json
│   │   └── pt.json
│   ├── types/               # Tipos TypeScript
│   ├── assets/              # Arquivos estáticos (imagens, etc)
│   ├── index.css            # Estilos globais
│   └── main.tsx             # Ponto de entrada da aplicação
├── public/                  # Arquivos públicos
├── vite.config.ts           # Configuração do Vite
├── tsconfig.json            # Configuração do TypeScript
├── eslint.config.js         # Configuração do ESLint
└── package.json             # Dependências e scripts
```

## 🎨 Estilização

O projeto utiliza **Tailwind CSS** para estilização. As classes utilitárias do Tailwind estão disponíveis em todos os componentes.

Exemplo:
```tsx
<div className="min-h-screen w-full flex items-center justify-center">
    <h1 className="text-4xl font-bold">Título</h1>
</div>
```

## 🔧 Configuração i18n

A configuração do i18next está em `src/lib/i18n.ts`:

```typescript
i18n.use(initReactI18next).init({
    resources: {
        pt: { translation: pt },
        jp: { translation: jp },
        en: { translation: en }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    }
})
```

## 🏗️ Build para Produção

Para criar uma versão otimizada para produção:

```bash
bun build
```

Isso irá:
1. Compilar os arquivos TypeScript
2. Criar bundle otimizado com Vite
3. Gerar arquivos em `dist/`

## ✅ Qualidade de Código

Para verificar a qualidade do código:

```bash
bun lint
```

ESLint foi configurado com regras recomendadas para React e TypeScript.

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

- Incluir licença e aviso de direitos autorais

## 👨‍💻 Autor

Desenvolvido com ❤️ para apresentação de conteúdo multilíngue sobre educação, ciência e tecnologia.
