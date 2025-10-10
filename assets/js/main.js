const navToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle?.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  navLinks?.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      navLinks?.classList.remove('open');
      navToggle?.setAttribute('aria-expanded', 'false');
    }
  });
});

const clientPhotos = document.querySelectorAll('.client-photo');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox?.querySelector('img');
const lightboxClose = document.querySelector('.lightbox-close');
const zoomInButton = document.querySelector('.lightbox-zoom-in');
const zoomOutButton = document.querySelector('.lightbox-zoom-out');

let currentScale = 1;
let lastFocusedPhoto = null;

const setScale = (scale) => {
  currentScale = Number(Math.min(2.75, Math.max(1, scale)).toFixed(2));
  if (lightboxImage) {
    lightboxImage.style.transform = `scale(${currentScale})`;
    lightboxImage.classList.toggle('is-zoomed', currentScale > 1);
  }
};

const closeLightbox = () => {
  if (!lightbox || !lightboxImage) return;
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImage.src = '';
  lightboxImage.alt = '';
  document.body.classList.remove('lightbox-open');
  setScale(1);
  if (lastFocusedPhoto) {
    lastFocusedPhoto.focus();
    lastFocusedPhoto = null;
  }
};

const openLightbox = (src, alt, trigger) => {
  if (!lightbox || !lightboxImage) return;
  lightboxImage.src = src;
  lightboxImage.alt = alt || 'Client hairstyle result';
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lightbox-open');
  setScale(1);
  lastFocusedPhoto = trigger ?? null;
  lightboxClose?.focus();
};

const zoomIn = () => setScale(currentScale + 0.25);
const zoomOut = () => setScale(currentScale - 0.25);
const toggleZoom = () => setScale(currentScale > 1 ? 1 : 2);

clientPhotos.forEach((photo) => {
  photo.addEventListener('click', () => {
    const src = photo.dataset.image;
    if (!src) return;
    const altText =
      photo.dataset.alt ||
      photo.getAttribute('aria-label') ||
      photo.closest('figure')?.querySelector('figcaption')?.textContent?.trim() ||
      'Client hairstyle result';
    openLightbox(src, altText, photo);
  });
});

lightboxClose?.addEventListener('click', closeLightbox);

lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

zoomInButton?.addEventListener('click', zoomIn);
zoomOutButton?.addEventListener('click', zoomOut);
lightboxImage?.addEventListener('click', toggleZoom);

document.addEventListener('keydown', (event) => {
  if (!lightbox || lightbox.getAttribute('aria-hidden') === 'true') {
    return;
  }

  if (event.key === 'Escape') {
    closeLightbox();
  }

  if (event.key === '+' || event.key === '=') {
    event.preventDefault();
    zoomIn();
  }

  if (event.key === '-' || event.key === '_') {
    event.preventDefault();
    zoomOut();
  }
});
