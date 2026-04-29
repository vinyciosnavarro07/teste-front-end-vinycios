# 🛍️ Vitrine de Produtos - Econverse

Aplicação de vitrine de produtos desenvolvida como teste técnico, focada em reproduzir um layout de e-commerce com alta fidelidade ao Figma, priorizando responsividade, componentização e experiência do usuário, desenvolvida em **React 19** com **TypeScript** e **Vite**.

## 🎯 Sobre o Projeto

Vitrine responsiva e intuitiva que apresenta uma coleção de produtos com suporte completo a diferentes dispositivos (mobile, tablet e desktop). Implementada com boas práticas de SEO, HTML semântico e componentização clara.

### ✨ Principais Funcionalidades

- ✅ Catálogo de produtos com modal de detalhes
- ✅ Menu hamburguês responsivo
- ✅ Carrossel de produtos com navegação
- ✅ Barra de busca expansível em mobile
- ✅ Categorias navegáveis
- ✅ Newsletter
- ✅ Footer completo
- ✅ 100% responsivo (mobile, tablet, desktop)

## 📋 Requisitos

- **Node.js** v18.0.0 ou superior
- **npm** v9.0.0 ou superior (ou yarn/pnpm)

## 🚀 Instalação e Configuração

### 1. Clone o repositório

```bash
git clone https://github.com/vinyciosnavarro07/teste-front-end-vinycios.git
cd teste-front-end-vinycios
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

## 🔨 Comandos Disponíveis

### 🏃 Rodar em Desenvolvimento

Inicia o servidor de desenvolvimento com HMR (Hot Module Replacement):

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

### 🏗️ Compilar para Produção

Cria uma build otimizada e pronta para produção:

```bash
npm run build
```

Os arquivos compilados serão gerados em `./dist`

### 👀 Preview da Build

Visualiza a versão de produção localmente:

```bash
npm run preview
```

### 📝 Linting

Verifica o código quanto a erros e boas práticas:

```bash
npm run lint
```

## 📂 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.tsx       # Cabeçalho com menu mobile
│   ├── CategoryMenu.tsx # Menu de categorias
│   ├── ProductCard.tsx  # Card de produto
│   ├── ProductCarousel.tsx
│   ├── ProductModal.tsx # Modal de detalhes
│   ├── Footer.tsx       # Rodapé
│   └── ...
├── pages/
│   └── Home.tsx         # Página principal
├── services/
│   └── api.ts           # Chamadas de API
├── styles/              # Estilos SCSS
│   ├── global.scss      # Estilos globais
│   └── [component].scss # Estilos por componente
├── types/
│   └── Product.ts       # Interfaces TypeScript
├── assets/
│   ├── icons/           # Ícones da aplicação
│   └── logo.png
├── App.tsx              # Componente raiz
├── main.tsx             # Ponto de entrada
└── vite-env.d.ts        # Tipos Vite

public/
└── mock/
    └── products.json    # Dados de exemplo
```
## 🧠 Decisões Técnicas

- Utilização de Swiper para garantir um carrossel performático e responsivo
- Estrutura baseada em componentes reutilizáveis
- Uso de SCSS com design tokens para escalabilidade
- Implementação de layout mobile-first
- Separação de responsabilidades (services, components, types)
- Utilização de dados mockados locais (`public/mock/products.json`) devido a restrições de CORS na API original, mantendo a mesma estrutura de dados para facilitar futura integração real sem refatorações

## 🛠️ Stack Tecnológico

| Tecnologia | Versão | Uso |
|-----------|--------|-----|
| React | ^19.2.5 | Framework UI |
| TypeScript | ~6.0.2 | Tipagem estática |
| Vite | ^8.0.10 | Build tool |
| SCSS | ^1.99.0 | Pré-processador CSS |
| Swiper | ^12.1.3 | Carrossel |
| ESLint | ^10.2.1 | Linting |

## 🎨 Design e Responsividade

Breakpoints utilizados:

- **Mobile**: até 480px
- **Tablet**: 481px a 768px
- **Desktop**: 769px em diante

O projeto utiliza variáveis CSS para tema e design tokens:

```scss
--color-primary: #3019B2;
--color-secondary: #F7CA11;
--font-family: 'Poppins', sans-serif;
```

## 📱 Compatibilidade

- ✅ Chrome (últimas 2 versões)
- ✅ Firefox (últimas 2 versões)
- ✅ Safari (últimas 2 versões)
- ✅ Edge (últimas 2 versões)
- ✅ Mobile browsers

## 🔒 Best Practices Implementadas

### HTML Semântico
- ✅ Uso de `<header>`, `<main>`, `<footer>`, `<nav>`, `<article>`, `<section>`
- ✅ Atributos `aria-label` em botões
- ✅ Imagens com `alt` descritivos

### SEO
- ✅ Meta tags (title, description, viewport)
- ✅ Open Graph meta tags
- ✅ Google Fonts preconectado
- ✅ Estrutura de heading apropriada

### Acessibilidade
- ✅ Labels semânticos
- ✅ Navegação por teclado
- ✅ Contraste de cores adequado
- ✅ ARIA labels

## 🐛 Troubleshooting

### Port 5173 já está em uso

```bash
# Kill o processo usando a porta
# Windows:
netstat -ano | findstr :5173

# Mac/Linux:
lsof -i :5173
```

### Erro de dependências

```bash
# Limpe o cache e reinstale
rm -rf node_modules package-lock.json
npm install
```

### Build falha

```bash
# Verifique se há erros de tipo TypeScript
npm run build
```
## 👤 Autor

**Vinycios** - Desenvolvedor Front-end

## 📄 Licença

Este projeto é fornecido como está para fins de teste técnico.

---

**Desenvolvido em React + TypeScript + Vite**
