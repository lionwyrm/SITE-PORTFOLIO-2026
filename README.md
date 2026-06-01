# 🎮 PORTFÓLIO LIONWYRM – Guia Completo para Iniciantes

> Este guia foi escrito pensando em estudantes de web design que estão
> começando agora. Cada etapa é explicada com detalhes!

---

## 📁 Estrutura do Projeto

```
lionwyrm-portfolio/
│
├── index.html          ← Página principal (única página HTML!)
├── vercel.json         ← Configurações de publicação na Vercel
│
├── css/
│   └── style.css       ← Todos os estilos visuais do site
│
├── js/
│   ├── data.js         ← ⚙️ SEUS DADOS (edite aqui!)
│   └── app.js          ← Lógica e roteamento (não precisa mexer)
│
└── assets/             ← Coloque suas imagens aqui
    ├── foto-lucas.jpg     (sua foto para o Sobre Mim)
    ├── artes/             (suas ilustrações)
    ├── games/             (imagens dos seus jogos)
    ├── trabalhos/         (imagens dos seus trabalhos)
    └── eventos/           (fotos dos eventos)
```

---

## ✍️ Como Personalizar o Site

### 1. Edite o arquivo `js/data.js`

Este é o **único arquivo** que você precisa editar para colocar
seu conteúdo! Ele está cheio de comentários explicando cada campo.

**Exemplo: Adicionar sua foto na seção Sobre Mim**
```js
sobreMim: {
  nome: "Lucas",
  foto: "assets/foto-lucas.jpg",   // ← coloque o caminho aqui
  bio: `Olá! Sou Lucas...`         // ← edite seu texto aqui
}
```

**Exemplo: Adicionar uma arte na galeria**
```js
artes: [
  { id: 1, src: "assets/artes/ilustracao01.png", titulo: "Minha Arte", altura: 280 },
  // ... mais artes
]
```

**Exemplo: Adicionar um game**
```js
games: [
  {
    id: "meu-game",                          // identificador único (sem espaços)
    titulo: "Meu Primeiro Game",
    tag: "Plataforma / Pixel Art",
    descricaoCurta: "Descrição breve...",
    descricaoLonga: `Descrição completa...`,
    imagemCapa: "assets/games/meu-game/capa.png",
    imagens: [
      "assets/games/meu-game/img1.png",
      "assets/games/meu-game/img2.png",
    ],
    linkExterno: "https://itch.io/seu-game",
    linkLabel: "Ver no Itch.io"
  }
]
```

---

## 🌐 Publicando na Vercel (passo a passo)

