import{s}from"./QList.543e2cf2.js";import{C as L,Q as b}from"./country-flag.esm.3fc7663b.js";import{Q as w}from"./QBtn.7dfa3bd3.js";import{a as x}from"./QTable.f860d432.js";import{M as z,u as P,aq as Q,N as k,_ as i,O as l,P as d,Q as a,ar as $,$ as B,a1 as N,Z as r,f as o,Y as c}from"./index.a598baa7.js";import{u as q}from"./vue-i18n.esm-bundler.1ba97a75.js";import"./use-router-link.03541150.js";import"./rtl.62a208ea.js";const V={key:1},C={class:"text-center text-h2",style:{margin:"2rem"}},H=z({__name:"TournamentsView",props:{season:null,division:null,category:null},setup(v){const f=v,{t:n,d:T}=q(),m=P();Q(async()=>{await m.loadSeason(f.season)});const D=k(()=>[{name:"name",label:n("tournamentLabel"),field:e=>e.name,align:"left",sortable:!0},{name:"date",label:n("dateLabel"),field:e=>e.date,format:e=>T(e),align:"left",sortable:!0},{name:"country",label:n("countryLabel"),field:e=>e.country,align:"left",sortable:!0},{name:"noParticipants",label:n("noParticipantsLabel"),field:e=>e.noParticipants,align:"right",sortable:!0},{name:"coefficient",label:n("coefficientLabel"),field:e=>e.coefficient,align:"right",sortable:!0},{name:"results",label:n("resultsLabel"),field:"",align:"center"},{name:"hemaratings",label:n("hemaratingsLabel"),field:"",align:"center"}]),h=k(()=>{if(m.tournaments!==void 0)return Object.entries(m.tournaments).flatMap(e=>{var _;const y=e[0],t=e[1],u=(_=t.competitions[f.division])==null?void 0:_[f.category];return u===void 0?[]:[{id:y,name:t.name,date:t.date,country:t.country,coefficient:t.coefficient,noParticipants:u.no_participants,results:u.results,results_link:u.results_link}]})});let p={width:"100%",height:"300px"};function g(){p.height=window.innerHeight-50+"px"}return window.addEventListener("resize",g),g(),(e,y)=>i(h)!==null?(l(),d(x,{key:0,ref:"table",columns:i(D),rows:i(h),"row-key":"id",loading:i(h)===void 0,pagination:{rowsPerPage:0,sortBy:"date",descending:!1},"binary-state-sort":"","hide-bottom":"",square:"",style:$(i(p))},{"body-cell-country":a(t=>[o(b,{props:t},{default:a(()=>[o(i(L),{country:t.value,shadow:!0,size:"normal"},null,8,["country"]),o(s,null,{default:a(()=>[c(r(e.$t("countries."+t.value)),1)]),_:2},1024)]),_:2},1032,["props"])]),"body-cell-results":a(t=>[o(b,{props:t},{default:a(()=>[o(w,{href:t.row.results_link,target:"_blank",icon:"mdi-open-in-new",flat:"",dense:"",round:"",disable:t.row.results_link===void 0},null,8,["href","disable"]),t.row.id.startsWith("-")?(l(),d(s,{key:0},{default:a(()=>[c(r(e.$t("resultsNoDetailTooltip")),1)]),_:1})):(l(),d(s,{key:1},{default:a(()=>[c(r(e.$t("resultsDetailTooltip")),1)]),_:1}))]),_:2},1032,["props"])]),"body-cell-hemaratings":a(t=>[o(b,{props:t},{default:a(()=>[o(w,{href:"https://hemaratings.com/events/details/"+t.row.id,target:"_blank",icon:"mdi-open-in-new",flat:"",dense:"",round:"",disable:t.row.id.startsWith("-")},null,8,["href","disable"]),t.row.id.startsWith("-")?(l(),d(s,{key:0},{default:a(()=>[c(r(e.$t("hemaratingsNoDetailTooltip")),1)]),_:1})):(l(),d(s,{key:1},{default:a(()=>[c(r(e.$t("hemaratingsDetailTooltip")),1)]),_:1}))]),_:2},1032,["props"])]),_:1},8,["columns","rows","loading","style"])):(l(),B("div",V,[N("div",C,r(e.$t("noData")),1)]))}});export{H as default};