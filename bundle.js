!function(e){function t(t){for(var a,r,l=t[0],s=t[1],o=t[2],p=0,d=[];p<l.length;p++)r=l[p],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&d.push(n[r][0]),n[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);for(u&&u(t);d.length;)d.shift()();return c.push.apply(c,o||[]),i()}function i(){for(var e,t=0;t<c.length;t++){for(var i=c[t],a=!0,l=1;l<i.length;l++){var s=i[l];0!==n[s]&&(a=!1)}a&&(c.splice(t--,1),e=r(r.s=i[0]))}return e}var a={},n={0:0},c=[];function r(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=a,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(i,a,function(t){return e[t]}.bind(null,a));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var o=0;o<l.length;o++)t(l[o]);var u=s;c.push([40,1]),i()}({40:function(e,t,i){e.exports=i(82)},81:function(e,t,i){},82:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),c=i(11),r=i.n(c),l=i(3),s=i(7),o=function(e){return n.a.createElement("div",{id:"header",className:"header"})},u=(i(49),i(39)),p=i.n(u),d=Object(l.b)(null,{fetchOriginalPic:function(e){return{type:"ORIGINAL_PICTURE",payload:e}},fetchPic:function(e){return{type:"PICTURE",payload:e}},fetchId:function(e){return{type:"ID",payload:e}}})((function(e){var t=Object(a.useState)(0),i=p()(t,2),c=i[0],r=i[1],l=n.a.createRef();console.log(l);var s=function(){var e=l.current.clientHeight,t=Math.ceil(e/10+13);r(t)};return Object(a.useEffect)((function(){l.current.addEventListener("load",s)}),[]),n.a.createElement("div",{className:"card",style:{gridRowEnd:"span ".concat(c)}},n.a.createElement("figure",{className:"card__side card__side--front",id:e.id},n.a.createElement("img",{ref:l,src:e.src,alt:e.text,className:"pic"}),n.a.createElement("a",{href:"#popup",alt:"Popup Info",className:"anchor anchor__btn",onClick:function(){e.fetchPic(e.src),e.fetchOriginalPic(e.originalPic),e.fetchId(e.id)}},n.a.createElement("h2",null,e.text))))})),m=function(e){var t=e.pics,i=e.id;return n.a.createElement("section",{className:"imageList",id:i},t.map((function(e){return n.a.createElement(d,{key:e.id,src:e.src,text:e.text,id:e.id,originalPic:e.originalPic})})))},f=function(){return n.a.createElement("div",{className:"sect"},n.a.createElement("h3",{className:"comment"},n.a.createElement("span",null,"There used to be people up there."),n.a.createElement("span",null,"On the far railing.")))},g=Object(l.b)((function(e){return{fetchedPic:e.fetchedPic,fetchedId:e.fetchedId,fetchedOriginalPic:e.fetchedOriginalPic}}))((function(e){return n.a.createElement("div",{className:"popup",id:"popup"},n.a.createElement("div",{className:"popup__content"},n.a.createElement("img",{src:e.fetchedPic,alt:"zoo pics"}),n.a.createElement("a",{href:"#".concat(e.fetchedId),alt:"Images",className:"popup__close"},"Close"),n.a.createElement("img",{src:e.fetchedOriginalPic,alt:"zoo pics"})))})),h=function(){return n.a.createElement("div",{className:"footer"},n.a.createElement("h1",null,"Thanks for visiting"))},P=function(e){return n.a.createElement("div",{className:"nav-menu"},n.a.createElement("a",{className:"position-link nav-menu__item",href:"#header"},"Back to top"),n.a.createElement("a",{className:"position-link nav-menu__item",href:"#statuePicsId"},"Statue Pictures"),n.a.createElement("a",{className:"position-link nav-menu__item",href:"#liveAnimalPicsId"},"Live Animal Pictures"))},v=Object(l.b)((function(e){return{statuePics:e.statuePics,liveAnimalPics:e.liveAnimalPics,fetchedPic:e.fetchedPic}}))((function(e){return n.a.createElement("div",null,n.a.createElement(P,null),n.a.createElement(o,null),n.a.createElement(m,{pics:e.statuePics,id:"statuePicsId"}),n.a.createElement(f,null),n.a.createElement(m,{pics:e.liveAnimalPics,id:"liveAnimalPicsId"}),n.a.createElement(g,{picture:e.fetchedPic}),n.a.createElement(h,null))})),E=i.p+"src/images/birdBank.jpg",b=i.p+"src/images/edited_birdBank.jpg",_=i.p+"src/images/gorillaStatue.jpg",j=i.p+"src/images/edited_frogStatue.jpg",y=i.p+"src/images/edited_GiraffeStatue.jpg",O=i.p+"src/images/edited_cheetahStatue.jpg",x=i.p+"src/images/edited_cobraStatue.jpg",S=i.p+"src/images/edited_seal-statue.jpg",I=i.p+"src/images/edited_mole.jpg",N=i.p+"src/images/mole.jpg",k=i.p+"src/images/edited_apePicChimp.jpg",w=i.p+"src/images/originalApePicChimp.jpg",A=i.p+"src/images/edited_asianElephant.jpg",C=i.p+"src/images/edited_lions.jpg",R=i.p+"src/images/edited_meerKat.jpg",T=i.p+"src/images/edited_orangutan.jpg",L=i.p+"src/images/edited_elephantEating.jpg",M=i.p+"src/images/edited_okapi.jpg",B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PICTURE":return t.payload;default:return e}},G=Object(s.b)({statuePics:function(){return[{id:"picsStatues1",originalPic:O,src:S,text:"Seal"},{id:"picsStatues2",originalPic:O,src:O,text:"Cheetah Statue"},{id:"picsStatues3",originalPic:O,src:_,text:"Gorilla Statue"},{id:"picsStatues4",originalPic:O,src:x,text:"Cobra Statue"},{id:"picsStatues5",originalPic:N,src:I,text:"Mole"},{id:"picsStatues6",originalPic:O,src:y,text:"Not quite as tall"},{id:"picsStatues7",originalPic:O,src:j,text:"Frog Statue"},{id:"picsStatues8",originalPic:b,src:E,text:"A large bird bank"}]},liveAnimalPics:function(){return[{id:"pics1",originalPic:w,src:k,text:"Twin Calebs?"},{id:"pics2",originalPic:A,src:A,text:"Asian elephant exhibit"},{id:"pics3",originalPic:A,src:L,text:"Elephants eating fruit"},{id:"pics5",originalPic:A,src:R,text:"On the lookout"},{id:"pics6",originalPic:A,src:C,text:"Lounging Lions"},{id:"pics7",originalPic:A,src:T,text:"Relaxing"},{id:"pics8",originalPic:A,src:M,text:"Biting the rail"}]},fetchedPic:B,fetchedId:B,fetchedOriginalPic:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ORIGINAL_PICTURE":return t.payload;default:return e}}});i(81);r.a.render(n.a.createElement(l.a,{store:Object(s.c)(G,{})},n.a.createElement(v,null)),document.querySelector("#root"))}});