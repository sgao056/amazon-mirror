(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},78:function(e,t,c){},80:function(e,t,c){},98:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c(3),s=c.n(n),i=c(27),r=c.n(i),o=(c(61),c(50)),l=c(9),j=(c(62),c(63),c(51)),d=c.n(j),b=c(52),u=c.n(b),m=c(16),h=Object(n.createContext)(),O=function(e){var t=e.reducer,c=e.initialState,s=e.children;return Object(a.jsx)(h.Provider,{value:Object(n.useReducer)(t,c),children:s})},p=function(){return Object(n.useContext)(h)},x=c(36),g=x.a.initializeApp({apiKey:"AIzaSyAzkRPaLkl5_KyU5y4ZI-8xvS3Ahag3Kdg",authDomain:"clone-7a97e.firebaseapp.com",projectId:"clone-7a97e",storageBucket:"clone-7a97e.appspot.com",messagingSenderId:"66747668926",appId:"1:66747668926:web:eadaab42b311e460ee81ef",measurementId:"G-L6P8Q38TEW"}).firestore(),_=x.a.auth();var f=function(){var e=p(),t=Object(l.a)(e,2),c=t[0],n=c.basket,s=c.user;return t[1],Object(a.jsxs)("div",{className:"Header",children:[Object(a.jsx)(m.b,{to:"/",children:Object(a.jsx)("img",{className:"Header_logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:""})}),Object(a.jsxs)("div",{className:"Header_search",children:[Object(a.jsx)("input",{className:"Header_searchInput",type:"text"}),Object(a.jsx)(d.a,{className:"Header_searchIcon"})]}),Object(a.jsxs)("div",{className:"Header_nav",children:[Object(a.jsx)(m.b,{to:!s&&"/login",children:Object(a.jsxs)("div",{className:"Header_option",onClick:function(){s&&_.signOut()},children:[Object(a.jsxs)("span",{className:"Header_option1",children:["Hello ",s?s.email:"Guest"]}),Object(a.jsx)("span",{className:"Header_option2",children:s?"Sign out":"Sign in"})]})}),Object(a.jsxs)("div",{className:"Header_option",children:[Object(a.jsx)("span",{className:"Header_option1",children:"Returns"}),Object(a.jsx)("span",{className:"Header_option2",children:"& Orders"})]}),Object(a.jsxs)("div",{className:"Header_option",children:[Object(a.jsx)("span",{className:"Header_option1",children:"Your"}),Object(a.jsx)("span",{className:"Header_option2",children:"Prime"})]}),Object(a.jsx)(m.b,{to:"/checkout",children:Object(a.jsxs)("div",{className:"Header_optionBasket",children:[Object(a.jsx)(u.a,{className:"Header_optionBasket"}),"\xa0",Object(a.jsx)("span",{className:"header_option2 header_basketCount",children:n.length}),"\xa0"]})})]})]})};c(72),c(73);var v=function(e){var t=e.id,c=e.title,n=e.image,s=e.price,i=e.rating,r=p(),o=Object(l.a)(r,2),j=(o[0].basket,o[1]);return Object(a.jsxs)("div",{className:"product",children:[Object(a.jsxs)("div",{className:"product_info",children:[Object(a.jsx)("p",{children:c}),Object(a.jsxs)("p",{className:"product_price",children:[Object(a.jsx)("small",{children:"CDN$"}),Object(a.jsx)("strong",{children:s})]}),Object(a.jsx)("div",{className:"product_rating",children:Array(i).fill().map((function(e,t){return Object(a.jsx)("p",{children:"\u2b50"})}))})]}),Object(a.jsx)("img",{src:n,alt:""}),Object(a.jsx)("button",{onClick:function(){j({type:"ADD_TO_BASKET",item:{id:t,title:c,image:n,price:s,rating:i}})},children:"Add to basket"})]})};var N=function(){return Object(a.jsx)("div",{className:"body",children:Object(a.jsxs)("div",{className:"body_container",children:[Object(a.jsx)("img",{className:"body_image",src:"https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2020/img/Video_Games_Internet/XCM_Manual_1291319_1497705_CA_GH20_ca_vg_gift_guide_placements_en_ca_3573051_1500x600_fr_CA._CB414412252_.jpg",alt:""}),Object(a.jsxs)("div",{className:"body_row",children:[Object(a.jsx)(v,{id:"1",title:"Taito Sakura Miku Hatsune Miku Drawn 2020 Version Figure",price:29.99,image:"https://m.media-amazon.com/images/I/511x1v+zF1L._AC_UL480_FMwebp_QL65_.jpg",rating:5}),Object(a.jsx)(v,{id:"2",title:"SEGA KonoSuba: God's Blessing on This Wonderful World! The Movie: Legend of Crimson: Megumin Limited Premium Figure",price:82.99,image:"https://m.media-amazon.com/images/I/41r8FdEaO+L._AC_SY200_.jpg",rating:5})]}),Object(a.jsxs)("div",{className:"body_row",children:[Object(a.jsx)(v,{id:"3",title:"LEGO The Incredibles - Nintendo Switch",price:29.99,image:"https://m.media-amazon.com/images/I/71MKfqIpg0L._AC_UL480_FMwebp_QL65_.jpg",rating:4}),Object(a.jsx)(v,{id:"4",title:"The King of Fighters XIV Standard Edition - PlayStation 4",price:41.9,image:"https://m.media-amazon.com/images/I/81fWzFcfuzL._AC_UL480_FMwebp_QL65_.jpg",rating:5}),Object(a.jsx)(v,{id:"5",title:"Cyberpunk 2077 PC",price:79.99,image:"https://m.media-amazon.com/images/I/81PxGQcHiRL._AC_UL480_FMwebp_QL65_.jpg",rating:3})]}),Object(a.jsx)("div",{className:"body_row",children:Object(a.jsx)(v,{id:"6",title:"Railay Wireless Gamepad for Ps4/Pro/Slim Control Joystick for Playstation 4 (Red)",price:40.98,image:"https://m.media-amazon.com/images/I/61cVXuLBWqL._AC_UL480_FMwebp_QL65_.jpg",rating:4})})]})})},y=c(10);c(74),c(75);var k=function(e){var t=e.id,c=e.image,n=e.title,s=e.price,i=e.rating,r=p(),o=Object(l.a)(r,2),j=(o[0].basket,o[1]);return Object(a.jsxs)("div",{className:"checkoutProduct",children:[Object(a.jsx)("img",{className:"checkoutProduct_image",src:c}),Object(a.jsxs)("div",{className:"checkoutProduct_info",children:[Object(a.jsx)("p",{className:"checkoutProduct_title",children:n}),Object(a.jsxs)("p",{className:"checkoutProduct_price",children:[Object(a.jsx)("small",{children:"$"}),Object(a.jsx)("strong",{children:s})]}),Object(a.jsx)("div",{className:"checkoutProduct_rating",children:Array(i).fill().map((function(e,t){return Object(a.jsx)("p",{children:"\u2b50"})}))}),Object(a.jsx)("button",{onClick:function(){j({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from the basket"})]})]})},S=(c(76),c(30)),C=c.n(S),A=c(37),E=c(23),P=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},L=function(e,t){switch(t.type){case"ADD_TO_BASKET":return Object(E.a)(Object(E.a)({},e),{},{basket:[].concat(Object(A.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var c=e.basket.findIndex((function(e){return e.id===t.id})),a=Object(A.a)(e.basket);return c>=0?a.splice(c,1):console.warn("Cant remove product(id: ".concat(t.id,") as it is not in the basket!")),Object(E.a)(Object(E.a)({},e),{},{basket:a});case"SET_USER":return Object(E.a)(Object(E.a)({},e),{},{user:t.user});default:return e}};var T=function(){var e=Object(y.f)(),t=p(),c=Object(l.a)(t,2),n=c[0].basket;return c[1],Object(a.jsxs)("div",{className:"subtotal",children:[Object(a.jsx)(C.a,{renderText:function(e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("p",{children:["Subtotal(",n.length," items):",Object(a.jsx)("strong",{children:e})]}),Object(a.jsxs)("small",{className:"subtotal_gift",children:[Object(a.jsx)("input",{type:"checkbox"}),"This order contains a gift"]})]})},decimalScale:2,value:P(n),displayType:"text",thousandSeparator:!0,prefix:"CDN$"}),Object(a.jsx)("button",{className:"button",onClick:function(t){return e.push("/payment")},children:" Process to checkout "})]})};var w=function(){var e=p(),t=Object(l.a)(e,2),c=t[0],n=c.basket,s=c.user;return t[1],Object(a.jsxs)("div",{className:"checkout",children:[Object(a.jsxs)("div",{className:"checkout_left",children:[Object(a.jsx)("div",{className:"checkout_ad",children:Object(a.jsx)("img",{className:"checkout_adImage",src:"https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CCMP/newstorefront/YACC-desktop-nonprime-banner2.jpg",alt:""})}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("h3",{children:["Hello,",null===s||void 0===s?void 0:s.email]}),Object(a.jsx)("h2",{className:"checkout_title",children:"Your shopping basket"}),n.map((function(e){return Object(a.jsx)(k,{id:e.id,title:e.title,price:e.price,image:e.image,rating:e.rating})}))]})]}),Object(a.jsx)("div",{className:"checkout_right",children:Object(a.jsx)(T,{className:"subtotal"})})]})};c(78);var I=function(){var e=Object(y.f)(),t=Object(n.useState)(""),c=Object(l.a)(t,2),s=c[0],i=c[1],r=Object(n.useState)(""),o=Object(l.a)(r,2),j=o[0],d=o[1];return Object(a.jsxs)("div",{className:"login",children:[Object(a.jsx)(m.b,{to:"/",children:Object(a.jsx)("img",{className:"login_logo",src:"https://cdn2.downdetector.com/static/uploads/logo/amazon.png"})}),Object(a.jsxs)("div",{className:"login_container",children:[Object(a.jsx)("h1",{children:"Sign in"}),Object(a.jsxs)("form",{children:[Object(a.jsx)("h5",{children:"E-mail"}),Object(a.jsx)("input",{className:"text",type:"text",value:s,onChange:function(e){return i(e.target.value)}}),Object(a.jsx)("h5",{children:"Password"}),Object(a.jsx)("input",{className:"text",type:"password",value:j,onChange:function(e){return d(e.target.value)}}),Object(a.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),_.signInWithEmailAndPassword(s,j).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login_signInButton",children:"Sign in"})]}),Object(a.jsx)("p",{children:"By continuing, you agree to Amazon's Conditions of Use and Privacy Notice."}),Object(a.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),_.createUserWithEmailAndPassword(s,j).then((function(t){t&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login_registerButton",children:"Create your Amazon account"})]})]})},z=c(25),H=c.n(z),F=c(35),M=(c(80),c(22)),R=c(53),B=c.n(R).a.create({baseURL:"http://localhost:5001/clone-7a97e/us-central1/api"});var D=function(){var e=Object(M.useStripe)(),t=Object(M.useElements)(),c=Object(y.f)(),s=p(),i=Object(l.a)(s,2),r=i[0],o=r.basket,j=r.user,d=i[1],b=Object(n.useState)(null),u=Object(l.a)(b,2),h=u[0],O=u[1],x=Object(n.useState)(!0),_=Object(l.a)(x,2),f=_[0],v=_[1],N=Object(n.useState)(!1),S=Object(l.a)(N,2),A=S[0],E=S[1],L=Object(n.useState)(""),T=Object(l.a)(L,2),w=T[0],I=T[1],z=Object(n.useState)(!0),R=Object(l.a)(z,2),D=R[0],U=R[1];Object(n.useEffect)((function(){(function(){var e=Object(F.a)(H.a.mark((function e(){var t;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B({method:"post",url:"/payments/create?total=".concat(P(o))});case 2:t=e.sent,U(t.data.clientSecret);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o]);var G=function(){var a=Object(F.a)(H.a.mark((function a(n){return H.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),I(!0),a.next=4,e.confirmCardPayment(D,{payment_method:{card:t.getElement(M.CardElement)}}).then((function(e){var t=e.paymentIntent;g.collection("users").doc(null===j||void 0===j?void 0:j.uid).collection("orders").doc(t.id).set({basket:o,amount:t.amount,created:t.created}),E(!0),O(null),I(!1),d({type:"EMPTY_BASKET"}),c.replace("/orders")}));case 4:a.sent;case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return Object(a.jsx)("div",{className:"payment",children:Object(a.jsxs)("div",{className:"payment_container",children:[Object(a.jsxs)("h1",{children:["Checkout(",Object(a.jsxs)(m.b,{to:"/checkout",children:[null===o||void 0===o?void 0:o.length," items"]}),")"]}),Object(a.jsxs)("div",{className:"payment_section",children:[Object(a.jsx)("div",{className:"payment_title",children:Object(a.jsx)("h3",{children:"Delivery Address"})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:null===j||void 0===j?void 0:j.email}),Object(a.jsx)("h5",{children:"Room ***, Ave.***,"}),Object(a.jsx)("h5",{children:"**City, ON, CA"})]})]}),Object(a.jsxs)("div",{className:"payment_section",children:[Object(a.jsx)("div",{className:"payment_title",children:Object(a.jsx)("h3",{children:"Review items and delivery"})}),Object(a.jsx)("div",{className:"payment_items",children:o.map((function(e){return Object(a.jsx)(k,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))})]}),Object(a.jsxs)("div",{className:"payment_section",children:[Object(a.jsx)("div",{className:"payment_title",children:Object(a.jsx)("h3",{children:"Payment method"})}),Object(a.jsx)("div",{className:"payment_details",children:Object(a.jsxs)("form",{onSubmit:G,children:[Object(a.jsx)(M.CardElement,{onChange:function(e){v(e.empty),O(e.error?e.error.message:"")}}),Object(a.jsxs)("div",{className:"payment_prceContainer",children:[Object(a.jsx)(C.a,{renderText:function(e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("p",{children:["Subtotal(",o.length," items):",Object(a.jsx)("strong",{children:e})]}),Object(a.jsxs)("small",{className:"subtotal_gift",children:[Object(a.jsx)("input",{type:"checkbox"}),"This order contains a gift"]})]})},decimalScale:2,value:P(o),displayType:"text",thousandSeparator:!0,prefix:"CDN$"}),Object(a.jsx)("button",{disabled:w||f||A,children:Object(a.jsx)("span",{children:w?Object(a.jsx)("p",{children:"Processing"}):"Buy now"})})]}),h&&Object(a.jsx)("div",{children:h})]})})]})]})})},U=c(54),G=Object(U.a)("pk_test_51I0ULCE7iHYykK3PLLk5inhqLUTMSFfSj0rfFNKAae8kDzJ5eO1qVAXV0SGPitbDfPX7EnU52Mzl2TupRvtToffa00PoO3UN0O");var K=function(){var e=p(),t=Object(l.a)(e,2);Object(o.a)(t[0]);var c=t[1];return Object(n.useEffect)((function(){_.onAuthStateChanged((function(e){c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(a.jsx)(m.a,{children:Object(a.jsx)("div",{className:"app",children:Object(a.jsxs)(y.c,{children:[Object(a.jsx)(y.a,{path:"/login",children:Object(a.jsx)(I,{})}),Object(a.jsxs)(y.a,{path:"/checkout",children:[Object(a.jsx)(f,{}),Object(a.jsx)(w,{})]}),Object(a.jsxs)(y.a,{path:"/payment",children:[Object(a.jsx)(f,{}),Object(a.jsx)(M.Elements,{stripe:G,children:Object(a.jsx)(D,{})})]}),Object(a.jsxs)(y.a,{path:"/",children:[Object(a.jsx)(f,{}),Object(a.jsx)(N,{})]})]})})})},V=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,110)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(O,{initialState:{basket:[]},reducer:L,children:Object(a.jsx)(K,{})})}),document.getElementById("root")),V()}},[[98,1,2]]]);
//# sourceMappingURL=main.f7bbad76.chunk.js.map