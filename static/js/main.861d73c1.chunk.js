(this["webpackJsonpstore-facundo-benito"]=this["webpackJsonpstore-facundo-benito"]||[]).push([[0],{15:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c(1),s=c.n(n),a=c(9),i=c.n(a),o=(c(15),c(4)),u=c.p+"static/media/header-x1.b6f067c6.png",l=c(2),d=c.n(l),j=c(3),b=c(5),h=c(6),f=function(){function e(){Object(b.a)(this,e)}return Object(h.a)(e,null,[{key:"getProducts",value:function(){var e=Object(j.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:this.headers},e.prev=1,e.next=4,fetch("https://coding-challenge-api.aerolab.co/products",t);case 4:if(200===(c=e.sent).status){e.next=7;break}throw new Error(c);case 7:return e.next=9,c.json();case 9:return e.abrupt("return",e.sent);case 12:return e.prev=12,e.t0=e.catch(1),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,this,[[1,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"redeemProduct",value:function(){var e=Object(j.a)(d.a.mark((function e(t){var c,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={body:JSON.stringify({productId:t}),method:"post",mode:"cors",headers:this.headers},e.prev=1,e.next=4,fetch("https://coding-challenge-api.aerolab.co/redeem",c);case 4:if(200===(r=e.sent).status){e.next=7;break}throw new Error(r);case 7:return e.next=9,r.json();case 9:return e.abrupt("return",e.sent);case 12:return e.prev=12,e.t0=e.catch(1),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,this,[[1,12]])})));return function(t){return e.apply(this,arguments)}}()}]),e}();f.headers={"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmNiYWQ2MjI2ZjdkMjAwMjA0MTE0YzQiLCJpYXQiOjE2MDcxODM3MTR9.wLlxyZRRYe2RIDzq0JhfEg-hMwNcF8NHJAtx8CV7vrw"};var m=f,p=s.a.createContext();function O(e){var t=e.children,c=Object(n.useState)([]),s=Object(o.a)(c,2),a=s[0],i=s[1],u=Object(n.useState)(!1),l=Object(o.a)(u,2),b=l[0],h=l[1],f=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.getProducts();case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){f()}),[]),Object(r.jsx)(p.Provider,{value:{products:a,setProducts:i,showHistory:b,setHistoryFlag:h},children:t})}var x=function(){function e(){Object(b.a)(this,e)}return Object(h.a)(e,null,[{key:"getUserInfo",value:function(){var e=Object(j.a)(d.a.mark((function e(){var t,c,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:this.headers},e.prev=1,e.next=4,fetch("https://coding-challenge-api.aerolab.co/user/me",t);case 4:if(200===(c=e.sent).status){e.next=7;break}throw new Error(c);case 7:return e.next=9,c.json();case 9:return r=e.sent,e.abrupt("return",r);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,this,[[1,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"addCoins",value:function(){var e=Object(j.a)(d.a.mark((function e(t){var c,r,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={body:JSON.stringify({amount:t}),method:"post",mode:"cors",headers:this.headers},e.prev=1,e.next=4,fetch("https://coding-challenge-api.aerolab.co/user/points",c);case 4:if(200===(r=e.sent).status){e.next=7;break}throw new Error(r);case 7:return e.next=9,r.json();case 9:return n=e.sent,e.abrupt("return",n);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,this,[[1,13]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getRedeemHistory",value:function(){var e=Object(j.a)(d.a.mark((function e(){var t,c,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:this.headers},e.prev=1,e.next=4,fetch("https://coding-challenge-api.aerolab.co/user/history",t);case 4:if(200===(c=e.sent).status){e.next=7;break}throw new Error("Error");case 7:return e.next=9,c.json();case 9:return r=e.sent,e.abrupt("return",r);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,this,[[1,13]])})));return function(){return e.apply(this,arguments)}}()}]),e}();x.headers={"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmNiYWQ2MjI2ZjdkMjAwMjA0MTE0YzQiLCJpYXQiOjE2MDcxODM3MTR9.wLlxyZRRYe2RIDzq0JhfEg-hMwNcF8NHJAtx8CV7vrw"};var v=x,g=s.a.createContext();function N(e){var t=e.children,c=Object(n.useState)({name:"",points:"",redeemHistory:[]}),s=Object(o.a)(c,2),a=s[0],i=s[1],u=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.getUserInfo();case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){u()}),[]),Object(n.useEffect)((function(){}),[a]),Object(r.jsx)(g.Provider,{value:{user:a,setUser:i},children:t})}var w=function(){var e=Object(n.useContext)(p).products,t=Object(n.useContext)(g).user;return Object(r.jsxs)("div",{className:"header-img-ctn",children:[Object(r.jsx)("h1",{className:"header-title",children:e.toString()===t.redeemHistory.toString()?"Redeem history":"Electronics"}),Object(r.jsx)("img",{className:"header-img",src:u,alt:"electronics-img"})]})},y=c.p+"static/media/aerolab-logo.0a8fb170.svg",k=c.p+"static/media/coin.b8bc711d.svg",C=function(e){var t=e.showModal,c=Object(n.useContext)(g).user,s=Object(n.useContext)(p),a=s.products,i=s.setProducts,u=Object(n.useContext)(p),l=u.showHistory,b=u.setHistoryFlag,h=Object(n.useState)([]),f=Object(o.a)(h,2),m=f[0],O=f[1],x=function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b(!l);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.getRedeemHistory();case 2:t=e.sent,a.toString()!==t.toString()&&O(a),i(l?t:m);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){null!==l&&N()}),[l]),Object(r.jsxs)("div",{className:"header-bar",children:[Object(r.jsx)("img",{className:"header-logo",src:y,alt:"logo"}),Object(r.jsxs)("nav",{className:"header-user",children:[Object(r.jsx)("span",{className:"header-username",children:c&&c.name}),Object(r.jsxs)("div",{className:"header-coins",onClick:t,children:[Object(r.jsx)("span",{className:"header-coin-count",children:c&&c.points}),Object(r.jsx)("img",{src:k,alt:"coin",className:"coin"})]}),Object(r.jsx)("button",{className:"header-username header-btn",onClick:x,children:l?Object(r.jsx)("i",{className:"fas fa-home"}):Object(r.jsx)("i",{className:"fas fa-history"})}),Object(r.jsx)("button",{className:"header-username header-btn",onClick:t,children:Object(r.jsx)("i",{className:"fas fa-plus-circle"})})]})]})},I=function(e){var t=e.showModal,c=Object(n.useContext)(g).setUser,s=function(){var e=Object(j.a)(d.a.mark((function e(t){var r,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.addCoins(t);case 2:if(!(r=e.sent)){e.next=11;break}return e.next=6,v.getUserInfo();case 6:n=e.sent,c(n),alert(r.message+". You've added "+t+" coins"),e.next=12;break;case 11:alert("Failed to add coins.");case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)("div",{className:"modal-ctn",id:"modal-ctn",children:Object(r.jsxs)("div",{className:"add-modal",children:[Object(r.jsxs)("h2",{className:"add-title",children:["Add more coins! ",Object(r.jsx)("p",{className:"emoji",children:"\ud83e\udd11"})]}),Object(r.jsx)("div",{className:"close-ctn",onClick:t,children:Object(r.jsx)("i",{className:"fas fa-times"})}),Object(r.jsxs)("div",{className:"add-btn",name:"1000",onClick:function(){return s(1e3)},children:[Object(r.jsx)("img",{src:k,alt:"coin",className:"coin"}),Object(r.jsx)("h3",{className:"amount",children:"1000"})]}),Object(r.jsxs)("div",{className:"add-btn",name:"5000",onClick:function(){return s(5e3)},children:[Object(r.jsx)("img",{src:k,alt:"coin",className:"coin"}),Object(r.jsx)("h3",{className:"amount",children:"5000"})]}),Object(r.jsxs)("div",{className:"add-btn",name:"7500",onClick:function(){return s(7500)},children:[Object(r.jsx)("img",{src:k,alt:"coin",className:"coin"}),Object(r.jsx)("h3",{className:"amount",children:"7500"})]})]})})},S=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),c=t[0],s=t[1],a=function(){s(!c)};return Object(r.jsxs)("header",{className:"header",children:[Object(r.jsx)(C,{showModal:a}),c?Object(r.jsx)(I,{showModal:a}):null,Object(r.jsx)(w,{})]})},E=c.p+"static/media/arrow-right.3306c112.svg",M=c.p+"static/media/arrow-left.e6eb9be1.svg",J=function(e){e.handleSort,e.sort;var t=e.handlePage,c=e.page,s=e.isFooter,a=Object(n.useContext)(p),i=a.products,u=a.setProducts,l=a.showHistory,d=i.length,j=Math.min(16*c,d),b=Object(n.useState)(0),h=Object(o.a)(b,2),f=h[0],m=h[1],O=Object(n.useState)(0),x=Object(o.a)(O,2),v=x[0],g=x[1],N=[{callback:function(e,t){var c=e.createDate?"createDate":"_id";return e[c]<t[c]?-1:1},label:"Most recent"},{callback:function(e,t){return e.cost-t.cost},label:"Lowest price"},{callback:function(e,t){return t.cost-e.cost},label:"Highest price"}];return Object(n.useEffect)((function(){!function(e,t){var c=i.slice().sort(t);u(c)}(0,N[f].callback)}),[f]),Object(n.useEffect)((function(){var e=f;m(l?0:v),g(e)}),[l]),Object(r.jsxs)("div",{className:"filters-ctn ".concat(s?"footer":""),children:[Object(r.jsxs)("span",{className:"product-index",children:[j," of ",d," products"]}),Object(r.jsxs)("div",{className:"filters ".concat(s?"hidden":""),children:[Object(r.jsx)("span",{className:"sort-title",children:"Sort by: "}),N.map((function(e,t){var c=e.label;return Object(r.jsx)("button",{className:"filter ".concat(f===t?"selected":""),onClick:function(){m(t)},children:c},t)}))]}),Object(r.jsxs)("div",{className:"arrows",children:[Object(r.jsx)("img",{src:M,alt:"left-arrow",className:"left ".concat(1===c?"hidden":""),onClick:t,name:"-1"}),Object(r.jsx)("img",{src:E,alt:"right-arrow",className:"right ".concat(j>=d?"hidden":""),onClick:t,name:"1"})]})]})},R=c(8),F=function(e){var t=e.cost,c=e._id,n=e.handleRedeem;return Object(r.jsxs)("div",{className:"hover-filter",children:[Object(r.jsxs)("div",{className:"cost-ctn",children:[Object(r.jsx)("h3",{className:"product-cost",children:t}),Object(r.jsx)("img",{src:k,alt:"coin",className:"hover-coin"})]}),Object(r.jsx)("button",{className:"redeem-btn",id:c,value:t,onClick:n,children:"Redeem now"})]})},H=c.p+"static/media/buy-blue.c5c4f01c.svg",P=function(e){var t=e.isSuccess;return Object(r.jsxs)("div",{className:"success-ctn ".concat(t?"success":"fail"),id:"success-modal",children:[Object(r.jsx)("h3",{className:"success-title",children:t?"Successfully redeemed!":"Failed to redeem"}),Object(r.jsx)("i",{className:"fas ".concat(t?"fa-check-circle":"fa-times"," success-icon")})]})},A=function(e){var t=e.category,c=e.cost,s=e.img,a=e.name,i=e._id,u=Object(n.useContext)(g),l=u.user,b=u.setUser,h=Object(n.useContext)(p),f=h.showHistory,O=(h.setShowHistory,Object(n.useState)(null)),x=Object(o.a)(O,2),N=x[0],w=x[1],y=function(){var e=Object(j.a)(d.a.mark((function e(t){var c,r,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.target.id,e.next=3,m.redeemProduct(c);case 3:if(!1===(r=e.sent)){e.next=9;break}return e.next=7,v.getUserInfo();case 7:n=e.sent,b(n);case 9:w(r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){setTimeout((function(){w(null)}),4e3),clearTimeout()}),[N]),Object(r.jsxs)("div",{className:"product-card",id:i,children:[l.points>=c?Object(r.jsx)("img",{src:H,alt:"buy-bag",className:"buy-bag"}):Object(r.jsxs)("div",{className:"buy-bag product-more-coins",children:[Object(r.jsx)("h3",{className:"more-coins",children:"You need ".concat(c-l.points)}),Object(r.jsx)("img",{src:k,alt:"coin",className:"coin"})]}),Object(r.jsx)("img",{src:s.hdUrl,alt:"".concat(a,"-product"),className:"product-img"}),Object(r.jsxs)("div",{className:"product-info",children:[Object(r.jsx)("h4",{className:"category",children:t}),Object(r.jsx)("h3",{className:"product-name",children:a})]}),l.points>=c&&null===N&&!f?Object(r.jsx)(F,{cost:c,_id:i,handleRedeem:y}):null,null!==N?Object(r.jsx)(P,{id:"success-modal",isSuccess:N}):null]})},T=function(e){e.sort;var t=e.page,c=Object(n.useContext)(p).products;return Object(r.jsx)("div",{className:"product-container",children:c&&c.map((function(e,c){var r=16*t;return c>=r-16&&c<r?Object(n.createElement)(A,Object(R.a)(Object(R.a)({},e),{},{key:"".concat(e._id,"-").concat(c)})):null}))})},U=function(){return Object(r.jsxs)("div",{className:"error-ctn",children:[Object(r.jsx)("h1",{className:"error-title",children:"Oops!"}),Object(r.jsx)("i",{className:"far fa-frown error-icon"}),Object(r.jsx)("h2",{className:"error-subtitle",children:"We couldn't find products to show"})]})},Y=function(){var e=Object(n.useState)("0"),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(1),i=Object(o.a)(a,2),u=i[0],l=i[1],d=Object(n.useContext)(p).products,j=function(e){var t=parseInt(e.target.name,10);l(u+t)};return Object(n.useEffect)((function(){l(1)}),[d]),Object(r.jsx)("main",{className:"main",children:d.length<1?Object(r.jsx)(U,{}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(J,{handleSort:function(e){s(e.target.name),l(1)},sort:c,handlePage:j,page:u,isFooter:!1}),Object(r.jsx)(T,{sort:c,page:u}),Object(r.jsx)(J,{handlePage:j,page:u,isFooter:!0})]})})};c(17);var D=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(O,{children:Object(r.jsxs)(N,{children:[Object(r.jsx)(S,{}),Object(r.jsx)(Y,{})]})})})},z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,19)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),r(e),n(e),s(e),a(e)}))};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(D,{})}),document.getElementById("root")),z()}},[[18,1,2]]]);
//# sourceMappingURL=main.861d73c1.chunk.js.map