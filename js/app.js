// =============================================
//  LIONWYRM PORTFOLIO - ROTEADOR E RENDERIZADOR
//  Controla qual página é exibida e constrói
//  o HTML de cada seção dinamicamente.
// =============================================

// ------------------------------------------
// ROTEADOR: gerencia qual "página" mostrar
// ------------------------------------------
const Router = {
  // Página atual: 'home' | 'artes' | 'games' | 'game-detail'
  //              | 'trabalhos' | 'trabalho-detail' | 'eventos' | 'sobre'
  current: 'home',
  param: null,   // ID do item de detalhe (games / trabalhos)

  // Navega para uma rota
  go(page, param = null) {
    this.current = page;
    this.param = param;
    this.render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const hash = param ? `#${page}/${param}` : `#${page}`;
    history.pushState({ page, param }, '', hash);
  },

  // Lê a URL atual e navega para ela
  fromURL() {
    const hash = location.hash.replace('#', '');
    if (!hash || hash === 'home') { this.render(); return; }
    const [page, param] = hash.split('/');
    this.current = page;
    this.param = param || null;
    this.render();
  },

  // Renderiza a página atual
  render() {
    const app = document.getElementById('app');
    app.classList.remove('page-fade-in');
    void app.offsetWidth;
    app.classList.add('page-fade-in');

    document.querySelectorAll('.topbar-nav a').forEach(a => {
      a.classList.remove('active');
      if (a.dataset.page === this.current) a.classList.add('active');
    });

    switch (this.current) {
      case 'home':            app.innerHTML = Pages.home();                    break;
      case 'artes':           app.innerHTML = Pages.artes();                   break;
      case 'games':           app.innerHTML = Pages.games();                   break;
      case 'game-detail':     app.innerHTML = Pages.gameDetail(this.param);    break;
      case 'trabalhos':       app.innerHTML = Pages.trabalhos();               break;
      case 'trabalho-detail': app.innerHTML = Pages.trabalhoDetail(this.param);break;
      case 'eventos':         app.innerHTML = Pages.eventos();                 break;
      case 'sobre':           app.innerHTML = Pages.sobre();                   break;
      default:                app.innerHTML = Pages.home();
    }

    Events.bind();
  }
};

// ------------------------------------------
// HELPERS: funções reutilizáveis
// ------------------------------------------
const H = {
  imgOrPlaceholder(src, alt, cssClass, emoji = '🖼️') {
    if (src) return `<img src="${src}" alt="${alt}" class="${cssClass}" loading="lazy">`;
    return `<div class="${cssClass}-placeholder">${emoji}</div>`;
  },

  backBtn(page, label = '← Voltar') {
    return `<a href="#" class="btn-back" data-goto="${page}">${label}</a>`;
  },

  pageHeader(titulo, corAccent = '#9435F2') {
    return `
      <div class="page-header">
        <h1>${titulo}</h1>
        <div class="accent-line" style="background:${corAccent}"></div>
      </div>
    `;
  }
};

