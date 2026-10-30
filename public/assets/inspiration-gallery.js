document.querySelectorAll('[data-gallery]').forEach(gallery => {
  const track = gallery.querySelector('.gallery-track');
  const slides = [...track.children];
  const count = slides.length;
  const dots = [...gallery.querySelectorAll('[data-gallery-dot]')];
  const status = gallery.querySelector('.gallery-position');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let current = 0;
  let settleTimer;

  // A copy on either end lets a native swipe continue beyond the last image.
  function clone(slide) {
    const copy = slide.cloneNode(true);
    copy.dataset.galleryClone = '';
    copy.setAttribute('aria-hidden', 'true');
    copy.inert = true;
    return copy;
  }
  track.prepend(clone(slides[count - 1]));
  track.append(clone(slides[0]));
  track.classList.add('is-enhanced');

  function update(index) {
    current = ((index % count) + count) % count;
    status.textContent = `${current + 1} / ${count}`;
    dots.forEach((dot, i) => dot.setAttribute('aria-pressed', String(i === current)));
    slides.forEach((slide, i) => slide.setAttribute('aria-hidden', String(i !== current)));
  }
  function jump(position) {
    track.scrollTo({ left: position * track.getBoundingClientRect().width, behavior: 'instant' });
  }
  function settle() {
    clearTimeout(settleTimer);
    const width = track.getBoundingClientRect().width;
    if (!width) return;
    const position = Math.round(track.scrollLeft / width);
    // Ignore partial swipes until native snapping has reached an image edge.
    if (Math.abs(track.scrollLeft - position * width) > 2) return;
    update(position - 1);
    if (position === 0 || position === count + 1) jump(current + 1);
  }
  function go(position) {
    track.scrollTo({
      left: Math.max(0, Math.min(count + 1, position)) * track.getBoundingClientRect().width,
      behavior: reducedMotion.matches ? 'instant' : 'smooth',
    });
  }
  function step(delta) {
    const position = Math.round(track.scrollLeft / track.getBoundingClientRect().width);
    // Normalize a boundary copy before another quick button press.
    if (position === 0) { jump(count); go(count + delta); }
    else if (position === count + 1) { jump(1); go(1 + delta); }
    else go(position + delta);
  }
  gallery.querySelector('[data-gallery-prev]').addEventListener('click', () => step(-1));
  gallery.querySelector('[data-gallery-next]').addEventListener('click', () => step(1));
  dots.forEach((dot, i) => dot.addEventListener('click', () => go(i + 1)));
  track.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    if (event.key === 'Home') go(1);
    else if (event.key === 'End') go(count);
    else step(event.key === 'ArrowRight' ? 1 : -1);
  });
  track.addEventListener('scroll', () => {
    clearTimeout(settleTimer);
    settleTimer = setTimeout(settle, 150);
  }, { passive: true });
  track.addEventListener('scrollend', settle);
  new ResizeObserver(() => jump(current + 1)).observe(track);
  jump(1);
  update(0);
  gallery.querySelector('.gallery-controls').hidden = false;
});
