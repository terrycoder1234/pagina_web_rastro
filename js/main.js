const textCorrections = [
  [/tambien/g, 'también'], [/todavia/g, 'todavía'], [/pense/g, 'pensé'], [/llamo/g, 'llamó'], [/atencion/g, 'atención'],
  [/musica/g, 'música'], [/esta/g, 'está'], [/pequenos/g, 'pequeños'], [/pequeno/g, 'pequeño'], [/accion/g, 'acción'],
  [/intencion/g, 'intención'], [/fotografia/g, 'fotografía'], [/fotografias/g, 'fotografías'], [/Camaras/g, 'Cámaras'],
  [/analogicas/g, 'analógicas'], [/decadas/g, 'décadas'], [/Album/g, 'Álbum'], [/album/g, 'álbum'], [/Munecas/g, 'Muñecas'], [/MUNECAS/g, 'MUÑECAS'],
  [/munecas/g, 'muñecas'], [/imagenes/g, 'imágenes'], [/anos/g, 'años'], [/Aqui/g, 'Aquí'], [/aqui/g, 'aquí'],
  [/mas /g, 'más '], [/atras/g, 'atrás'], [/Detras/g, 'Detrás'], [/detras/g, 'detrás'], [/relacion/g, 'relación'],
  [/quien/g, 'quien'], [/Por que/g, 'Por qué'], [/decidi/g, 'decidí'], [/Llegue/g, 'Llegué'], [/termine/g, 'terminé'],
  [/empece/g, 'empecé'], [/conversacion/g, 'conversación'], [/galeria/g, 'galería'], [/intimo/g, 'íntimo'],
  [/video/g, 'vídeo'], [/incorporara/g, 'incorporará'], [/Lavapies/g, 'Lavapiés'], [/ceramica/g, 'cerámica'],
  [/mercancia/g, 'mercancía'], [/Camaras/g, 'Cámaras'], [/CAMARA/g, 'CÁMARA'], [/CAMARAS/g, 'CÁMARAS']
];

// En la web normal devuelve la ruta local; la versión autocontenida sustituye
// esta función por el Data URI correspondiente antes de cargar este script.
const offlineAsset = window.offlineAsset || ((asset) => asset);
const imageFileName = (image) => image.dataset.source || image.src.split('/').pop().toLowerCase();
const isPackagedOffline = Boolean(window.offlineAssets);
const photoThumbnail = (source) => isPackagedOffline ? offlineAsset(`assets/fotos/${source}`) : `assets/imagenes-web/miniaturas/${source}`;
const photoLarge = (source) => isPackagedOffline ? offlineAsset(`assets/fotos/${source}`) : `assets/imagenes-web/grandes/${source}`;
const temporalPhoto = (number) => isPackagedOffline ? offlineAsset(`assets/fotostiempo/antiguedad_${number}.png`) : `assets/imagenes-web/archivo-temporal/antiguedad_${number}.jpg`;

const correctRenderedText = () => {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);
  textNodes.forEach((node) => textCorrections.forEach(([pattern, replacement]) => { node.nodeValue = node.nodeValue.replace(pattern, replacement); }));
  document.querySelectorAll('img[alt]').forEach((image) => textCorrections.forEach(([pattern, replacement]) => { image.alt = image.alt.replace(pattern, replacement); }));
};

correctRenderedText();

const personalLook = document.querySelector('#mirada .look-inner > div');
if (personalLook) {
  personalLook.querySelectorAll('p:not(.section-mark)').forEach((paragraph) => paragraph.remove());
  const paragraphs = [
    'Durante este proyecto recibí malas noticias sobre mi abuelo y, sin darme cuenta, todo empezó a llevarme hacia él.',
    'Aunque ya estaba ciego, le encantaba escuchar música y la radio. Siempre fue una persona muy alegre: le gustaba bailar, reírse y llenar los espacios con su presencia. Pensar en él me hizo entender que muchas veces también recordamos a las personas por sus sonidos.',
    'Por eso decidí hacer este proyecto desde el sonido. Porque así como las voces dejan rastro en El Rastro, mi abuelo también dejó uno en mí, en sus risas, en la música y en todo lo que me enseñó.'
  ];
  paragraphs.forEach((text, index) => {
    const paragraph = document.createElement('p');
    paragraph.className = index === 0 ? 'lead dedication-copy' : 'dedication-copy';
    paragraph.textContent = text;
    personalLook.append(paragraph);
  });
  const note = document.createElement('p');
  note.className = 'dedication-note';
  note.textContent = 'Para mi abuelo, que me enseñó a cantar, a bailar y a llenar la vida de música.';
  personalLook.append(note);
}

