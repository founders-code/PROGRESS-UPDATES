/* ============================================================
   KCS Capital · 4orm Finance — Progress Roadmap
   Shared render logic for the multi-page site.
   Each HTML page sets  window.PAGE  ("home" or a vertical id),
   then loads data.js followed by this file.
   All editable content lives in assets/data.js.
   ============================================================ */
const CLS = { done:"done", active:"active", todo:"todo" };
const BMLABEL = { ahead:"Ahead of stage", onpar:"On-par for stage", behind:"Behind / catching up" };

function counts(v){
  let d=0,a=0,t=0;
  v.checkpoints.forEach(c=>{ if(c.state==="done")d++; else if(c.state==="active")a++; else t++; });
  return {d,a,t,total:v.checkpoints.length};
}
function vName(id){ const v=DATA.verticals.find(x=>x.id===id); return v?v.short:id; }
function fmtDate(s){ const [y,m,d]=s.split("-"); const mo=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][+m-1]; return mo+" "+(+d); }
function href(view){ return view==="home" ? "index.html" : view+".html"; }

/* ---------- top menu ---------- */
function renderTabs(active){
  const el=document.getElementById("tabs");
  let html=`<a class="tab ${active==='home'?'active':''}" href="index.html">Overview</a>`;
  html+=DATA.verticals.map(v=>`<a class="tab ${active===v.id?'active':''}" href="${href(v.id)}">${v.short}</a>`).join("");
  el.innerHTML=html;
}

/* ---------- recent wins feed ---------- */
function renderWins(){
  if(!DATA.wins || !DATA.wins.length) return "";
  const rows=DATA.wins.slice().sort((a,b)=>b.date.localeCompare(a.date)).map(w=>`
    <div class="win">
      <div class="date">${fmtDate(w.date)}</div>
      <div class="body"><a class="vtag" href="${href(w.vertical)}">${vName(w.vertical)}</a>${w.text}</div>
    </div>`).join("");
  return `<div class="wins">
    <div class="wins-head"><h2>Recent wins</h2><span class="sub">What moved — the small wins that stack up</span></div>
    <div class="wins-list">${rows}</div>
  </div>`;
}

/* ---------- home / overview ---------- */
function renderHome(){
  const el=document.getElementById("page");
  const cols=DATA.verticals.map(v=>{
    const c=counts(v);
    const cps=v.checkpoints.map(cp=>`
      <div class="cp ${CLS[cp.state]}"><div class="mk"></div><div class="lab"><b>${cp.t}</b></div></div>`).join("");
    return `<div class="col">
      <a class="col-head" href="${href(v.id)}">
        <div class="top"><h3>${v.name}</h3><span class="pct">${v.pct}%</span></div>
        <div class="stage">${v.stage}</div>
        <div class="pbar"><i style="width:0%" data-w="${v.pct}"></i></div>
        <div class="col-meta">
          <span class="bm ${v.benchmark.level}">${BMLABEL[v.benchmark.level]}</span>
          <span class="col-counts">${c.d} done · ${c.a} now · ${c.t} next</span>
        </div>
      </a>
      <div class="col-body">${cps}</div>
      <div class="col-foot"><a href="${href(v.id)}">View full pipeline →</a></div>
    </div>`;
  }).join("");

  el.innerHTML=`
    <div class="hero">
      <div class="eyebrow">Stakeholder · Investor · Team view</div>
      <h1>Where we are — every vertical, every checkpoint</h1>
      <p>${DATA.overallNote}</p>
      <div class="summary">
        <div class="sumcard"><div class="k">${DATA.overallPct}%</div><div class="l">Overall progress to an operating exchange</div></div>
        <div class="sumcard"><div class="k">${DATA.verticals.length}</div><div class="l">Workstreams tracked</div></div>
        <div class="sumcard"><div class="k">${DATA.verticals.reduce((s,v)=>s+counts(v).d,0)}</div><div class="l">Checkpoints completed</div></div>
        <div class="sumcard"><div class="k">${DATA.verticals.reduce((s,v)=>s+counts(v).a,0)}</div><div class="l">In progress now</div></div>
      </div>
    </div>
    ${renderWins()}
    <div class="legend">
      <span><i class="dot c-done"></i> Completed</span>
      <span><i class="dot c-active"></i> In progress</span>
      <span><i class="dot c-todo"></i> Upcoming</span>
      <span style="margin-left:auto">Click any pipeline for the full detail page →</span>
    </div>
    <div class="board">${cols}</div>`;
  requestAnimationFrame(()=>{document.querySelectorAll(".pbar i").forEach(b=>{ if(b.dataset.w) b.style.width=b.dataset.w+"%"; });});
}

/* ---------- vertical detail ---------- */
function renderDetail(id){
  const v=DATA.verticals.find(x=>x.id===id);
  if(!v){ location.href="index.html"; return; }
  document.title = v.name + " — KCS Capital · 4orm Finance Roadmap";
  const c=counts(v);
  const group=(state)=>v.checkpoints.filter(cp=>cp.state===state).map(cp=>
    `<div class="item ${CLS[cp.state]}"><div class="t">${cp.t}</div><div class="d">${cp.d}</div></div>`).join("") || `<div class="d" style="color:var(--muted);font-size:12.5px">—</div>`;

  let subs="";
  if(v.subs){
    subs=`<div class="facts" style="margin-top:0;margin-bottom:26px"><h4>Regulator sub-tracks</h4>
      <ul style="grid-template-columns:1fr">${v.subs.map(s=>`<li style="padding-left:0"><div style="display:flex;justify-content:space-between;font-size:12.5px;margin-bottom:5px"><span>${s.name}</span><b style="font-family:Fraunces,serif">${s.pct}%</b></div><div class="pbar"><i style="width:${s.pct}%"></i></div></li>`).join("")}</ul></div>`;
  }
  let links="";
  if(v.links){ links=`<div class="links">${v.links.map(l=>`<a href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`).join("")}</div>`; }

  const el=document.getElementById("page");
  el.innerHTML=`
    <a class="back" href="index.html">← All verticals</a>
    <div class="dhead">
      <div><div class="eyebrow">${v.short} pipeline</div><h1>${v.name}</h1></div>
      <div class="big">${v.pct}%</div>
      <div class="stage">${v.stage}<br><span class="bm ${v.benchmark.level}" style="margin-top:6px;display:inline-flex">${BMLABEL[v.benchmark.level]}</span></div>
    </div>
    <div class="dpbar"><i style="width:${v.pct}%"></i></div>
    <div class="bm-line"><b>vs. a typical company at this stage:</b> ${v.benchmark.note}</div>
    ${subs}
    <div class="dgrid">
      <div class="dcol"><h4><i class="dot c-done"></i> Completed <span class="n">${c.d}</span></h4>${group("done")}</div>
      <div class="dcol"><h4><i class="dot c-active"></i> In progress <span class="n">${c.a}</span></h4>${group("active")}</div>
      <div class="dcol"><h4><i class="dot c-todo"></i> Upcoming <span class="n">${c.t}</span></h4>${group("todo")}</div>
    </div>
    <div class="facts"><h4>Key facts</h4><ul>${v.facts.map(f=>`<li>${f}</li>`).join("")}</ul>${links}</div>`;
}

/* ---------- init ---------- */
(function(){
  const u=document.getElementById("updated"); if(u) u.textContent=DATA.updated;
  const page = window.PAGE || "home";
  renderTabs(page === "home" ? "home" : page);
  if(page === "home") renderHome(); else renderDetail(page);
})();
