"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[936],{510:function(e,t,n){n.d(t,{e:function(){return f}});var r=n(87),a=n(689),c=n(126),i="MovieList_imageGallery__etXFe",s="MovieList_itemWrapper__DRs25",o="MovieList_link__+cn-g",u="MovieList_movieImage__txbdB",p="MovieList_movieTitle__RhENm",l=n(184),f=function(e){var t=e.arrayOfMovies,n=(0,a.TH)();return(0,l.jsxs)("ul",{className:i,children:[t.map((function(e){return(0,l.jsx)("li",{className:s,children:(0,l.jsxs)(r.OL,{className:o,to:"/movies/".concat(e.id),state:{from:n},children:[(0,l.jsx)("img",{className:u,src:c.nk+e.poster_path,alt:"movie.original_title"}),(0,l.jsx)("p",{className:p,children:e.original_title})]})},e.id)})),";"]})}},936:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(439),a=n(791),c=n(126),i=n(691),s=n(510),o="Home_trandingTitle__NyNEN",u=n(184);var p=function(){var e=(0,a.useState)([]),t=(0,r.Z)(e,2),n=t[0],p=t[1],l=(0,a.useState)(!1),f=(0,r.Z)(l,2),h=f[0],v=f[1];return(0,a.useEffect)((function(){v(!0),(0,c.Et)().then((function(e){p(e.results)})),v(!1)}),[]),(0,u.jsxs)(u.Fragment,{children:[h&&(0,u.jsx)(i.fe,{visible:!0,height:"200",width:"200",ariaLabel:"dna-loading",wrapperStyle:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h1",{className:o,children:"Trending today"}),(0,u.jsx)(s.e,{arrayOfMovies:n})]})]})}},126:function(e,t,n){n.d(t,{BH:function(){return p},Et:function(){return o},JZ:function(){return f},TY:function(){return v},ci:function(){return d},nk:function(){return s}});var r=n(861),a=n(757),c=n.n(a),i="62f46feb65c2319fb0db62c2c080ca35",s="https://image.tmdb.org/t/p/w500/";function o(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i));case 3:return t=e.sent,e.abrupt("return",t.json());case 7:e.prev=7,e.t0=e.catch(0),console.log("ERROR:",e.t0);case 10:case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function p(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(i));case 3:return n=e.sent,e.abrupt("return",n.json());case 7:e.prev=7,e.t0=e.catch(0),console.log("ERROR:",e.t0);case 10:case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(i));case 3:return n=e.sent,e.abrupt("return",n.json());case 7:e.prev=7,e.t0=e.catch(0),console.log("ERROR:",e.t0);case 10:case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function v(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(i));case 3:return n=e.sent,e.abrupt("return",n.json());case 7:e.prev=7,e.t0=e.catch(0),console.log("ERROR:",e.t0);case 10:case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function d(e){return _.apply(this,arguments)}function _(){return(_=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 3:return n=e.sent,e.abrupt("return",n.json());case 7:e.prev=7,e.t0=e.catch(0),console.log("ERROR:",e.t0);case 10:case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=936.cc69ecf6.chunk.js.map