const menuToggle = document.querySelector('.menu-toggle');
const siteNavigation = document.querySelector('#site-navigation');
const header = document.querySelector('[data-header]');

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.textContent = isOpen ? 'Menu' : 'Cerrar';
  siteNavigation?.classList.toggle('is-open', !isOpen);
});
siteNavigation?.addEventListener('click', (event) => {
  if (event.target.matches('a')) { menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.textContent = 'Menu'; siteNavigation.classList.remove('is-open'); }
});
window.addEventListener('scroll', () => header?.classList.toggle('scrolled', window.scrollY > 40), { passive:true });

const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) revealObserver.observe(entry.target), entry.target.classList.add('visible'); }), { threshold:.08 });
document.querySelectorAll('[data-reveal]').forEach((element) => revealObserver.observe(element));

const soundToggle = document.querySelector('.sound-toggle');
soundToggle?.addEventListener('click', () => {
  const active = soundToggle.getAttribute('aria-pressed') === 'true';
  soundToggle.setAttribute('aria-pressed', String(!active));
  soundToggle.querySelector('[data-sound-label]').textContent = active ? 'Sonido apagado' : 'Sonido activado';
});
document.querySelectorAll('.object-card').forEach((card) => card.addEventListener('click', () => {
  const label = document.querySelector('[data-sound-label]');
  const isListening = card.classList.toggle('is-listening');
  label.textContent = isListening ? `Escuchando ${card.dataset.object}` : 'Sonido apagado';
  card.querySelector('span').lastChild.textContent = isListening ? ' · escuchando' : ' · escuchar';
}));

const objectCollage = document.querySelector('.object-collage');
if (objectCollage && !objectCollage.querySelector('.object-jeans')) {
  const jeansAudio = new Audio('assets/audio/pantalonesa2.m4a');
  const jeansCard = document.createElement('button');
  jeansCard.className = 'object-card object-jeans';
  jeansCard.type = 'button';
  jeansCard.dataset.object = 'Vaqueros a dos euros';
  jeansCard.innerHTML = `<img src="${photoThumbnail('foto_87.jpg')}" data-full="${photoLarge('foto_87.jpg')}" data-source="foto_87.jpg" alt="Vaqueros a dos euros" loading="lazy" decoding="async"><span>VAQUEROS <b>— escuchar</b></span>`;
  jeansCard.addEventListener('click', () => {
    const listening = !jeansCard.classList.contains('is-listening');
    if (listening) {
      jeansAudio.currentTime = 0;
      jeansAudio.play();
    } else {
      jeansAudio.pause();
      jeansAudio.currentTime = 0;
    }
    jeansCard.classList.toggle('is-listening', listening);
    document.querySelector('[data-sound-label]').textContent = listening ? 'Escuchando Vaqueros a dos euros' : 'Sonido apagado';
    jeansCard.querySelector('b').textContent = listening ? '— escuchando' : '— escuchar';
  });
  jeansAudio.addEventListener('ended', () => {
    jeansCard.classList.remove('is-listening');
    jeansCard.querySelector('b').textContent = '— escuchar';
    document.querySelector('[data-sound-label]').textContent = 'Sonido apagado';
  });
  objectCollage.append(jeansCard);
}

const modal = document.querySelector('.modal');
const modalImage = modal?.querySelector('img');
document.querySelectorAll('.gallery-item').forEach((item) => item.addEventListener('click', () => {
  if (!modal || !modalImage) return;
  modalImage.src = item.querySelector('img').dataset.full || item.querySelector('img').src;
  modalImage.alt = item.querySelector('img').alt;
  modal.querySelector('[data-modal-title]').textContent = item.dataset.title;
  modal.querySelector('[data-modal-caption]').textContent = item.dataset.caption;
  modal.querySelector('[data-modal-category]').textContent = item.dataset.category.split(' ')[0];
  modal.classList.add('open');
}));
const closeModal = () => modal?.classList.remove('open');
modal?.querySelector('.modal-close')?.addEventListener('click', closeModal);
modal?.addEventListener('click', (event) => { if (event.target === modal) closeModal(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeModal(); });

document.querySelectorAll('.filter').forEach((filter) => filter.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach((item) => item.classList.remove('active'));
  filter.classList.add('active');
  const category = filter.dataset.filter;
  document.querySelectorAll('.gallery-item').forEach((item) => { item.hidden = category !== 'all' && !item.dataset.category.includes(category); });
}));

const galleryGroups = {
  'foto_36.jpg': 'multitud',
  'foto_57.jpg': 'multitud',
  'foto_24.jpg': 'objetos',
  'foto_28.jpg': 'voces-oficios',
  'foto_22.jpg': 'multitud',
  'foto_44.jpg': 'voces-oficios',
  'foto_20.jpg': 'objetos',
  'foto_121.jpg': 'objetos'
};
const galleryFilters = [...document.querySelectorAll('.filter')];
galleryFilters.slice(4).forEach((filter) => { filter.hidden = true; });
const thirdFilter = galleryFilters[3];
if (thirdFilter) {
  thirdFilter.dataset.filter = 'voces-oficios';
  thirdFilter.textContent = 'Voces y oficios';
}
document.querySelectorAll('.gallery-item').forEach((item) => {
  const fileName = imageFileName(item.querySelector('img'));
  if (galleryGroups[fileName]) item.dataset.category = galleryGroups[fileName];
});

