import{a as p,o as l,a7 as s,b as n,w as i,V as m,a8 as f,S as y,d,g as t,P as _,a9 as h,aa as r}from"./index.3c87a419.js";import{V}from"./VDivider.cafc6ead.js";import{V as g}from"./VTable.24242f99.js";const w={id:"orders"},x=t("h1",{class:"text-center"},"\u8A02\u55AE",-1),k=t("thead",null,[t("tr",null,[t("th",null,"ID"),t("th",null,"\u65E5\u671F"),t("th",null,"\u91D1\u984D"),t("th",null,"\u5546\u54C1")])],-1),D={key:1},S=t("td",{colspan:"4"},[t("h3",{class:"text-center"},"\u6C92\u6709\u8A02\u55AE")],-1),v=[S],L={__name:"OrderView",setup(B){const u=p([]);return(async()=>{try{const{data:o}=await f.get("/orders");u.push(...o.result.map(c=>(c.totalPrice=c.products.reduce((e,a)=>e+a.product.price*a.quantity,0),c)))}catch(o){console.log(o),y.fire({icon:"error",title:"\u5931\u6557",text:"\u7121\u6CD5\u53D6\u5F97\u8A02\u55AE"})}})(),(o,c)=>(l(),s("div",w,[n(m,null,{default:i(()=>[n(d,{cols:"12"},{default:i(()=>[x]),_:1}),n(V),n(d,{cols:"12"},{default:i(()=>[n(g,null,{default:i(()=>[k,t("tbody",null,[u.length>0?(l(!0),s(_,{key:0},h(u,e=>(l(),s("tr",{key:e._id},[t("td",null,r(e._id),1),t("td",null,r(new Date(e.date).toLocaleDateString()),1),t("td",null,r(e.totalPrice),1),t("td",null,[t("ul",null,[(l(!0),s(_,null,h(e.products,a=>(l(),s("li",{key:a._id},r(a.product.name)+" x "+r(a.quantity),1))),128))])])]))),128)):(l(),s("tr",D,v))])]),_:1})]),_:1})]),_:1})]))}};export{L as default};
