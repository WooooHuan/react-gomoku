(this["webpackJsonpreact-gomoku"]=this["webpackJsonpreact-gomoku"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var i=n(0),c=n(1),a=n.n(c),s=n(7),r=n.n(s),o=(n(13),n(2)),u=n(3),f=(n(14),n(15),0);var j=function(){for(var t=new Array(324),e=0;e<t.length;e++)t[e]=Object(i.jsx)("div",{className:"grid-item"},f++);return Object(i.jsx)("div",{className:"grid-transformer",children:Object(i.jsx)("div",{className:"grid-background",children:Object(i.jsx)("div",{className:"grid-container",children:t})})})},h=n(4),l=n(5),b=function(){function t(e,n){Object(h.a)(this,t),this.x=e,this.y=n}return Object(l.a)(t,null,[{key:"add",value:function(e,n){return new t(e.x+n.x,e.y+n.y)}},{key:"subtract",value:function(e,n){return new t(e.x-n.x,e.y-n.y)}}]),t}(),m=function(){function t(e){Object(h.a)(this,t),this.round=0,this.isOver=!1,this.onGameOver=e}return Object(l.a)(t,[{key:"nextRound",value:function(){this.round+=1}},{key:"gameOver",value:function(){this.isOver=!0,this.onGameOver(this.faction)}},{key:"faction",get:function(){return this.round%2?"white":"black"}}]),t}(),d=function(){function t(e,n,i,c){Object(h.a)(this,t);for(var a=new Array(e),s=0;s<e;s++)a[s]=new Array(e);this.items=a,this.size=e,this.btnCmpt=n,this.blackGoCmpt=i,this.whiteGoCmpt=c}return Object(l.a)(t,[{key:"getItem",value:function(t){return this.items[t.x][t.y]}},{key:"setItem",value:function(t,e){this.items[e.x][e.y]=t}},{key:"getComponent",value:function(t){return t?"black"===t.faction?this.blackGoCmpt:this.whiteGoCmpt:this.btnCmpt}},{key:"getVisibleComponents",value:function(){for(var t=[],e=0;e<this.items.length;e++)for(var n=0;n<this.items[e].length;n++)t.push(a.a.cloneElement(this.getComponent(this.items[e][n]),{key:"cmpt-".concat(e,"-").concat(n),position:new b(e,n),board:this}));return t}},{key:"getStartPosition",value:function(t,e){for(var n;this.isInRange(t);)n=t,t=b.subtract(t,e);return n}},{key:"getRowOfFaction",value:function(t,e){for(var n=[];this.isInRange(t);){var i=this.getItem(t);n.push(i?i.faction:" "),t=b.add(t,e)}return n}},{key:"isInRange",value:function(t){return Math.min(t.x,t.y)>=0&&Math.max(t.x,t.y)<this.size}},{key:"isConnected",value:function(t){for(var e=0,n=[new b(0,1),new b(1,0),new b(1,1),new b(1,-1)];e<n.length;e++){var i=n[e],c=this.getItem(t).faction,a=this.getStartPosition(t,i);if(this.getRowOfFaction(a,i).join("").includes(c.repeat(5)))return!0}return!1}}]),t}(),v=function t(e){Object(h.a)(this,t),this.faction=e};n(16),n(17);var O=function(t){var e=t.board,n=t.game,c=t.setGame,a=t.position,s=t.shakeEffect;return Object(i.jsx)("div",{className:"".concat(n.faction,"-go-btn"),onClick:function(){e.setItem(new v(n.faction),a),e.isConnected(a)?n.gameOver():n.nextRound(),c(Object(o.a)({},n)),s()}})};n(18);var x=function(t){var e=t.faction;return t.position,Object(i.jsxs)("div",{className:"".concat(e,"-go-item"),children:[Object(i.jsx)("div",{className:"click-effect"}),Object(i.jsx)("div",{className:"shadow-effect"})]})};var g=function(t){var e=t.onGameOver,n=t.shakeEffect,a=Object(c.useState)(new m(e)),s=Object(u.a)(a,2),r=s[0],f=s[1],j=Object(c.useState)(new d(19,Object(i.jsx)(O,Object(o.a)(Object(o.a)(Object(o.a)({},{game:r}),{setGame:f}),{shakeEffect:n})),Object(i.jsx)(x,{faction:"black"}),Object(i.jsx)(x,{faction:"white"}))),h=Object(u.a)(j,2),l=h[0];return h[1],Object(i.jsx)("div",{className:"input-transformer",children:Object(i.jsx)("div",{className:"input-background",children:Object(i.jsx)("div",{className:"input-container",children:l.getVisibleComponents()})})})};n(19);var k=function(t){var e=t.faction,n=Object(c.useState)(!1),a=Object(u.a)(n,2),s=a[0],r=a[1];Object(c.useEffect)((function(){setTimeout((function(){r(!0)}),500)}),[]);var o=Object(i.jsxs)("div",{className:"members-root",children:[Object(i.jsx)("div",{className:"title-text",children:"black"===e?"\u26ab WINS":"\u26aa WINS"}),Object(i.jsx)("div",{className:"try-again-btn",onClick:function(){return window.location.reload()},children:"Try again"})]});return Object(i.jsx)("div",{className:"panel-container",children:s?o:""})};var y=function(){var t=Object(c.useRef)(null),e=Object(c.useState)(""),n=Object(u.a)(e,2),a=n[0],s=n[1];return Object(i.jsx)("div",{className:"main-container",children:Object(i.jsxs)("div",{className:"board-container",ref:t,children:[a?Object(i.jsx)(k,{faction:a}):"",Object(i.jsx)(j,{}),Object(i.jsx)(g,Object(o.a)(Object(o.a)({},{onGameOver:function(t){s(t)}}),{shakeEffect:function(){t.current.classList.remove("shake-anim"),setTimeout((function(){t.current.classList.add("shake-anim")}),0)}}))]})})};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(y,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.359aea17.chunk.js.map