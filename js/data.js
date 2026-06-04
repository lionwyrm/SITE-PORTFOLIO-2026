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
  
  // ---- ARTES ----
  // 🖼️  Para cada arte, coloque o caminho da imagem em "src"
  // e um título em "titulo". O campo "altura" controla o
  // tamanho no mosaico (use valores entre 160 e 340).
  artes: [
      { id: 1, src: "assets/artes/1.png", titulo: "Equipe IndieGO",         altura: 340 },
      { id: 2, src: "assets/artes/2.jpg", titulo: "Projeto TOTEM: Herói Elemental",          altura: 340 },
      { id: 3, src: "assets/artes/3.jpg", titulo: "Auto-Retrato LIONWYRM",      altura: 340 },
      { id: 4, src: "assets/artes/4.jpg", titulo: "OC universo: SoulHackers",   altura: 340 },
      { id: 5, src: "assets/artes/5.jpg", titulo: "Black, Red and White Mages",        altura: 340 },
      { id: 6, src: "assets/artes/6.png", titulo: "Guerreiro em fundo nublado",           altura: 340 },
      { id: 7, src: "assets/artes/7.jpg", titulo: "Gênio",      altura: 340 },
      { id: 8, src: "assets/artes/8.jpg", titulo: "Auto-Retrato 'Open Your Heart'",            altura: 340 },
      { id: 9, src: "assets/artes/9.jpg", titulo: "Fan-Art: Sonya de FIRE EMBLEM",       altura: 340 },
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