// ------------------------------------------
// LIGHTBOX: controla o visualizador em tela cheia
// ------------------------------------------
const Lightbox = {
  // Lista flat de todas as artes (gerada ao abrir a página Artes)
  items: [],
  // Índice atual
  index: 0,

  // Monta o array flat na ordem da tela: anos desc, artes asc dentro do ano
  buildItems() {
    this.items = [];
    PORTFOLIO_DATA.artesPorAno.forEach(grupo => {
      grupo.itens.forEach(art => {
        this.items.push({ ...art, ano: grupo.ano });
      });
    });
  },

  // Abre o lightbox no item pelo id da arte
  openById(id) {
    const idx = this.items.findIndex(a => a.id === Number(id));
    if (idx === -1) return;
    this.index = idx;
    this.show();
  },

  // Exibe o lightbox com o item atual
  show() {
    const lb    = document.getElementById('lightbox');
    const img   = document.getElementById('lb-img');
    const ph    = document.getElementById('lb-placeholder');
    const title = document.getElementById('lb-title');
    const count = document.getElementById('lb-counter');

    const art = this.items[this.index];

    if (art.src) {
      img.src = art.src;
      img.alt = art.titulo;
      img.hidden = false;
      ph.hidden  = true;
    } else {
      img.hidden = true;
      ph.hidden  = false;
    }

    title.textContent = art.titulo;
    count.textContent = `${this.index + 1} / ${this.items.length}`;

    // Botões prev/next: oculta se não há mais itens
    document.getElementById('lb-prev').style.opacity = this.index > 0 ? '1' : '0.25';
    document.getElementById('lb-next').style.opacity = this.index < this.items.length - 1 ? '1' : '0.25';

    lb.hidden = false;
    document.body.style.overflow = 'hidden'; // trava o scroll da página
  },

  close() {
    const lb = document.getElementById('lightbox');
    if (!lb) return;
    lb.hidden = true;
    document.body.style.overflow = '';
  },

  prev() {
    if (this.index > 0) { this.index--; this.show(); }
  },

  next() {
    if (this.index < this.items.length - 1) { this.index++; this.show(); }
  }
};

