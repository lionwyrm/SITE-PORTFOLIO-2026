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
    // Atualiza URL sem recarregar (para o histórico do navegador)
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
    void app.offsetWidth; // força reflow para reiniciar animação
    app.classList.add('page-fade-in');

    // Topbar: atualiza link ativo
    document.querySelectorAll('.topbar-nav a').forEach(a => {
      a.classList.remove('active');
      if (a.dataset.page === this.current) a.classList.add('active');
    });

    // Decide qual página renderizar
    switch (this.current) {
      case 'home':            app.innerHTML = Pages.home();           break;
      case 'artes':           app.innerHTML = Pages.artes();          break;
      case 'games':           app.innerHTML = Pages.games();          break;
      case 'game-detail':     app.innerHTML = Pages.gameDetail(this.param); break;
      case 'trabalhos':       app.innerHTML = Pages.trabalhos();      break;
      case 'trabalho-detail': app.innerHTML = Pages.trabalhoDetail(this.param); break;
      case 'eventos':         app.innerHTML = Pages.eventos();        break;
      case 'sobre':           app.innerHTML = Pages.sobre();          break;
      default:                app.innerHTML = Pages.home();
    }

    // Vincula eventos após renderizar
    Events.bind();
  }
};

// ------------------------------------------
// HELPERS: funções reutilizáveis
// ------------------------------------------
const H = {
  // Gera um placeholder colorido quando não há imagem
  imgOrPlaceholder(src, alt, cssClass, emoji = '🖼️') {
    if (src) {
      return `<img src="${src}" alt="${alt}" class="${cssClass}" loading="lazy">`;
    }
    return `<div class="${cssClass}-placeholder">${emoji}</div>`;
  },

  // Botão de voltar
  backBtn(page, label = '← Voltar') {
    return `<a href="#" class="btn-back" data-goto="${page}">${label}</a>`;
  },

  // Cabeçalho de seção
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
// PAGES: constrói o HTML de cada página
// ------------------------------------------
const Pages = {

  // === HOME ===
  home() {
    const d = PORTFOLIO_DATA.site;
    return `
      <div class="main-content">
        <div class="hero-section">
          <p class="hero-subtitle">✦ Bem-vindo ao portfólio de Lucas Damasio da Silva ✦</p>
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
  artes() {
    const itens = PORTFOLIO_DATA.artes;
    const mosaico = itens.map(art => `
      <div class="gallery-item" title="${art.titulo}">
        ${art.src
          ? `<img src="${art.src}" alt="${art.titulo}" loading="lazy">`
          : `<div class="gallery-placeholder" style="height:${art.altura}px">
               🖼️<br><small style="display:block;margin-top:8px;font-size:0.7rem">${art.titulo}</small>
             </div>`
        }
      </div>
    `).join('');

    return `
      <div class="main-content">
        ${H.backBtn('home', '← Início')}
        ${H.pageHeader('ARTES', '#9435F2')}
        <div class="gallery-mosaic">
          ${mosaico}
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

        <!-- Overlay de informações: aparece ao clicar -->
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
                : `<div class="about-photo-placeholder">
                     <span>🧑‍🎨</span>
                   </div>`
              }
            </div>
            <p class="about-photo-label">
              📷 ${s.nome} · ${s.apelido}
            </p>
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
    // Navegação: qualquer elemento com data-goto
    document.querySelectorAll('[data-goto]').forEach(el => {
      el.addEventListener('click', e => {
        e.preventDefault();
        const page  = el.dataset.goto;
        const param = el.dataset.param || null;
        Router.go(page, param);
      });
    });

    // Eventos: abrir overlay ao clicar no card
    document.querySelectorAll('.event-card').forEach(card => {
      card.addEventListener('click', e => {
        // Se clicou no botão fechar, não abre
        if (e.target.closest('[data-close-event]')) return;
        card.classList.toggle('active');
      });
    });

    // Eventos: fechar overlay
    document.querySelectorAll('[data-close-event]').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        btn.closest('.event-card').classList.remove('active');
      });
    });
  }
};

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
  // Vincula cliques da topbar
  topbar.querySelectorAll('[data-goto]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      Router.go(el.dataset.goto);
    });
  });
}

// ------------------------------------------
// INIT: inicializa o site ao carregar
// ------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  buildTopbar();
  Router.render();         // Renderiza home
  Router.fromURL();        // Ou a página da URL atual

  // Botão Voltar do navegador
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
