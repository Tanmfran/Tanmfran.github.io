(this.webpackJsonptannorpage=this.webpackJsonptannorpage||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(8),o=a.n(c),s=(a(84),a(33)),r=(a(85),a(41)),l=a.n(r),d=a(125),j=a(134),b=a(104),h=a(131),u=a(3),m=function(){return Object(u.jsx)(d.a,{className:l.a.navList,style:{padding:0},children:[{header:"Dashboard",path:""},{header:"Loki Zone",path:"loki-zone"}].map((function(e){return Object(u.jsx)(j.a,{className:l.a.leftNavItem,children:Object(u.jsx)(b.a,{component:h.a.div,whileTap:{scale:2},whileHover:{scale:1.4,transition:{duration:.3}},style:{padding:8},children:Object(u.jsx)(s.b,{to:"/".concat(e.path),children:e.header})},e.header)},e.header)}))})},p=a(132),x=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(p.a,{variant:"permanent",className:l.a.drawer,children:Object(u.jsx)(m,{})})})},f=a(26),O=a(133),_=a(45),v=a.n(_),g=function(e){return{initial:{y:"top"===e?"-100%":"100%",opacity:0,transition:{duration:.8,ease:"easeInOut"}},animate:{y:0,opacity:1,transition:{duration:.8,ease:"easeInOut"}}}},y=function(e){var t=i.a.useState(0),a=Object(f.a)(t,2),n=a[0],c=a[1];return Object(u.jsx)("div",{className:"icon-holder",children:Object(u.jsxs)(O.a,{children:[Object(u.jsx)(h.a.div,{className:"icon-holder__icon",variants:g("top"),initial:"initial",exit:"initial",animate:"animate",children:e.icon&&Object(u.jsx)("img",{className:v.a.image,src:e.icon.src,alt:e.icon.alt})},e.text+"icon"),Object(u.jsx)(h.a.h1,{className:v.a.shakeText,variants:g("bottom"),initial:"initial",exit:"initial",animate:"animate",children:Object(u.jsx)("span",{className:n?v.a.imageWobbleActive:v.a.imageWobble,onClick:function(){c(1)},onAnimationEnd:function(){c(0)},children:e.text})},e.text)]})})},k=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(y,{text:"Tannor Franks"})})},w=a(9),N=function(e){return"rotate"===e.type?Object(u.jsx)("div",{className:e.className?e.className:void 0,style:e.style?e.style:void 0,children:Object(u.jsx)(h.a.div,{initial:{opacity:0},animate:{rotate:1080,opacity:1},transition:{rotate:{repeat:1/0,duration:10}},children:Object(u.jsx)("img",{src:e.img.src,alt:e.img.alt})})}):Object(u.jsx)(h.a.div,{initial:{opacity:0},animate:{opacity:1,rotate:[-6,6]},transition:{duration:4},className:e.className?e.className:void 0,children:Object(u.jsx)("img",{src:e.img.src,alt:e.img.alt})})},C=a(74),H=a.n(C),I=a(128),T=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(I.a,{className:H.a.dashboard,variant:"elevation",children:Object(u.jsx)(N,{img:{src:"https://www.animeoutline.com/wp-content/uploads/2018/07/anime_cat.png",alt:"T-Initial"},type:"none"})})})},L=a(129),M=a(55),F=a.n(M),S=a(75),W=a.n(S),A={overlay:{position:void 0,backgroundColor:"rgba(0, 0, 0, 0)"},content:{}},Z=function(e){var t,a=Object(w.f)(),i=Object(n.useState)(!1),c=Object(f.a)(i,2),o=c[0],s=c[1];return Object(n.useEffect)((function(){o&&e.closeModal()}),[o,e]),Object(u.jsx)(W.a,{closeTimeoutMS:300,isOpen:e.isVisible,onAfterClose:function(){o&&a.push("/")},className:F.a.lokiModal,portalClassName:F.a.lokiModal,ariaHideApp:!1,style:A,children:Object(u.jsx)(h.a.div,{className:"icon-holder__icon",variants:(t="top",{initial:{y:"top"===t?"-100%":"100%",opacity:0,transition:{duration:1,ease:"easeInOut"}},animate:{y:0,opacity:1,transition:{duration:1,ease:"easeInOut"}}}),initial:"initial",exit:{opacity:0},animate:"animate",children:Object(u.jsx)(I.a,{className:F.a.lokiCard,variant:"elevation",children:Object(u.jsxs)(L.a,{children:[Object(u.jsx)(b.a,{component:h.a.div,whileTap:{scale:2},whileHover:{scale:1.4,transition:{duration:.3}},style:{padding:8},onClick:e.closeModal,children:"Heckers Yes"}),Object(u.jsx)(b.a,{onClick:function(){s(!0)},component:h.a.div,whileTap:{scale:2},whileHover:{scale:1.4,transition:{duration:.3}},style:{padding:8},children:"No, send me back!"})]})})},"modal")})},z=a(53),P={src:"https://scontent-atl3-1.xx.fbcdn.net/v/t1.6435-9/125223273_10214445225524286_7354193883580040641_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=cT6d6Rs7x8MAX8Hp_rh&_nc_ht=scontent-atl3-1.xx&oh=c0b1fdd34190a78ca6cb49ffd9be3600&oe=6152740D",alt:"MyBoy!!"},D=function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],i=t[1],c=function(e,t){return Math.floor(Math.random()*(t-e)+e)};return Object(n.useEffect)((function(){var e=window.innerWidth,t=window.innerHeight;if(!(a.count>20)){var n=setTimeout((function(){var n={x:c(0,t),y:c(0,e)};i([].concat(Object(z.a)(a),[n]))}),1e3);return function(){clearTimeout(n)}}}),[a]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(N,{img:P,type:"rotate"}),a.map((function(e){var t={left:e.x,top:e.y,position:"absolute"};return Object(u.jsx)(N,{img:P,type:"rotate",style:t},"".concat(e.x).concat(e.y))}))]})},E=function(){var e=Object(n.useState)(!0),t=Object(f.a)(e,2),a=t[0],i=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(Z,{isVisible:a,closeModal:function(){i(!1)}},"lokiModal"),!a&&Object(u.jsx)(D,{})]})},R=function(){return Object(u.jsxs)(w.c,{children:[Object(u.jsx)(w.a,{exact:!0,path:"/",component:T}),Object(u.jsx)(w.a,{exact:!0,path:"/loki-zone",component:E})]})},B=function(e){var t=i.a.useRef(null),a=i.a.useState([]),n=Object(f.a)(a,2),c=n[0],o=n[1],s=new Path2D("m129.03125 63.3125c0-34.914062-28.941406-63.3125-64.519531-63.3125-35.574219 0-64.511719 28.398438-64.511719 63.3125 0 29.488281 20.671875 54.246094 48.511719 61.261719v162.898437c0 53.222656 44.222656 96.527344 98.585937 96.527344h10.316406c54.363282 0 98.585938-43.304688 98.585938-96.527344v-95.640625c0-7.070312-4.640625-13.304687-11.414062-15.328125-6.769532-2.015625-14.082032.625-17.960938 6.535156l-42.328125 64.425782c-4.847656 7.390625-2.800781 17.3125 4.582031 22.167968 7.386719 4.832032 17.304688 2.792969 22.160156-4.585937l12.960938-19.71875v42.144531c0 35.582032-29.863281 64.527344-66.585938 64.527344h-10.316406c-36.714844 0-66.585937-28.945312-66.585937-64.527344v-162.898437c27.847656-7.015625 48.519531-31.773438 48.519531-61.261719zm-97.03125 0c0-17.265625 14.585938-31.3125 32.511719-31.3125 17.929687 0 32.511719 14.046875 32.511719 31.3125 0 17.261719-14.582032 31.3125-32.511719 31.3125-17.925781 0-32.511719-14.050781-32.511719-31.3125zm0 0"),r=.3;return Object(u.jsx)("canvas",{style:{position:"fixed",top:0,left:0},ref:t,width:window.innerWidth,height:window.innerHeight,onClick:function(e){var a=t.current;if(a&&a.getContext("2d")){var n=a.getContext("2d"),i={x:e.clientX,y:e.clientY};o([].concat(Object(z.a)(c),[i])),function(e,t){e.fillStyle="deepskyblue",e.shadowColor="dodgerblue",e.shadowBlur=20,e.save(),e.scale(r,r),e.translate(t.x/r-80,t.y/r-80),e.fill(s),e.restore()}(n,i)}},children:e.children})},Y=function(){return Object(u.jsxs)("div",{role:"main",className:"App",children:[Object(u.jsx)(B,{}),Object(u.jsxs)(s.a,{children:[Object(u.jsx)(k,{}),Object(u.jsxs)("div",{className:"pageContent",children:[Object(u.jsx)(x,{}),Object(u.jsx)(R,{})]})]})]})},V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,135)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),i(e),c(e),o(e)}))},X=a(76),G=a(130),J=Object(X.a)({typography:{fontFamily:"Roboto"}});o.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(G.a,{theme:J,children:Object(u.jsx)(Y,{})})}),document.getElementById("root")),V()},41:function(e,t,a){e.exports={leftNavItem:"LeftNav_leftNavItem__378Ir",drawer:"LeftNav_drawer__2SPZf",drawerCollapsed:"LeftNav_drawerCollapsed__2oaUP",navList:"LeftNav_navList__28TGx"}},45:function(e,t,a){e.exports={image:"IconHolder_image__1A1Y8",shakeText:"IconHolder_shakeText__1GM5v",shake:"IconHolder_shake__oRtLR",imageWobble:"IconHolder_imageWobble__1z6YP",imageWobbleActive:"IconHolder_imageWobbleActive__1HaWV",colorChange:"IconHolder_colorChange__2uXZH",wobble:"IconHolder_wobble__2emHU"}},55:function(e,t,a){e.exports={lokiModal:"LokiZone_lokiModal__1d7OQ",paper:"LokiZone_paper__3Tk9W",dashboard:"LokiZone_dashboard__1Zzj8",lokiCard:"LokiZone_lokiCard__1zfFm"}},74:function(e,t,a){e.exports={dashboard:"Dashboard_dashboard__1kKfE"}},84:function(e,t,a){},85:function(e,t,a){}},[[101,1,2]]]);
//# sourceMappingURL=main.f5c4e43d.chunk.js.map