// ------------------------------------------
// PAGES: constrói o HTML de cada página
// ------------------------------------------
const Pages = {

  // === HOME ===
  home() {
    return `
      <div class="main-content">
        <div class="hero-section">
          <p class="hero-subtitle">✦ Bem-vindo ao portfólio de ✦</p>
        </div>

        <div class="categories-grid">
          <a href="#" class="category-card card-artes" data-goto="artes">
            <div class="category-card-inner">
              <span class="category-icon">🎨</span>
              <span class="category-title">Artes</span>
            </div>
          </a>

          <a href="#" class="category-card card-games" data-goto="games">
            <div class="category-card-inner">
              <span class="category-icon">🎮</span>
              <span class="category-title">Games</span>
            </div>
          </a>

          <a href="#" class="category-card card-trabalhos" data-goto="trabalhos">
            <div class="category-card-inner">
              <span class="category-icon">💼</span>
              <span class="category-title">Trabalhos</span>
            </div>
          </a>

          <a href="#" class="category-card card-eventos" data-goto="eventos">
            <div class="category-card-inner">
              <span class="category-icon">📸</span>
              <span class="category-title">Eventos</span>
            </div>
          </a>
        </div>

        <div class="sobre-btn-wrap">
          <a href="#" class="btn-pixel btn-pixel-primary" data-goto="sobre">
            👤 Sobre Mim
          </a>
        </div>
      </div>
    `;
  },

  // === ARTES ===
  // Grade de botões quadrados organizados por ano (desc).
  // Clicar em qualquer botão abre o lightbox.
  artes() {
    Lightbox.buildItems();

    const grupos = PORTFOLIO_DATA.artesPorAno;

    const secoes = grupos.map(grupo => {
      // Não renderiza o ano se não tiver nenhuma arte
      if (!grupo.itens || grupo.itens.length === 0) return '';

      const quadros = grupo.itens.map(art => `
        <button
          class="art-thumb-btn"
          data-art-id="${art.id}"
          aria-label="Ver arte: ${art.titulo}"
          title="${art.titulo}"
        >
          ${art.src
            ? `<img src="${art.src}" alt="${art.titulo}" loading="lazy" class="art-thumb-img">`
            : `<div class="art-thumb-placeholder">🖼️</div>`
          }
        </button>
      `).join('');

      return `
        <section class="art-year-section">
          <h2 class="art-year-label">${grupo.ano}</h2>
          <div class="art-thumb-grid">
            ${quadros}
          </div>
        </section>
      `;
    }).join('');

    return `
      <div class="main-content">
        ${H.backBtn('home', '← Início')}
        ${H.pageHeader('ARTES', '#9435F2')}
        ${secoes}
      </div>

      <!-- =============================================
           LIGHTBOX — tela cheia ao clicar numa arte
           ============================================= -->
      <div id="lightbox" class="lightbox" role="dialog" aria-modal="true" aria-label="Visualizador de arte" hidden>

        <!-- Botão fechar (X) -->
        <button class="lightbox-btn lightbox-close" id="lb-close" aria-label="Fechar">✕</button>

        <!-- Seta esquerda -->
        <button class="lightbox-btn lightbox-prev" id="lb-prev" aria-label="Arte anterior">&#8592;</button>

        <!-- Seta direita -->
        <button class="lightbox-btn lightbox-next" id="lb-next" aria-label="Próxima arte">&#8594;</button>

        <!-- Área da imagem -->
        <div class="lightbox-img-wrap">
          <div class="lightbox-placeholder" id="lb-placeholder">🖼️</div>
          <img id="lb-img" src="" alt="" class="lightbox-img" hidden>
        </div>

        <!-- Legenda e contador -->
        <div class="lightbox-caption">
          <span id="lb-title"></span>
          <span id="lb-counter" class="lightbox-counter"></span>
        </div>

      </div>
    `;
  },

  // === GAMES (lista) ===
  games() {
    const lista = PORTFOLIO_DATA.games.map(g => `
      <a href="#" class="item-btn" data-goto="game-detail" data-param="${g.id}">
        <div class="item-thumb">
          ${g.imagemCapa
            ? `<img src="${g.imagemCapa}" alt="${g.titulo}">`
            : `<div class="item-thumb-placeholder">🎮</div>`
          }
        </div>
        <div class="item-divider"></div>
        <div class="item-info">
          <span class="item-tag" style="border-color:#358C27;color:#358C27">${g.tag}</span>
          <span class="item-title">${g.titulo}</span>
          <p class="item-desc">${g.descricaoCurta}</p>
        </div>
      </a>
    `).join('');

    return `
      <div class="main-content">
        ${H.backBtn('home', '← Início')}
        ${H.pageHeader('GAMES', '#358C27')}
        <div class="items-list">${lista}</div>
      </div>
    `;
  },

  // === DETALHE DO GAME ===
  gameDetail(id) {
    const g = PORTFOLIO_DATA.games.find(x => x.id === id);
    if (!g) return `<div class="main-content"><p>Game não encontrado.</p></div>`;

    const imgs = g.imagens.map((src, i) => `
      ${src
        ? `<img src="${src}" alt="${g.titulo} – imagem ${i+1}" class="detail-img">`
        : `<div class="detail-img-placeholder">🎮</div>`
      }
    `).join('');

    return `
      <div class="main-content">
        ${H.backBtn('games', '← Games')}
        <div class="detail-layout">
          <div class="detail-images">${imgs}</div>
          <div class="detail-info">
            <span class="item-tag" style="border-color:#358C27;color:#358C27;margin-bottom:0.75rem;display:inline-block">${g.tag}</span>
            <h1 class="detail-title" style="color:#a8ffaa;text-shadow:0 0 15px rgba(53,140,39,0.5)">${g.titulo}</h1>
            <p class="detail-text">${g.descricaoLonga}</p>
            <a href="${g.linkExterno}" target="_blank" rel="noopener" class="detail-link">
              🔗 ${g.linkLabel}
            </a>
          </div>
        </div>
      </div>
    `;
  },

  // === TRABALHOS (lista) ===
  trabalhos() {
    const lista = PORTFOLIO_DATA.trabalhos.map(t => `
      <a href="#" class="item-btn" data-goto="trabalho-detail" data-param="${t.id}">
        <div class="item-thumb">
          ${t.imagemCapa
            ? `<img src="${t.imagemCapa}" alt="${t.titulo}">`
            : `<div class="item-thumb-placeholder">💼</div>`
          }
        </div>
        <div class="item-divider" style="background:var(--orange)"></div>
        <div class="item-info">
          <span class="item-tag" style="border-color:#BF6415;color:#BF6415">${t.tag}</span>
          <span class="item-title">${t.titulo}</span>
          <p class="item-desc">${t.descricaoCurta}</p>
        </div>
      </a>
    `).join('');

    return `
      <div class="main-content">
        ${H.backBtn('home', '← Início')}
        ${H.pageHeader('TRABALHOS', '#BF6415')}
        <div class="items-list">${lista}</div>
      </div>
    `;
  },

  // === DETALHE DO TRABALHO ===
  trabalhoDetail(id) {
    const t = PORTFOLIO_DATA.trabalhos.find(x => x.id === id);
    if (!t) return `<div class="main-content"><p>Trabalho não encontrado.</p></div>`;

    const imgs = t.imagens.map((src, i) => `
      ${src
        ? `<img src="${src}" alt="${t.titulo} – imagem ${i+1}" class="detail-img">`
        : `<div class="detail-img-placeholder">💼</div>`
      }
    `).join('');

    return `
      <div class="main-content">
        ${H.backBtn('trabalhos', '← Trabalhos')}
        <div class="detail-layout">
          <div class="detail-images">${imgs}</div>
          <div class="detail-info">
            <span class="item-tag" style="border-color:#BF6415;color:#BF6415;margin-bottom:0.75rem;display:inline-block">${t.tag}</span>
            <h1 class="detail-title" style="color:#ffc87a;text-shadow:0 0 15px rgba(191,100,21,0.5)">${t.titulo}</h1>
            <p class="detail-text">${t.descricaoLonga}</p>
            ${t.linkExterno && t.linkExterno !== '#'
              ? `<a href="${t.linkExterno}" target="_blank" rel="noopener" class="detail-link" style="color:var(--orange);border-color:var(--orange);box-shadow:4px 4px 0 #5c3000">
                   🔗 ${t.linkLabel}
                 </a>`
              : ''
            }
          </div>
        </div>
      </div>
    `;
  },

  // === EVENTOS ===
  eventos() {
    const cards = PORTFOLIO_DATA.eventos.map(ev => `
      <div class="event-card" data-event-id="${ev.id}">
        <div class="event-img-wrap">
          ${ev.foto
            ? `<img src="${ev.foto}" alt="${ev.titulo}" loading="lazy">`
            : `<div class="event-img-placeholder">📸</div>`
          }
        </div>
        <div class="event-caption">${ev.titulo}</div>

        <div class="event-overlay">
          <button class="event-close" data-close-event="${ev.id}">✕</button>
          <h3 class="event-overlay-title">${ev.titulo}</h3>
          <p class="event-overlay-text">${ev.descricao}</p>
        </div>
      </div>
    `).join('');

    return `
      <div class="main-content">
        ${H.backBtn('home', '← Início')}
        ${H.pageHeader('EVENTOS', '#8A2208')}
        <div class="events-grid">${cards}</div>
      </div>
    `;
  },

  // === SOBRE MIM ===
  sobre() {
    const s = PORTFOLIO_DATA.sobreMim;
    const badges = s.roles.map((r, i) => {
      const classes = ['badge-artist', 'badge-game', 'badge-design'];
      return `<span class="about-role-badge ${classes[i % classes.length]}">${r}</span>`;
    }).join('');

    return `
      <div class="main-content">
        ${H.backBtn('home', '← Início')}
        ${H.pageHeader('SOBRE MIM', '#9435F2')}
        <div class="about-layout">

          <div class="about-photo-col">
            <div class="about-photo-frame">
              ${s.foto
                ? `<img src="${s.foto}" alt="Foto de ${s.nome}">`
                : `<div class="about-photo-placeholder"><span>🧑‍🎨</span></div>`
              }
            </div>
            <p class="about-photo-label">📷 ${s.nome} · ${s.apelido}</p>
          </div>

          <div class="about-text-col">
            <h1 class="about-name">${s.nome}</h1>
            <p class="about-subtitle" style="font-family:var(--font-title);letter-spacing:0.1em;color:var(--purple-neon);margin-bottom:1.2rem;font-size:1.1rem">
              ${s.apelido}
            </p>
            <div class="about-roles">${badges}</div>
            <p class="about-bio">${s.bio.replace(/\n/g, '<br>')}</p>
          </div>

        </div>
      </div>
    `;
  }
};

