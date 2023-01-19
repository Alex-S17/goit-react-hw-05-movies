"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[135],{135:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(439),a=n(87),s=n(689),c=n(126),i=n(791),o=n(691),u="MovieDetails_backButton__pPF5M",l="MovieDetails_movieInfoWrapper__UrK0t",p="MovieDetails_titleHeader__2xj86",v="MovieDetails_innerBlockWrapper__npmtZ",h="MovieDetails_textInfoWrapper__gUAzS",f="MovieDetails_text__RHcc4",d="MovieDetails_textGenres__Q2Avz",_="MovieDetails_textScore__ksskH",m="MovieDetails_overviewHeader__qTtoJ",x="MovieDetails_genresHeader__uSa6j",j="MovieDetails_addInfoHeader__F+Vs- MovieDetails_overviewHeader__qTtoJ",g="MovieDetails_navigation__ySN5l",k="MovieDetails_infoLink__hTo+c",w=n(184),b=function(){var e,t,n=(0,s.UO)().movieId,b=(0,i.useState)({}),y=(0,r.Z)(b,2),R=y[0],M=y[1],N=(0,s.TH)(),D=(0,i.useState)(!1),H=(0,r.Z)(D,2),O=H[0],S=H[1];(0,i.useEffect)((function(){S(!0),(0,c.BH)(n).then((function(e){return M(e)})),S(!1)}),[n]);var Z=R.id,E=R.original_title,U=R.vote_average,B=R.overview,T=R.genres,F=R.poster_path;if(E){var I=T.map((function(e){return e.name})).join(", "),L=10*U.toFixed(1),q=null!==(e=null===(t=N.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,w.jsxs)(w.Fragment,{children:[O&&(0,w.jsx)(o.fe,{visible:!0,height:"200",width:"200",ariaLabel:"dna-loading",wrapperStyle:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}),(0,w.jsx)(a.rU,{className:u,to:q,children:"Back"}),(0,w.jsxs)("div",{className:l,children:[(0,w.jsx)("h1",{className:p,children:E}),(0,w.jsxs)("div",{className:v,children:[(0,w.jsx)("img",{src:c.nk+F,alt:E,width:300}),(0,w.jsxs)("div",{className:h,children:[(0,w.jsxs)("p",{className:"".concat(f," ").concat(_),children:["User score: ",L,"%"]}),(0,w.jsx)("h2",{className:m,children:"Overview"}),(0,w.jsx)("p",{className:f,children:B}),(0,w.jsx)("h3",{className:x,children:"Genres"}),(0,w.jsx)("p",{className:"".concat(f," ").concat(d),children:I}),(0,w.jsx)("h2",{className:j,children:"Additional information"}),(0,w.jsxs)("nav",{className:g,children:[(0,w.jsx)(a.OL,{className:k,to:"/movies/".concat(Z,"/cast"),state:{from:N.state.from},children:"Cast"}),(0,w.jsx)(a.OL,{className:k,to:"/movies/".concat(Z,"/reviews"),state:{from:N.state.from},children:"Reviews"})]})]})]})]}),(0,w.jsx)(i.Suspense,{fallback:null,children:(0,w.jsx)(s.j3,{})})]})}}},126:function(e,t,n){n.d(t,{BH:function(){return l},Et:function(){return o},JZ:function(){return v},TY:function(){return f},ci:function(){return _},nk:function(){return i}});var r=n(861),a=n(757),s=n.n(a),c="62f46feb65c2319fb0db62c2c080ca35",i="https://image.tmdb.org/t/p/w500/";function o(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(c));case 3:return t=e.sent,e.abrupt("return",t.json());case 7:e.prev=7,e.t0=e.catch(0),console.log("ERROR:",e.t0);case 10:case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function l(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(c));case 3:return n=e.sent,e.abrupt("return",n.json());case 7:e.prev=7,e.t0=e.catch(0),console.log("ERROR:",e.t0);case 10:case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function v(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(c));case 3:return n=e.sent,e.abrupt("return",n.json());case 7:e.prev=7,e.t0=e.catch(0),console.log("ERROR:",e.t0);case 10:case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function f(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(c));case 3:return n=e.sent,e.abrupt("return",n.json());case 7:e.prev=7,e.t0=e.catch(0),console.log("ERROR:",e.t0);case 10:case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function _(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 3:return n=e.sent,e.abrupt("return",n.json());case 7:e.prev=7,e.t0=e.catch(0),console.log("ERROR:",e.t0);case 10:case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=135.074df408.chunk.js.map