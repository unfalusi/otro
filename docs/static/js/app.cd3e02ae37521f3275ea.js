webpackJsonp([1],{"/1yj":function(t,e){},JDdd:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),a=n("mtWM"),s=n.n(a),o={mounted:function(){var t=this;s.a.get("https://randomuser.me/api/").then(function(e){t.persona=e.data.results[0]})},data:function(){return{persona:null}},computed:{datosPersona:function(){return{nombre:this.persona.name.first,foto:this.persona.picture.large,correoe:this.persona.email}}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.persona?[n("h1",{domProps:{textContent:t._s(t.datosPersona.nombre)}}),t._v(" "),n("h2",{domProps:{textContent:t._s(t.datosPersona.correoe)}}),t._v(" "),n("img",{attrs:{src:t.datosPersona.foto}})]:t._t("default",[t._v("Cargando...")])],2)},staticRenderFns:[]};var i={components:{persona:n("VU/8")(o,u,!1,function(t){n("/1yj")},null,null).exports}},l={render:function(){var t=this.$createElement;return(this._self._c||t)("persona")},staticRenderFns:[]};var v=n("VU/8")(i,l,!1,function(t){n("szS6")},null,null).exports,c=n("/ocq"),_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.mensaje))]),t._v(" "),n("h2",[t._v("Links esenciales")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),n("br"),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var h=n("VU/8")({name:"HelloWorld",data:function(){return{mensaje:"Vente paca"}}},_,!1,function(t){n("JDdd")},"data-v-570bd19e",null).exports;r.a.use(c.a);var p=new c.a({routes:[{path:"/",name:"HelloWorld",component:h}]});r.a.config.productionTip=!1,new r.a({el:"#app",router:p,components:{App:v},template:"<App/>"})},szS6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.cd3e02ae37521f3275ea.js.map