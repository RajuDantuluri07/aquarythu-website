/* ═══════════════════════════════════════════════════════════════
   AquaRythu — vanilla JS
   No build step. Plain DOM. No deps.
   ═══════════════════════════════════════════════════════════════ */

(() => {
  'use strict';

  /* ───── Icon helper — returns SVG string ───── */
  const ICONS = {
    arrow:    '<path d="M5 12h14M13 6l6 6-6 6"/>',
    download: '<path d="M12 3v12M7 10l5 5 5-5"/><path d="M5 21h14"/>',
    play:     '<path d="M8 5l11 7-11 7V5z" fill="currentColor"/>',
    whatsapp: '<path d="M20.5 12a8.5 8.5 0 0 1-12.6 7.4L3.5 21l1.7-4.3A8.5 8.5 0 1 1 20.5 12z M8 10c.5 2 2 3.5 4 4l1.2-1c.3-.3.8-.4 1.2-.2l2 .9c.4.2.6.6.5 1-.4 1.5-2 2.6-3.6 2.3a8 8 0 0 1-6.3-6.3c-.3-1.6.8-3.2 2.3-3.6.4-.1.8.1 1 .5l.9 2c.2.4.1.9-.2 1.2L9.8 12"/>',
    check:    '<path d="M5 12.5l4.5 4.5L19 7"/>',
    spark:    '<path d="M12 3v4M12 17v4M5 12H1M23 12h-4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/>',
    feed:     '<circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/>',
    chart:    '<path d="M3 20h18"/><path d="M6 17V11M10 17V7M14 17v-4M18 17V9"/>',
    rupee:    '<path d="M7 5h10M7 9h10M7 5c4 0 6 2 6 4s-2 4-6 4h-1l7 6"/>',
    pond:     '<path d="M3 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/><path d="M3 17c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/><path d="M3 7c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/>',
    growth:   '<path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/>',
    trend:    '<path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/>',
    inventory:'<path d="M3 7l9-4 9 4-9 4-9-4z"/><path d="M3 12l9 4 9-4M3 17l9 4 9-4"/>',
    beaker:   '<path d="M9 3v6L4 19a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-5-10V3"/><path d="M8 3h8"/><path d="M7 14h10"/>',
    bell:     '<path d="M18 16V11a6 6 0 1 0-12 0v5l-2 2h16l-2-2z"/><path d="M10 21h4"/>',
    layers:   '<path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5M3 18l9 5 9-5"/>',
    bolt:     '<path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/>',
    plus:     '<path d="M12 5v14M5 12h14"/>',
    warning:  '<path d="M12 4l10 17H2L12 4z"/><path d="M12 10v5M12 18v.5"/>',
    cross:    '<circle cx="12" cy="12" r="9"/><path d="M8 8l8 8M16 8l-8 8"/>',
  };

  function icon(name, size = 20, stroke = 2) {
    const path = ICONS[name];
    if (!path) return '';
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
  }

  /* ═════════════════ MOBILE MENU ═════════════════ */
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.style.display === 'flex';
      mobileMenu.style.display = isOpen ? 'none' : 'flex';
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => mobileMenu.style.display = 'none');
    });
  }

  /* ═════════════════ MODALS ═════════════════ */
  document.querySelectorAll('[data-open]').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-open');
      const modal = document.getElementById('modal-' + key);
      if (modal) modal.classList.add('open');
    });
  });
  document.querySelectorAll('.modal-backdrop').forEach(bd => {
    bd.addEventListener('click', e => {
      if (e.target === bd) bd.classList.remove('open');
    });
  });
  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', () => btn.closest('.modal-backdrop').classList.remove('open'));
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop.open').forEach(m => m.classList.remove('open'));
      document.getElementById('tweaks-panel').classList.remove('open');
    }
  });

  /* ═════════════════ FADE IN OBSERVER ═════════════════ */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
  document.querySelectorAll('.fade-in').forEach(t => io.observe(t));

  /* ═════════════════ PHONE SCREENS ═════════════════ */
  const statusBar = `
    <div class="scr-statusbar">
      <span>9:41</span>
      <span class="right">
        <svg width="16" height="10" viewBox="0 0 16 10" fill="currentColor"><path d="M1 9h2V5H1v4zm4 0h2V3H5v6zm4 0h2V1H9v8zm4 0h2V0h-2v9z"/></svg>
        <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor"><path d="M7 2c1.5 0 2.8.5 3.8 1.5l.7-.7C10.3 1.6 8.7 1 7 1S3.7 1.6 2.5 2.8l.7.7C4.2 2.5 5.5 2 7 2zm0 2.5c.8 0 1.5.3 2.1.8l.7-.7C9 3.9 8 3.5 7 3.5s-2 .4-2.8 1.1l.7.7c.6-.5 1.3-.8 2.1-.8zm0 2.5c.4 0 .8.2 1.1.4l-1.1 1.1-1.1-1.1c.3-.3.7-.4 1.1-.4z"/></svg>
        <span class="scr-bat"></span>
      </span>
    </div>`;

  function tile(ic, label, value, sub, tint = '') {
    return `
      <div class="scr-tile">
        <span class="scr-tile-icon ${tint}">${icon(ic, 14, 2.2)}</span>
        <div class="scr-tile-label">${label}</div>
        <div class="scr-tile-val metric ${tint}">${value}</div>
        <div class="scr-tile-sub">${sub}</div>
      </div>`;
  }

  function pondRow(name, doc, kg, health) {
    return `
      <div class="scr-pond">
        <span class="scr-pond-tag">${name}</span>
        <div style="flex:1; min-width:0;">
          <div class="scr-pond-name">Pond ${name}</div>
          <div class="scr-pond-sub">${doc} · ${kg} kg today</div>
        </div>
        <div class="scr-pond-bar"><i class="${health > 85 ? 'good' : ''}" style="width:${health}%"></i></div>
        <span class="scr-pond-pct metric">${health}</span>
      </div>`;
  }

  function inputRow(label, val, status) {
    return `
      <div class="scr-input-row">
        <div class="scr-input-l"><span class="dot ${status}"></span><span class="label">${label}</span></div>
        <span class="val metric">${val}</span>
      </div>`;
  }

  /* Dashboard */
  const dashboardHTML = `
    ${statusBar}
    <div class="scr-hd">
      <div>
        <div class="scr-hd-greet">Good morning</div>
        <div class="scr-hd-name">Ravi Kumar</div>
      </div>
      <div class="scr-hd-av">RK</div>
    </div>
    <div class="scr-hero-card">
      <div style="display:flex; justify-content:space-between; align-items:flex-start;">
        <div>
          <div class="scr-hero-eyebrow">Active crop · profit so far</div>
          <div class="scr-hero-num metric">₹ 4,82,640</div>
          <div class="scr-hero-trend">${icon('trend', 12, 2.4)}<span>+8.2% vs forecast</span></div>
        </div>
        <span class="scr-hero-pill">On track</span>
      </div>
      <div class="scr-hero-bars">
        <span style="height:40%"></span><span style="height:55%"></span><span style="height:50%"></span>
        <span style="height:70%"></span><span style="height:68%"></span><span style="height:82%"></span>
        <span style="height:78%"></span><span style="height:92%"></span>
      </div>
    </div>
    <div class="scr-section-title">Today</div>
    <div class="scr-row">
      ${tile('spark', 'Smart feed', '108 kg', '3 ponds')}
      ${tile('rupee', 'Spent', '₹ 9,860', 'feed + ops')}
    </div>
    <div class="scr-row">
      ${tile('chart', 'FCR', '1.18', 'optimal', 'green')}
      ${tile('growth', 'ABW', '14.2 g', '+0.4 g · 3d')}
    </div>
    <div class="scr-section-title">Ponds</div>
    ${pondRow('B-3', 'DOC 47', '48', 92)}
    ${pondRow('A-1', 'DOC 32', '36', 85)}
    ${pondRow('B-1', 'DOC 58', '24', 78)}
  `;

  /* Smart Feed screen */
  const feedHTML = `
    ${statusBar}
    <div class="scr-hd">
      <div style="display:flex; align-items:center; gap:8px;">
        ${icon('spark', 18, 2.4)}
        <div class="scr-hd-name">Smart Feed</div>
      </div>
      <span style="font-size:11px; color:var(--ink-400);">Pond B-3</span>
    </div>
    <div class="scr-hero-card">
      <div class="scr-hero-eyebrow">Recommended today</div>
      <div style="display:flex; align-items:baseline; gap:8px; margin-top:6px;">
        <span class="scr-hero-num big metric">108</span>
        <span style="font-size:16px; opacity:.7;">kg / day</span>
      </div>
      <div style="font-size:11.5px; opacity:.7; margin-top:4px;">Split: 4 feedings · 27 kg each</div>
      <div class="scr-note">
        <span class="em">+6.4% from yesterday</span> — tray check at 3am showed 84% consumption.
      </div>
    </div>
    <div class="scr-section-title">Inputs</div>
    <div class="scr-input-block">
      ${inputRow('Tray observation', '84% consumed', 'good')}
      ${inputRow('ABW (sampled)', '14.2 g', 'ok')}
      ${inputRow('Survival estimate', '92%', 'good')}
      ${inputRow('Water DO (3am)', '5.8 ppm', 'ok')}
      ${inputRow('DOC', '47 days', 'ok')}
    </div>
    <button class="scr-cta-btn">${icon('check', 14, 2.6)} Accept feed plan</button>
  `;

  /* Profit screen */
  const profitHTML = (() => {
    const data = [10, 24, 38, 52, 68, 84, 100];
    const pts = data.map((v, i) => `${(i / (data.length - 1)) * 280},${80 - (v / 100) * 70}`).join(' ');
    return `
      ${statusBar}
      <div class="scr-hd">
        <div class="scr-hd-name">Profit</div>
        <span style="font-size:11px; color:var(--ink-400);">Crop · April</span>
      </div>
      <div class="scr-hero-card">
        <div class="scr-hero-eyebrow">Net so far</div>
        <div class="scr-hero-num md metric">₹ 4,82,640</div>
        <div style="font-size:12px; opacity:.75; margin-top:4px;">Revenue · ₹ 14,28,000 · Cost ₹ 9,45,360</div>
        <svg viewBox="0 0 280 80" style="width:100%; height:80px; margin-top:16px;">
          <defs>
            <linearGradient id="pf" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stop-color="#00B7C2" stop-opacity=".7"/>
              <stop offset="1" stop-color="#00B7C2" stop-opacity="0"/>
            </linearGradient>
          </defs>
          <polyline points="${pts}" fill="none" stroke="#7ee0e6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          <polygon points="0,80 ${pts} 280,80" fill="url(#pf)"/>
        </svg>
        <div style="display:flex; justify-content:space-between; font-size:10px; opacity:.6; margin-top:4px;">
          <span>Wk1</span><span>Wk2</span><span>Wk3</span><span>Wk4</span><span>Wk5</span><span>Wk6</span><span>Wk7</span>
        </div>
      </div>
      <div class="scr-section-title">Breakdown</div>
      ${[['Feed','₹ 6,84,200',72],['Probiotics','₹ 86,400',9],['Seed','₹ 1,22,000',13],['Operations','₹ 52,760',6]].map(([l,a,p]) => `
        <div class="scr-bd-row">
          <div class="scr-bd-head"><span class="l">${l}</span><span class="v metric">${a}</span></div>
          <div class="scr-bd-bar"><i style="width:${p}%"></i></div>
        </div>
      `).join('')}
    `;
  })();

  /* Growth screen */
  const growthHTML = (() => {
    const actual = [0.1, 0.5, 1.8, 3.2, 5.4, 7.8, 10.5, 12.6, 14.2];
    const target = [0.1, 0.4, 1.5, 2.8, 4.8, 7.0, 9.5, 11.4, 13.0];
    const maxV = 15;
    const ptsA = actual.map((v, i) => `${(i / (actual.length - 1)) * 280},${110 - (v / maxV) * 100}`).join(' ');
    const ptsT = target.map((v, i) => `${(i / (target.length - 1)) * 280},${110 - (v / maxV) * 100}`).join(' ');
    const samples = [
      ['Apr 18', '14.2 g', '+0.4 g · 3d', 'green'],
      ['Apr 15', '13.8 g', 'On target', 'aq'],
      ['Apr 11', '12.6 g', '+1.1 g · 4d', 'green'],
      ['Apr 07', '11.5 g', '+0.9 g · 4d', 'green'],
    ];
    return `
      ${statusBar}
      <div class="scr-hd">
        <div class="scr-hd-name">Growth</div>
        <span style="font-size:11px; color:var(--ink-400);">Pond B-3</span>
      </div>
      <div class="scr-hero-card">
        <div class="scr-hero-eyebrow">Avg body weight</div>
        <div style="display:flex; align-items:baseline; gap:8px; margin-top:6px;">
          <span class="scr-hero-num md metric">14.2</span>
          <span style="font-size:16px; opacity:.7;">g</span>
          <span style="margin-left:auto; font-size:11px; color:var(--aqua-300);">+0.42 g/day</span>
        </div>
        <svg viewBox="0 0 280 110" style="width:100%; height:100px; margin-top:16px;">
          <defs>
            <linearGradient id="gr-area" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stop-color="#7ee0e6" stop-opacity=".6"/>
              <stop offset="1" stop-color="#7ee0e6" stop-opacity="0"/>
            </linearGradient>
          </defs>
          <polyline points="${ptsT}" fill="none" stroke="rgba(255,255,255,.4)" stroke-width="1.5" stroke-dasharray="3 3"/>
          <polyline points="${ptsA}" fill="none" stroke="#7ee0e6" stroke-width="2.5" stroke-linecap="round"/>
          <polygon points="0,110 ${ptsA} 280,110" fill="url(#gr-area)"/>
        </svg>
        <div style="display:flex; justify-content:space-between; font-size:10px; opacity:.6; margin-top:2px;">
          <span>DOC 1</span><span>DOC 47</span>
        </div>
      </div>
      <div class="scr-section-title">Samples</div>
      ${samples.map(([d, w, n, c]) => `
        <div class="scr-sample">
          <div>
            <div class="date">${d}</div>
            <div class="abw metric">${w}</div>
          </div>
          <span class="note ${c}">${n}</span>
        </div>
      `).join('')}
    `;
  })();

  /* Inventory screen */
  const inventoryHTML = (() => {
    const items = [
      ['Growel Premium 4mm', '2,400 kg', 'in 18 days', false],
      ['Avanti Star 3mm', '780 kg', 'in 6 days', true],
      ['Probiotic blend', '42 L', 'in 22 days', false],
      ['Calcium supplement', '120 kg', 'in 30 days', false],
    ];
    return `
      ${statusBar}
      <div class="scr-hd">
        <div class="scr-hd-name">Inventory</div>
        <button class="scr-add-btn">${icon('plus', 11, 2.6)} Add</button>
      </div>
      <div class="scr-hero-card">
        <div class="scr-hero-eyebrow">Total stock value</div>
        <div class="scr-hero-num metric">₹ 2,18,400</div>
        <div class="scr-hero-stats">
          <div><div class="l">Items</div><div class="v">12</div></div>
          <div><div class="l">Low stock</div><div class="v warn">2</div></div>
          <div><div class="l">Auto-deduct</div><div class="v aq">On</div></div>
        </div>
      </div>
      <div class="scr-section-title">Stock</div>
      ${items.map(([n, q, d, warn]) => `
        <div class="scr-inv-row">
          <span class="scr-inv-icon ${warn ? 'warn' : ''}">${icon(warn ? 'warning' : 'inventory', 14, 2.2)}</span>
          <div style="flex:1; min-width:0;">
            <div class="scr-inv-name">${n}</div>
            <div class="scr-inv-sub">Empty ${d}</div>
          </div>
          <span class="scr-inv-qty metric">${q}</span>
        </div>
      `).join('')}
    `;
  })();

  const SCREENS = {
    dashboard: dashboardHTML,
    feed: feedHTML,
    profit: profitHTML,
    growth: growthHTML,
    inventory: inventoryHTML,
  };

  /* floaters per screen */
  function floatTag(left, top, right, bottom, ic, tone, html) {
    const style = [];
    if (left !== undefined) style.push(`left:${left}`);
    if (top !== undefined) style.push(`top:${top}`);
    if (right !== undefined) style.push(`right:${right}`);
    if (bottom !== undefined) style.push(`bottom:${bottom}`);
    return `<div class="float-tag" style="${style.join(';')}">
      <span class="ic ${tone}">${icon(ic, 13, 2.4)}</span>
      <span>${html}</span>
    </div>`;
  }

  const FLOATERS = {
    dashboard: [
      ['8%', '18%', undefined, undefined, 'check', 'green', '<strong>+18%</strong> feed savings'],
      [undefined, '12%', '5%', undefined, 'trend', 'aqua', '<strong>FCR 1.18</strong>'],
      [undefined, undefined, '6%', '12%', 'bell', 'aqua', '<strong>3 ponds</strong> active now'],
    ],
    feed: [
      ['6%', '22%', undefined, undefined, 'spark', 'aqua', '<strong>108 kg</strong> recommended'],
      [undefined, undefined, '5%', '16%', 'check', 'green', '<strong>Saved 12 kg</strong> today'],
    ],
    profit: [
      ['6%', '18%', undefined, undefined, 'rupee', 'aqua', '<strong>₹4.82L</strong> net'],
      [undefined, undefined, '5%', '18%', 'trend', 'green', '<strong>+8.2%</strong> vs forecast'],
    ],
    growth: [
      ['8%', '18%', undefined, undefined, 'growth', 'green', '<strong>+0.42 g</strong>/day'],
      [undefined, undefined, '5%', '18%', 'check', 'aqua', '<strong>On target</strong>'],
    ],
    inventory: [
      ['8%', '20%', undefined, undefined, 'inventory', 'aqua', '<strong>12 items</strong> tracked'],
      [undefined, undefined, '5%', '18%', 'warning', 'warn', '<strong>2 low</strong> · re-order'],
    ],
  };

  const phoneScreen = document.getElementById('phone-screen');
  const floatersHost = document.getElementById('preview-floaters');

  function setScreen(key) {
    phoneScreen.innerHTML = `<div class="scr active">${SCREENS[key]}</div>`;
    floatersHost.innerHTML = (FLOATERS[key] || []).map(args => floatTag(...args)).join('');
  }
  setScreen('dashboard');

  document.querySelectorAll('.preview-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.preview-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      setScreen(tab.getAttribute('data-screen'));
    });
  });

  /* ═════════════════ PROBLEM → SOLUTION CARDS ═════════════════ */
  const PAIRS = [
    {
      icon: 'feed',
      problem: 'Feed waste eats into every crop',
      pBody: "Manual feeding guesses high. 1 kg over per pond per day adds up to lakhs.",
      solution: 'AI-tuned daily feed plan',
      sBody: 'Plan respects DOC, ABW, tray response & weather — automatically.',
      metric: { value: '−18%', label: 'feed used' },
    },
    {
      icon: 'chart',
      problem: 'FCR only known after harvest',
      pBody: "By the time you see the FCR, it's too late to fix the crop.",
      solution: 'Live FCR, every single day',
      sBody: 'See FCR trend in real time and correct course before it costs you.',
      metric: { value: '1.18', label: 'average FCR' },
    },
    {
      icon: 'rupee',
      problem: 'Profit is a black box',
      pBody: 'Notebook entries, scattered bills, lost dealer slips. No clear picture.',
      solution: 'Net profit, live to the rupee',
      sBody: 'Auto-deduct from inventory, tag every expense, see margin in real time.',
      metric: { value: '₹ 4.8L', label: 'tracked this crop' },
    },
    {
      icon: 'pond',
      problem: 'Every pond runs blind',
      pBody: 'Multiple ponds, multiple supervisors, no single source of truth.',
      solution: 'All ponds, one dashboard',
      sBody: 'Health, feed, growth and alerts for every pond, side by side, on your phone.',
      metric: { value: '12', label: 'ponds at a glance' },
    },
  ];

  document.getElementById('ps-grid').innerHTML = PAIRS.map(p => `
    <div class="ps-card">
      <div class="ps-problem">
        <span class="ps-problem-icon">${icon('cross', 18, 2.2)}</span>
        <div>
          <div class="ps-row-eyebrow warn">Today</div>
          <h3 class="h-card" style="margin-bottom:4px;">${p.problem}</h3>
          <p class="ps-row-body">${p.pBody}</p>
        </div>
      </div>
      <div class="ps-divider">with AquaRythu</div>
      <div class="ps-solution">
        <span class="ps-solution-icon">${icon(p.icon, 18, 2.2)}</span>
        <div>
          <div class="ps-row-eyebrow aq">With AquaRythu</div>
          <h3 class="h-card" style="margin-bottom:4px;">${p.solution}</h3>
          <p class="ps-row-body">${p.sBody}</p>
        </div>
      </div>
      <div class="ps-metric">
        <span class="label">${p.metric.label}</span>
        <span class="val metric">${p.metric.value}</span>
      </div>
    </div>
  `).join('');

  /* ═════════════════ FEATURES ═════════════════ */
  const FEATURES = [
    { icon:'spark',     title:'Smart Feeding Engine', body:'AI plans every feeding, balancing DOC, ABW, tray response and water.', tag:'Core' },
    { icon:'chart',     title:'FCR Intelligence',     body:'Live FCR you can act on — not a number that arrives after harvest.', tag:'Core' },
    { icon:'rupee',     title:'Profit Tracking',      body:'Every rupee in and out, tagged, totalled, and compared to forecast.' },
    { icon:'inventory', title:'Inventory Management', body:'Feed, probiotics, supplements — auto-deducted as you feed.' },
    { icon:'pond',      title:'Pond Dashboard',       body:'Every pond, side by side. Health, feed, alerts in one glance.' },
    { icon:'growth',    title:'Growth Intelligence',  body:'ABW trajectory vs target. Catch slowdowns before they cost a crop.' },
    { icon:'layers',    title:'Reports & Analytics',  body:'End-of-crop reports, crop-over-crop comparisons, dealer-ready.' },
    { icon:'bolt',      title:'Expense Tracking',     body:'Scan slips, tag categories, settle dealer accounts faster.' },
    { icon:'feed',      title:'Feed Auto Deduction',  body:'Inventory drops automatically with every recorded feeding.' },
    { icon:'beaker',    title:'Water Test Tracking',  body:'DO, pH, alkalinity, ammonia — logged, charted, alerting.' },
  ];

  document.getElementById('feat-grid').innerHTML = FEATURES.map((f, i) => {
    const highlight = i === 0 || i === 1;
    return `
      <div class="feat-card ${highlight ? 'span-2' : ''}">
        <div class="feat ${highlight ? 'highlight' : ''}">
          <div class="feat-head">
            <span class="feat-icon">${icon(f.icon, 18, 2.2)}</span>
            ${f.tag ? `<span class="feat-tag">${f.tag}</span>` : ''}
          </div>
          <h3 class="h-card" style="font-size:18px; margin-top:4px;">${f.title}</h3>
          <p>${f.body}</p>
        </div>
      </div>`;
  }).join('');

  /* ═════════════════ TESTIMONIALS ═════════════════ */
  const TESTIMONIALS = [
    { name:'Rajesh Naidu',   role:'12-acre farm · Bhimavaram, AP',       quote:'Smart Feed told me to ease off on day 32. Saved 240 kg of feed that crop. The app paid for itself in one week.', metric:'−18% feed',   accent:'ocean' },
    { name:'Pradeep Kumar',  role:'8 ponds · Surat, Gujarat',           quote:'I used to call my supervisor 20 times a day. Now I open one screen and I see everything. My crop is calmer. So am I.', metric:'All ponds', accent:'aqua' },
    { name:'Vasanthi Devi',  role:'Co-operative · Balasore, Odisha',     quote:'We onboarded 14 farmers in the co-op. The dealer-ready reports cut our settlement time from 2 weeks to 2 days.', metric:'14 farms', accent:'green' },
    { name:'Murugan S.',     role:'5-acre farm · Nagapattinam, TN',     quote:'FCR 1.18 this crop. Last crop it was 1.41. Same farm, same staff. Only difference is AquaRythu.', metric:'FCR 1.18', accent:'ocean' },
  ];

  document.getElementById('quotes-grid').innerHTML = TESTIMONIALS.map(t => {
    const initials = t.name.split(' ').map(n => n[0]).slice(0, 2).join('');
    return `
      <div class="qcard">
        <p>"${t.quote}"</p>
        <div class="qcard-foot">
          <span class="qcard-av ${t.accent}">${initials}</span>
          <div style="min-width:0; flex:1;">
            <div class="qcard-name">${t.name}</div>
            <div class="qcard-role">${t.role}</div>
          </div>
          <span class="qcard-metric ${t.accent} metric">${t.metric}</span>
        </div>
      </div>`;
  }).join('');

  /* ═════════════════ LANGUAGES ═════════════════ */
  const LANGS = [
    { en: 'Aqua రైతు',    lang: 'Telugu',  region: 'Andhra Pradesh' },
    { en: 'Aqua किसान',   lang: 'Hindi',   region: 'Gujarat' },
    { en: 'Aqua விவசாயி', lang: 'Tamil',   region: 'Tamil Nadu' },
    { en: 'Aqua ರೈತ',     lang: 'Kannada', region: 'Karnataka' },
    { en: 'Aqua ଚାଷୀ',    lang: 'Odia',    region: 'Odisha' },
    { en: 'Aqua চাষী',    lang: 'Bengali', region: 'West Bengal' },
  ];
  document.getElementById('lang-list').innerHTML = LANGS.map(l => `
    <div class="lang-card">
      <div>
        <div class="lang-eyebrow">${l.lang}</div>
        <div class="lang-name">${l.en}</div>
      </div>
      <div class="lang-region">${l.region}</div>
    </div>
  `).join('');

  const REGIONS = [
    { state: 'Gujarat',         x: 50,  y: 175 },
    { state: 'Odisha',          x: 195, y: 195 },
    { state: 'Andhra Pradesh',  x: 158, y: 245 },
    { state: 'Tamil Nadu',      x: 145, y: 305 },
    { state: 'Karnataka',       x: 115, y: 270 },
    { state: 'West Bengal',     x: 225, y: 165 },
  ];

  const indiaPath = `M 95 35 Q 110 22, 130 28 Q 150 32, 170 28 Q 185 25, 210 32 Q 230 38, 245 55 Q 258 72, 252 90 Q 248 105, 240 118 Q 235 130, 245 145 Q 255 158, 255 170 Q 252 185, 245 200 Q 240 215, 232 230 Q 220 250, 210 270 Q 198 290, 185 305 Q 172 320, 155 332 Q 142 345, 135 358 Q 130 365, 122 358 Q 115 348, 118 332 Q 122 312, 130 295 Q 138 278, 138 260 Q 135 245, 122 235 Q 110 230, 95 232 Q 80 234, 70 222 Q 60 208, 55 192 Q 50 175, 50 158 Q 52 140, 60 122 Q 70 105, 78 88 Q 84 70, 88 55 Q 90 42, 95 35 Z`;

  document.getElementById('lang-map').innerHTML = `
    <svg viewBox="0 0 320 380" style="width:100%; height:100%;">
      <defs>
        <radialGradient id="india-glow" cx="50%" cy="55%">
          <stop offset="0" stop-color="#00B7C2" stop-opacity=".22"/>
          <stop offset="1" stop-color="#00B7C2" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="india-fill" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#083D4A" stop-opacity=".06"/>
          <stop offset="1" stop-color="#00B7C2" stop-opacity=".10"/>
        </linearGradient>
        <filter id="soft-glow"><feGaussianBlur stdDeviation="3"/></filter>
      </defs>
      <circle cx="160" cy="200" r="160" fill="url(#india-glow)"/>
      <path d="${indiaPath}" fill="url(#india-fill)" stroke="rgba(8,61,74,.18)" stroke-width="1.2"/>
      <path d="${indiaPath}" fill="none" stroke="rgba(0,183,194,.45)" stroke-width="1.5" filter="url(#soft-glow)"/>
      <path d="M 200 280 Q 170 298, 140 330 T 90 300" fill="none" stroke="rgba(0,183,194,.25)" stroke-width="1" stroke-dasharray="2 3"/>
      <path d="M 200 288 Q 170 306, 140 338 T 90 308" fill="none" stroke="rgba(0,183,194,.25)" stroke-width="1" stroke-dasharray="2 3"/>
      <path d="M 200 296 Q 170 314, 140 346 T 90 316" fill="none" stroke="rgba(0,183,194,.25)" stroke-width="1" stroke-dasharray="2 3"/>

      ${REGIONS.map((r, i) => `
        <line x1="160" y1="200" x2="${r.x}" y2="${r.y}" stroke="rgba(0,183,194,.12)" stroke-width="1" stroke-dasharray="1 4"/>
      `).join('')}

      ${REGIONS.map((r, i) => `
        <g transform="translate(${r.x}, ${r.y})">
          <circle r="14" fill="rgba(0,183,194,.18)">
            <animate attributeName="r" values="10;18;10" dur="3s" begin="${i * 0.4}s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values=".6;0;.6" dur="3s" begin="${i * 0.4}s" repeatCount="indefinite"/>
          </circle>
          <circle r="6" fill="rgba(0,183,194,.35)"/>
          <circle r="3.5" fill="#00B7C2" stroke="white" stroke-width="1.4"/>
          <text y="-12" text-anchor="middle" font-size="10" font-weight="500" fill="#083D4A">${r.state}</text>
        </g>
      `).join('')}

      <circle cx="160" cy="200" r="8" fill="white" stroke="#00B7C2" stroke-width="2"/>
      <circle cx="160" cy="200" r="3.5" fill="#00B7C2"/>
    </svg>
  `;

  /* ═════════════════ SMART FEED PULSE ═════════════════ */
  const sfInputs = document.querySelectorAll('.sf-input');
  let pulseIdx = 0;
  setInterval(() => {
    sfInputs.forEach(el => el.classList.remove('pulsing'));
    sfInputs[pulseIdx]?.classList.add('pulsing');
    pulseIdx = (pulseIdx + 1) % sfInputs.length;
  }, 1800);
  sfInputs[0]?.classList.add('pulsing');

  /* ═════════════════ TWEAKS ═════════════════ */
  const tweaksToggle = document.getElementById('tweaks-toggle');
  const tweaksPanel = document.getElementById('tweaks-panel');
  const tweaksClose = document.getElementById('tweaks-close');
  tweaksToggle.addEventListener('click', () => tweaksPanel.classList.toggle('open'));
  tweaksClose.addEventListener('click', () => tweaksPanel.classList.remove('open'));

  const PALETTES = {
    ocean:    { '--ocean-900': '#083D4A', '--ocean-950': '#061f27', '--ocean-800': '#0d4f5e', '--ocean-700': '#156878', '--aqua-500': '#00B7C2', '--aqua-600': '#00a3ad', '--aqua-300': '#7ee0e6', '--aqua-100': '#d3f1f4', '--aqua-50': '#ecf8f9' },
    twilight: { '--ocean-900': '#1a2e4a', '--ocean-950': '#0d1828', '--ocean-800': '#243d63', '--ocean-700': '#2e4a78', '--aqua-500': '#4dabf7', '--aqua-600': '#3b8fd6', '--aqua-300': '#a3d5fc', '--aqua-100': '#dbeefe', '--aqua-50':  '#eaf4fe' },
    mangrove: { '--ocean-900': '#1a3d2e', '--ocean-950': '#0f2419', '--ocean-800': '#234f3c', '--ocean-700': '#2d614a', '--aqua-500': '#2da681', '--aqua-600': '#218a68', '--aqua-300': '#7fd4b3', '--aqua-100': '#cdeedf', '--aqua-50':  '#e8f6ef' },
  };

  function applyPalette(name) {
    const p = PALETTES[name] || PALETTES.ocean;
    Object.entries(p).forEach(([k, v]) => document.documentElement.style.setProperty(k, v));
  }

  const HEADLINES = {
    intelligent: ['Run your shrimp farm with', 'intelligence'],
    smartest:    ["India's smartest", 'shrimp farming app'],
    os:          ['The AI operating system', 'for shrimp farms'],
  };
  function applyHeadline(key) {
    const [a, b] = HEADLINES[key] || HEADLINES.intelligent;
    document.getElementById('hero-headline').innerHTML =
      `${a} <span class="serif-accent" style="color: var(--aqua-600);">${b}.</span>`;
  }

  const DENSITIES = { compact: 0.75, comfortable: 1, spacious: 1.25 };
  function applyDensity(key) {
    document.documentElement.style.setProperty('--density', DENSITIES[key] ?? 1);
  }

  /* hook up swatches */
  document.querySelectorAll('.tweaks-swatches').forEach(group => {
    group.querySelectorAll('.tweaks-swatch').forEach(btn => {
      btn.addEventListener('click', () => {
        group.querySelectorAll('.tweaks-swatch').forEach(b => b.classList.remove('on'));
        btn.classList.add('on');
        applyPalette(btn.dataset.value);
      });
    });
  });
  /* hook up radios */
  document.querySelectorAll('.tweaks-radio').forEach(group => {
    const tweak = group.dataset.tweak;
    group.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        group.querySelectorAll('button').forEach(b => b.classList.remove('on'));
        btn.classList.add('on');
        if (tweak === 'headline') applyHeadline(btn.dataset.value);
        if (tweak === 'density') applyDensity(btn.dataset.value);
      });
    });
  });

})();
