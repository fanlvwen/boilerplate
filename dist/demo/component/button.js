// { "framework": "Vue" }
!function(t){function e(i){if(o[i])return o[i].exports;var n=o[i]={exports:{},id:i,loaded:!1};return t[i].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}({0:function(t,e,o){var i,n,r=[];r.push(o(131)),r.push(o(132)),i=o(133);var s=o(134);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=s.render,n.staticRenderFns=s.staticRenderFns,n._scopeId="data-v-4503b4db",n.style=n.style||{},r.forEach(function(t){for(var e in t)n.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,r),t.exports=i,t.exports.el="true",new Vue(t.exports)},131:function(t,e){t.exports={header:{backgroundColor:"#FF0000",flex:1,flexDirection:"row"},tz:{color:"#FF0000"},logo:{width:300,height:300,marginTop:80},k1:{alignItems:"center"},titleback:{flex:1,alignItems:"center"},title:{color:"#FFFFFF",flex:1,marginTop:73,fontWeight:"bold"},leftimage:{width:30,height:45,bottom:25,left:30,position:"absolute"},rightimage:{width:45,height:45,bottom:23,right:32,position:"absolute"},bottomline:{height:1,backgroundColor:"#000000",position:"absolute",bottom:0,left:0,right:0,flex:1},btn:{backgroundColor:"#0085ee",height:100,width:500,marginTop:50,borderRadius:20,alignItems:"center",justifyContent:"center","backgroundColor:active":"#006ce7"}}},132:function(t,e){t.exports={text:{color:"#ffffff",fontSize:30},"text-disabled":{color:"#b4b4b4",fontSize:30},button:{height:100,backgroundColor:"#ff4800",alignItems:"center",justifyContent:"center",color:"#ffffff",borderRadius:8,"backgroundColor:active":"#ff1b08"},"button-disabled":{height:100,backgroundColor:"#eeeeee",alignItems:"center",justifyContent:"center",color:"#ffffff",borderRadius:8,"backgroundColor:active":"#eeeeee"}}},133:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{text:{type:String},color:{type:String},disabled:{default:!1},type:{type:String,default:"text"},font_size:{default:20}},data:function(){return{visiable:!0}},methods:{oninput:function(t){this.$emit("oninput",t),this.visiable=""!=t.value},onclick:function(){this.disabled||this.$emit("onclick")},panstart:function(){this.disabled||(this.bgcolor="#ff1b08")},panend:function(){this.disabled||(this.bgcolor="#ff4800")},setenable:function(){},onclose:function(){this.value=""}},created:function(){this.visiable=""==!this.value},ready:function(){}},t.exports=e.default},134:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:[t.disabled?"button-disabled":"button"],on:{click:t.onclick}},[o("text",{class:[t.disabled?"text-disabled":"text"]},[t._v(t._s(t.text))])])},staticRenderFns:[]}}});