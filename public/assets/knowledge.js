const root = document.querySelector('.knowledge-hub');
if (root) {
  const search = root.querySelector('#faq-search');
  const entries = [...root.querySelectorAll('[data-faq]')];
  const filters = [...root.querySelectorAll('button[data-category]')];
  const more = root.querySelector('[data-show-all]');
  const status = root.querySelector('#faq-status');
  let category = '';
  let expanded = false;
  const normalize = value => value.toLocaleLowerCase('de').normalize('NFD').replace(/\p{Diacritic}/gu,'').replace(/ß/g,'ss').replace(/ae/g,'a').replace(/oe/g,'o').replace(/ue/g,'u');
  const stopwords = new Set(['wie','was','ist','ich','kann','ich','ein','eine','der','die','das','und','im','in','zu','fur','mit','es','auch','mein','meine']);
  const indexes = new Map(entries.map(entry => [entry, normalize(entry.querySelector('summary').textContent + ' ' + entry.querySelector('[data-search-answer]').textContent + ' ' + entry.dataset.keywords)]));
  root.querySelectorAll('[data-knowledge-controls]').forEach(el=>el.hidden=false);
  function update() {
    const query = normalize(search.value.trim());
    root.querySelector(".knowledge-suggestions").hidden = !!query;
    const tokens = query.split(/[^\p{L}\p{N}]+/u).filter(t=>t && !stopwords.has(t));
    const matches = entries.filter(entry=>(!category || entry.dataset.category===category) && tokens.every(t=>indexes.get(entry).includes(t)));
    const limit = !query && !category && !expanded ? 8 : matches.length;
    entries.forEach(entry=>entry.hidden=true);
    matches.slice(0,limit).forEach(entry=>entry.hidden=false);
    more.hidden = !!query || !!category || matches.length<=8;
    more.firstChild.textContent = expanded ? "Weniger Fragen anzeigen" : `Alle ${entries.length} Fragen anzeigen`;
    more.setAttribute('aria-expanded', String(expanded));
    status.textContent = query || category ? `${matches.length} ${matches.length===1?'Antwort':'Antworten'} gefunden${category ? ` · ${category}` : ''}` : `${Math.min(limit,matches.length)} von ${entries.length} Fragen · ${expanded?'Alle Themen im Überblick':'Ein Einstieg für dich'}`;
    root.querySelector('.empty-search').hidden = matches.length>0;
    filters.forEach(btn=>btn.setAttribute('aria-pressed',String(btn.dataset.category===category)));
  }
  search.addEventListener('input',update);
  search.addEventListener('search',update);
  filters.forEach(btn=>btn.addEventListener('click',()=>{category=btn.dataset.category;update();}));
  more.addEventListener('click',()=>{
    expanded=!expanded;
    update();
    if (expanded) entries[8]?.querySelector('summary').focus();
  });
  root.querySelectorAll('[data-search-suggestion]').forEach(btn=>btn.addEventListener('click',()=>{
    search.value=btn.dataset.searchSuggestion;category='';update();search.focus();
  }));
  root.querySelector('[data-reset-search]').addEventListener('click',()=>{
    search.value='';category='';expanded=false;update();search.focus();
  });
  function reveal(id, focus = true) {
    const entry=entries.find(el=>el.id===id);
    if(!entry) return;
    search.value='';category='';expanded=true;update();
    entry.open=true;
    if(focus) { entry.querySelector('summary').focus(); entry.scrollIntoView({block:'start'}); }
  }
  root.querySelectorAll('[data-related]').forEach(link=>link.addEventListener('click',event=>{
    event.preventDefault();
    reveal(link.dataset.related);
    history.replaceState(null,'',`#${link.dataset.related}`);
  }));
  window.addEventListener('hashchange',()=>reveal(location.hash.slice(1)));
  update();
  if(location.hash) reveal(location.hash.slice(1));
}