const gallerySection = document.querySelector('#galeria');
const oldGalleryGrid = gallerySection?.querySelector('.gallery-grid');
const oldGalleryFilters = gallerySection?.querySelector('.filter-list');
const legacyGalleryItems = [...document.querySelectorAll('.gallery-item')];
const objectNumbers = new Set([8, 10, 11, 12, 14, 15, 16, 18, 20, 21, 23, 24, 27, 66, 67, 69, 70, 72, 73, 75, 76, 77, 79, 80, 81, 82, 85, 94, 98, 101, 103, 104, 105, 108, 109, 110, 111, 113, 115, 121, 123]);
const crowdNumbers = new Set([22, 34, 35, 36, 41, 42, 51, 52, 56, 60, 61, 63, 64, 90, 91, 125, 126, 133, 136]);
const getPhotoCategory = (number) => objectNumbers.has(number) ? 'objetos' : crowdNumbers.has(number) ? 'multitud' : 'voces-oficios';
const allPhotoSources = Array.from({ length: 136 }, (_, index) => `foto_${index + 1}.jpg`).concat('fotoantigua1.jpg');
if (oldGalleryGrid) {
  oldGalleryGrid.innerHTML = '';
  allPhotoSources.forEach((source) => {
    const number = Number(source.match(/\d+/)?.[0]);
    const legacyItem = legacyGalleryItems.find((item) => imageFileName(item.querySelector('img')) === source);
    const item = document.createElement('button');
    item.className = 'gallery-item';
    item.type = 'button';
    item.dataset.category = source === 'fotoantigua1.jpg' ? 'objetos' : getPhotoCategory(number);
    item.dataset.title = legacyItem?.dataset.title || `Fotografía ${source.replace('.jpg', '').replace('.jpg', '')}`;
    item.dataset.caption = legacyItem?.dataset.caption || 'Imagen del archivo visual del Rastro.';
    item.innerHTML = `<img src="${photoThumbnail(source)}" data-full="${photoLarge(source)}" data-source="${source}" alt="${item.dataset.title}" loading="lazy" decoding="async">`;
    oldGalleryGrid.append(item);
  });
}
const galleryItems = [...document.querySelectorAll('.gallery-item')];
const categoryConfig = [
  { id: 'multitud', title: 'Multitud', description: 'Cuerpos, trayectorias, conversaciones y ruido compartido.', cover: 'foto_36.jpg' },
  { id: 'objetos', title: 'Objetos', description: 'Cosas usadas, encontradas y vueltas a mirar.', cover: 'foto_24.jpg' },
  { id: 'voces-oficios', title: 'Voces y oficios', description: 'Las personas, los puestos y las formas de hacer mercado.', cover: 'foto_44.jpg' }
];
const getCategoryItems = (category) => galleryItems.filter((item) => item.dataset.category === category.id && !(category.id === 'voces-oficios' && /^Fotografía foto_/i.test(item.dataset.title)));

