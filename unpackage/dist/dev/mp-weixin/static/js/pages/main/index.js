global.webpackJsonp([1],[,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(13),s=n.n(i),r=n(6),a=!1;var o=function(t){a||n(15)},u=n(2)(s.a,r.a,o,null,null);u.options.__file="F:\\Work\\APP\\uni-mall\\pages\\main\\index.vue",u.esModule&&Object.keys(u.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.default=u.exports},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"index"},[n("scroll-view",{staticClass:"swiper-tab",attrs:{id:"tab-bar","scroll-x":"","scroll-left":t.scrollLeft}},t._l(t.tabs,function(e,i){return n("block",{key:e.id},[n("view",{class:["swiper-tab-list",t.currentTab==i?"on":""],attrs:{id:e.id,"data-current":i,eventid:"0-"+i},on:{tap:t.swichNav}},[t._v(t._s(e.name))])])})),t._v(" "),n("swiper",{attrs:{"indicator-dots":!0,autoplay:!0,interval:3e3,duration:1e3}},[n("swiper-item",{attrs:{mpcomid:"0"}},[n("view",{staticClass:"swiper-item"},[t._v("A")])]),t._v(" "),n("swiper-item",{attrs:{mpcomid:"1"}},[n("view",{staticClass:"swiper-item"},[t._v("B")])]),t._v(" "),n("swiper-item",{attrs:{mpcomid:"2"}},[n("view",{staticClass:"swiper-item"},[t._v("C")])])],1),t._v(" "),n("swiper",{staticClass:"swiper-box",attrs:{current:t.currentTab,duration:"300",eventid:"2"},on:{change:t.bindChange}},t._l(t.newsitems,function(e,i){return n("block",{key:i},[n("swiper-item",{attrs:{mpcomid:"3-"+i}},[n("scroll-view",{staticClass:"index-bd",attrs:{"scroll-y":"",eventid:"1-"+i},on:{scrolltolower:function(e){t.loadMore(i)}}},t._l(e,function(e,i){return n("block",{key:i},[n("view",{staticClass:"tab-list"},[t._v(t._s(e.name)+"-"+t._s(e.label))])])}))],1)],1)}))],1)};i._withStripped=!0;var s={render:i,staticRenderFns:[]};e.a=s},,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(n(1)),s=r(n(5));function r(t){return t&&t.__esModule?t:{default:t}}n(0).default;new i.default(s.default).$mount(),e.default={config:{navigationBarTitleText:"首页"}}},,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,s=n(14),r=(i=s)&&i.__esModule?i:{default:i};function a(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function i(s,r){try{var a=e[s](r),o=a.value}catch(t){return void n(t)}if(!a.done)return Promise.resolve(o).then(function(t){i("next",t)},function(t){i("throw",t)});t(o)}("next")})}}var o=n(0).default;e.default={data:function(){return{title:"tabbar",scrollLeft:0,isClickChange:!1,currentTab:0,tabs:[{name:"关注",id:"guanzhu"},{name:"推荐",id:"tuijian"},{name:"体育",id:"tiyu"},{name:"热点",id:"redian"},{name:"财经",id:"caijing"},{name:"娱乐",id:"yule"},{name:"军事",id:"junshi"},{name:"历史",id:"lishi"},{name:"本地",id:"bendi"}],newsitems:[]}},onLoad:function(){this.newsitems=this.randomfn(),o.getSystemInfo({success:function(t){o.showToast({title:"height=>"+t.windowHeight}),console.log("res=>",t)}})},onUnload:function(){this.scrollLeft=0,this.isClickChange=!1,this.currentTab=0},methods:{bindChange:function(){var t=a(r.default.mark(function t(e){var n,i,s,a,u,c,l,d,f;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.target.current,!this.isClickChange){t.next=5;break}return this.currentTab=n,this.isClickChange=!1,t.abrupt("return");case 5:return t.next=7,this.getWidth("tab-bar");case 7:i=t.sent,s=i.scrollLeft,a=0,u=0;case 11:if(!(u<n)){t.next=19;break}return t.next=14,this.getWidth(this.tabs[u].id);case 14:c=t.sent,a+=c.width;case 16:u++,t.next=11;break;case 19:return l=o.getSystemInfoSync().windowWidth,t.next=22,this.getWidth(this.tabs[n].id);case 22:d=t.sent,f=d.width,a+f-s>l&&(this.scrollLeft=a+f-l),a<s&&(this.scrollLeft=a),this.isClickChange=!1,this.currentTab=n;case 28:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),getWidth:function(t){return new Promise(function(e,n){o.createSelectorQuery().select("#"+t).fields({size:!0,scrollOffset:!0},function(n){"tab-bar"===t&&console.log("id=",t,"数据:",n),e(n)}).exec()})},swichNav:function(){var t=a(r.default.mark(function t(e){var n,i;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.currentTab!==e.target.dataset.current){t.next=4;break}return t.abrupt("return",!1);case 4:return t.next=6,this.getWidth("tab-bar");case 6:n=t.sent,i=n.scrollLeft,this.scrollLeft=i,this.isClickChange=!0,this.currentTab=e.target.dataset.current;case 11:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),loadMore:function(t){for(var e=this.newsitems[t][this.newsitems[t].length-1].label,n=this.newsitems[t][this.newsitems[t].length-1].name,i=1;i<=10;i++)this.newsitems[t].push({name:n,label:i+e})},randomfn:function(){for(var t=[],e=0,n=this.tabs.length;e<n;e++){for(var i=[],s=1;s<=20;s++)i.push({name:this.tabs[e].name,label:s});t.push(i)}return t}}}},,function(t,e){}],[10]);
//# sourceMappingURL=../../../../.sourcemap/pages/main/index.js.map