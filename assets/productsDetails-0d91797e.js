import{_ as d,A as r,f as n,i as p,q as s,u as c,y as e,v as _,x as l}from"./index-dc8a66aa.js";import{g as u}from"./getImagePath-90ae4648.js";/* empty css                                                                        */const m=t=>(_("data-v-1d471054"),t=t(),l(),t),h={class:"container"},x={class:"img-box"},g=["src"],v={class:"text-container"},f={class:"textBox"},I={class:"title"},y={class:"sold"},B={class:"price"},N=m(()=>s("div",{class:"buyBox"},[s("a",{class:"car"},"加入購物車"),s("a",{class:"buyNow"},"立即購買")],-1)),S={name:"productsDetails",props:["items"],setup(t){const a=t,i=r().query.id,o=a.items[i];return console.log(o),(D,k)=>(n(),p("div",h,[s("div",x,[s("img",{src:c(u)(c(o).img),alt:""},null,8,g)]),s("div",v,[s("div",f,[s("h3",I,e(c(o).productName),1),s("p",y,"已售出 "+e(c(o).sold),1),s("p",B,"NT. "+e(c(o).price),1)]),N])]))}},E=d(S,[["__scopeId","data-v-1d471054"]]);export{E as default};
