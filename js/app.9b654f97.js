(function(e){function t(t){for(var r,a,u=t[0],o=t[1],i=t[2],d=0,s=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&s.push(c[a][0]),c[a]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);b&&b(t);while(s.length)s.shift()();return l.push.apply(l,i||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,u=1;u<n.length;u++){var o=n[u];0!==c[o]&&(r=!1)}r&&(l.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},c={app:0},l=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var b=o;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c=(n("b0c0"),{id:"wrapper"}),l=Object(r["d"])("header",null,[Object(r["d"])("h1",null,"Unverantwortli.ch"),Object(r["d"])("p",null,"Die Unverantwortlich-Liste hält Unternehmen, die in der Vergangenheit nicht aktiv am Responsible Disclosure Verfahren teilgenommen haben."),Object(r["d"])("p",null,"Das stellt eine Gefahr für die allgemeine Sicherheit und für die Melder dar.")],-1),a=Object(r["d"])("thead",null,[Object(r["d"])("tr",null,[Object(r["d"])("th",null,"Unternehmen"),Object(r["d"])("th",null,"Jahr des Vorfalles"),Object(r["d"])("th",null,"Quelle(n)")])],-1),u=["href"],o=Object(r["d"])("footer",null,[Object(r["d"])("p",null,"Hosted by GitHub Pages"),Object(r["d"])("p",null,[Object(r["e"])("Die Daten stammen aus der "),Object(r["d"])("a",{href:"https://github.com/unverantwortli-ch/list",target:"_blank"},"Liste auf github.com"),Object(r["e"])(". Möchtest du die Liste erweitern? Erstelle einfach einen Pull request.")]),Object(r["d"])("p",null,[Object(r["d"])("a",{href:"https://github.com/unverantwortli-ch/list",target:"_blank"},"Die Liste auf github.com")]),Object(r["d"])("p",null,[Object(r["d"])("a",{href:"https://github.com/unverantwortli-ch/page",target:"_blank"},"Das Projekt auf github.com")])],-1);function i(e,t,n,i,b,d){return Object(r["f"])(),Object(r["c"])("div",c,[l,Object(r["d"])("table",null,[a,Object(r["d"])("tbody",null,[(Object(r["f"])(!0),Object(r["c"])(r["a"],null,Object(r["g"])(b.fools,(function(e){return Object(r["f"])(),Object(r["c"])("tr",{key:e.name},[Object(r["d"])("td",null,Object(r["h"])(e.name),1),Object(r["d"])("td",null,Object(r["h"])(e.year),1),Object(r["d"])("td",null,[(Object(r["f"])(!0),Object(r["c"])(r["a"],null,Object(r["g"])(e.proofs,(function(e){return Object(r["f"])(),Object(r["c"])("div",{key:e},[Object(r["d"])("a",{href:e,target:"_blank"},"Quelle",8,u)])})),128))])])})),128))])]),o])}var b=n("1da1"),d=(n("96cf"),n("e2c1")),s=n("bc3a"),f=n.n(s),h={name:"App",data:function(){return{fools:[]}},mounted:function(){this.fetchList()},methods:{fetchList:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("https://raw.githubusercontent.com/unverantwortli-ch/list/main/list.yml");case 2:n=t.sent,e.fools=d["a"].load(n.data).fools;case 4:case"end":return t.stop()}}),t)})))()}}},p=(n("5a15"),n("6b0d")),O=n.n(p);const j=O()(h,[["render",i]]);var g=j;Object(r["b"])(g).mount("#app")},"5a15":function(e,t,n){"use strict";n("d0a4")},d0a4:function(e,t,n){}});
//# sourceMappingURL=app.9b654f97.js.map