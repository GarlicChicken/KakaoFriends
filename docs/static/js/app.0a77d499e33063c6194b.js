webpackJsonp([1],{"5NBI":function(t,i){},CsFl:function(t,i){},EsY3:function(t,i){},HsEl:function(t,i){},MypO:function(t,i){},NHnr:function(t,i,o){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=o("7+uW"),e={render:function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{attrs:{id:"Header"}},[o("div",{attrs:{id:"navBar"}},[o("router-link",{attrs:{id:"Home",to:"/KakaoFriends/"}},[t._v("HOME")]),t._v(" "),o("div",{staticClass:"linkTo inline",attrs:{id:"listIcon"},on:{click:function(i){t.linkTo("/KakaoFriends/Collection")}}},[o("img",{attrs:{id:"mobileIcon",src:"https://i.pinimg.com/236x/63/35/e6/6335e6f679f84cc671f61ec2fb653701--kakao-wallpaper.jpg"}}),t._v(" "),t._l(t.Mylist,function(t){return o("img",{staticClass:"iconImage",attrs:{src:t.url}})}),t._v(" "),t.totalprice.toFixed(2)>0?o("span",{staticClass:"inline",attrs:{id:"priceIcon"}},[t._v(" \n                Total "),o("br"),t._v(" $"+t._s(t.totalprice.toFixed(2))+"\n            ")]):t._e()],2),t._v(" "),o("router-link",{attrs:{id:"Account",to:"#"}},[t._v("ACCOUNT")])],1)])},staticRenderFns:[]};var n=o("VU/8")({props:["Mylist","totalprice"],methods:{linkTo:function(t){this.$router.push(t)}}},e,!1,function(t){o("5NBI")},null,null).exports,a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"Footer"}},[i("div",{attrs:{id:"bottomMenu1"}},[this._v("\n        Follow Us\n        "),i("span",{attrs:{id:"AccountFAQ"}},[this._v(" Account FAQ ")])]),this._v(" "),i("div",{attrs:{id:"bottomMenu2"}},[this._v("\n        Privacy Policy  Conditions of Use\n    ")]),this._v(" "),i("div",{attrs:{id:"copyright"}},[this._v("\n        Copyright © Kakao IX Corp.\n    ")])])}]};var l=o("VU/8")({},a,!1,function(t){o("CsFl")},null,null).exports,c={render:function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("transition",{attrs:{name:"modal"}},[o("div",{staticClass:"modal-mask"},[o("div",{staticClass:"modal-wrapper"},[o("button",{staticClass:"closeModal linkTo",on:{click:function(i){t.$emit("close")}}},[o("i",{staticClass:"fas fa-times"})]),t._v(" "),o("div",{staticClass:"modal-container"},[o("button",{staticClass:"closeModal linkTo",attrs:{id:"mobileCloseModal"},on:{click:function(i){t.$emit("close")}}},[o("i",{staticClass:"fas fa-times"})]),t._v(" "),o("div",{staticClass:"modal-header"},[t._t("header",[t._v("\n                        default header\n                    ")])],2),t._v(" "),o("div",{staticClass:"modal-body"},[t._t("body",[t._v("\n                        default bodty\n                    ")])],2),t._v(" "),o("div",{staticClass:"modal-footer"},[t._t("footer",[t._v("\n                        footer\n                    ")])],2)])])])])},staticRenderFns:[]};var r=o("VU/8")(null,c,!1,function(t){o("WHe3")},null,null).exports,d=o("kxiW"),u=o.n(d),p=(o("881v"),u.a.initializeApp({apiKey:"AIzaSyCP4OvD39_IyykMKgO0e3947qPNWWjJVv8",authDomain:"kakao-friends.firebaseapp.com",databaseURL:"https://kakao-friends.firebaseio.com",projectId:"kakao-friends",storageBucket:"kakao-friends.appspot.com",messagingSenderId:"637542420757"}));p.firestore().settings({timestampsInSnapshots:!0});var v=p.firestore(),h={data:function(){return{Mylist:[],listKey:[],products:[],isLoading:!1,totalprice:0,showModal:!1,productInfo:[],infoImageURL:[],productsIndex:null}},components:{Header:n,Footer:l,Modal:r},created:function(){var t=this;v.collection("products").orderBy("id","asc").onSnapshot(function(i){i.docChanges().forEach(function(i){var o=i.doc;t.products.push({id:o.data().id,name:o.data().name,content:o.data().content,price:o.data().price,url:o.data().url+"1.jpg",choice:!1})}),t.isLoading=!0})},methods:{buyProduct:function(t,i){this.showModal=!1,!0===t.choice?this.$router.push("/KakaoFriends/Collection"):(this.MylistUpdate("add",t,i),this.$router.push("/KakaoFriends/Collection"))},MylistUpdate:function(t,i,o){if("add"===t)this.products[o].choice=!0,this.totalprice=this.totalprice+i.price,this.Mylist.push(i);else for(var s in this.products[o].choice=!1,this.totalprice=this.totalprice-i.price,this.Mylist)if(this.Mylist[s].id===i.id){this.Mylist.splice(s,1);break}},showProductInfo:function(t,i){this.showModal=!0,this.productInfo=t,this.productsIndex=i,this.infoImageURL[0]=this.productInfo.url.replace("MODEL","MAIN");for(var o=1;o<5;o++)this.infoImageURL[o]=this.infoImageURL[0].replace("MAIN_C_00001","DETAIL_0000"+o)}}},f={render:function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{attrs:{id:"app"}},[o("Header",{attrs:{Mylist:t.Mylist,totalprice:t.totalprice}}),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading,expression:"!isLoading"}],staticClass:"spinner"},[o("div",{staticClass:"bounce1"}),t._v(" "),o("div",{staticClass:"bounce2"}),t._v(" "),o("div",{staticClass:"bounce3"})]),t._v(" "),o("router-view",{attrs:{products:t.products,Mylist:t.Mylist},on:{MylistUpdate:t.MylistUpdate,showProductInfo:t.showProductInfo}}),t._v(" "),o("modal",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],on:{close:function(i){t.showModal=!1}}},[o("div",{attrs:{slot:"header"},slot:"header"},[o("img",{staticClass:"infoMainImage",attrs:{src:t.infoImageURL[0]}}),t._v(" "),o("div",{staticClass:"infoHeaderContent"},[o("h2",[t._v(t._s(t.productInfo.name))]),t._v(" "),o("p",[t._v("$ "+t._s(t.productInfo.price))]),t._v(" "),o("p",{staticClass:"infoDescription"},[t._v(t._s(t.productInfo.content))]),t._v(" "),!1===t.productInfo.choice?o("button",{staticClass:"infoAddmylist linkTo",on:{click:function(i){t.MylistUpdate("add",t.productInfo,t.productsIndex)}}},[t._v("My list")]):o("button",{staticClass:"infoDelmylist linkTo",on:{click:function(i){t.MylistUpdate("del",t.productInfo,t.productsIndex)}}},[t._v("My list")]),t._v(" "),o("button",{staticClass:"infoBuybutton linkTo",on:{click:function(i){t.buyProduct(t.productInfo,t.productsIndex)}}},[t._v("Buy")])])]),t._v(" "),o("div",{staticClass:"infoContent",attrs:{slot:"body"},slot:"body"},[o("span",{staticClass:"infoDetailSub"},[t._v("DETAILS")]),t._v(" "),t._l(t.infoImageURL,function(i){return o("img",{directives:[{name:"show",rawName:"v-show",value:i!=t.infoImageURL[0],expression:"image!=infoImageURL[0]"}],staticClass:"infoDetailImage",attrs:{src:i}})})],2),t._v(" "),o("div",{attrs:{slot:"footer"},slot:"footer"})]),t._v(" "),o("Footer")],1)},staticRenderFns:[]};var m=o("VU/8")(h,f,!1,function(t){o("XoEX")},null,null).exports,_=o("/ocq"),C={props:["products","listCountMax"],data:function(){return{listCount:10}},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{MylistUpdate:function(t,i){!1===t.choice?this.$emit("MylistUpdate","add",t,i):this.$emit("MylistUpdate","del",t,i)},showProductInfo:function(t,i){this.$emit("showProductInfo",t,i)},handleScroll:function(){(window.scrollY+window.innerHeight)/document.body.clientHeight*100>99&&this.listCount<this.products.length&&(this.listCount=this.listCount+10)}}},b={render:function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{attrs:{id:"main"}},[o("ul",{attrs:{id:"products"}},t._l(t.products,function(i,s){return s<t.listCount?o("li",{key:i.id,staticClass:"product inline"},[o("img",{staticClass:"thumbnail linkTo",attrs:{src:i.url,alt:i.name},on:{click:function(o){t.showProductInfo(i,s)}}}),t._v(" "),o("div",{staticClass:"caption"},[o("p",{staticClass:"description linkTo",on:{click:function(o){t.showProductInfo(i,s)}}},[t._v(t._s(i.content))]),t._v(" "),o("p",{staticClass:"NameAndPrice"},[t._v(t._s(i.name)+" $"+t._s(i.price))]),t._v(" "),!1===i.choice?o("button",{staticClass:"addMylist linkTo",on:{click:function(o){t.MylistUpdate(i,s)}}},[t._v("My list")]):o("button",{staticClass:"delMylist linkTo",on:{click:function(o){t.MylistUpdate(i,s)}}},[t._v("My list")])])]):t._e()}))])},staticRenderFns:[]};var y=o("VU/8")(C,b,!1,function(t){o("HsEl")},null,null).exports,k={render:function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("transition",{attrs:{name:"Mobile"}},[o("div",{staticClass:"Mobile-mask"},[o("div",{staticClass:"Mobile-wrapper"},[o("div",{staticClass:"Mask",on:{click:function(i){t.$emit("close")}}}),t._v(" "),o("div",{staticClass:"Mobile-top-container"},[o("div",{staticClass:"Mobile-top"},[t._t("top",[t._v("\n                        default\n                    ")])],2)]),t._v(" "),o("div",{staticClass:"Mobile-bottom-container"},[o("div",{staticClass:"Mobile-bottom"},[t._t("bottom",[t._v("\n                        default\n                    ")])],2)])])])])},staticRenderFns:[]};var M={props:["Mylist","products"],data:function(){return{totalprice:0,checked:[],productCount:[],showMobileController:!1,mobileProduct:[],mobileProductCount:0,mylistIndex:null}},components:{MobileController:o("VU/8")(null,k,!1,function(t){o("MypO")},"data-v-fdbaf804",null).exports},created:function(){for(var t in this.Mylist)this.checked[t]=!0,this.productCount[t]=1,this.totalprice=this.totalprice+this.Mylist[t].price},updated:function(){!1===this.showMobileController&&(this.mobileProductCount=0);var t=0;for(var i in this.Mylist)!0===this.checked[i]&&(t+=this.Mylist[i].price*this.productCount[i]);this.totalprice=t},methods:{delMylist:function(t,i){var o=this.findIndex(t.id,"products"),s=this.findIndex(t.id,"mylist");this.productCount.splice(s,1),this.$emit("MylistUpdate","del",t,o),this.totalprice=this.totalprice-t.price,"mobile"===i&&(this.showMobileController=!1)},showProductInfo:function(t){var i=this.findIndex(t.id,"products");this.$emit("showProductInfo",t,i)},MobileControl:function(t,i){var o=this.findIndex(t.id,"Mylist");!1===this.showMobileController?(this.showMobileController=!0,this.mobileProduct=t,this.mylistIndex=o):(0===this.mobileProductCount&&(this.mobileProductCount=this.productCount[o]),"plus"===i?this.mobileProductCount=this.mobileProductCount+1:"minus"===i?this.mobileProductCount=this.mobileProductCount-1:(this.productCount[o]=this.mobileProductCount,this.mobileProductCount=0,this.showMobileController=!1))},findIndex:function(t,i){if("products"===i){for(var o in this.products)if(this.products[o].id===t)return o}else for(var o in this.Mylist)if(this.Mylist[o].id===t)return o}}},I={render:function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{attrs:{id:"collection"}},[o("div",{attrs:{id:"checkoutSub"}},[o("span",{attrs:{id:"mylistTitle"}},[t._v("My list")]),t._v(" "),t._m(0),t._v(" "),o("div",{staticClass:"inline",attrs:{id:"listPrice"}},[o("span",{staticClass:"grey"},[t._v("$ 00.00")]),o("br"),t._v("$ "+t._s(t.totalprice.toFixed(2)))]),t._v(" "),o("button",{staticClass:"linkTo",attrs:{id:"checkoutButton"}},[t._v("CHECK OUT")])]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:0===t.Mylist.length,expression:"Mylist.length===0"}],staticClass:"inline",attrs:{id:"noItem"}},[o("div",{staticStyle:{"background-image":"url(https://us.kakaofriends.com/img/img_emoticon.ae3b0ae7.png)"},attrs:{id:"noItemImage"}}),t._v("\n        There is no item added\n    ")]),t._v(" "),o("ul",{attrs:{id:"collectionList"}},t._l(t.Mylist,function(i,s){return o("li",{staticClass:"list"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.checked[s],expression:"checked[index]"}],attrs:{id:"listCheck"+s,type:"checkbox"},domProps:{checked:Array.isArray(t.checked[s])?t._i(t.checked[s],null)>-1:t.checked[s]},on:{change:function(i){var o=t.checked[s],e=i.target,n=!!e.checked;if(Array.isArray(o)){var a=t._i(o,null);e.checked?a<0&&t.$set(t.checked,s,o.concat([null])):a>-1&&t.$set(t.checked,s,o.slice(0,a).concat(o.slice(a+1)))}else t.$set(t.checked,s,n)}}}),t._v(" "),o("label",{attrs:{for:"listCheck"+s}}),t._v(" "),o("img",{staticClass:"mylistImage linkTo",attrs:{src:i.url},on:{click:function(o){t.showProductInfo(i)}}}),t._v(" "),o("div",{staticClass:"listContent inline"},[o("span",{staticClass:"mylistProductName linkTo",on:{click:function(o){t.showProductInfo(i)}}},[t._v(t._s(i.name))]),o("br"),t._v(" "),o("span",{staticClass:"grey"},[t._v("$"+t._s(i.price)+" X "+t._s(t.productCount[s]))])]),t._v(" "),o("div",{staticClass:"mylistControl"},[o("select",{directives:[{name:"model",rawName:"v-model",value:t.productCount[s],expression:"productCount[index]"}],staticClass:"productCount",on:{change:function(i){var o=Array.prototype.filter.call(i.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.productCount,s,i.target.multiple?o:o[0])}}},t._l(10,function(i){return o("option",{domProps:{value:i}},[t._v(t._s(i))])})),t._v(" "),o("div",{staticClass:"totalPrice inline"},[t._v("$"+t._s(i.price*t.productCount[s]))]),t._v(" "),o("span",{staticClass:"linkTo grey",attrs:{id:"removeProduct"},on:{click:function(o){t.delMylist(i)}}},[o("i",{staticClass:"fas fa-times"})])]),t._v(" "),o("span",{staticClass:"mobileContorl linkTo",on:{click:function(o){t.MobileControl(i)}}},[o("i",{staticClass:"fas fa-ellipsis-v grey"})]),t._v(" "),s+1<t.Mylist.length?o("hr"):t._e()])})),t._v(" "),o("MobileController",{directives:[{name:"show",rawName:"v-show",value:t.showMobileController,expression:"showMobileController"}],on:{close:function(i){t.showMobileController=!1}}},[o("div",{attrs:{slot:"top"},slot:"top"},[o("div",{attrs:{id:"mobileControlTop"}},[o("div",{staticClass:"mobileBtn linkTo",on:{click:function(i){t.MobileControl(t.mobileProduct,"minus")}}},[o("i",{staticClass:"fas fa-minus"})]),t._v(" "),o("div",{staticClass:"mobileBtn"},[0===t.mobileProductCount?o("span",[t._v(t._s(t.productCount[t.mylistIndex]))]):o("span",[t._v(t._s(t.mobileProductCount))])]),t._v(" "),o("div",{staticClass:"mobileBtn linkTo",on:{click:function(i){t.MobileControl(t.mobileProduct,"plus")}}},[o("i",{staticClass:"fas fa-plus"})]),t._v(" "),o("hr",{attrs:{id:"mobileLine"}}),t._v(" "),o("div",{staticClass:"mobileOkBtn linkTo",on:{click:function(i){t.MobileControl(t.mobileProduct,"ok")}}},[t._v("OK")])])]),t._v(" "),o("div",{attrs:{slot:"bottom"},slot:"bottom"},[o("div",{staticClass:"linkTo",attrs:{id:"mobileControlBottom"},on:{click:function(i){t.delMylist(t.mobileProduct,"mobile")}}},[t._v("\n                Delete\n            ")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"inline",attrs:{id:"listSub"}},[i("span",{staticClass:"grey"},[this._v("Delivery")]),i("br"),this._v("Total")])}]};var w=o("VU/8")(M,I,!1,function(t){o("EsY3")},null,null).exports;s.a.use(_.a);var g=new _.a({mode:"history",routes:[{path:"/KakaoFriends/",name:"Main",component:y},{path:"/KakaoFriends/Collection",name:"Collection",component:w}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:g,components:{App:m},template:"<App/>"})},WHe3:function(t,i){},XoEX:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.0a77d499e33063c6194b.js.map