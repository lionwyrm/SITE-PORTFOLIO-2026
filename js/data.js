// =============================================
//  LIONWYRM PORTFOLIO - ARQUIVO DE DADOS
//  ⚙️  EDITE ESTE ARQUIVO para personalizar
//  seu portfólio com suas próprias imagens,
//  textos e informações!
// =============================================

const PORTFOLIO_DATA = {

  // ---- INFORMAÇÕES DO SITE ----
  site: {
    titulo: "PORTFÓLIO LIONWYRM",
    autor: "Lucas – LionWyrm"
  },

  // ---- PÁGINA SOBRE MIM ----
  // 📸 Coloque o caminho da sua foto em "foto"
  // ✍️  Edite o texto em "bio" (use \n para pular linha)
  sobreMim: {
    nome: "LUCAS DAMASIO DA SILVA",
    apelido: "LionWyrm",
    foto: "assets/lucas.jpg",  // Ex: "assets/foto-lucas.jpg"
    roles: ["Designer Digital", "Game Designer", "Ilustrador"],
    bio: `Olá! Sou Lucas, mais conhecido online como LionWyrm.

Formado em Comunicação Visual pela ETEC e atualmente cursando o último semestre de Design de Mídias Digitais na FATEC.

Experiência em design de personagens, interface de usuário e game design da concepção à conclusão.

Também possuo extensa experiência em eventos. Busco oportunidades profissionais na área de criação e game design.

Vamos criar algo incrível juntos!`
  },
  
  // ---- ARTES (organizadas por ano) ----
  //
  // ✏️  COMO EDITAR:
  //   - Cada entrada em "anos" representa um ano na galeria.
  //   - Os anos aparecem em ordem decrescente (2026 no topo).
  //   - Em cada ano, adicione quantas artes quiser em "itens".
  //   - "src": caminho da imagem  →  Ex: "assets/artes/floresta.png"
  //            Se null, aparece um placeholder colorido.
  //   - "titulo": nome da obra (aparece no lightbox ao abrir).
  //
  // ➕  ADICIONAR UM ANO NOVO: copie um bloco { ano: XXXX, itens: [...] }
  // ➕  ADICIONAR UMA ARTE:    adicione { id: N, src: "caminho", titulo: "Nome" }
  //                            dentro do array "itens" do ano correto.
  //
  // ⚠️  IDs devem ser únicos em todo o arquivo (não repita números).

  artesPorAno: [
    {
      ano: 2026,
      itens: [
        { id: 101, src: null, titulo: "Arte 2026 – 01 · Floresta Neon" },
        { id: 102, src: null, titulo: "Arte 2026 – 02 · Dragão Pixel" },
        { id: 103, src: null, titulo: "Arte 2026 – 03 · Cidade Cyberpunk" },
        { id: 104, src: null, titulo: "Arte 2026 – 04 · Personagem LionWyrm" },
      ]

    },
    {
      ano: 2025,
      itens: [
        { id: 201, src: "assets/artes/1.png", titulo: "Equipe IndieGO" },
        { id: 202, src: "assets/artes/6.png", titulo: "Guerreiro em fundo nublado" },
        { id: 203, src: null, titulo: "Arte 2025 – 03 · Tileset Floresta" },
        { id: 204, src: null, titulo: "Arte 2025 – 04 · UI Concept" },
        { id: 205, src: null, titulo: "Arte 2025 – 05 · Character Sheet" },
      ]
    },
    {
      ano: 2024,
      itens: [
        { id: 301, src: "assets/artes/2.jpg", titulo: "Projeto TOTEM: Herói Elemental" },
        { id: 302, src: null, titulo: "Arte 2024 – 02 · Retrato Digital" },
        { id: 303, src: null, titulo: "Arte 2024 – 03 · Concept Art" },
      ]
    },
    {
      ano: 2023,
      itens: [
        { id: 401, src: "assets/artes/3.jpg", titulo: "Auto-Retrato LIONWYRM" },
        { id: 402, src: "assets/artes/4.jpg", titulo: "OC universo: SoulHackers" },
        { id: 403, src: "assets/artes/5.jpg", titulo: "Black, Red and White Mages" },
        { id: 404, src: "assets/artes/7.jpg", titulo: "Gênio" },
      ]
    },
    {
      ano: 2022,
      itens: [
        { id: 501, src: null, titulo: "Arte 2022 – 01 · Placeholder" },
        { id: 502, src: null, titulo: "Arte 2022 – 02 · Placeholder" },
        { id: 503, src: null, titulo: "Arte 2022 – 03 · Placeholder" },
      ]
    },
    {
      ano: 2021,
      itens: [
        { id: 601, src: null, titulo: "Arte 2021 – 01 · Placeholder" },
        { id: 602, src: null, titulo: "Arte 2021 – 02 · Placeholder" },
      ]
    },
    {
      ano: 2020,
      itens: [
        { id: 701, src: "assets/artes/9.jpg", titulo: "Fan-Art: Sonya de FIRE EMBLEM" },
        { id: 702, src: null, titulo: "Arte 2020 – 02 · Placeholder" },
      ]
    },
    {
      ano: 2019,
      itens: [
        { id: 801, src: null, titulo: "Arte 2019 – 01 · Placeholder" },
      ]
    },
    {
      ano: 2018,
      itens: [
        { id: 901, src: null, titulo: "Arte 2018 – 01 · Placeholder" },
      ]
    },
    {
      ano: 2017,
      itens: [
        { id: 1001, src: null, titulo: "Arte 2017 – 01 · Placeholder" },
      ]
    },
    {
      ano: 2016,
      itens: [
        { id: 1101, src: null, titulo: "Arte 2016 – 01 · Placeholder" },
      ]
    },
    {
      ano: 2015,
      itens: [
        { id: 1201, src: null, titulo: "Arte 2015 – 01 · Placeholder" },
      ]
    },
    {
      ano: 2014,
      itens: [
        { id: 1301, src: null, titulo: "Arte 2014 – 01 · Placeholder" },
      ]
    },
    {
      ano: 2013,
      itens: [
        { id: 1401, src: null, titulo: "Arte 2013 – 01 · Placeholder" },
      ]
    },
    {
      ano: 2012,
      itens: [
        { id: 1501, src: null, titulo: "Arte 2012 – 01 · Placeholder" },
      ]
    },
    {
      ano: 2011,
      itens: [
        { id: 1601, src: null, titulo: "Arte 2011 – 01 · Placeholder" },
      ]
    },
    {
      ano: 2010,
      itens: [
        { id: 1701, src: null, titulo: "Arte 2010 – 01 · Placeholder" },
      ]
    },
    {
      ano: 2009,
      itens: [
        { id: 1801, src: null, titulo: "Arte 2009 – 01 · Placeholder" },
      ]
    },
    {
      ano: 2008,
      itens: [
        { id: 1901, src: null, titulo: "Arte 2008 – 01 · Placeholder" },
      ]
    },

  ],

  // ---- GAMES ----
  // 🎮 Para cada game, preencha os campos abaixo.
  // "imagemCapa": imagem que aparece na lista
  // "imagens": array de imagens que aparecem na página de detalhe
  // "linkExterno": link para itch.io, GameJolt etc.
  games: [
    {
      id: "Corrida",
      titulo: "SUPER GOBLIN KART RUMBLE 2000",
      tag: "Corrida / Multiplayer",
      descricaoCurta: "Um jogo que combina eletrizantes combates de veículos com GOBLINS ALUCINADOS!",
      descricaoLonga: `SUPER GOBLIN KART RUMBLE 2000 é uma louca mistura de corrida de karts, ação FPS, caos PvE, goblins e... GALINHAS!!.

Tudo banhado em pura nostalgia dos anos 2000.

Inspirado nos clássicos Vigilante 8 e Twisted Metal, combina gameplay de combate de carros com hordas de inimigos, estrelas do pop mundial e claro, GOBLINS!!.

Originalmente criado para a Crazy Web Game Jam 2024 em parceria com meus grandes amigos da Goburin Studios. Esse jogo é um protótipo criado para uma game jam.`,
      imagemCapa: "assets/games/goblin/1.png",    // Ex: "assets/games/dungeon/capa.png"
      imagens: ["assets/games/goblin/3.png", "assets/games/goblin/4.png", "assets/games/goblin/2.png"], // Ex: ["assets/games/dungeon/img1.png", ...]
      linkExterno: "https://goburin-studios.itch.io/super-goblin-kart-rumble-2000",
      linkLabel: "Jogar no Itch.io"
    },
    {
      id: "pdt",
      titulo: "PORTAL DO TRIUNFO - SUCESSO EM CURSO",
      tag: "Visual Novel / Educação",
      descricaoCurta: "Descubra o curso ideal para você nesse moderno teste vocacional.",
      descricaoLonga: `Portal do Triunfo - Sucesso em Curso é uma Visual Novel criada por alunos da FATEC Carapicuíba na Sala Maker com o intuito de auxiliar futuros alunos a escolher um curso de forma lúdica.

O jogador embarca em uma aventura que mistura realidade e ficção. Nesse processo, acaba conhecendo a região aos arredores do campus da FATEC e quais cursos a unidade oferece.

Os personagens compõem os perfis dos estudantes dos 7 cursos oferecidos. O resultado da aventura pode ser compartilhado nas redes sociais.`,
      imagemCapa: "assets/games/portal/1.png",
      imagens: ["assets/games/portal/2.png", "assets/games/portal/3.png", "assets/games/portal/4.png"],
      linkExterno: "https://salamaker.itch.io/portaldotriunfo",
      linkLabel: "Jogar no itch.io"
    }
    
  ],

  // ---- TRABALHOS (FREELANCE / PROJETOS ACADÊMICOS) ----
  trabalhos: [
    {
      id: "marca",
      titulo: "Manual de Identidade Visual – Narval Design Digital",
      tag: "Identidade Visual",
      descricaoCurta: "Criação de logotipo e identidade visual completa para a empresa fictícia Narval Design Digital.",
      descricaoLonga: `Projeto de identidade visual para a empresa fictícia Narval Design Digital.

Desenvolvimento de logotipo principal, variações monocromáticas, paleta de cores oficiais e guia de estilo básico.

Entregáveis: Arquivos em vetorial (AI/SVG), PNG com fundo transparente em múltiplas resoluções e mockups de aplicação.`,
      imagemCapa: "assets/jobs/narval/1.jpg",
      imagens: ["assets/jobs/narval/10.jpg", "assets/jobs/narval/11.jpg", "assets/jobs/narval/14.jpg"],
      linkExterno: "https://www.behance.net/gallery/237454407/Narval-Design-Digital-MIV?platform=direct",
      linkLabel: "Ver Projeto Completo"
    },
        
  ],

  // ---- EVENTOS ----
  // 📷 Coloque o caminho da foto em "foto"
  eventos: [
    {
      id: 1,
      foto: "assets/eventos/1.jpeg",
      titulo: "Gamescom LATAM 2026",
      descricao: "Equipe Triagem Cosplay da Gamescom 2026"
    },
    {
      id: 2,
      foto: "assets/eventos/2.jpeg",
      titulo: "Comic Con Experience 2025",
      descricao: "Participação na CCXP 25 na equipe de Triagem Cosplay. Foi uma experiência incrível de conexão com a comunidade geek nacional."
    },
    {
      id: 3,
      foto: "assets/eventos/3.jpeg",
      titulo: "Gamescom LATAM 2025",
      descricao: "Participei da Gamescom LATAM 2025 como parte da equipe de apoio da área Play Next Consoles."
    },
    {
      id: 4,
      foto: "assets/eventos/4.jpeg",
      titulo: "Comic Con Experience 2024",
      descricao: "Participação na CCXP 24 na equipe de Triagem Cosplay."
    },
    {
      id: 5,
      foto: "assets/eventos/5.jpeg",
      titulo: "Campus Party 16",
      descricao: "Exposição da Sala Maker na Campus Party 16 em 2024."
    },
    {
      id: 6,
      foto: "assets/eventos/6.jpeg",
      titulo: "Gamescom LATAM 2024",
      descricao: "Equipe de apoio da primeira Gamescom LATAM."
    }
  ]
};
