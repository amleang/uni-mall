global.webpackJsonp([1],[,,,,,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(16),n=i.n(r),a=i(8),o=!1;var s=function(t){o||i(19)},c=i(2)(n.a,a.a,s,null,null);c.options.__file="F:\\Work\\APP\\uni-mall\\pages\\main\\index.vue",c.esModule&&Object.keys(c.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.default=c.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(14),n=i.n(r),a=i(7),o=!1;var s=function(t){o||i(18)},c=i(2)(n.a,a.a,s,null,null);c.options.__file="F:\\Work\\APP\\uni-mall\\components\\product.vue",c.esModule&&Object.keys(c.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] product.vue: functional components are not supported with templates, they should use render functions."),e.default=c.exports},function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"product"},t._l(t.productData,function(e,r){return i("block",{key:r},[i("view",{staticClass:"product-item",class:r%2==0?"product-one":"product-two"},[i("image",{staticClass:"img",attrs:{src:e.image}}),t._v(" "),i("view",{staticClass:"product-name"},[t._v("\n\t\t\t\t"+t._s(e.title)+"\n\t\t\t")])])])}))};r._withStripped=!0;var n={render:r,staticRenderFns:[]};e.a=n},function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"index"},[i("scroll-view",{staticClass:"index-bd",attrs:{"scroll-y":""}},[i("scroll-view",{staticClass:"swiper-tab",attrs:{id:"tab-bar","scroll-x":"","scroll-left":t.scrollLeft}},t._l(t.tabs,function(e,r){return i("block",{key:e.id},[i("view",{class:["swiper-tab-list",t.currentTab==r?"on":""],attrs:{id:e.id,"data-current":r,eventid:"0-"+r},on:{tap:t.swichNav}},[t._v(t._s(e.name))])])})),t._v(" "),i("swiper",{attrs:{"indicator-dots":!0,autoplay:!0,interval:3e3,duration:1e3}},[i("swiper-item",{attrs:{mpcomid:"0"}},[i("view",{staticClass:"swiper-item"},[i("image",{staticStyle:{width:"100%",height:"350px"},attrs:{src:"http://img.anlyzhao.com/3188799691524b4d99754b989ff075bb.jpg",mode:"aspectFill"}})])]),t._v(" "),i("swiper-item",{attrs:{mpcomid:"1"}},[i("view",{staticClass:"swiper-item"},[i("image",{staticStyle:{width:"100%",height:"350px"},attrs:{src:"http://img.anlyzhao.com/74f833d766ac445aaef60e6c5b9e0dfe.jpg",mode:"aspectFill"}})])]),t._v(" "),i("swiper-item",{attrs:{mpcomid:"2"}},[i("view",{staticClass:"swiper-item"},[t._v("C")])])],1),t._v(" "),i("view",{staticClass:"product-list"},[i("product",{attrs:{productData:t.productList,mpcomid:"3"}})],1)],1)],1)};r._withStripped=!0;var n={render:r,staticRenderFns:[]};e.a=n},,,,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(i(1)),n=a(i(5));function a(t){return t&&t.__esModule?t:{default:t}}i(0).default;new r.default(n.default).$mount(),e.default={config:{navigationBarTitleText:"首页"}}},,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i(0).default;e.default={props:{productData:{type:Array,default:function(){return[]}}}}},,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(i(17)),n=a(i(6));function a(t){return t&&t.__esModule?t:{default:t}}var o=i(0).default;e.default={components:{product:n.default},data:function(){return{productList:[],title:"tabbar",scrollLeft:0,isClickChange:!1,currentTab:0,tabs:[{name:"关注",id:"guanzhu"},{name:"推荐",id:"tuijian"},{name:"体育",id:"tiyu"},{name:"热点",id:"redian"},{name:"财经",id:"caijing"},{name:"娱乐",id:"yule"},{name:"军事",id:"junshi"},{name:"历史",id:"lishi"},{name:"本地",id:"bendi"}]}},onLoad:function(){this.loadData(),o.getSystemInfo({success:function(t){console.log("res=>",t)}})},onUnload:function(){this.scrollLeft=0,this.isClickChange=!1,this.currentTab=0},methods:{loadData:function(){var t=this;"refresh"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"add")&&(this.productList=[]),[{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg",title:"Apple iPhone X 256GB 深空灰色 移动联通电信4G手机",originalPrice:9999,favourPrice:8888,tip:"自营"},{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg",title:"Apple iPad 平板电脑 2018年新款9.7英寸",originalPrice:3499,favourPrice:3399,tip:"优惠"},{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product3.jpg",title:"Apple MacBook Pro 13.3英寸笔记本电脑（2017款Core i5处理器/8GB内存/256GB硬盘 MPXT2CH/A）",originalPrice:12999,favourPrice:10688,tip:"秒杀"},{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product4.jpg",title:"Kindle Paperwhite电纸书阅读器 电子书墨水屏 6英寸wifi 黑色",originalPrice:999,favourPrice:958,tip:"秒杀"},{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product5.jpg",title:"微软（Microsoft）新Surface Pro 二合一平板电脑笔记本 12.3英寸（i5 8G内存 256G存储）",originalPrice:8888,favourPrice:8288,tip:"优惠"},{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product6.jpg",title:"Apple Watch Series 3智能手表（GPS款 42毫米 深空灰色铝金属表壳 黑色运动型表带 MQL12CH/A）",originalPrice:2899,favourPrice:2799,tip:"自营"}].forEach(function(e){t.productList.push(e)})},getWidth:function(t){return new Promise(function(e,i){o.createSelectorQuery().select("#"+t).fields({size:!0,scrollOffset:!0},function(i){"tab-bar"===t&&console.log("id=",t,"数据:",i),e(i)}).exec()})},swichNav:function(){var t,e=(t=r.default.mark(function t(e){var i,n;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.currentTab!==e.target.dataset.current){t.next=4;break}return t.abrupt("return",!1);case 4:return t.next=6,this.getWidth("tab-bar");case 6:i=t.sent,n=i.scrollLeft,this.scrollLeft=n,this.isClickChange=!0,this.currentTab=e.target.dataset.current;case 11:case"end":return t.stop()}},t,this)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,i){return function r(n,a){try{var o=e[n](a),s=o.value}catch(t){return void i(t)}if(!o.done)return Promise.resolve(s).then(function(t){r("next",t)},function(t){r("throw",t)});t(s)}("next")})});return function(t){return e.apply(this,arguments)}}()}}},,function(t,e){},function(t,e){}],[12]);
//# sourceMappingURL=../../../../.sourcemap/pages/main/index.js.map