(function(e){function t(t){for(var n,o,s=t[0],c=t[1],l=t[2],u=0,v=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&v.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(v.length)v.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},i=[];function o(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d0c11e8":"81f4b54d"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=n);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(e);var l=new Error;i=function(t){c.onerror=c.onload=null,clearTimeout(u);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",l.name="ChunkLoadError",l.type=n,l.request=i,a[1](l)}r[e]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vuex-demo/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0983":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal fade",attrs:{id:"show-movie-modal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLongTitle","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"show-movie-title"}},[e._v(" "+e._s(e.movieModal.title)+" ")])]),a("div",{staticClass:"modal-body",attrs:{id:"show-movie-body"}},[a("div",{staticClass:"row"},[a("img",{staticClass:"col-sm-8",attrs:{src:e.movieModal.image,id:"show-movie-image"}}),a("div",{staticClass:"col-sm-4"},[a("p",[a("em",{attrs:{id:"show-movie-date"}},[e._v("release at : "+e._s(e.movieModal.release_date))])]),a("p",{attrs:{id:"show-movie-description"}},[e._v(e._s(e.movieModal.description))])])])]),e._m(0)])])])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-bs-dismiss":"modal"}},[e._v(" Close ")])])}],i={name:"MovieModal",props:{movieModal:{type:Object,required:!0}}},o=i,s=a("2877"),c=Object(s["a"])(o,n,r,!1,null,null,null);t["a"]=c.exports},"14ac":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row",attrs:{id:"search-bar"}},[a("form",{staticClass:"form-inline",attrs:{id:"search"}},[a("label",{staticClass:"sr-only",attrs:{for:"inlineFormInputName2"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.keyword,expression:"keyword"}],staticClass:"form-control mb-2 mr-sm-2",attrs:{type:"text",id:"search-input",placeholder:"search name ..."},domProps:{value:e.keyword},on:{input:function(t){t.target.composing||(e.keyword=t.target.value)}}}),a("button",{staticClass:"btn btn-primary mb-2",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.fetchSearch(e.keyword)}}},[e._v(" Search ")]),a("button",{staticClass:"btn btn-secondary mb-2 ml-2",attrs:{type:"submit"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.clearInput.apply(null,arguments)}}},[e._v(" Clear ")])])])},r=[],i=a("5530"),o=a("2f62"),s={name:"SearchBar",data:function(){return{keyword:""}},methods:Object(i["a"])(Object(i["a"])({},Object(o["b"])(["fetchSearchInput","clearSearchInput","fetchFilterMovies"])),{},{fetchSearch:function(e){this.fetchSearchInput(e),this.fetchFilterMovies(),this.keyword=""},clearInput:function(){this.clearSearchInput(),this.keyword=""}})},c=s,l=a("2877"),u=Object(l["a"])(c,n,r,!1,null,null,null);t["a"]=u.exports},1799:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"d-flex justify-content-center",attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},e._l(e.totalPage,(function(t){return a("li",{key:t,staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),e.setCurrentPage(t)}}},[e._v(e._s(t))])])})),0)])},r=[],i=a("5530"),o=(a("a630"),a("3ca3"),a("d3b7"),a("ddb0"),a("2f62")),s={name:"Pagination",props:{movies:{type:Array,required:!0}},computed:Object(i["a"])(Object(i["a"])({},Object(o["d"])(["moviePerPage"])),{},{totalPage:function(){var e=Math.ceil(this.movies.length/this.moviePerPage);return Array.from(Array(e).keys(),(function(e){return e+1}))}}),methods:Object(i["a"])(Object(i["a"])({},Object(o["b"])(["handlePage"])),{},{setCurrentPage:function(e){this.handlePage(e)}})},c=s,l=a("2877"),u=Object(l["a"])(c,n,r,!1,null,null,null);t["a"]=u.exports},"50ab":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-sm-6 col-md-4 col-lg-3"},[a("div",{staticClass:"card mb-2"},[a("img",{staticClass:"card-img-top",attrs:{src:e.movie.image,alt:"Card image cap"}}),a("div",{staticClass:"card-body movie-item-body"},[a("h5",{staticClass:"card-title"},[e._v(e._s(e.movie.title))])]),a("div",{staticClass:"card-footer"},[a("button",{staticClass:"btn btn-primary btn-show-movie",attrs:{"data-bs-toggle":"modal","data-bs-target":"#show-movie-modal"},on:{click:function(t){return e.getMovieModal(e.movie.id)}}},[e._v(" More ")]),e.movie.liked?a("button",{staticClass:"btn btn-outline-danger",on:{click:function(t){return e.updateDisliked(e.movie.id)}}},[e._v(" Dislike ")]):a("button",{staticClass:"btn btn-danger",on:{click:function(t){return e.updateLiked(e.movie.id)}}},[e._v(" Like ")])])])])},r=[],i=a("5530"),o=a("2f62"),s={name:"MovieCard",props:{movie:{type:Object,required:!0}},methods:Object(i["a"])(Object(i["a"])({},Object(o["b"])(["fetchMovieModal","updateMovieLiked","updateMovieDisliked"])),{},{getMovieModal:function(e){this.fetchMovieModal(e)},updateLiked:function(e){this.updateMovieLiked(e)},updateDisliked:function(e){this.updateMovieDisliked(e)}})},c=s,l=a("2877"),u=Object(l["a"])(c,n,r,!1,null,null,null);t["a"]=u.exports},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Navbar"),a("main",[a("router-view")],1)],1)},i=[],o=(a("7b17"),a("ab8b"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"nav bg-light"},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("li",{on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.clearInput.apply(null,arguments)}}},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e._v("Movie List")])],1),e._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item active",on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.clearInput.apply(null,arguments)}}},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[e._v("Home ")])],1),a("li",{staticClass:"nav-item",on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.clearInput.apply(null,arguments)}}},[a("router-link",{staticClass:"nav-link",attrs:{to:"/favorites"}},[e._v("favorite")])],1)])])])])}),s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],c=a("5530"),l=a("2f62"),u={name:"Navbar",methods:Object(c["a"])(Object(c["a"])({},Object(l["b"])(["clearSearchInput"])),{},{clearInput:function(){this.clearSearchInput()}})},d=u,v=a("2877"),m=Object(v["a"])(d,o,s,!1,null,null,null),p=m.exports,f={name:"App",components:{Navbar:p}},b=f,h=(a("5c0b"),Object(v["a"])(b,r,i,!1,null,null,null)),g=h.exports,M=a("1da1"),y=(a("96cf"),a("4de4"),a("d3b7"),a("caad"),a("2532"),a("498a"),a("fb6a"),a("7db0"),a("159b"),a("d81d"),a("bc3a")),C=a.n(y),k="https://movie-list.alphacamp.io",P=k+"/api/v1/movies/",_=k+"/posters/";n["a"].use(l["a"]);var w=new l["a"].Store({state:{movies:[],filterMovies:[],movieModal:{},searchInput:"",currentState:"all",moviePerPage:8,currentPage:1},getters:{likedMovies:function(e){return e.movies.filter((function(e){return e.liked})).filter((function(t){return t.title.trim().toLowerCase().includes(e.searchInput)}))},movieByPageAll:function(e){return e.filterMovies.slice((e.currentPage-1)*e.moviePerPage,e.currentPage*e.moviePerPage)},moviesByPageFav:function(e,t){return t.likedMovies.slice((e.currentPage-1)*e.moviePerPage,e.currentPage*e.moviePerPage)}},mutations:{getMovies:function(e,t){e.movies=t,e.filterMovies=e.movies},getfilterMovies:function(e){e.filterMovies=e.movies.filter((function(t){return t.title.trim().toLowerCase().includes(e.searchInput)}))},getMovieModal:function(e,t){e.movieModal=e.movies.find((function(e){return e.id===t}))},getSearchInput:function(e,t){e.searchInput=t.trim().toLowerCase(),e.currentPage=1},clearKeyword:function(e){e.searchInput="",e.filterMovies=e.movies,e.currentPage=1},MovieLiked:function(e,t){e.movies.forEach((function(e){e.id===t&&(e.liked=!0)}))},MovieDisliked:function(e,t){e.movies.forEach((function(e){e.id===t&&(e.liked=!1)}))},setCurrentPage:function(e,t){e.currentPage=t}},actions:{fetchMovies:function(e){return Object(M["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,t.prev=1,t.next=4,C.a.get(P);case 4:n=t.sent,a("getMovies",n.data.results.map((function(e){return Object(c["a"])(Object(c["a"])({},e),{},{image:_+e.image,liked:!1})}))),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))()},fetchFilterMovies:function(e){var t=e.commit;t("getfilterMovies")},fetchMovieModal:function(e,t){var a=e.commit;a("getMovieModal",t)},fetchSearchInput:function(e,t){var a=e.commit;a("getSearchInput",t)},clearSearchInput:function(e){var t=e.commit;t("clearKeyword")},updateMovieLiked:function(e,t){var a=e.commit;a("MovieLiked",t)},updateMovieDisliked:function(e,t){var a=e.commit;a("MovieDisliked",t)},handlePage:function(e,t){var a=e.commit;a("setCurrentPage",t)}}});w.dispatch("fetchMovies");var j=w,O=(a("3ca3"),a("ddb0"),a("8c4f")),S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("SearchBar"),a("div",{staticClass:"row",attrs:{id:"data-panel"}},e._l(e.movieByPageAll,(function(e){return a("MovieCard",{key:e.id,attrs:{movie:e}})})),1),a("MovieModal",{attrs:{movieModal:e.movieModal}}),a("Pagination",{attrs:{movies:e.filterMovies}})],1)},x=[],I=a("14ac"),E=a("50ab"),L=a("0983"),D=a("1799"),$={name:"Movies",components:{SearchBar:I["a"],MovieCard:E["a"],MovieModal:L["a"],Pagination:D["a"]},computed:Object(c["a"])(Object(c["a"])({},Object(l["d"])(["movies","movieModal","filterMovies","currentState","searchInput","currentPage"])),Object(l["c"])(["movieByPageAll"]))},A=$,B=Object(v["a"])(A,S,x,!1,null,null,null),F=B.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",[e._v("404 Page Not Found")])},T=[],q={},J=Object(v["a"])(q,N,T,!1,null,null,null),K=J.exports;n["a"].use(O["a"]);var R=[{path:"/",name:"movies",component:F},{path:"/favorites",name:"movies-fav",component:function(){return a.e("chunk-2d0c11e8").then(a.bind(null,"454e"))}},{path:"*",name:"Not-Found",component:K}],H=new O["a"]({routes:R}),z=H;n["a"].config.productionTip=!1,new n["a"]({store:j,router:z,render:function(e){return e(g)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";a("9c0c")},"9c0c":function(e,t,a){}});
//# sourceMappingURL=app.daa6a62a.js.map