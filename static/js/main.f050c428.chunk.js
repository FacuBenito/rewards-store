(this["webpackJsonpproyecto-4"]=this["webpackJsonpproyecto-4"]||[]).push([[0],{15:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(1),a=c.n(n),r=c(8),i=c.n(r),o=(c(15),c(4)),l=c.p+"static/media/header-x1.b6f067c6.png",j=function(){return Object(s.jsxs)("div",{className:"header-img-ctn",children:[Object(s.jsx)("h1",{className:"header-title",children:"Electronics"}),Object(s.jsx)("img",{className:"header-img",src:l,alt:"electronics-img"})]})},d=c.p+"static/media/aerolab-logo.0a8fb170.svg",u=c.p+"static/media/coin.b8bc711d.svg",b=c(2),h=c.n(b),m=c(3),O=c(5),x=c(6),p=function(){function e(){Object(O.a)(this,e)}return Object(x.a)(e,null,[{key:"getUserInfo",value:function(){var e=Object(m.a)(h.a.mark((function e(){var t,c,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:this.headers},e.next=3,fetch("https://coding-challenge-api.aerolab.co/user/me",t);case 3:return c=e.sent,e.next=6,c.json();case 6:return s=e.sent,e.abrupt("return",s);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}();p.headers={"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmNiYWQ2MjI2ZjdkMjAwMjA0MTE0YzQiLCJpYXQiOjE2MDcxODM3MTR9.wLlxyZRRYe2RIDzq0JhfEg-hMwNcF8NHJAtx8CV7vrw"};var f=p,v=a.a.createContext();function N(e){var t=e.children,c=Object(n.useState)({name:"",points:""}),a=Object(o.a)(c,2),r=a[0],i=a[1],l=function(){var e=Object(m.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getUserInfo();case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){l()}),[]),Object(s.jsx)(v.Provider,{value:{user:r},children:t})}var g=function(e){var t=e.showModal,c=Object(n.useContext)(v),a=c.user;c.setUser;return Object(s.jsxs)("div",{className:"header-bar",children:[Object(s.jsx)("img",{className:"header-logo",src:d,alt:"logo"}),Object(s.jsxs)("div",{className:"header-user",children:[Object(s.jsx)("span",{className:"header-username",children:a&&a.name}),Object(s.jsxs)("div",{className:"header-coins",onClick:t,children:[Object(s.jsx)("span",{className:"header-coin-count",children:a&&a.points}),Object(s.jsx)("img",{src:u,alt:"coin",className:"coin"})]})]})]})},w=function(e){var t=e.shown,c=e.showModal;return Object(s.jsx)("div",{className:"modal-ctn ".concat(t?"":"hidden"),id:"modal-ctn",children:Object(s.jsxs)("div",{className:"add-modal",children:[Object(s.jsx)("div",{className:"close-ctn",onClick:c,children:Object(s.jsx)("i",{className:"fas fa-times"})}),Object(s.jsxs)("div",{className:"add-btn",name:"1000",children:[Object(s.jsx)("img",{src:u,alt:"coin",className:"coin"}),Object(s.jsx)("h3",{className:"amount",children:"1000"})]}),Object(s.jsxs)("div",{className:"add-btn",name:"5000",children:[Object(s.jsx)("img",{src:u,alt:"coin",className:"coin"}),Object(s.jsx)("h3",{className:"amount",children:"5000"})]}),Object(s.jsxs)("div",{className:"add-btn",name:"7500",children:[Object(s.jsx)("img",{src:u,alt:"coin",className:"coin"}),Object(s.jsx)("h3",{className:"amount",children:"7500"})]})]})})},y=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),c=t[0],a=t[1],r=function(){a(!c)};return Object(s.jsxs)("div",{className:"header",children:[Object(s.jsxs)(N,{children:[Object(s.jsx)(g,{showModal:r}),Object(s.jsx)(w,{shown:c,showModal:r})]}),Object(s.jsx)(j,{})]})},I=function(e){var t=e.handleSort,c=e.sort;return Object(s.jsxs)("div",{className:"filters-ctn",children:[Object(s.jsx)("span",{className:"product-index",children:"16 of 32 products"}),Object(s.jsxs)("div",{className:"filters",children:[Object(s.jsx)("span",{className:"sort-title",children:"Sort by: "}),Object(s.jsx)("button",{className:"filter ".concat("0"===c?"selected":""),onClick:t,name:"0",children:"Most Recent"}),Object(s.jsx)("button",{className:"filter ".concat("1"===c?"selected":""),onClick:t,name:"1",children:"Lowest Price"}),Object(s.jsx)("button",{className:"filter ".concat("2"===c?"selected":""),onClick:t,name:"2",children:"Highest Price"})]})]})},k=c(9),C=function(){function e(){Object(O.a)(this,e)}return Object(x.a)(e,null,[{key:"getProducts",value:function(){var e=Object(m.a)(h.a.mark((function e(){var t,c,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:this.headers},e.next=3,fetch("https://coding-challenge-api.aerolab.co/products",t);case 3:return c=e.sent,e.next=6,c.json();case 6:return s=e.sent,e.abrupt("return",s);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}();C.headers={"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"};var J=C,M=function(e){var t=e.cost;return Object(s.jsxs)("div",{className:"hover-filter",children:[Object(s.jsxs)("div",{className:"cost-ctn",children:[Object(s.jsx)("h3",{className:"product-cost",children:t}),Object(s.jsx)("img",{src:u,alt:"coin",className:"hover-coin"})]}),Object(s.jsx)("button",{className:"redeem-btn",children:"Redeem now"})]})},S=c.p+"static/media/buy-blue.c5c4f01c.svg",E=function(e){var t=e.category,c=e.cost,a=e.img,r=e.name,i=e._id,o=Object(n.useContext)(v),l=o.user;o.setUser;return Object(s.jsxs)("div",{className:"product-card",id:i,children:[l.points>c?Object(s.jsx)("img",{src:S,alt:"buy-bag",className:"buy-bag"}):Object(s.jsxs)("div",{className:"buy-bag product-more-coins",children:[Object(s.jsx)("h3",{className:"more-coins",children:"You need ".concat(c-l.points)}),Object(s.jsx)("img",{src:u,alt:"coin",className:"coin"})]}),Object(s.jsx)("img",{src:a.hdUrl,alt:"".concat(r,"-product"),className:"product-img"}),Object(s.jsxs)("div",{className:"product-info",children:[Object(s.jsx)("h4",{className:"category",children:t}),Object(s.jsx)("h3",{className:"product-name",children:r})]}),l.points>c?Object(s.jsx)(M,{cost:c}):null]})},R=function(e){var t=e.sort,c=Object(n.useState)([]),a=Object(o.a)(c,2),r=a[0],i=a[1];Object(n.useEffect)((function(){l()}),[]);var l=function(){var e=Object(m.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.getProducts();case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){console.log(t);var e=r.slice().sort((function(e,c){switch(t){case"1":return e.cost-c.cost;case"2":return c.cost-e.cost;case"0":return e._id<c._id?-1:1;default:return 0}}));i(e)}),[t]),Object(s.jsx)("div",{className:"product-container",children:r&&r.map((function(e,t){return Object(s.jsx)(N,{children:Object(s.jsx)(E,Object(k.a)({},e))},t)}))})},T=function(){var e=Object(n.useState)("0"),t=Object(o.a)(e,2),c=t[0],a=t[1];return Object(s.jsxs)("div",{className:"main",children:[Object(s.jsx)(I,{handleSort:function(e){a(e.target.name)},sort:c}),Object(s.jsx)(R,{sort:c})]})};c(17);var A=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(y,{}),Object(s.jsx)(T,{})]})},Q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,19)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),a(e),r(e)}))};i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(A,{})}),document.getElementById("root")),Q()}},[[18,1,2]]]);
//# sourceMappingURL=main.f050c428.chunk.js.map