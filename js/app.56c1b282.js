(function(e){function t(t){for(var r,o,l=t[0],u=t[1],i=t[2],f=0,b=[];f<l.length;f++)o=l[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&b.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);s&&s(t);while(b.length)b.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,l=1;l<n.length;l++){var u=n[l];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},c=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var s=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"308f":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a=(n("b0c0"),{id:"wrapper"}),c=Object(r["d"])("header",null,[Object(r["d"])("h1",null,"Unverantwortli.ch"),Object(r["d"])("p",null,"Die Unverantwortlich-Liste hält Unternehmen, die in der Vergangenheit nicht aktiv am Responsible Disclosure Verfahren teilgenommen haben."),Object(r["d"])("p",null,"Das stellt eine Gefahr für die allgemeine Sicherheit und für die Melder dar.")],-1),o=Object(r["d"])("thead",null,[Object(r["d"])("tr",null,[Object(r["d"])("th",null,"Unternehmen"),Object(r["d"])("th",null,"Jahr des Vorfalles"),Object(r["d"])("th",null,"Quelle(n)")])],-1),l=["href"],u=Object(r["e"])('<footer><p>Die Daten stammen aus der <a href="https://github.com/unverantwortli-ch/list" target="_blank">Liste auf github.com</a>. Möchtest du die Liste erweitern? Erstelle einfach einen Pull request.</p><p><a href="https://github.com/unverantwortli-ch/list" target="_blank">Die Liste auf github.com</a></p><p><a href="https://github.com/unverantwortli-ch/page" target="_blank">Das Projekt auf github.com</a></p><p id="hostedBy">Hosted by <a href="https://pages.github.com/" target="_blank">GitHub Pages</a></p></footer>',1);function i(e,t,n,i,s,f){return Object(r["f"])(),Object(r["c"])("div",a,[c,Object(r["d"])("table",null,[o,Object(r["d"])("tbody",null,[(Object(r["f"])(!0),Object(r["c"])(r["a"],null,Object(r["g"])(s.fools,(function(e){return Object(r["f"])(),Object(r["c"])("tr",{key:e.name},[Object(r["d"])("td",null,Object(r["h"])(e.name),1),Object(r["d"])("td",null,Object(r["h"])(e.year),1),Object(r["d"])("td",null,[(Object(r["f"])(!0),Object(r["c"])(r["a"],null,Object(r["g"])(e.proofs,(function(e){return Object(r["f"])(),Object(r["c"])("div",{key:e},[Object(r["d"])("a",{href:e,target:"_blank"},"Quelle",8,l)])})),128))])])})),128))])]),u])}var s=n("1da1"),f=(n("96cf"),n("e2c1")),b=n("bc3a"),d=n.n(b),h={name:"App",data:function(){return{fools:[]}},mounted:function(){this.fetchList()},methods:{fetchList:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("https://raw.githubusercontent.com/unverantwortli-ch/list/main/list.yml");case 2:n=t.sent,e.fools=f["a"].load(n.data).fools;case 4:case"end":return t.stop()}}),t)})))()}}},p=(n("9989"),n("6b0d")),O=n.n(p);const j=O()(h,[["render",i]]);var g=j;Object(r["b"])(g).mount("#app")},9989:function(e,t,n){"use strict";n("308f")}});
//# sourceMappingURL=app.56c1b282.js.map