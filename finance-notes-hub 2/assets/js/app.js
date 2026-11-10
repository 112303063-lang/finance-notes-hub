(function () {
  'use strict';
  const db = window.FINANCE_DATA;
  if (!db) return;
  const body = document.body;
  const root = body.dataset.root || '.';
  const page = body.dataset.page || 'home';
  const categoryId = body.dataset.category;
  const noteId = body.dataset.note;
  const link = (path) => `${root}/${path}`;
  const el = (tag, cls, text) => { const n = document.createElement(tag); if (cls) n.className = cls; if (text !== undefined) n.textContent = text; return n; };
  const findCat = (id) => db.categories.find(c => c.id === id);
  const findNote = (id) => db.notes.find(n => n.id === id);
  const append = (parent, ...children) => { children.forEach(n => parent.append(n)); return parent; };
  const makeLink = (href, cls, txt) => { const a=el('a',cls,txt); a.href=href; return a; };
  const nav = document.getElementById('site-nav');
  if (nav) {
    nav.innerHTML = '';
    [['Home','index.html'],['Topics','index.html#topics'],['About','about.html']].forEach(([label,path]) => {
      const a = makeLink(link(path), (page==='home'&&label==='Home')||(page==='about'&&label==='About')?'active':'', label);
      if(label==='About') a.classList.add('nav-cta'); nav.append(a);
    });
  }
  document.querySelectorAll('[data-home]').forEach(a => a.href=link('index.html'));
  document.querySelectorAll('[data-year]').forEach(a => a.textContent=new Date().getFullYear());
  const makeTopicCard = c => {
    const a=makeLink(link(`topics/${c.id}.html`),'topic-card');
    append(a,el('div',`topic-icon ${c.accent}`,c.icon),el('h3','',c.name),el('div','zh',c.zh),el('p','',c.summary));
    const count=db.notes.filter(n=>n.category===c.id).length;
    const b=el('div','card-bottom');append(b,el('span','',`${count} notes`),el('span','', 'Explore →'));a.append(b);return a;
  };
  const makeNoteCard = n => {
    const a=makeLink(link(`notes/${n.id}.html`),'note-card');
    append(a,el('span','tag',findCat(n.category)?.name||'Notes'),el('h3','',n.title),el('div','zh',n.zh),el('p','',n.summary));
    const b=el('div','card-bottom');append(b,el('span','subtle',`${n.level} · ${n.minutes} min`),el('span','', 'Read note →'));a.append(b);return a;
  };
  if(page==='home') {
    const catGrid=document.getElementById('category-grid');
    db.categories.forEach(c=>catGrid.append(makeTopicCard(c)));
    const noteGrid=document.getElementById('notes-grid');
    const search=document.getElementById('note-search');
    const counter=document.getElementById('note-count');
    const show=()=>{
      const q=search.value.trim().toLocaleLowerCase();
      const matches=db.notes.filter(n=>[n.title,n.zh,n.summary,findCat(n.category)?.name].join(' ').toLocaleLowerCase().includes(q));
      noteGrid.replaceChildren(...matches.map(makeNoteCard));
      counter.textContent=`${matches.length} notes`;
      if(!matches.length) noteGrid.append(el('p','empty','No matching notes. Try another keyword.'));
    };
    search.addEventListener('input',show);show();
  }
  if(page==='category') {
    const c=findCat(categoryId);
    const parent=document.getElementById('category-content');
    if(!c){parent.append(el('p','empty','Category not found.'));return;}
    document.title=`${c.name} | Finance Notes Hub`;
    const crumbs=el('div','breadcrumbs');append(crumbs,makeLink(link('index.html'),'','Home'),document.createTextNode(' / Topics / '+c.name));
    const label=el('div','eyebrow','TOPIC COLLECTION');
    const title=el('h1','page-title',c.name);
    const desc=el('p','',c.summary+' '+c.zh);
    const head=el('div','page-head');append(head,crumbs,label,title,desc);
    const grid=el('div','note-grid');db.notes.filter(n=>n.category===c.id).forEach(n=>grid.append(makeNoteCard(n)));
    append(parent,head,grid);
  }
  if(page==='note') {
    const n=findNote(noteId);
    const parent=document.getElementById('article-content');
    if(!n){parent.append(el('p','empty','Note not found.'));return;}
    const c=findCat(n.category);
    document.title=`${n.title} | Finance Notes Hub`;
    const head=el('header','article-head');
    const crumbs=el('div','breadcrumbs');append(crumbs,makeLink(link('index.html'),'','Home'),document.createTextNode(' / '),makeLink(link(`topics/${c.id}.html`),'',c.name),document.createTextNode(' / '+n.title));
    append(head,crumbs,el('span','tag',`${n.level} · ${n.minutes} min read`),el('h1','',n.title),el('div','zh',n.zh),el('p','summary',n.summary));parent.append(head);
    n.sections.forEach(s=>{
      const sec=el('section','article-section');append(sec,el('h2','',s.title));
      if(s.formula) sec.append(el('div','formula',s.formula));
      if(s.body) sec.append(el('p','',s.body));
      if(s.bullets){const ul=el('ul');s.bullets.forEach(b=>ul.append(el('li','',b)));sec.append(ul)}
      parent.append(sec);
    });
    const actions=el('div','article-actions');append(actions,makeLink(link(`topics/${c.id}.html`),'ghost-link',`← Back to ${c.name}`),makeLink(link('index.html#notes'),'ghost-link','All notes'));
    append(parent,actions,el('div','notice','Educational material only. Examples are simplified and are not investment recommendations.'));
  }
})();
