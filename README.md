# GourmetOn

Landing page para apresentação do aplicativo de delivery GourmetOn. O projeto foi desenvolvido para o Check-Point 05 de Web Development with JavaScript.

## Tecnologias

- React
- Vite
- Tailwind CSS
- Font Awesome
- Fetch API
- Spoonacular API

## Instalação

### 1. Instalar o Node.js

1. Acesse [nodejs.org](https://nodejs.org/en/download).
2. Baixe a versão LTS para o seu sistema operacional.
3. Execute o instalador e mantenha as opções padrão. O npm será instalado junto com o Node.js.
4. Feche e abra novamente o terminal.
5. Confirme a instalação:

```bash
node --version
npm --version
```

O projeto usa Vite 8 e requer Node.js 20.19 ou superior, ou 22.12 ou superior.

### 2. Instalar o Tailwind CSS e as dependências

Abra o terminal na pasta do projeto e execute:

```bash
npm install
```

Esse comando lê o `package.json` e instala automaticamente o React, Vite, Tailwind CSS, Font Awesome e as demais dependências do projeto.

O Tailwind já está configurado neste projeto por meio do pacote `@tailwindcss/vite`. Em um projeto Vite sem essa configuração, a instalação manual seria:

```bash
npm install tailwindcss @tailwindcss/vite
```

Depois, adicione o plugin ao arquivo `vite.config.js`:

```js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
})
```

E importe o Tailwind no arquivo CSS principal:

```css
@import "tailwindcss";
```

### 3. Configurar a Spoonacular

Crie um arquivo `.env.local` na raiz do projeto e adicione sua chave da Spoonacular:

```env
VITE_SPOONACULAR_API_KEY=sua_chave_aqui
```

### 4. Executar o projeto

```bash
npm run dev
```

Abra no navegador o endereço exibido pelo Vite, normalmente `http://localhost:5173`.

## Funcionalidades

- Busca de receitas pela Spoonacular API
- Filtro por tipo de alimentação
- Exibição do tempo de preparo e quantidade de porções
- Tratamento de carregamento, resultados vazios e erros da API

## Integrantes

- Bruno Carreiro dos Santos, RM: 569423
- Eduardo Bechara Medeiros Craveiro, RM: 571081
- Gustavo Moita de Lima, RM: 569180