if (gallerySection && oldGalleryGrid) {
  oldGalleryGrid.hidden = true;
  if (oldGalleryFilters) oldGalleryFilters.hidden = true;
  const categoryGrid = document.createElement('div');
  categoryGrid.className = 'category-grid container-wide';
  const categoryDialog = document.createElement('dialog');
  categoryDialog.className = 'category-dialog';
  categoryDialog.innerHTML = '<button class="category-close" type="button" aria-label="Cerrar">×</button><div class="category-dialog-head"><span></span><h2></h2><p></p></div><div class="category-featured"><img src="" alt=""><div><strong></strong><small></small></div></div><div class="category-images"></div>';
  categoryConfig.forEach((category) => {
    const initialItems = galleryItems.filter((item) => item.dataset.category === category.id);
    const coverItem = initialItems.find((item) => imageFileName(item.querySelector('img')) === category.cover) || initialItems[0];
    const card = document.createElement('button');
    card.className = 'category-card';
    card.type = 'button';
    card.innerHTML = `<img src="${coverItem.querySelector('img').src}" alt=""><span>${category.title}</span><small>Explorar categoría →</small>`;
    card.addEventListener('click', () => {
      const matchingItems = getCategoryItems(category);
      categoryDialog.querySelector('span').textContent = `${category.id === 'voces-oficios' ? '03' : category.id === 'objetos' ? '02' : '01'} / Categoría`;
      categoryDialog.querySelector('h2').textContent = category.title;
      categoryDialog.querySelector('p').textContent = category.description;
      const imageList = categoryDialog.querySelector('.category-images');
      const featuredImage = categoryDialog.querySelector('.category-featured img');
      const featuredTitle = categoryDialog.querySelector('.category-featured strong');
      const featuredHint = categoryDialog.querySelector('.category-featured small');
      imageList.innerHTML = '';
      matchingItems.forEach((item) => {
        const image = item.querySelector('img').cloneNode(true);
        const figure = document.createElement('figure');
        const caption = document.createElement('figcaption');
        caption.textContent = item.dataset.title;
        figure.tabIndex = 0;
        figure.append(image, caption);
        const selectImage = () => { featuredImage.src = image.dataset.full || image.src; featuredImage.alt = image.alt; featuredTitle.textContent = item.dataset.title; featuredHint.textContent = 'Seleccionada · ampliar'; document.querySelector('.category-featured')?.classList.add('is-focused'); };
        figure.addEventListener('click', selectImage);
        figure.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); selectImage(); } });
        imageList.append(figure);
      });
      if (matchingItems[0]) { const firstImage = matchingItems[0].querySelector('img'); featuredImage.src = firstImage.dataset.full || firstImage.src; featuredImage.alt = firstImage.alt; featuredTitle.textContent = matchingItems[0].dataset.title; featuredHint.textContent = 'Seleccionada · ampliar'; }
      categoryDialog.showModal();
    });
    categoryGrid.append(card);
  });
  oldGalleryGrid.before(categoryGrid);
  gallerySection.append(categoryDialog);
  categoryDialog.querySelector('.category-close').addEventListener('click', () => categoryDialog.close());
  categoryDialog.addEventListener('click', (event) => { if (event.target === categoryDialog) categoryDialog.close(); });
}

const applyPhotoTitles = (titles) => document.querySelectorAll('.gallery-item').forEach((item) => {
  const fileName = imageFileName(item.querySelector('img'));
  if (titles[fileName]) item.dataset.title = titles[fileName];
  if (fileName === 'fotoantigua1.jpg') item.dataset.title = 'Mercado antiguo con varios puestos y personas comprando';
  item.querySelector('img').alt = item.dataset.title;
});
applyPhotoTitles(window.photoTitles || {});

const archiveSlider = document.querySelector('.archive-placeholder input');
const modernPhoto = document.querySelector('.archive-after');
archiveSlider?.addEventListener('input', () => {
  modernPhoto.style.clipPath = `inset(0 0 0 ${archiveSlider.value}%)`;
  modernPhoto.parentElement.style.setProperty('--split-position', `${archiveSlider.value}%`);
});

const timeMarkup = `<section id="antiguedad" class="time-section" aria-label="Recorrido por fotografias antiguas"><div class="time-stage"><div class="time-heading"><span>09 / 11 · Archivo temporal</span><strong>Una memoria en capas</strong></div><div class="time-frame">${Array.from({ length: 7 }, (_, index) => `<img src="${temporalPhoto(index + 1)}" data-source="antiguedad_${index + 1}.jpg" alt="Fotografia antigua del Rastro, imagen ${index + 1}" class="time-photo${index === 0 ? ' is-visible' : ''}" loading="eager" decoding="async">`).join('')}<span class="time-counter">01 / 07</span></div><p class="time-instruction">Continua bajando para revelar el paso del tiempo <span>↓</span></p></div></section>`;
const miradaSection = document.querySelector('#mirada');
miradaSection?.insertAdjacentHTML('beforebegin', timeMarkup);
const timeSection = document.querySelector('.time-section');
const timePhotos = [...document.querySelectorAll('.time-photo')];
const timeCounter = document.querySelector('.time-counter');
const updateTimeSequence = () => {
  if (!timeSection || !timePhotos.length) return;
  const bounds = timeSection.getBoundingClientRect();
  const travel = timeSection.offsetHeight - window.innerHeight;
  const progress = Math.min(1, Math.max(0, -bounds.top / travel));
  const position = progress * (timePhotos.length - 1);
  const activeIndex = Math.min(timePhotos.length - 1, Math.floor(position));
  const blend = position - activeIndex;
  timePhotos.forEach((photo, index) => { photo.style.opacity = index === activeIndex ? String(1 - blend) : index === activeIndex + 1 ? String(blend) : '0'; });
  timeCounter.textContent = `${String(Math.min(timePhotos.length, activeIndex + (blend > .5 ? 2 : 1))).padStart(2, '0')} / ${String(timePhotos.length).padStart(2, '0')}`;
};
window.addEventListener('scroll', updateTimeSequence, { passive: true });
window.addEventListener('resize', updateTimeSequence);
updateTimeSequence();
