(function(e){function t(t){for(var a,o,c=t[0],s=t[1],l=t[2],u=0,d=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);h&&h(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},o={app:0},r={app:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d22c341":"623a5482","chunk-57c989f2":"36a78119","chunk-634c71cd":"cc95e7a2","chunk-797fe44e":"a332f9f0","chunk-83d305e8":"6a9c04d6","chunk-15e64eff":"7e2693f7","chunk-176d07c5":"1e45ce15","chunk-1997b429":"0ac7f951","chunk-1f98dc8e":"85e3e7a1","chunk-235ef0c3":"bd969211","chunk-24c5f13f":"99ba2916","chunk-298e5748":"cfa17314","chunk-2f055d14":"870e7c6a","chunk-3d052f82":"1378b609","chunk-4078406b":"a832c3ba","chunk-4a90a35c":"6178c555","chunk-695e57e8":"51abacb5","chunk-7a9d8816":"21356475","chunk-a1b2a950":"52d0fe79","chunk-a5d855f4":"498721f3","chunk-ae4893fa":"56697da8","chunk-af88b1e4":"1691459a","chunk-b3ed1122":"7929bc48","chunk-b86dcee6":"02ed6291","chunk-c7594afe":"1cac1d15","chunk-cae6a1e8":"64b7aae6","chunk-f57f99c0":"4c3f556c","chunk-ff8269ec":"23defb61","chunk-f42af102":"0e2d468a"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-57c989f2":1,"chunk-797fe44e":1,"chunk-83d305e8":1,"chunk-15e64eff":1,"chunk-176d07c5":1,"chunk-1997b429":1,"chunk-1f98dc8e":1,"chunk-235ef0c3":1,"chunk-24c5f13f":1,"chunk-298e5748":1,"chunk-2f055d14":1,"chunk-3d052f82":1,"chunk-4078406b":1,"chunk-4a90a35c":1,"chunk-695e57e8":1,"chunk-7a9d8816":1,"chunk-a1b2a950":1,"chunk-a5d855f4":1,"chunk-ae4893fa":1,"chunk-af88b1e4":1,"chunk-b3ed1122":1,"chunk-b86dcee6":1,"chunk-c7594afe":1,"chunk-cae6a1e8":1,"chunk-f57f99c0":1,"chunk-ff8269ec":1,"chunk-f42af102":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-2d22c341":"31d6cfe0","chunk-57c989f2":"a80c7a80","chunk-634c71cd":"31d6cfe0","chunk-797fe44e":"978ac882","chunk-83d305e8":"bdcb896f","chunk-15e64eff":"aa38b5df","chunk-176d07c5":"aa38b5df","chunk-1997b429":"aa38b5df","chunk-1f98dc8e":"dc410a73","chunk-235ef0c3":"dc410a73","chunk-24c5f13f":"dc410a73","chunk-298e5748":"aa38b5df","chunk-2f055d14":"dc410a73","chunk-3d052f82":"aa38b5df","chunk-4078406b":"dc410a73","chunk-4a90a35c":"dc410a73","chunk-695e57e8":"dc410a73","chunk-7a9d8816":"aa38b5df","chunk-a1b2a950":"aa38b5df","chunk-a5d855f4":"aa38b5df","chunk-ae4893fa":"aa38b5df","chunk-af88b1e4":"dc410a73","chunk-b3ed1122":"dc410a73","chunk-b86dcee6":"aa38b5df","chunk-c7594afe":"dc410a73","chunk-cae6a1e8":"aa38b5df","chunk-f57f99c0":"dc410a73","chunk-ff8269ec":"aa38b5df","chunk-f42af102":"601d442e"}[e]+".css",r=s.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===r))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===a||u===r)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var a=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[e],h.parentNode.removeChild(h),n(i)},h.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){o[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(h);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}r[e]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var h=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"05e4":function(e,t,n){},1980:function(e,t,n){},"1dff":function(e,t,n){"use strict";var a=n("a026"),o=n("fb9a"),r=n.n(o),i={primary:"#FC7600",success:"#28C76F",danger:"#EA5455",warning:"#FF9F43",dark:"#1E1E1E"},c={disableCustomizer:!1,disableThemeTour:!1,footerType:"static",hideScrollToTop:!1,mainLayoutType:"vertical",navbarColor:"#fff",navbarType:"floating",routerTransition:"zoom-fade",rtl:!1,sidebarCollapsed:!1,theme:"light",userInfoLocalStorageKey:"userInfo"};a["default"].use(r.a,{theme:{colors:i},ltr:c.ltr}),t["a"]=c},"3a10":function(e,t,n){},"3f31":function(e,t,n){e.exports=n.p+"img/avatar-s-11.1a620230.jpg"},"41cb":function(e,t,n){"use strict";var a=n("a026"),o=n("8c4f");a["default"].use(o["a"]);var r=new o["a"]({mode:"history",base:"/",scrollBehavior:function(){return{x:0,y:0}},routes:[{path:"",component:function(){return n.e("chunk-f42af102").then(n.bind(null,"f135"))},children:[{path:"/",name:"home",component:function(){return n.e("chunk-57c989f2").then(n.bind(null,"bb51"))}},{path:"/hr-report/attendance",name:"attendance",component:function(){return Promise.all([n.e("chunk-83d305e8"),n.e("chunk-a5d855f4")]).then(n.bind(null,"a0d0"))},meta:{breadcrumb:[{title:"Home",url:"/"},{title:"HR Report"},{title:"Attendance",active:!0}],pageTitle:"Attendance",rule:"editor"}},{path:"/hr-report/time-attendance",name:"time-attendance",component:function(){return Promise.all([n.e("chunk-83d305e8"),n.e("chunk-ae4893fa")]).then(n.bind(null,"fd40"))},meta:{breadcrumb:[{title:"Home",url:"/"},{title:"HR Report"},{title:"Time Attendance",active:!0}],pageTitle:"Time Attendance",rule:"editor"}},{path:"/hr-report/main-report",name:"main-report",component:function(){return Promise.all([n.e("chunk-83d305e8"),n.e("chunk-298e5748")]).then(n.bind(null,"96d7"))},meta:{breadcrumb:[{title:"Home",url:"/"},{title:"HR Report"},{title:"Main Report",active:!0}],pageTitle:"Main Report",rule:"editor"}},{path:"/hr-report/vacation-report",name:"vacation-report",component:function(){return Promise.all([n.e("chunk-83d305e8"),n.e("chunk-cae6a1e8")]).then(n.bind(null,"4f15"))},meta:{breadcrumb:[{title:"Home",url:"/"},{title:"HR Report"},{title:"Vacation Report",active:!0}],pageTitle:"Vacation Report",rule:"editor"}},{path:"/hr-report/excuse-report",name:"excuse-report",component:function(){return Promise.all([n.e("chunk-83d305e8"),n.e("chunk-1997b429")]).then(n.bind(null,"06dc"))},meta:{breadcrumb:[{title:"Home",url:"/"},{title:"HR Report"},{title:"Excuse Report",active:!0}],pageTitle:"Excuse Report",rule:"editor"}},{path:"/hr-report/mission-report",name:"mission-report",component:function(){return Promise.all([n.e("chunk-83d305e8"),n.e("chunk-ff8269ec")]).then(n.bind(null,"3ffa"))},meta:{breadcrumb:[{title:"Home",url:"/"},{title:"HR Report"},{title:"Mission Report",active:!0}],pageTitle:"Mission Report",rule:"editor"}},{path:"/Add/Employee",name:"add-employee",component:function(){return Promise.all([n.e("chunk-83d305e8"),n.e("chunk-235ef0c3")]).then(n.bind(null,"3993"))},meta:{breadcrumb:[{title:"Home",url:"/"},{title:"Employee"},{title:"Add Employee",active:!0}],pageTitle:"Add Employee",rule:"editor"}},{path:"/GetAll/Employee",name:"get-employees",component:function(){return Promise.all([n.e("chunk-83d305e8"),n.e("chunk-176d07c5")]).then(n.bind(null,"8e6c"))},meta:{breadcrumb:[{title:"Home",url:"/"},{title:"Employee"},{title:"GetAll",active:!0}],pageTitle:"Employees",rule:"editor"}},{path:"/Update/Company",name:"update-company",component:function(){return Promise.all([n.e("chunk-83d305e8"),n.e("chunk-c7594afe")]).then(n.bind(null,"c006"))},meta:{breadcrumb:[{title:"Company",url:"/"},{title:"Company",url:"/GetAll/Company"},{title:"Update Company",active:!0}],pageTitle:"Update Company",rule:"editor"}},{path:"/Add/Company",name:"add-company",component:function(){return Promise.all([n.e("chunk-83d305e8"),n.e("chunk-4a90a35c")]).then(n.bind(null,"6ed1"))},meta:{breadcrumb:[{title:"Company",url:"/"},{title:"Company",url:"/GetAll/Company"},{title:"Add Company",active:!0}],pageTitle:"Add Company",rule:"editor"}},{path:"/GetAll/Company",name:"get-companies",component:function(){return Promise.all([n.e("chunk-83d305e8"),n.e("chunk-7a9d8816")]).then(n.bind(null,"d59b"))},meta:{breadcrumb:[{title:"Home",url:"/"},{title:"Company"},{title:"GetAll",active:!0}],pageTitle:"Companies",rule:"editor"}},{path:"/Update/Department",name:"update-department",component:function(){return Promise.all([n.e("chunk-83d305e8"),n.e("chunk-4078406b")]).then(n.bind(null,"13ea"))},meta:{breadcrumb:[{title:"Department",url:"/"},{title:"Department",url:"/GetAll/Department"},{title:"Update Department",active:!0}],pageTitle:"Update Department",rule:"editor"}},{path:"/Add/Department",name:"add-department",component:function(){return Promise.all([n.e("chunk-83d305e8"),n.e("chunk-2f055d14")]).then(n.bind(null,"b4a4"))},meta:{breadcrumb:[{title:"Department",url:"/"},{title:"Department",url:"/GetAll/Department"},{title:"Add Department",active:!0}],pageTitle:"Add Department",rule:"editor"}},{path:"/GetAll/Department",name:"get-departments",component:function(){return Promise.all([n.e("chunk-83d305e8"),n.e("chunk-15e64eff")]).then(n.bind(null,"7e67"))},meta:{breadcrumb:[{title:"Home",url:"/"},{title:"Department"},{title:"GetAll",active:!0}],pageTitle:"Departments",rule:"editor"}},{path:"/Update/Job",name:"update-job",component:function(){return Promise.all([n.e("chunk-83d305e8"),n.e("chunk-f57f99c0")]).then(n.bind(null,"7cb3"))},meta:{breadcrumb:[{title:"Job",url:"/"},{title:"Job",url:"/GetAll/Job"},{title:"Update Job",active:!0}],pageTitle:"Update Job",rule:"editor"}},{path:"/Add/Job",name:"add-job",component:function(){return Promise.all([n.e("chunk-83d305e8"),n.e("chunk-b3ed1122")]).then(n.bind(null,"9ddb"))},meta:{breadcrumb:[{title:"Job",url:"/"},{title:"Job",url:"/GetAll/Job"},{title:"Add Job",active:!0}],pageTitle:"Add Job",rule:"editor"}},{path:"/GetAll/Job",name:"get-jobs",component:function(){return Promise.all([n.e("chunk-83d305e8"),n.e("chunk-3d052f82")]).then(n.bind(null,"7aeb"))},meta:{breadcrumb:[{title:"Home",url:"/"},{title:"Job"},{title:"GetAll",active:!0}],pageTitle:"Jobs",rule:"editor"}},{path:"/location/getall/cities",name:"get-cities",component:function(){return Promise.all([n.e("chunk-83d305e8"),n.e("chunk-a1b2a950")]).then(n.bind(null,"f85f"))},meta:{breadcrumb:[{title:"Home",url:"/"},{title:"Location"},{title:"cities"},{title:"GetAll",active:!0}],pageTitle:"Cities",rule:"editor"}},{path:"/location/add/cities",name:"add-city",component:function(){return Promise.all([n.e("chunk-83d305e8"),n.e("chunk-1f98dc8e")]).then(n.bind(null,"8036"))},meta:{breadcrumb:[{title:"Home",url:"/"},{title:"Location"},{title:"cities",url:"/location/getall/cities"},{title:"Add",active:!0}],pageTitle:"Add City",rule:"editor"}},{path:"/location/update/cities",name:"update-city",component:function(){return Promise.all([n.e("chunk-83d305e8"),n.e("chunk-695e57e8")]).then(n.bind(null,"6751"))},meta:{breadcrumb:[{title:"Home",url:"/"},{title:"Location"},{title:"cities",url:"/location/getall/cities"},{title:"Update",active:!0}],pageTitle:"Update City",rule:"editor"}},{path:"/location/getall/areas",name:"get-areas",component:function(){return Promise.all([n.e("chunk-83d305e8"),n.e("chunk-b86dcee6")]).then(n.bind(null,"3bb7"))},meta:{breadcrumb:[{title:"Home",url:"/"},{title:"Location"},{title:"areas"},{title:"GetAll",active:!0}],pageTitle:"Areas",rule:"editor"}},{path:"/location/add/areas",name:"add-area",component:function(){return Promise.all([n.e("chunk-83d305e8"),n.e("chunk-af88b1e4")]).then(n.bind(null,"946a"))},meta:{breadcrumb:[{title:"Home",url:"/"},{title:"Location"},{title:"areas",url:"/location/getall/areas"},{title:"Add",active:!0}],pageTitle:"Add Area",rule:"editor"}},{path:"/location/update/areas",name:"update-area",component:function(){return Promise.all([n.e("chunk-83d305e8"),n.e("chunk-24c5f13f")]).then(n.bind(null,"4218"))},meta:{breadcrumb:[{title:"Home",url:"/"},{title:"Location"},{title:"areas",url:"/location/getall/areas"},{title:"Update",active:!0}],pageTitle:"Update Area",rule:"editor"}}]},{path:"",component:function(){return n.e("chunk-2d22c341").then(n.bind(null,"f1dd"))},children:[{path:"/login",name:"login",component:function(){return n.e("chunk-797fe44e").then(n.bind(null,"8b48"))}},{path:"/pages/error-404",name:"page-error-404",component:function(){return n.e("chunk-634c71cd").then(n.bind(null,"c0ba"))}}]},{path:"*",redirect:"/pages/error-404"}]});r.afterEach((function(){var e=document.getElementById("loading-bg");e&&(e.style.display="none")})),r.beforeEach((function(e,t,n){return"/pages/error-404"===e.path||e.path,n();
//!Store.state.auth.isUserLoggedIn() &&
})),t["a"]=r},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("a026"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.vueAppClasses,attrs:{id:"app"}},[n("router-view",{on:{setAppClasses:e.setAppClasses}})],1)},r=[],i=(n("96cf"),n("1da1")),c=(n("4917"),n("1dff")),s=n("bb36"),l=s["a"],u=n("2f62"),d={pages:{key:"title",data:[{title:"Home",url:"/",icon:"HomeIcon",is_bookmarked:!1},{title:"Page 2",url:"/page2",icon:"FileIcon",is_bookmarked:!1}]}},h={uid:0,displayName:"Admin",about:"Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie brownie marshmallow.",photoURL:n("3f31"),status:"online",userRole:"admin"},p={AppActiveUser:h,bodyOverlay:!1,isVerticalNavMenuActive:!0,mainLayoutType:c["a"].mainLayoutType||"vertical",navbarSearchAndPinList:d,reduceButton:c["a"].sidebarCollapsed,verticalNavMenuWidth:"default",verticalNavMenuItemsMin:!1,scrollY:0,starredPages:d["pages"].data.filter((function(e){return e.is_bookmarked})),theme:c["a"].theme||"light",themePrimaryColor:c["a"].primary,windowWidth:null},f=p,m={windowBreakPoint:function(e){return e.windowWidth>=1200?"xl":e.windowWidth>=992?"lg":e.windowWidth>=768?"md":e.windowWidth>=576?"sm":"xs"}},g=m,b=(n("ac6a"),n("456d"),n("20d6"),{TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE:function(e,t){e.isVerticalNavMenuActive=t},TOGGLE_REDUCE_BUTTON:function(e,t){e.reduceButton=t},UPDATE_MAIN_LAYOUT_TYPE:function(e,t){e.mainLayoutType=t},UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN:function(e,t){e.verticalNavMenuItemsMin=t},UPDATE_VERTICAL_NAV_MENU_WIDTH:function(e,t){e.verticalNavMenuWidth=t},UPDATE_STARRED_PAGE:function(e,t){var n=e.navbarSearchAndPinList["pages"].data.findIndex((function(e){return e.url==t.url}));if(e.navbarSearchAndPinList["pages"].data[n].is_bookmarked=t.val,t.val)e.starredPages.push(e.navbarSearchAndPinList["pages"].data[n]);else{var a=e.starredPages.findIndex((function(e){return e.url==t.url}));e.starredPages.splice(a,1)}},ARRANGE_STARRED_PAGES_LIMITED:function(e,t){var n=e.starredPages.slice(10);e.starredPages=t.concat(n)},ARRANGE_STARRED_PAGES_MORE:function(e,t){var n=!1,a=e.starredPages[10],o=e.starredPages.slice(0,10);e.starredPages=o.concat(t),e.starredPages.slice(0,10).map((function(e){t.indexOf(e)>-1&&(n=!0)})),n||e.starredPages.splice(10,0,a)},TOGGLE_CONTENT_OVERLAY:function(e,t){e.bodyOverlay=t},UPDATE_PRIMARY_COLOR:function(e,t){e.themePrimaryColor=t},UPDATE_THEME:function(e,t){e.theme=t},UPDATE_WINDOW_WIDTH:function(e,t){e.windowWidth=t},UPDATE_WINDOW_SCROLL_Y:function(e,t){e.scrollY=t},UPDATE_USER_INFO:function(e,t){for(var n=JSON.parse(localStorage.getItem("userInfo"))||e.AppActiveUser,a=0,o=Object.keys(t);a<o.length;a++){var r=o[a];null!=t[r]&&(e.AppActiveUser[r]=t[r],n[r]=t[r])}localStorage.setItem("userInfo",JSON.stringify(n))}}),v=b,C={updateVerticalNavMenuWidth:function(e,t){var n=e.commit;n("UPDATE_VERTICAL_NAV_MENU_WIDTH",t)},updateStarredPage:function(e,t){var n=e.commit;n("UPDATE_STARRED_PAGE",t)},arrangeStarredPagesLimited:function(e,t){var n=e.commit;n("ARRANGE_STARRED_PAGES_LIMITED",t)},arrangeStarredPagesMore:function(e,t){var n=e.commit;n("ARRANGE_STARRED_PAGES_MORE",t)},toggleContentOverlay:function(e){var t=e.commit;t("TOGGLE_CONTENT_OVERLAY")},updateTheme:function(e,t){var n=e.commit;n("UPDATE_THEME",t)},updateUserInfo:function(e,t){var n=e.commit;n("UPDATE_USER_INFO",t)}},k=C,y={isUserLoggedIn:function(){return!!localStorage.getItem("accessToken")}},_={SET_BEARER:function(e,t){s["a"].defaults.headers.common["Authorization"]="Bearer "+t}},A=n("41cb"),T={loginJWT:function(e,t){var n=e.commit;return new Promise((function(e,a){L.login(t.userDetails.username,t.userDetails.password).then((function(t){A["a"].push(A["a"].currentRoute.query.to||"/"),localStorage.setItem("accessToken",t.data.token),n("SET_BEARER",t.data.token),e(t)})).catch((function(e){a(e)}))}))},fetchAccessToken:function(){return new Promise((function(e){L.refreshToken().then((function(t){e(t)}))}))}},x={},w={namespaced:!0,state:y,mutations:_,actions:T,getters:x};a["default"].use(u["a"]);var E=new u["a"].Store({getters:g,mutations:v,state:f,actions:k,modules:{auth:w},strict:!1}),R=!1,P=[];function S(e){P=P.filter((function(t){return t(e)}))}function H(e){P.push(e)}var I,B,L={init:function(){l.interceptors.response.use((function(e){return e}),(function(e){var t=e.config,n=e.response,a=t;if(n&&401===n.status){R||(R=!0,E.dispatch("auth/fetchAccessToken").then((function(e){R=!1,S(e)})));var o=new Promise((function(e){H((function(t){a.headers.Authorization="Bearer "+t,e(l(a))}))}));return o}return Promise.reject(e)}))},login:function(e,t){return l.post("".concat("https://hrattendence.gs-group.nl","/users/login/admin/"),{username:e,password:t})},refreshToken:function(){return l.post("/api/auth/refresh-token",{accessToken:localStorage.getItem("accessToKen")})}},D={data:function(){return{vueAppClasses:[]}},watch:{"$store.state.theme":function(e){this.toggleClassInBody(e)},"$vs.rtl":function(e){document.documentElement.setAttribute("dir",e?"rtl":"ltr")}},methods:{toggleClassInBody:function(e){"dark"==e?(document.body.className.match("theme-semi-dark")&&document.body.classList.remove("theme-semi-dark"),document.body.classList.add("theme-dark")):"semi-dark"==e?(document.body.className.match("theme-dark")&&document.body.classList.remove("theme-dark"),document.body.classList.add("theme-semi-dark")):(document.body.className.match("theme-dark")&&document.body.classList.remove("theme-dark"),document.body.className.match("theme-semi-dark")&&document.body.classList.remove("theme-semi-dark"))},setAppClasses:function(e){this.vueAppClasses.push(e)},handleWindowResize:function(){this.$store.commit("UPDATE_WINDOW_WIDTH",window.innerWidth),document.documentElement.style.setProperty("--vh","".concat(.01*window.innerHeight,"px"))},handleScroll:function(){this.$store.commit("UPDATE_WINDOW_SCROLL_Y",window.scrollY)}},mounted:function(){this.toggleClassInBody(c["a"].theme),this.$store.commit("UPDATE_WINDOW_WIDTH",window.innerWidth);var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))},created:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:L.init(),t=this.$vs.rtl?"rtl":"ltr",document.documentElement.setAttribute("dir",t),window.addEventListener("resize",this.handleWindowResize),window.addEventListener("scroll",this.handleScroll);case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),destroyed:function(){window.removeEventListener("resize",this.handleWindowResize),window.removeEventListener("scroll",this.handleScroll)}},O=D,N=n("2877"),M=Object(N["a"])(O,o,r,!1,null,null,null),$=M.exports,U=n("fb9a"),W=n.n(U),G=(n("c789"),n("04f2"),n("7f7f"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"convstooltip",staticClass:"con-vs-tooltip",on:{mouseleave:e.mouseleavex,mouseenter:e.mouseenterx,mouseup:e.destroy}},[n("transition",{attrs:{name:"tooltip-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.active,expression:"active"}],ref:"vstooltip",staticClass:"vs-tooltip",class:["vs-tooltip-"+(e.positionx||e.position),"vs-tooltip-"+e.color,{"after-none":e.noneAfter}],style:e.style},[e.title?n("h4",[e._v(e._s(e.title))]):e._e(),e._v(" "+e._s(e.text)+" ")])]),e._t("default")],2)}),j=[],J=(n("0b21"),n("c5f6"),{insertBody:function(e){document.body.insertBefore(e,document.body.firstChild)},removeBody:function(e){var t=document.body;t.removeChild(e)},changePosition:function(e,t,n){var a=0,o=0,r=0,i=window.pageYOffset||document.documentElement.scrollTop;e.getBoundingClientRect().top+300>=window.innerHeight?setTimeout((function(){a=n?e.getBoundingClientRect().top-t.clientHeight+i:e.getBoundingClientRect().top-t.clientHeight+e.clientHeight+i}),1):a=n?e.getBoundingClientRect().top+e.clientHeight+i+5:e.getBoundingClientRect().top+i,o=e.getBoundingClientRect().left,r=e.offsetWidth;var c={left:"".concat(o,"px"),top:"".concat(a,"px"),width:"".concat(r,"px")};return c}}),V=n("ee53"),Y={name:"vx-tooltip",props:{title:{default:null,type:[String,Number]},text:{default:null,type:[String,Number]},color:{default:null,type:String},position:{default:"top",type:String},delay:{default:"0s",type:[Number,String]}},data:function(){return{cords:{},active:!1,widthx:"auto",positionx:null,noneAfter:!1}},computed:{style:function(){return{left:this.cords.left,top:this.cords.top,transitionDelay:this.active?this.delay:"0s",background:V["a"].getColor(this.color,1),width:this.widthx}}},methods:{mouseenterx:function(){var e=this;this.active=!0,this.$nextTick((function(){J.insertBody(e.$refs.vstooltip),e.changePosition(e.$refs.convstooltip,e.$refs.vstooltip)}))},mouseleavex:function(){this.active=!1},changePosition:function(e,t){this.noneAfter=!1,this.positionx=null;var n=e.closest(".con-vs-tooltip"),a=window.pageYOffset||document.documentElement.scrollTop,o=n.getBoundingClientRect().top+a-t.clientHeight-4,r=n.getBoundingClientRect().left-t.clientWidth/2+n.clientWidth/2,i=n.clientWidth;"bottom"==this.position?o=n.getBoundingClientRect().top+a+n.clientHeight+4:"left"==this.position?(r=n.getBoundingClientRect().left-t.clientWidth-4,o=n.getBoundingClientRect().top+a+n.clientHeight/2-t.clientHeight/2,-1==Math.sign(r)&&(r=n.getBoundingClientRect().left,o=n.getBoundingClientRect().top+a+n.clientHeight+4,this.positionx="bottom",this.noneAfter=!0)):"right"==this.position&&(r=n.getBoundingClientRect().left+n.clientWidth+4,o=n.getBoundingClientRect().top+a+n.clientHeight/2-t.clientHeight/2,window.innerWidth-(r+t.clientWidth)<=20&&(r=n.getBoundingClientRect().left-t.clientWidth/2-10,o=n.getBoundingClientRect().top+a+n.clientHeight+4,this.positionx="bottom",this.noneAfter=!0)),this.cords={left:"".concat(r,"px"),top:"".concat(o,"px"),width:"".concat(i,"px")}},destroy:function(){var e=this;this.active=!1,this.$nextTick((function(){e.active&&J.removeBody(e.$refs.vstooltip)}))}}},z=Y,F=Object(N["a"])(z,G,j,!1,null,null,null),q=F.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._g({ref:"card",staticClass:"vx-card",class:[{"overflow-hidden":e.tempHidden},{"no-shadow":e.noShadow},{"rounded-none":e.noRadius},{"card-border":e.cardBorder},e.cardClasses],style:e.cardStyles},e.$listeners),[e.hasHeader?n("div",{staticClass:"vx-card__header"},[n("div",{staticClass:"vx-card__title"},[this.$props.title?n("h4",{class:e.titleClasses,style:e.titleStyles},[e._v(e._s(e.title))]):e._e(),this.$props.subtitle?n("h6",{class:e.subtitleClasses,style:e.subtitleStyles},[e._v(e._s(e.subtitle))]):e._e()]),e.hasAction?n("div",{staticClass:"vx-card__actions"},[e._t("actions",[(e.actionButtons||e.collapseAction||e.refreshContentAction||e.removeCardAction)&&!e.codeToggler?n("div",{staticClass:"vx-card__action-buttons"},[e.actionButtons||e.collapseAction?n("feather-icon",{staticClass:"ml-4",class:{rotate180:!e.isContentCollapsed},attrs:{icon:"ChevronUpIcon"},on:{click:e.toggleContent}}):e._e(),e.actionButtons||e.refreshContentAction?n("feather-icon",{staticClass:"ml-4",attrs:{icon:"RotateCwIcon"},on:{click:e.refreshcard}}):e._e(),e.actionButtons||e.removeCardAction?n("feather-icon",{staticClass:"ml-4",attrs:{icon:"XIcon"},on:{click:e.removeCard}}):e._e()],1):e._e(),e.codeToggler&&!e.actionButtons?n("div",{staticClass:"vx-card__code-toggler sm:block hidden"},[n("feather-icon",{class:{"border border-solid border-primary border-t-0 border-r-0 border-l-0":e.showCode},attrs:{icon:"CodeIcon"},on:{click:e.toggleCode}})],1):e._e()])],2):e._e()]):e._e(),n("div",{ref:"content",staticClass:"vx-card__collapsible-content vs-con-loading__container",class:[{collapsed:e.isContentCollapsed},{"overflow-hidden":e.tempHidden}],style:e.StyleItems},[e._t("no-body"),this.$slots.default?n("div",{staticClass:"vx-card__body"},[e._t("default")],2):e._e(),e._t("no-body-bottom"),this.$slots.footer?n("div",{staticClass:"vx-card__footer"},[e._t("footer")],2):e._e()],2),n("div",{directives:[{name:"show",rawName:"v-show",value:this.$slots.codeContainer,expression:"this.$slots.codeContainer"}],ref:"codeContainer",staticClass:"vx-card__code-container",class:{collapsed:!e.showCode},style:e.codeContainerStyles},[n("div",{staticClass:"code-content"},[n("prism",{key:e.$vs.rtl,attrs:{language:e.codeLanguage}},[e._t("codeContainer")],2)],1)])])},X=[],Q=n("8d51"),Z=n.n(Q),ee={name:"vx-card",props:{title:String,subtitle:String,actionButtons:{type:Boolean,default:!1},actionButtonsColor:{type:String,default:"success"},codeToggler:{type:Boolean,default:!1},noShadow:{default:!1,type:Boolean},noRadius:{default:!1,type:Boolean},cardBorder:{default:!1,type:Boolean},codeLanguage:{default:"markup",type:String},collapseAction:{default:!1,type:Boolean},refreshContentAction:{default:!1,type:Boolean},removeCardAction:{default:!1,type:Boolean},headerBackground:{default:"",type:String},cardBackground:{default:"",type:String},contentColor:{default:"",type:String},titleColor:{default:"",type:String},subtitleColor:{default:"#b8c2cc",type:String}},data:function(){return{isContentCollapsed:!1,showCode:!1,maxHeight:null,cardMaxHeight:null,codeContainerMaxHeight:"0px",tempHidden:!1}},computed:{hasAction:function(){return this.$slots.actions||this.actionButtons||this.collapseAction||this.refreshContentAction||this.removeCardAction||this.codeToggler},hasHeader:function(){return this.hasAction||this.title||this.subtitle},StyleItems:function(){return{maxHeight:this.maxHeight}},cardStyles:function(){var e={maxHeight:this.cardMaxHeight};return V["a"].isColor(this.cardBackground)||(e.background=V["a"].getColor(this.cardBackground)),V["a"].isColor(this.contentColor)||(e.color=V["a"].getColor(this.contentColor)),e},codeContainerStyles:function(){return{maxHeight:this.codeContainerMaxHeight}},cardClasses:function(){var e="";return V["a"].isColor(this.cardBackground)&&(e+=" bg-".concat(this.cardBackground)),V["a"].isColor(this.contentColor)&&(e+=" text-".concat(this.contentColor)),e.trim()},titleStyles:function(){return{color:V["a"].getColor(this.titleColor)}},titleClasses:function(){var e="";return V["a"].isColor(this.titleColor)&&(e+=" text-".concat(this.titleColor)),e.trim()},subtitleStyles:function(){var e={};return V["a"].isColor(this.subtitleColor)||(e.color=V["a"].getColor(this.subtitleColor)),e},subtitleClasses:function(){var e="";return V["a"].isColor(this.subtitleColor)&&(e+=" text-".concat(this.subtitleColor)),e.trim()}},methods:{toggleContent:function(){var e=this;this.$refs.content.style.overflow="hidden";var t=this.$refs.content.scrollHeight;"1.5rem"==this.maxHeight?(this.maxHeight="".concat(t,"px"),setTimeout((function(){e.maxHeight="none",e.$refs.content.style.overflow=null}),300)):(this.maxHeight="".concat(t,"px"),setTimeout((function(){e.maxHeight="1.5rem",e.$refs.content.style.overflow=null}),50)),this.isContentCollapsed=!this.isContentCollapsed,this.$emit("toggleCollapse",this.isContentCollapsed)},refreshcard:function(){this.$vs.loading({container:this.$refs.content,scale:.5}),this.tempHidden=!0,this.$emit("refresh",this)},removeRefreshAnimation:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;setTimeout((function(){e.$vs.loading.close(e.$refs.content),e.tempHidden=!1}),t)},removeCard:function(){var e=this,t=this.$refs.card.scrollHeight;this.cardMaxHeight="".concat(t,"px"),this.$el.style.overflow="hidden",setTimeout((function(){e.cardMaxHeight="0px"}),50),this.$emit("remove")},toggleCode:function(){var e=this;this.tempHidden=!0,this.showCode=!this.showCode;var t=this.$refs.codeContainer.scrollHeight;"0px"==this.codeContainerMaxHeight?(this.codeContainerMaxHeight="".concat(t,"px"),setTimeout((function(){e.codeContainerMaxHeight="none",e.tempHidden=!1}),300)):(this.codeContainerMaxHeight="".concat(t,"px"),setTimeout((function(){e.codeContainerMaxHeight="0px",e.tempHidden=!1}),150))}},components:{Prism:Z.a}},te=ee,ne=(n("89b8"),Object(N["a"])(te,K,X,!1,null,null,null)),ae=ne.exports,oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"list"},e._l(e.list,(function(t,a){return n("li",{key:a,staticClass:"list__item"},[n("feather-icon",{staticClass:"w-5 h-5 mr-1",attrs:{icon:e.rtlSpecificIcon}}),n("span",{domProps:{innerHTML:e._s(t)}})],1)})),0)},re=[],ie=(n("a481"),n("6762"),n("2fdb"),{name:"vx-list",props:{list:{type:Array,required:!0},icon:{type:String,default:"ChevronsRightIcon"}},computed:{rtlSpecificIcon:function(){var e=this.icon;return this.$vs.rtl&&(e.includes("Left")?e=e.replace("Left","Right"):e.includes("Right")&&(e=e.replace("Right","Left"))),e}}}),ce=ie,se=(n("dca1"),Object(N["a"])(ce,oe,re,!1,null,null,null)),le=se.exports,ue=function(e,t){var n=t._c;return n("div",{staticClass:"vx-breadcrumb",class:t.data.staticClass},[n("ul",{staticClass:"flex flex-wrap items-center"},[n("li",{staticClass:"inline-flex items-end"},[n("router-link",{attrs:{to:"/"}},[n("feather-icon",{attrs:{icon:"HomeIcon",svgClasses:"h-5 w-5 mb-1 stroke-current text-primary"}})],1),n("span",{staticClass:"breadcrumb-separator mx-2"},[n("feather-icon",{attrs:{icon:t.props.isRTL?"ChevronsLeftIcon":"ChevronsRightIcon",svgClasses:"w-4 h-4"}})],1)],1),t._l(t.props.route.meta.breadcrumb.slice(1,-1),(function(e,a){return n("li",{key:a,staticClass:"inline-flex items-center"},[e.url?n("router-link",{attrs:{to:e.url}},[t._v(t._s(e.title))]):n("span",{staticClass:"text-primary cursor-default"},[t._v(t._s(e.title))]),n("span",{staticClass:"breadcrumb-separator mx-2 flex items-start"},[n("feather-icon",{attrs:{icon:t.props.isRTL?"ChevronsLeftIcon":"ChevronsRightIcon",svgClasses:"w-4 h-4"}})],1)],1)})),n("li",{staticClass:"inline-flex"},[t.props.route.meta.breadcrumb.slice(-1)[0].active?n("span",{staticClass:"cursor-default"},[t._v(t._s(t.props.route.meta.breadcrumb.slice(-1)[0].title))]):t._e()])],2)])},de=[],he={name:"vx-breadcrumb"},pe=he,fe=Object(N["a"])(pe,ue,de,!0,null,null,null),me=fe.exports,ge=n("0a35"),be={functional:!0,name:"feather-icon",props:{icon:{required:!0},svgClasses:{type:[String,Object,Array],default:""},badge:{}},render:function(e,t){var n=t.props,a=t.data;a.staticClass?a.staticClass=a.staticClass+" feather-icon select-none relative":a.staticClass="feather-icon select-none relative";var o=e(ge[n.icon],{class:n.svgClasses}),r=e("span",{class:"feather-icon-badge bg-primary text-white h-5 w-5 absolute rounded-full text-xs flex items-center justify-center",style:"top: -7px; right: -5px"},[n.badge]),i=[o];return n.badge&&i.push(r),e("span",a,i)}},ve=be,Ce=(n("9943"),Object(N["a"])(ve,I,B,!1,null,null,null)),ke=Ce.exports,ye=function(e,t){var n=t._c;return n("div",{staticClass:"vx-input-group flex",class:t.data.staticClass},[t.slots().prepend?n("div",{staticClass:"vx-input-group-prepend flex",class:t.props.prependClasses},[t._t("prepend")],2):t._e(),n("div",{staticClass:"vx-input-group-default flex-grow"},[t._t("default")],2),t.slots().append?n("div",{staticClass:"vx-input-group-append flex",class:t.props.appendClasses},[t._t("append")],2):t._e()])},_e=[],Ae={name:"vx-input-group",props:{prependClasses:{type:String},appendClasses:{type:String}}},Te=Ae,xe=(n("a4fc"),Object(N["a"])(Te,ye,_e,!0,null,null,null)),we=xe.exports,Ee=n("4a7a"),Re=n.n(Ee);a["default"].component(q.name,q),a["default"].component(ae.name,ae),a["default"].component(le.name,le),a["default"].component(me.name,me),a["default"].component(ke.name,ke),a["default"].component(we.name,we),Re.a.props.components.default=function(){return{Deselect:{render:function(e){return e("feather-icon",{props:{icon:"XIcon",svgClasses:"w-4 h-4 mt-1"}})}},OpenIndicator:{render:function(e){return e("feather-icon",{props:{icon:"ChevronDownIcon",svgClasses:"w-5 h-5"}})}}}},a["default"].component(Re.a);n("c1c3"),n("5aea");var Pe=n("6591"),Se=(n("c197"),n("84bf"),n("7bb1"));a["default"].use(W.a),a["default"].prototype.$http=s["a"],a["default"].use(Pe["VueHammer"]),n("3a10"),a["default"].use(Se["a"]),a["default"].config.productionTip=!1,new a["default"]({router:A["a"],store:E,render:function(e){return e($)}}).$mount("#app")},"5aea":function(e,t,n){},"89b8":function(e,t,n){"use strict";var a=n("05e4"),o=n.n(a);o.a},9943:function(e,t,n){"use strict";var a=n("1980"),o=n.n(a);o.a},a4fc:function(e,t,n){"use strict";var a=n("b225"),o=n.n(a);o.a},b225:function(e,t,n){},bb36:function(e,t,n){"use strict";var a=n("bc3a"),o=n.n(a),r="",i=null!==localStorage.getItem("accessToken")?{Authorization:"Bearer "+localStorage.getItem("accessToken")}:{};t["a"]=o.a.create({domain:r,headers:i,validateStatus:function(e){return 401!==e&&403!==e||(localStorage.removeItem("accessToken"),window.location.reload()),e>=200&&e<300},transformResponse:[function(e){return 301===JSON.parse(e).status&&(localStorage.removeItem("accessToken"),window.location.reload()),JSON.parse(e)}]})},c1c3:function(e,t,n){},d722:function(e,t,n){},dca1:function(e,t,n){"use strict";var a=n("d722"),o=n.n(a);o.a},ee53:function(e,t,n){"use strict";n("6762"),n("a481"),n("386d"),n("28a5");t["a"]={darken:function(e,t){var n=e.split(","),a=t<0?0:255,o=t<0?-1*t:t,r=parseInt(n[0].slice(4)),i=parseInt(n[1]),c=parseInt(n[2]);return"rgb("+(Math.round((a-r)*o)+r)+","+(Math.round((a-i)*o)+i)+","+(Math.round((a-c)*o)+c)+")"},getColor:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(/^[#]/.test(e)){var a=this.hexToRgb(e);e=1==t?"rgb(".concat(a.r,",").concat(a.g,",").concat(a.b,")"):"rgba(".concat(a.r,",").concat(a.g,",").concat(a.b,",").concat(t,")")}else/^rgba/.test(e)?-1!=e.search(/.([0-9]\))$/)||n||(e=e.replace(/.?([0-9]\))$/,"".concat(t,")"))):/^(rgb)/.test(e)&&1!=t&&(e=e.replace(/^(rgb)/,"rgba"),e=e.replace(/\)$/,",".concat(t,")")));return e},isColor:function(e){var t=["primary","secondary","success","danger","warning","dark","light"];return t.includes(e)},RandomColor:function(){function e(e,t){return Math.floor(Math.random()*(t-e))+e}return"rgb(".concat(e(0,255),",").concat(e(0,255),",").concat(e(0,255),")")},rColor:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(/^[#]/.test(e)){var n=this.hexToRgb(e);e="rgba(".concat(n.r,",").concat(n.g,",").concat(n.b,",").concat(t,")")}else if(/^[rgb]/.test(e)){var a=e.split(")")[0];/^[rgba]/.test(e)?a+=")":(a.replace("rgb","rgba"),a+=",".concat(t,")")),e=a}var o=["primary","success","danger","warning","dark"];return e?/[#()]/.test(e)?e:o.includes(e)?"rgba(var(--".concat(e,"),").concat(t,")"):"rgba(var(--primary),".concat(t,")"):"rgba(var(--primary),".concat(t,")")},contrastColor:function(e){var t=e;if(/[#]/g.test(e)){var n=this.hexToRgb(e);t="rgb(".concat(n.r,",").concat(n.g,",").concat(n.b,")")}var a=t.replace(/^(rgb|rgba)\(/,"").replace(/\)$/,"").replace(/\s/g,"").split(","),o=(299*a[0]+587*a[1]+114*a[2])/1e3;return o>=128},setCssVariable:function(e,t){"undefined"!==typeof window&&document.documentElement.style.setProperty(e,t)},hexToRgb:function(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;e=e.replace(t,(function(e,t,n,a){return t+t+n+n+a+a}));var n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return n?{r:parseInt(n[1],16),g:parseInt(n[2],16),b:parseInt(n[3],16)}:null},getVariable:function(e,t){return String(e.getPropertyValue(t)).trim()},changeColor:function(e){var t,n=["primary","success","danger","warning","dark"];if(n.includes(e)){var a=getComputedStyle(document.documentElement);t=this.getVariable(a,"--"+e)}else if(/[rgb()]/g.test(e))t=e.replace(/[rgb()]/g,"");else if(/[#]/g.test(e)){var o=this.hexToRgb(e);t="".concat(o.r,",").concat(o.g,",").concat(o.b)}else t="--"+e;return t}}}});
//# sourceMappingURL=app.c379c6af.js.map