// ------------------------------------------
// EVENTS: vincula todos os event listeners
// ------------------------------------------
const Events = {
  bind() {
    // ── Navegação geral (data-goto) ──────────────────────────
    document.querySelectorAll('[data-goto]').forEach(el => {
      el.addEventListener('click', e => {
        e.preventDefault();
        Router.go(el.dataset.goto, el.dataset.param || null);
      });
    });

    // ── Galeria de Artes: abrir lightbox ─────────────────────
    document.querySelectorAll('.art-thumb-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        Lightbox.openById(btn.dataset.artId);
      });
    });

    // ── Lightbox: botões ─────────────────────────────────────
    const lbClose = document.getElementById('lb-close');
    const lbPrev  = document.getElementById('lb-prev');
    const lbNext  = document.getElementById('lb-next');
    const lb      = document.getElementById('lightbox');

    if (lbClose) lbClose.addEventListener('click', () => Lightbox.close());
    if (lbPrev)  lbPrev.addEventListener( 'click', () => Lightbox.prev());
    if (lbNext)  lbNext.addEventListener( 'click', () => Lightbox.next());

    // Fechar clicando no fundo escuro (fora da imagem)
    if (lb) {
      lb.addEventListener('click', e => {
        if (e.target === lb) Lightbox.close();
      });
    }

    // ── Eventos: abrir overlay ───────────────────────────────
    document.querySelectorAll('.event-card').forEach(card => {
      card.addEventListener('click', e => {
        if (e.target.closest('[data-close-event]')) return;
        card.classList.toggle('active');
      });
    });

    // ── Eventos: fechar overlay ──────────────────────────────
    document.querySelectorAll('[data-close-event]').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        btn.closest('.event-card').classList.remove('active');
      });
    });
  }
};