### Pré-requisitos
- Conta gratuita na [Vercel](https://vercel.com)
- Conta gratuita no [GitHub](https://github.com)
- Git instalado no seu computador

### Passo 1: Criar repositório no GitHub
1. Acesse github.com e clique em **"New repository"**
2. Dê um nome como `lionwyrm-portfolio`
3. Marque como **Public**
4. Clique em **"Create repository"**

### Passo 2: Enviar seus arquivos para o GitHub
Abra o terminal na pasta do projeto e execute:
```bash
git init
git add .
git commit -m "primeiro commit do portfólio"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/lionwyrm-portfolio.git
git push -u origin main
```

### Passo 3: Conectar ao Vercel
1. Acesse [vercel.com](https://vercel.com) e faça login com o GitHub
2. Clique em **"New Project"**
3. Selecione o repositório `lionwyrm-portfolio`
4. Clique em **"Deploy"** (sem alterar nada)
5. Aguarde ~30 segundos
6. 🎉 Seu site está no ar!

### Passo 4: Atualizar o site depois de editar
Sempre que editar arquivos, execute no terminal:
```bash
git add .
git commit -m "atualizei minhas artes"
git push
```
A Vercel detecta automaticamente e publica a nova versão!

---

## 🔥 Firebase (opcional – para formulário de contato ou visitantes)

O Firebase permite salvar dados (como mensagens de contato) no banco de dados em nuvem.

### Criando o projeto no Firebase
1. Acesse [console.firebase.google.com](https://console.firebase.google.com)
2. Clique em **"Adicionar projeto"**
3. Nomeie como `lionwyrm-portfolio`
4. Desative o Google Analytics (não precisamos)
5. Clique em **"Criar projeto"**

### Adicionando Firestore (banco de dados)
1. No menu lateral, clique em **"Firestore Database"**
2. Clique em **"Criar banco de dados"**
3. Selecione **"Iniciar no modo de teste"** (para desenvolvimento)
4. Escolha a região `southamerica-east1` (São Paulo)

### Conectando ao site
1. No Firebase, vá em **Configurações do projeto** (ícone de engrenagem)
2. Em **"Seus apps"**, clique em **"Web"** (`</>`)
3. Registre o app com o nome `lionwyrm-portfolio`
4. Copie o objeto `firebaseConfig` que aparece
5. Cole no arquivo `js/firebase.js` (que você vai criar)

```js
// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

const firebaseConfig = {
  // Cole sua config aqui
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
};

export const app = initializeApp(firebaseConfig);
export const db  = getFirestore(app);
```

---

## 🎨 Personalizando as Cores

As cores estão todas em variáveis CSS no topo do arquivo `css/style.css`:

```css
:root {
  --bg-dark:      #261D26;  /* Fundo principal */
  --purple-mid:   #533D55;  /* Bordas e detalhes */
  --magenta-dark: #59074C;  /* Gradientes escuros */
  --purple-neon:  #9435F2;  /* Destaque principal */
  --green-neon:   #358C27;  /* Destaque games */
  --orange:       #BF6415;  /* Destaque trabalhos */
  --red-dark:     #8A2208;  /* Destaque eventos */
  --gray:         #AAAAAA;  /* Texto secundário */
}
```

Altere qualquer valor hexadecimal para mudar a cor em todo o site!

---

## 🐛 Dúvidas Comuns

**P: O site não aparece as imagens**
R: Verifique se o caminho no `data.js` está correto. Use `/` e não `\`.
   Exemplo correto: `"assets/artes/minha-arte.png"`

**P: Quero adicionar uma nova página de categoria**
R: Crie um novo objeto em `PORTFOLIO_DATA`, adicione um novo `card` no
   `Pages.home()` e uma nova função `Pages.novaCategoria()` em `app.js`.

**P: Como mudo o título na aba do navegador?**
R: Edite a tag `<title>` no `index.html` e o campo `titulo` em `data.js`.

**P: Posso usar o site sem Firebase?**
R: Sim! O Firebase é opcional. O site funciona 100% sem ele.
   O Firebase só é necessário se quiser salvar dados dinamicamente.

---

## 📚 Conceitos de Web Design Usados Neste Projeto

| Conceito | Onde aparece | Por quê |
|----------|-------------|---------|
| CSS Variables | `:root` no style.css | Facilita trocar cores no site inteiro |
| CSS Grid | `.categories-grid`, `.detail-layout` | Layout responsivo sem frameworks |
| CSS Flexbox | `.topbar`, `.item-btn` | Alinhamento de elementos |
| SPA (Single Page App) | `js/app.js` | Um único HTML com "páginas" virtuais |
| CSS Animations | `@keyframes fadeIn` | Transição suave entre páginas |
| Masonry Layout | `.gallery-mosaic` | Galeria em mosaico com CSS columns |
| Sticky Positioning | `.topbar`, `.detail-info` | Elementos fixos durante o scroll |
| Data Attributes | `data-goto`, `data-param` | Navegação sem URLs |
| CSS Custom Properties | `var(--purple-neon)` | Tema coerente e fácil de mudar |
| Responsive Design | `@media queries` | Funciona em celular e desktop |

---

*Projeto criado para Lucas (LionWyrm) · 2026*
