// Load the small "database" and render cards, with search & filter
async function loadData(){
  try{
    const res = await fetch('rome.json');
    const data = await res.json();
    window.ROME = data;
    renderCards(data);
  }catch(e){
    console.error('Failed to load data', e);
    document.getElementById('cards').innerText = 'Failed to load content.';
  }
}

function renderCards(list){
  const container = document.getElementById('cards');
  container.innerHTML = '';
  list.forEach(item=>{
    const el = document.createElement('article');
    el.className = 'card';
    el.innerHTML = `
      <img src="${item.image}" alt="${item.title}" />
      <h3>${item.title}</h3>
      <p class="meta">${item.type} ${item.year? '• ' + item.year : ''}</p>
      <p>${item.short}</p>
      <a href="${item.slug}.html">Read</a>
    `;
    container.appendChild(el);
  });
}

function applySearch(){
  const q = document.getElementById('search').value.toLowerCase().trim();
  const f = document.getElementById('filter').value;
  const list = (window.ROME || []).filter(item=>{
    if(f!=='all' && item.type !== f) return false;
    if(!q) return true;
    return (item.title + ' ' + (item.short||'') + ' ' + (item.tags||'')).toLowerCase().includes(q);
  });
  renderCards(list);
}

document.addEventListener('DOMContentLoaded',()=>{
  loadData();
  document.getElementById('search').addEventListener('input', applySearch);
  document.getElementById('filter').addEventListener('change', applySearch);
});
