import{_ as C,r as p,e as h,A as M,a as B,t as b,f as d,i as n,q as t,F as N,l as I,u as A,j as S,B as m,C as E,D as T,y as c,k as y,v as J,x as G}from"./index-dc8a66aa.js";import{g as K}from"./getImagePath-90ae4648.js";/* empty css                                                                        */const j=i=>(J("data-v-dfd7fb49"),i=i(),G(),i),w={class:"wrap"},O={class:"left-nav-container"},k=j(()=>t("span",{class:"material-symbols-outlined"},"arrow_right",-1)),V=["onClick"],D={class:"main-container"},H={key:0,class:"container"},P={class:"tab-container"},U=T('<li data-v-dfd7fb49><label for="products-select" data-v-dfd7fb49></label><select id="products-select" data-v-dfd7fb49><option value="new" data-v-dfd7fb49>最新上架</option><option value="Price-low-to-high" data-v-dfd7fb49>價格低至高</option><option value="Price-high-to-low" data-v-dfd7fb49>價格高至低</option><option value="hot" data-v-dfd7fb49>熱銷商品</option></select></li>',1),F=["src"],W={class:"products-content"},X={class:"sold"},x={class:"price"},z={name:"products",setup(i){const r=p([{brand:"JACKALL",img:"MAIN-SABULL HB SHAD-28g - 複製.jpg",productName:"JACKALL SABULL HB SHAD 28g [路亞硬餌] [灘拋用]",sold:50,price:470,id:0},{brand:"JACKALL",img:"MAIN-JETTROW-35g - 複製.jpg",productName:"JACKALL JETTROW 35g [路亞助投器套組] [類水球釣組]",sold:6540,price:500,id:1},{brand:"JACKALL",img:"MAIN-JETTROW-45g - 複製.jpg",productName:"JACKALL JETTROW 45g [路亞助投器套組] [類水球釣組]",sold:230,price:550,id:2},{brand:"JACKALL",img:"MAIN-JETTROW BUDDY - 複製.jpg",productName:"JACKALL JETTROW BUDDY [類弓角] [阿兵哥釣組]",sold:10,price:170,id:3},{brand:"HR",img:"MAIN-斬怪-SMC-564XXH - 複製.jpg",productName:"HR SLASH MONSTER 斬怪 SMC-564XXH",sold:150,price:5700,id:4},{brand:"SHIMANO",img:"MAIN-GL-111V-BB-X 白 - 複製.jpg",productName:"SHIMANO GL-111V BB-X白 [五指手套]",sold:74,price:2300,id:5},{brand:"DAIWA",img:"MAIN-送行李箱-七海刀狼 - 複製.jpg",productName:"DAIWA 七海刀郎 0.6號-50 SMT [磯釣竿]",sold:40,price:23e3,id:6},{brand:"GAMAKATSU",img:"MAIN-GM-3721 - 複製.jpg",productName:"GAMAKATSU GM-3721 [夾克]",sold:10,price:3600,id:7},{brand:"JACKALL",img:"MAIN-BIG BACKER FIT VIB-70mm - 複製.jpg",productName:"JACKALL BIG BACKER FIT VIB 70 [小顫泳]",sold:6,price:280,id:8},{brand:"MEGABASS",img:"MAIN-IxI FURIOUS 1.5 - 複製.jpg",productName:"MEGABASS IXI FURIOUS 1.5 [路亞硬餌]",sold:9,price:480,id:9},{brand:"OSP",img:"MAIN-FLAT CAP - 複製.jpg",productName:"O.S.P FLAT CAP [釣魚帽]",sold:9,price:1300,id:10},{brand:"EVERGREEN",img:"MAIN-GRASS RIPPER-1 4oz - 複製.jpg",productName:"EVERGREEN GRASS RIPPER 1/4oz",sold:0,price:230,id:11}]);let l=p([...r.value]);const f=h(()=>{const o=new Set;return r.value.forEach(a=>{o.add(a.brand)}),Array.from(o)}),_=o=>{const a=r.value.filter(u=>u.brand==o);return l.value=a,l.value},s=p("button1"),g=o=>{s.value!==o&&(s.value=o),console.log(s.value)},v=M().query.id;return B(()=>{v!==void 0&&_(v)}),(o,a)=>{const u=b("RouterView"),L=b("RouterLink");return d(),n("div",w,[t("div",O,[t("ul",null,[(d(!0),n(N,null,I(A(f),(e,R)=>(d(),n("li",{key:R},[k,t("a",{onClick:q=>_(e)},c(e),9,V)]))),128))])]),t("div",D,[S(u,{items:r.value},null,8,["items"]),o.$route.path==="/products"?(d(),n("div",H,[t("div",P,[t("ul",null,[t("li",null,[t("span",{class:m(["material-symbols-outlined",{"tab-change":s.value=="button1"}]),onClick:a[0]||(a[0]=e=>g("button1"))}," view_cozy",2)]),t("li",null,[t("span",{class:m(["material-symbols-outlined",{"tab-change":s.value=="button2"}]),onClick:a[1]||(a[1]=e=>g("button2"))}," view_list",2)]),U])]),t("div",{class:m(["products-container",{"products-list-style":s.value=="button2","products-cozy-style":s.value=="button1"}])},[(d(!0),n(N,null,I(A(l),e=>(d(),n("div",{class:"products-card",key:e.id},[S(L,{to:{name:"productsDetails",query:{id:e.id}}},{default:y(()=>[t("img",{src:A(K)(e.img),alt:""},null,8,F)]),_:2},1032,["to"]),t("div",W,[t("h3",null,c(e.productName),1),t("p",X,"已售出 "+c(e.sold),1),t("p",x,"NT."+c(e.price),1)])]))),128))],2)])):E("",!0)])])}}},tt=C(z,[["__scopeId","data-v-dfd7fb49"]]);export{tt as default};
