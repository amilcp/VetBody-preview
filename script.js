// ==========================================================================
//  INTERACTIVE SCRIPT - BODY PÓS-CIRÚRGICO (MOBILE OPTIMIZED)
//  Versão 2026 — Cão (Azul) / Cadela (Vermelho) / Gato (Cinza)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // DATA — RAÇAS E TAMANHOS
  // ==========================================================================

  const dogBreedOptions = [
    { value: 'basenji',            label: 'Basenji',                       tam: '7'   },
    { value: 'beagle',             label: 'Beagle',                        tam: '5'   },
    { value: 'bernese',            label: 'Bernese Mountain Dog',          tam: '14'  },
    { value: 'border_collie',      label: 'Border Collie',                 tam: '8'   },
    { value: 'boxer',              label: 'Boxer',                         tam: '10'  },
    { value: 'bull_terrier',       label: 'Bull Terrier',                  tam: '10'  },
    { value: 'bulldog_frances',    label: 'Bulldog Francês',               tam: '8'   },
    { value: 'bullmastiff',        label: 'Bullmastiff',                   tam: '14'  },
    { value: 'chihuahua',          label: 'Chihuahua',                     tam: '0'   },
    { value: 'cocker',             label: 'Cocker Spaniel',                tam: '6'   },
    { value: 'dachshund',          label: 'Dachshund (Teckel)',             tam: '2'   },
    { value: 'dachshund_mini',     label: 'Dachshund Mini (Teckel)',        tam: '1'   },
    { value: 'dachshund_standard', label: 'Dachshund Standard',            tam: '6'   },
    { value: 'dalmata',            label: 'Dálmata',                       tam: '11'  },
    { value: 'dobermann',          label: 'Dobermann',                     tam: '13'  },
    { value: 'dog_alemao',         label: 'Dog Alemão',                    tam: '14'  },
    { value: 'fila',               label: 'Fila Brasileiro',               tam: '14'  },
    { value: 'golden',             label: 'Golden Retriever',              tam: '12'  },
    { value: 'husky',              label: 'Husky Siberiano',               tam: '10'  },
    { value: 'kuvasz',             label: 'Kuvasz',                        tam: '15'  },
    { value: 'labrador',           label: 'Labrador Retriever',            tam: '11'  },
    { value: 'lhasa',              label: 'Lhasa Apso',                    tam: '4'   },
    { value: 'maltes',             label: 'Maltês',                        tam: '3'   },
    { value: 'mastim',             label: 'Mastim',                        tam: '15'  },
    { value: 'napolitano',         label: 'Mastim Napolitano',             tam: '15'  },
    { value: 'pastor_alemao',      label: 'Pastor Alemão',                 tam: '11'  },
    { value: 'pinscher',           label: 'Pinscher',                      tam: '1'   },
    { value: 'pinscher_pequeno',   label: 'Pinscher (pequeno)',             tam: '0'   },
    { value: 'pinscher_filhote',   label: 'Pinscher Filhote',              tam: '0,0' },
    { value: 'pit_bull',           label: 'Pit Bull',                      tam: '11'  },
    { value: 'poodle',             label: 'Poodle',                        tam: '4'   },
    { value: 'poodle_mini',        label: 'Poodle Mini',                   tam: '3'   },
    { value: 'pug',                label: 'Pug',                           tam: '5'   },
    { value: 'rhodesian',          label: 'Rhodesian Ridgeback',           tam: '13'  },
    { value: 'rottweiler',         label: 'Rottweiler',                    tam: '13'  },
    { value: 'schnauzer',          label: 'Schnauzer',                     tam: '6'   },
    { value: 'schnauzer_mini',     label: 'Schnauzer Mini',                tam: '5'   },
    { value: 'schnauzer_standard', label: 'Schnauzer Standard',            tam: '9'   },
    { value: 'shar_pei',           label: 'Shar-Pei',                      tam: '10'  },
    { value: 'shetland',           label: 'Shetland Sheepdog',             tam: '7'   },
    { value: 'shiba',              label: 'Shiba Inu',                     tam: '7'   },
    { value: 'shih_tzu',           label: 'Shih-Tzu',                      tam: '3'   },
    { value: 'weimaraner',         label: 'Weimaraner',                    tam: '12'  },
    { value: 'yorkshire',          label: 'Yorkshire Terrier',              tam: '1'   },
    { value: 'cao_cruzado_p',      label: 'Pequeno (até 7 kg)',            tam: '5'   },
    { value: 'cao_cruzado_m',      label: 'Médio (14-18 kg)',              tam: '8'   },
    { value: 'cao_cruzado_g',      label: 'Grande (20-24 kg)',             tam: '10'  },
  ];

  const catBreedOptions = [
    { value: 'gato_000', label: 'Filhote até 3 meses (1,5–2 kg)',              tam: '0,0' },
    { value: 'gato_0',   label: 'Filhote Pequeno — 3 a 5 meses (2–2,5 kg)',   tam: '0'   },
    { value: 'gato_1',   label: 'Filhote Médio — 5 a 8 meses (2,5–3,2 kg)',   tam: '1'   },
    { value: 'gato_2',   label: 'Filhote Grande / Adulto Pequeno (3,2–4 kg)',  tam: '2'   },
    { value: 'gato_3',   label: 'Adulto Médio (4–5 kg)',                       tam: '3'   },
    { value: 'gato_4',   label: 'Adulto Grande (5–6,5 kg)',                    tam: '4'   },
    { value: 'gato_5',   label: 'Adulto Gigante (6,5–8,5 kg)',                 tam: '5'   },
  ];

  const dogSizeOptions = [
    { tam: '0,0', label: 'TAM 0,0 — 0 a 1 kg',    price: 21.55 },
    { tam: '0',   label: 'TAM 0 — 1 a 1,5 kg',    price: 22.55 },
    { tam: '1',   label: 'TAM 1 — 1,5 a 2,5 kg',  price: 23.80 },
    { tam: '2',   label: 'TAM 2 — 2,5 a 3 kg',    price: 26.25 },
    { tam: '3',   label: 'TAM 3 — 3 a 4,5 kg',    price: 27.18 },
    { tam: '4',   label: 'TAM 4 — 4,5 a 5,5 kg',  price: 29.00 },
    { tam: '5',   label: 'TAM 5 — 5,5 a 7 kg',    price: 31.00 },
    { tam: '6',   label: 'TAM 6 — 7 a 9 kg',      price: 32.80 },
    { tam: '7',   label: 'TAM 7 — 9 a 14 kg',     price: 34.70 },
    { tam: '8',   label: 'TAM 8 — 14 a 18 kg',    price: 36.55 },
    { tam: '9',   label: 'TAM 9 — 18 a 20 kg',    price: 38.45 },
    { tam: '10',  label: 'TAM 10 — 20 a 24 kg',   price: 39.35 },
    { tam: '11',  label: 'TAM 11 — 24 a 29 kg',   price: 41.25 },
    { tam: '12',  label: 'TAM 12 — 29 a 34 kg',   price: 42.80 },
    { tam: '13',  label: 'TAM 13 — 34 a 40 kg',   price: 47.80 },
    { tam: '14',  label: 'TAM 14 — 40 a 50 kg',   price: 51.50 },
    { tam: '15',  label: 'TAM 15 — 50 a 60 kg',   price: 55.30 },
  ];

  const catSizeOptions = [
    { tam: '0,0', label: 'TAM 0,0 — 1,5 a 2 kg',  price: 20.00 },
    { tam: '0',   label: 'TAM 0 — 2 a 2,5 kg',    price: 21.00 },
    { tam: '1',   label: 'TAM 1 — 2,5 a 3,2 kg',  price: 22.90 },
    { tam: '2',   label: 'TAM 2 — 3,2 a 4 kg',    price: 24.80 },
    { tam: '3',   label: 'TAM 3 — 4 a 5 kg',      price: 25.70 },
    { tam: '4',   label: 'TAM 4 — 5 a 6,5 kg',    price: 26.70 },
    { tam: '5',   label: 'TAM 5 — 6,5 a 8,5 kg',  price: 27.70 },
  ];

  const typeColorMap = {
    cao:    { color: 'Azul — Cão',        hex: '#2563EB' },
    cadela: { color: 'Vermelho — Cadela', hex: '#9B1C1C' },
    gato:   { color: 'Cinza — Gato',      hex: '#6B7280' },
  };

  // ==========================================================================
  // ESTADO DA APLICAÇÃO
  // ==========================================================================
  const state = {
    animalType: 'cao',
    selectedColor: 'Azul — Cão',
    selectedTam: '',
    priceBase: 0,
    discountRate: 0.40,
    hasBundle: true,
    cart: []
  };

  // Carregar carrinho guardado (checkout partilha o mesmo carrinho)
  try {
    const savedCart = localStorage.getItem('vetbody_cart');
    if (savedCart) state.cart = JSON.parse(savedCart);
  } catch (e) { /* ignore */ }

  // ==========================================================================
  // DOM ELEMENTS
  // ==========================================================================
  const breedSelect         = document.getElementById('breed-select');
  const sizeResultBadge     = document.getElementById('size-result-badge');
  const sizeResultText      = document.getElementById('size-result-text');
  const sizeResultPrice     = document.getElementById('size-result-price');
  const mainProductImg      = document.getElementById('main-product-img');
  const galleryThumbs       = document.querySelectorAll('.thumb-btn');
  const colorBtns           = document.querySelectorAll('.color-btn');
  const productSizeSelect   = document.getElementById('product-size-select');
  const sizeErrorMsg        = document.getElementById('size-error-msg');
  const bundleCheckbox      = document.getElementById('bundle-checkbox');
  const productPriceDisplay = document.getElementById('product-price-display');
  const addToCartBtn        = document.getElementById('add-to-cart-btn');
  const cartDrawer          = document.getElementById('cart-drawer');
  const cartOverlay         = document.getElementById('cart-overlay');
  const closeCartBtn        = document.getElementById('close-cart-btn');
  const openCartBtn         = document.getElementById('open-cart-btn');
  const cartBadge           = document.getElementById('cart-badge');
  const cartBody            = document.getElementById('cart-body');
  const cartSubtotal        = document.getElementById('cart-subtotal');
  const checkoutBtn         = document.getElementById('checkout-btn');
  const stickyCta           = document.getElementById('sticky-mobile-cta');
  const measureModal        = document.getElementById('measure-modal');
  const closeMeasureModalBtn = document.getElementById('close-measure-modal');
  const mobileMenuToggle    = document.getElementById('mobile-menu-toggle');
  const navMenu             = document.getElementById('nav-menu');

  // ==========================================================================
  // MOBILE MENU
  // ==========================================================================
  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', () => navMenu.classList.toggle('active'));
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navMenu.classList.remove('active'));
    });
  }

  // ==========================================================================
  // VIDEO CONTROLS
  // ==========================================================================
  const recoveryVideo  = document.getElementById('recovery-video');
  const toggleSoundBtn = document.getElementById('toggle-sound-btn');
  const togglePlayBtn  = document.getElementById('toggle-play-btn');

  if (recoveryVideo && toggleSoundBtn && togglePlayBtn) {
    toggleSoundBtn.addEventListener('click', () => {
      recoveryVideo.muted = !recoveryVideo.muted;
      toggleSoundBtn.innerHTML = recoveryVideo.muted ? '<span>🔊</span> Som' : '<span>🔇</span> Mute';
    });
    togglePlayBtn.addEventListener('click', () => {
      if (recoveryVideo.paused) {
        recoveryVideo.play();
        togglePlayBtn.innerHTML = '<span>⏸</span> Pausa';
      } else {
        recoveryVideo.pause();
        togglePlayBtn.innerHTML = '<span>▶</span> Play';
      }
    });
  }

  // ==========================================================================
  // POPULAR DROPDOWN DE RAÇAS
  // ==========================================================================
  function populateBreedSelect(type) {
    if (!breedSelect) return;
    breedSelect.innerHTML = '<option value="">-- Escolhe a raça --</option>';
    const options = type === 'gato' ? catBreedOptions : dogBreedOptions;
    if (type === 'gato') {
      options.forEach(opt => {
        const el = document.createElement('option');
        el.value = opt.value;
        el.textContent = `${opt.label} (TAM ${opt.tam})`;
        el.dataset.tam = opt.tam;
        breedSelect.appendChild(el);
      });
    } else {
      const breedGroup = document.createElement('optgroup');
      breedGroup.label = 'Raças';
      const cruzadoGroup = document.createElement('optgroup');
      cruzadoGroup.label = '🐾 Cão Cruzado';
      options.forEach(opt => {
        const el = document.createElement('option');
        el.value = opt.value;
        el.textContent = `${opt.label} (TAM ${opt.tam})`;
        el.dataset.tam = opt.tam;
        if (opt.value.indexOf('cruzado') !== -1) {
          cruzadoGroup.appendChild(el);
        } else {
          breedGroup.appendChild(el);
        }
      });
      breedSelect.appendChild(breedGroup);
      breedSelect.appendChild(cruzadoGroup);
    }
    if (sizeResultBadge) sizeResultBadge.textContent = '—';
    if (sizeResultText) sizeResultText.textContent = 'Seleciona a raça acima';
    if (sizeResultPrice) sizeResultPrice.textContent = '';
  }

  function getOptionPrice(type, tam) {
    const sizeOptions = type === 'gato' ? catSizeOptions : dogSizeOptions;
    const match = sizeOptions.find(p => p.tam === tam);
    return match ? match.price : 0;
  }

  // ==========================================================================
  // POPULAR DROPDOWN DE TAMANHOS (PRODUTO)
  // ==========================================================================
  function populateProductSizeSelect(type) {
    if (!productSizeSelect) return;
    const options = type === 'gato' ? catSizeOptions : dogSizeOptions;
    productSizeSelect.innerHTML = '<option value="">-- Selecionar Tamanho --</option>';
    options.forEach(opt => {
      const el = document.createElement('option');
      el.value = opt.tam;
      el.textContent = `${opt.label}  —  ${opt.price.toFixed(2).replace('.', ',')}€`;
      el.dataset.price = opt.price;
      productSizeSelect.appendChild(el);
    });
    if (state.selectedTam) {
      state.priceBase = getOptionPrice(type, state.selectedTam);
      productSizeSelect.value = state.selectedTam;
    } else {
      state.selectedTam = '';
      state.priceBase = 0;
    }
    updateProductPrice();
  }

  // ==========================================================================
  // SELECIONAR TIPO DE ANIMAL
  // ==========================================================================
  const animalTypeBtns = document.querySelectorAll('.animal-type-btn');

  function selectAnimalType(type) {
    state.animalType = type;
    animalTypeBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.type === type);
    });
    populateBreedSelect(type);
    populateProductSizeSelect(type);
    const colorInfo = typeColorMap[type];
    state.selectedColor = colorInfo.color;
    colorBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.type === type);
    });
    const selectedColorName = document.getElementById('selected-color-name');
    if (selectedColorName) {
      selectedColorName.textContent = colorInfo.color;
      selectedColorName.style.color = colorInfo.hex;
    }
  }

  animalTypeBtns.forEach(btn => {
    btn.addEventListener('click', () => selectAnimalType(btn.dataset.type));
  });

  // ==========================================================================
  // MUDANÇA NA RAÇA SELECIONADA
  // ==========================================================================
  if (breedSelect) {
    breedSelect.addEventListener('change', () => {
      const selectedVal = breedSelect.value;
      if (!selectedVal) {
        if (sizeResultBadge) sizeResultBadge.textContent = '—';
        if (sizeResultText) sizeResultText.textContent = 'Seleciona o tipo e a raça acima para calcular';
        if (sizeResultPrice) sizeResultPrice.textContent = '';
        return;
      }
      const type = state.animalType;
      const breedList = type === 'gato' ? catBreedOptions : dogBreedOptions;
      const found = breedList.find(b => b.value === selectedVal);
      if (!found) return;

      const tam = found.tam;
      const price = getOptionPrice(type, tam);
      if (sizeResultBadge) {
        sizeResultBadge.textContent = `TAM ${tam}`;
        sizeResultBadge.style.fontSize = tam.length > 2 ? '1.8rem' : '2.8rem';
      }
      if (sizeResultText) sizeResultText.textContent = `Tamanho recomendado para ${found.label}`;
      if (sizeResultPrice && price > 0) sizeResultPrice.textContent = `${price.toFixed(2).replace('.', ',')}€`;
      
      state.selectedTam = tam;
      state.priceBase = price;

      if (productSizeSelect) {
        productSizeSelect.value = tam;
        if (sizeErrorMsg) sizeErrorMsg.style.display = 'none';
        productSizeSelect.style.border = '';
        productSizeSelect.style.boxShadow = '';
      }
      updateProductPrice();
    });
  }

  // BOTÃO 'APLICAR ESTE TAMANHO NO PRODUTO'
  const applyFoundSizeBtn = document.getElementById('apply-found-size-btn');
  if (applyFoundSizeBtn) {
    applyFoundSizeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (!state.selectedTam) {
        alert('Por favor escolhe primeiro a raça do teu patudo na lista acima.');
        return;
      }
      if (productSizeSelect) {
        productSizeSelect.value = state.selectedTam;
        state.priceBase = getOptionPrice(state.animalType, state.selectedTam);
        if (sizeErrorMsg) sizeErrorMsg.style.display = 'none';
        productSizeSelect.style.border = '2px solid #0284C7';
        productSizeSelect.style.boxShadow = '0 0 0 4px rgba(2, 132, 199, 0.2)';
        setTimeout(() => {
          productSizeSelect.style.border = '';
          productSizeSelect.style.boxShadow = '';
        }, 2000);
      }
      updateProductPrice();
      const produtoSection = document.getElementById('produto');
      if (produtoSection) {
        produtoSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // ==========================================================================
  // MUDANÇA NO TAMANHO DO PRODUTO
  // ==========================================================================
  if (productSizeSelect) {
    productSizeSelect.addEventListener('change', (e) => {
      if (sizeErrorMsg) sizeErrorMsg.style.display = 'none';
      productSizeSelect.style.border = '';
      productSizeSelect.style.boxShadow = '';
      const selectedOpt = e.target.options[e.target.selectedIndex];
      if (!selectedOpt.value) {
        state.selectedTam = '';
        state.priceBase = 0;
        updateProductPrice();
        return;
      }
      state.selectedTam = selectedOpt.value;
      state.priceBase = getOptionPrice(state.animalType, selectedOpt.value);
      updateProductPrice();
    });
  }

  // ==========================================================================
  // BOTÕES DE COR (também alteram o tipo de animal)
  // ==========================================================================
  colorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.dataset.type;
      if (type) selectAnimalType(type);
    });
  });

  // ==========================================================================
  // PREÇO E OFERTA (2º PRODUTO COM -40%)
  // ==========================================================================
  const bundleSavingsText = document.getElementById('bundle-savings-text');

  if (bundleCheckbox) {
    bundleCheckbox.addEventListener('change', (e) => {
      state.hasBundle = e.target.checked;
      updateProductPrice();
    });
  }

  function updateProductPrice() {
    if (!productPriceDisplay) return;
    if (state.priceBase === 0) {
      productPriceDisplay.textContent = '—';
      if (bundleSavingsText) {
        bundleSavingsText.textContent = '40% de desconto aplicado no 2º produto';
      }
      return;
    }

    if (state.hasBundle) {
      const secondItemPrice = state.priceBase * (1 - state.discountRate);
      const total = state.priceBase + secondItemPrice;
      const savings = state.priceBase * state.discountRate;
      productPriceDisplay.textContent = `${total.toFixed(2).replace('.', ',')}€`;
      if (bundleSavingsText) {
        bundleSavingsText.textContent = `Poupas ${savings.toFixed(2).replace('.', ',')}€ no 2º body (40% OFF aplicado)`;
      }
    } else {
      productPriceDisplay.textContent = `${state.priceBase.toFixed(2).replace('.', ',')}€`;
      if (bundleSavingsText) {
        bundleSavingsText.textContent = '40% de desconto disponível ao ativar o 2º produto';
      }
    }
  }

  // ==========================================================================
  // GALERIA DE IMAGENS
  // ==========================================================================
  galleryThumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      galleryThumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      const newSrc = thumb.getAttribute('data-img');
      if (newSrc && mainProductImg) mainProductImg.src = newSrc;
    });
  });

  // ==========================================================================
  // CARRINHO
  // ==========================================================================
  function openCart() {
    renderCart();
    if (cartDrawer) cartDrawer.classList.add('active');
    if (cartOverlay) cartOverlay.classList.add('active');
  }
  function closeCart() {
    if (cartDrawer) cartDrawer.classList.remove('active');
    if (cartOverlay) cartOverlay.classList.remove('active');
  }
  if (openCartBtn) {
    openCartBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openCart();
    });
  }
  if (closeCartBtn) {
    closeCartBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeCart();
    });
  }
  if (cartOverlay) {
    cartOverlay.addEventListener('click', (e) => {
      e.preventDefault();
      closeCart();
    });
  }

  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
      if (!state.selectedTam) {
        if (productSizeSelect) {
          productSizeSelect.style.border = '2px solid #EF4444';
          productSizeSelect.style.boxShadow = '0 0 0 4px rgba(239, 68, 68, 0.2)';
          productSizeSelect.focus();
          productSizeSelect.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        if (sizeErrorMsg) {
          sizeErrorMsg.style.display = 'flex';
        }
        return;
      }

      if (sizeErrorMsg) sizeErrorMsg.style.display = 'none';
      if (productSizeSelect) {
        productSizeSelect.style.border = '';
        productSizeSelect.style.boxShadow = '';
      }

      const basePrice = state.priceBase > 0 ? state.priceBase : getOptionPrice(state.animalType, state.selectedTam);
      state.priceBase = basePrice;

      const typeLabel = state.animalType === 'cao' ? 'Cão' : state.animalType === 'cadela' ? 'Cadela' : 'Gato';
      let price = basePrice;
      let title = '';
      let subtitle = '';

      if (state.hasBundle) {
        const secondItemPrice = basePrice * (1 - state.discountRate);
        price = Math.round((basePrice + secondItemPrice) * 100) / 100;
        title = `Pack 2x Body Pós-Cirúrgico (2º com -40%) — ${typeLabel}`;
        subtitle = `Cor: ${state.selectedColor} | TAM: ${state.selectedTam} (Contém 2 unidades)`;
      } else {
        title = `Body Pós-Cirúrgico — ${typeLabel}`;
        subtitle = `Cor: ${state.selectedColor} | TAM: ${state.selectedTam}`;
      }

      const item = { animalType: state.animalType, bundle: state.hasBundle, title, subtitle, color: state.selectedColor, tam: state.selectedTam, price, img: mainProductImg ? mainProductImg.src : '' };
      state.cart.push(item);
      renderCart();
      openCart();

      // Visual feedback no botão
      const originalHtml = addToCartBtn.innerHTML;
      addToCartBtn.innerHTML = `✓ Adicionado ao carrinho!`;
      addToCartBtn.style.background = '#059669';
      setTimeout(() => {
        addToCartBtn.innerHTML = originalHtml;
        addToCartBtn.style.background = '';
      }, 1500);
    });
  }

  function renderCart() {
    try { localStorage.setItem('vetbody_cart', JSON.stringify(state.cart)); } catch (e) {}
    if (cartBadge) cartBadge.textContent = state.cart.length;
    if (!cartBody) return;
    if (state.cart.length === 0) {
      cartBody.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <p style="font-weight: 700; font-size: 1.1rem;">O seu carrinho está vazio</p>
          <p style="font-size: 0.875rem;">Escolha o tamanho certo e adicione o body para garantir conforto ao seu animal.</p>
        </div>
      `;
      if (cartSubtotal) cartSubtotal.textContent = '0,00€';
      return;
    }
    let subtotal = 0;
    let html = '';
    const esc = value => String(value ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    state.cart.forEach((item, index) => {
      const price = Number(item.price) || 0;
      subtotal += price;
      html += `
        <div class="cart-item">
          <img src="${esc(item.img)}" alt="${esc(item.title)}">
          <div style="flex: 1;">
            <h4 style="font-size: 0.95rem; font-weight: 800;">${esc(item.title)}</h4>
            <p style="font-size: 0.85rem; color: var(--text-muted);">${esc(item.subtitle || `Cor: ${item.color} | TAM: ${item.tam}`)}</p>
            <p style="font-size: 1rem; font-weight: 900; color: #0284C7; margin-top: 0.25rem;">${price.toFixed(2).replace('.', ',')}€</p>
          </div>
          <button data-remove-cart-index="${index}" aria-label="Remover produto" style="background: none; border: none; color: #E05A47; cursor: pointer; padding: 0.5rem; font-size: 1.1rem;">✕</button>
        </div>
      `;
    });
    cartBody.innerHTML = html;
    if (cartSubtotal) cartSubtotal.textContent = `${subtotal.toFixed(2).replace('.', ',')}€`;
  }

  if (cartBody) cartBody.addEventListener('click', event => {
    const button = event.target.closest('[data-remove-cart-index]');
    if (button) window.removeCartItem(Number(button.dataset.removeCartIndex));
  });

  window.removeCartItem = function(index) {
    state.cart.splice(index, 1);
    renderCart();
  };

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (state.cart.length === 0) { alert('Por favor adicione um produto ao carrinho antes de prosseguir.'); return; }
      alert('Esta é uma pré-visualização. As encomendas e pagamentos ainda não estão activos.');
    });
  }

  // ==========================================================================
  // CALCULADORA DE MEDIDAS (MODAL)
  // ==========================================================================
  const chestInput   = document.getElementById('chest-input');
  const chestCalcBtn = document.getElementById('chest-calc-btn');
  const chestResult  = document.getElementById('chest-result');

  if (chestCalcBtn && chestInput) {
    chestCalcBtn.addEventListener('click', () => {
      const val = parseFloat(chestInput.value);
      if (isNaN(val) || val <= 0) {
        if (chestResult) chestResult.innerHTML = '<span style="color: #E05A47;">Por favor introduza uma medida em cm válida.</span>';
        return;
      }
      let calcTam = '5';
      if (val <= 28)      calcTam = '0,0';
      else if (val <= 34) calcTam = '0';
      else if (val <= 36) calcTam = '1';
      else if (val <= 38) calcTam = '2';
      else if (val <= 42) calcTam = '3';
      else if (val <= 45) calcTam = '4';
      else if (val <= 50) calcTam = '5';
      else if (val <= 58) calcTam = '6';
      else if (val <= 62) calcTam = '7';
      else if (val <= 64) calcTam = '8';
      else if (val <= 70) calcTam = '9';
      else if (val <= 72) calcTam = '10';
      else if (val <= 80) calcTam = '11';
      else if (val <= 86) calcTam = '12';
      else if (val <= 88) calcTam = '13';
      else if (val <= 92) calcTam = '14';
      else calcTam = '15';
      if (chestResult) chestResult.innerHTML = `Com ${val} cm de circunferência: Tamanho recomendado <strong>TAM ${calcTam}</strong>`;
      if (productSizeSelect && state.animalType !== 'gato') {
        productSizeSelect.value = calcTam;
        const selectedOpt = productSizeSelect.options[productSizeSelect.selectedIndex];
        if (selectedOpt && selectedOpt.dataset.price) {
          state.selectedTam = calcTam;
          state.priceBase = parseFloat(selectedOpt.dataset.price);
          updateProductPrice();
        }
      }
    });
  }

  // ==========================================================================
  // FAQ ACCORDION
  // ==========================================================================
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.parentElement;
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      if (!isActive) item.classList.add('active');
    });
  });

  // ==========================================================================
  // STICKY MOBILE CTA
  // ==========================================================================
  const heroSection = document.querySelector('.hero-clubpups');
  window.addEventListener('scroll', () => {
    if (!stickyCta || !heroSection) return;
    stickyCta.classList.toggle('visible', heroSection.getBoundingClientRect().bottom < 0);
  });

  // ==========================================================================
  // MODAL — ABRIR E FECHAR
  // ==========================================================================
  const openMeasureModalBtns = document.querySelectorAll('.open-measure-modal');
  openMeasureModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (measureModal) measureModal.classList.add('active');
    });
  });
  if (closeMeasureModalBtn && measureModal) {
    closeMeasureModalBtn.addEventListener('click', (e) => {
      e.preventDefault();
      measureModal.classList.remove('active');
    });
    measureModal.addEventListener('click', (e) => {
      if (e.target === measureModal) measureModal.classList.remove('active');
    });
  }

  // ==========================================================================
  // MODAL — TABS (Cão/Cadela | Gatos)
  // ==========================================================================
  const modalTabs = document.querySelectorAll('.modal-tab');
  modalTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const target = tab.dataset.tab;
      modalTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      const targetEl = document.getElementById(`tab-${target}`);
      if (targetEl) targetEl.classList.add('active');
    });
  });

  // ==========================================================================
  // SMOOTH SCROLL (PREVINE JUMP EM href="#")
  // ==========================================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') {
        e.preventDefault();
        return;
      }
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // ==========================================================================
  // INICIALIZAR (depois de todas as declarações, para evitar erros de TDZ)
  // ==========================================================================
  populateBreedSelect('cao');
  populateProductSizeSelect('cao');
  renderCart();

});
