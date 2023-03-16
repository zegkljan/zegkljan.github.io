import{s as m}from"./QList.fa21a5e7.js";import{C as z,Q as _}from"./country-flag.esm.49d8a43f.js";import{Q as L}from"./QBtn.0a69dd4a.js";import{a as P}from"./QTable.ef3187e3.js";import{M as Q,u as B,aq as D,N as w,r as v,_ as o,O as r,P as f,Q as a,ar as q,$ as N,a1 as V,Z as l,f as i,Y as h}from"./index.54dddbab.js";import{u as $}from"./vue-i18n.esm-bundler.d99cbbd3.js";import"./use-router-link.192125af.js";import"./rtl.b12854cf.js";const C={key:1},E={class:"text-center text-h2",style:{margin:"2rem"}},R=Q({__name:"TournamentsView",props:{season:null,division:null,category:null},setup(k){const s=k,{t:n,d:x}=$(),c=B();D(async()=>{await c.loadSeason(s.season)});const T=w(()=>[{name:"name",label:n("tournamentLabel"),field:t=>t.name,align:"left",sortable:!0},{name:"date",label:n("dateLabel"),field:t=>t.date,format:t=>x(t),align:"left",sortable:!0},{name:"country",label:n("countryLabel"),field:t=>t.country,align:"left",sortable:!0},{name:"noParticipants",label:n("noParticipantsLabel"),field:t=>t.noParticipants,align:"right",sortable:!0},{name:"coefficient",label:n("coefficientLabel"),field:t=>t.coefficient,align:"right",sortable:!0},{name:"hemaratings",label:n("hemaratingsLabel"),field:"",align:"center"}]),d=w(()=>{if(c.tournaments!==void 0)return Object.entries(c.tournaments).flatMap(t=>{var y;const b=t[0],e=t[1],u=(y=e.competitions[s.division])==null?void 0:y[s.category];return u===void 0?[]:[{id:b,name:e.name,date:e.date,country:e.country,coefficient:e.coefficient,noParticipants:u.no_participants,results:u.results}]})});let p={width:"100%",height:"300px"};function g(){p.height=window.innerHeight-50+"px"}return window.addEventListener("resize",g),g(),v(null),v(null),(t,b)=>o(d)!==null?(r(),f(P,{key:0,ref:"table",columns:o(T),rows:o(d),"row-key":"id",loading:o(d)===void 0,pagination:{rowsPerPage:0,sortBy:"date",descending:!1},"binary-state-sort":"","hide-bottom":"",square:"",style:q(o(p))},{"body-cell-country":a(e=>[i(_,{props:e},{default:a(()=>[i(o(z),{country:e.value,shadow:!0,size:"normal"},null,8,["country"]),i(m,null,{default:a(()=>[h(l(t.$t("countries."+e.value)),1)]),_:2},1024)]),_:2},1032,["props"])]),"body-cell-hemaratings":a(e=>[i(_,{props:e},{default:a(()=>[i(L,{href:"https://hemaratings.com/events/details/"+e.row.id,target:"_blank",icon:"mdi-open-in-new",flat:"",dense:"",round:"",disable:e.row.id.startsWith("-")},null,8,["href","disable"]),e.row.id.startsWith("-")?(r(),f(m,{key:0},{default:a(()=>[h(l(t.$t("hemaratingsNoDetailTooltip")),1)]),_:1})):(r(),f(m,{key:1},{default:a(()=>[h(l(t.$t("hemaratingsDetailTooltip")),1)]),_:1}))]),_:2},1032,["props"])]),_:1},8,["columns","rows","loading","style"])):(r(),N("div",C,[V("div",E,l(t.$t("noData")),1)]))}});export{R as default};