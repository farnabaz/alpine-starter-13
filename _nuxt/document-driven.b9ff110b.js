import h from"./DocumentDrivenEmpty.dec12718.js";import L from"./ContentRenderer.eaa88a31.js";import C from"./DocumentDrivenNotFound.013b6032.js";import{J as H,a as m,a5 as x,ao as k,b as R,u as o,ap as d,aq as N,ar as i,as as g,T as j,Q as B,ae as D,a6 as E,o as c,e as T,h as p,j as l,c as _}from"./entry.07ca2d4b.js";import"./ContentRendererMarkdown.63e077bd.js";/* empty css                                   */const q=m({name:"LayoutLoader",inheritAttrs:!1,props:{name:String},async setup(s,t){const a=await d[s.name]().then(e=>e.default||e);return()=>B(a,t.attrs,t.slots)}}),w=m({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(s,t){const a=g("_route"),e=a===x()?k():a,n=R(()=>o(s.name)??e.meta.layout??"default");return()=>{const u=n.value&&n.value in d,r=e.meta.layoutTransition??N;return i(j,u&&r,{default:()=>i(q,u&&{key:n.value,name:n.value,...t.attrs},t.slots).default()}).default()}}}),A={class:"document-driven-page"},O=m({__name:"document-driven",setup(s){const{page:t,layout:a}=D();return t.value,E(t),(e,n)=>{const u=h,r=L,f=C,y=w;return c(),T("div",A,[p(y,{name:o(a)||"default"},{default:l(()=>[o(t)?(c(),_(r,{key:o(t)._id,value:o(t)},{empty:l(({value:v})=>[p(u,{value:v},null,8,["value"])]),_:1},8,["value"])):(c(),_(f,{key:1}))]),_:1},8,["name"])])}}});export{O as default};
