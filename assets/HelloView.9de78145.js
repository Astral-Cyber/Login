import{b as v,c as w,d as x,e as y}from"./element-plus.8f3809cb.js";import{b as V,u as b}from"./vue-router.ecb1c664.js";import{_ as g}from"./index.21d5af5b.js";import{h as t,e as E,o as H,J as B,K as o,a as s,P as _,M as r,U as C}from"./@vue.8a735f2e.js";import"./@vueuse.c4a7bb6b.js";import"./@element-plus.e72a003c.js";import"./lodash-es.06144348.js";import"./@ctrl.fd318bfa.js";const k={class:"card-header"},D={style:{"font-size":"large","font-weight":"bolder","margin-left":"10px"}},N={id:"operate"},R={__name:"HelloView",setup(T){const i=V(),d=b(),c=t(""),a=t("");t(""),t("");const p="http://123.60.44.50:3000";E(()=>{c.value=i.params.id;const n=new Headers;n.append("Content-Type","application/json");let l={method:"GET",headers:n,redirect:"follow"};fetch(`${p}/users/${c.value}`,l).then(e=>e.json()).then(e=>{a.value=e})});function u(){d.push("/")}return(n,l)=>{const e=v,m=w,f=x,h=y;return H(),B(h,{class:"box-card"},{header:o(()=>[s("div",k,[s("span",null,_(a.value.name),1)])]),default:o(()=>[r(e,null,{default:o(()=>[s("span",D,"ID:"+_(a.value.id),1)]),_:1}),r(m),s("div",N,[r(f,{type:"primary",onClick:u},{default:o(()=>[C("\u9000\u51FA\u767B\u5F55")]),_:1})])]),_:1})}}},K=g(R,[["__scopeId","data-v-007a8337"]]);export{K as default};