// ── Teclado: setas e ESC para o lightbox ────────────────────
document.addEventListener('keydown', e => {
  const lb = document.getElementById('lightbox');
  if (!lb || lb.hidden) return;
  if (e.key === 'Escape')      Lightbox.close();
  if (e.key === 'ArrowLeft')   Lightbox.prev();
  if (e.key === 'ArrowRight')  Lightbox.next();
});

// ------------------------------------------
// TOPBAR: constrói o cabeçalho fixo
// ------------------------------------------
function buildTopbar() {
  const topbar = document.querySelector('.topbar');
  if (!topbar) return;
  topbar.innerHTML = `
    <a href="#" class="topbar-title" data-goto="home">
      ${PORTFOLIO_DATA.site.titulo}
    </a>
    <nav class="topbar-nav">
      <a href="#" data-goto="artes"     data-page="artes">Artes</a>
      <a href="#" data-goto="games"     data-page="games">Games</a>
      <a href="#" data-goto="trabalhos" data-page="trabalhos">Trabalhos</a>
      <a href="#" data-goto="eventos"   data-page="eventos">Eventos</a>
      <a href="#" data-goto="sobre"     data-page="sobre">Sobre</a>
    </nav>
  `;
  topbar.querySelectorAll('[data-goto]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      Router.go(el.dataset.goto);
    });
  });
}

// ------------------------------------------
// INIT
// ------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  buildTopbar();
  Router.render();
  Router.fromURL();

  window.addEventListener('popstate', e => {
    if (e.state) {
      Router.current = e.state.page;
      Router.param   = e.state.param;
      Router.render();
    } else {
      Router.go('home');
    }
  });
});
