const root = document.querySelector('[data-control-demo]');
if (root) {
  const tabs = [...root.querySelectorAll('[data-control-mode]')];
  const panels = [...root.querySelectorAll('[data-control-panel]')];
  const slider = root.querySelector('#control-brightness');
  const clock = root.querySelector('[data-control-clock]');
  const status = root.querySelector('[data-control-status]');
  const events = root.querySelector('[data-control-events]');
  const run = root.querySelector('[data-control-run]');
  const timeInputs = [...root.querySelectorAll('input[type="time"]')];
  let mode = 'switch';
  let light = 65;
  let lastLevel = 65;
  let blinds = 'open';
  let running = false;
  let timer;
  let holdTimer;
  let holdInterval;
  let suppressedButton = null;
  const modeNames = { switch: 'Taster', app: 'App', auto: 'Automatik' };

  function render(message) {
    root.style.setProperty('--control-level', light / 100);
    root.dataset.light = light ? 'on' : 'off';
    root.dataset.blinds = blinds;
    const lightText = light ? `${light} %` : 'Aus';
    const blindText = blinds === 'open' ? 'Offen' : 'Geschlossen';
    root.querySelector('[data-control-light]').textContent = lightText;
    root.querySelector('[data-control-blinds]').textContent = blindText;
    root.querySelector('[data-control-source]').textContent = modeNames[mode];
    root.querySelector('[data-control-app-level]').textContent = lightText;
    slider.value = light;
    slider.setAttribute('aria-valuetext', light ? `${light} Prozent` : 'Aus, 0 Prozent');
    root.querySelector('[data-control-room]').setAttribute('aria-label', `Beispielwohnraum: Licht ${light ? `bei ${light} Prozent` : 'ausgeschaltet'}, Jalousie ${blindText.toLocaleLowerCase('de')}.`);
    root.querySelectorAll('[data-control-action]').forEach(button => {
      const selected = { on: light > 0, off: light === 0, open: blinds === 'open', closed: blinds === 'closed' };
      button.setAttribute('aria-pressed', String(selected[button.dataset.controlAction]));
    });
    if (message) status.textContent = message;
  }
  function setLight(value) {
    light = Math.max(0, Math.min(100, value));
    if (light) lastLevel = light;
  }
  function dim(delta) {
    setLight(light + delta);
    render(light ? `Licht auf ${light} Prozent gedimmt.` : 'Licht ausgeschaltet.');
  }
  function action(value) {
    if (value === 'on' || value === 'off') {
      setLight(value === 'on' ? lastLevel : 0);
      render(light ? `Licht eingeschaltet: ${light} Prozent.` : 'Licht ausgeschaltet.');
    } else {
      blinds = value;
      render(blinds === 'open' ? 'Jalousie geöffnet.' : 'Jalousie geschlossen.');
    }
  }
  function clearHold() {
    clearTimeout(holdTimer);
    clearInterval(holdInterval);
  }
  function stop(message) {
    clearTimeout(timer);
    running = false;
    run.firstChild.textContent = 'Simulation starten ';
    timeInputs.forEach(input => { input.disabled = false; });
    if (message) render(message);
  }
  function chooseMode(next, focus = false) {
    const wasRunning = running;
    stop();
    clearHold();
    mode = next;
    tabs.forEach(tab => {
      const selected = tab.dataset.controlMode === mode;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      if (selected && focus) tab.focus();
    });
    panels.forEach(panel => { panel.hidden = panel.dataset.controlPanel !== mode; });
    if (mode !== 'auto') clock.textContent = 'Manuell';
    else if (clock.textContent === 'Manuell') clock.textContent = 'Beispieluhr';
    render(wasRunning ? 'Simulation gestoppt. Du bedienst jetzt selbst.' : `${modeNames[mode]} ausgewählt. Der Raum behält seine Einstellungen.`);
  }
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => chooseMode(tab.dataset.controlMode));
    tab.addEventListener('keydown', event => {
      const keys = ['ArrowRight', 'ArrowLeft', 'Home', 'End'];
      if (!keys.includes(event.key)) return;
      event.preventDefault();
      const index = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (i + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
      chooseMode(tabs[index].dataset.controlMode, true);
    });
  });
  root.querySelectorAll('[data-control-action]').forEach(button => {
    button.addEventListener('click', () => {
      if (suppressedButton === button) { suppressedButton = null; return; }
      action(button.dataset.controlAction);
    });
  });
  root.querySelectorAll('[data-control-hold]').forEach(button => {
    button.addEventListener('pointerdown', event => {
      if (event.button !== 0) return;
      clearHold();
      suppressedButton = null;
      button.setPointerCapture(event.pointerId);
      holdTimer = setTimeout(() => {
        suppressedButton = button;
        dim(Number(button.dataset.controlHold));
        holdInterval = setInterval(() => dim(Number(button.dataset.controlHold)), 180);
      }, 450);
    });
    ['pointerup', 'lostpointercapture'].forEach(name => button.addEventListener(name, clearHold));
    button.addEventListener('pointercancel', () => { clearHold(); suppressedButton = null; });
    button.addEventListener('contextmenu', event => event.preventDefault());
  });
  window.addEventListener('blur', clearHold);
  root.querySelectorAll('[data-control-dim]').forEach(button => button.addEventListener('click', () => dim(Number(button.dataset.controlDim))));
  slider.addEventListener('input', () => {
    setLight(Number(slider.value));
    render(light ? `Licht in der Beispiel-App auf ${light} Prozent eingestellt.` : 'Licht in der Beispiel-App ausgeschaltet.');
  });
  const formatTime = minutes => `${String(Math.floor(minutes / 60)).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`;
  const minutes = value => Number(value.slice(0, 2)) * 60 + Number(value.slice(3));
  run.addEventListener('click', () => {
    if (running) { stop('Simulation gestoppt. Du kannst sie erneut starten.'); return; }
    const invalid = timeInputs.find(input => !input.value || !input.validity.valid);
    if (invalid) { render('Bitte trage für beide Aktionen eine gültige Uhrzeit ein.'); invalid.focus(); return; }
    const rules = [
      { time: minutes(timeInputs[0].value), type: 'light' },
      { time: minutes(timeInputs[1].value), type: 'blinds' },
    ];
    const times = [...new Set(rules.map(rule => rule.time))].sort((a, b) => a - b);
    setLight(65);
    blinds = 'open';
    events.replaceChildren();
    running = true;
    run.firstChild.textContent = 'Simulation stoppen ';
    timeInputs.forEach(input => { input.disabled = true; });
    let index = 0;
    function beforeEvent() {
      const time = times[index];
      clock.textContent = formatTime((time + 1439) % 1440);
      render(`Beispieluhr ${clock.textContent}. Gleich folgt die Aktion um ${formatTime(time)} Uhr.`);
      timer = setTimeout(() => {
        clock.textContent = formatTime(time);
        const messages = [];
        for (const rule of rules.filter(item => item.time === time)) {
          const text = rule.type === 'light' ? 'Licht automatisch ausgeschaltet.' : 'Jalousie automatisch geschlossen.';
          if (rule.type === 'light') setLight(0);
          else blinds = 'closed';
          messages.push(text);
          const item = document.createElement('li');
          item.textContent = `${formatTime(time)} · ${text}`;
          events.append(item);
        }
        render(`${formatTime(time)} Uhr: ${messages.join(' ')}`);
        index += 1;
        if (index < times.length) timer = setTimeout(beforeEvent, 1300);
        else stop(`${formatTime(time)} Uhr: ${messages.join(' ')} Vorschau beendet.`);
      }, 1100);
    }
    beforeEvent();
  });
  function reset() {
    stop();
    clearHold();
    suppressedButton = null;
    setLight(65);
    blinds = 'open';
    timeInputs[0].value = '08:00';
    timeInputs[1].value = '10:00';
    clock.textContent = mode === 'auto' ? 'Beispieluhr' : 'Manuell';
    events.replaceChildren();
    render('Demo zurückgesetzt: Licht bei 65 Prozent, Jalousie offen.');
  }
  root.querySelector('[data-control-reset]').addEventListener('click', reset);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { clearHold(); if (running) stop('Simulation gestoppt. Starte sie bei Bedarf erneut.'); }
  });
  new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) { clearHold(); if (running) stop('Simulation gestoppt. Starte sie bei Bedarf erneut.'); }
  }).observe(root);
  window.addEventListener('pagehide', reset);
  window.addEventListener('pageshow', event => { if (event.persisted) reset(); });
  root.querySelector('.control-interactive').hidden = false;
  root.querySelector('.control-no-script').hidden = true;
  render();
}
