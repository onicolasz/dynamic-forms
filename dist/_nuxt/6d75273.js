(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{298:function(t,n,o){var content=o(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(66).default)("070914f4",content,!0,{sourceMap:!1})},299:function(t,n,o){"use strict";o(298)},300:function(t,n,o){var e=o(65)((function(i){return i[1]}));e.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap);"]),e.push([t.i,'*[data-v-63951976]{font-family:var(--formFont),"Lato","Helvetica","Arial",sans-serif;letter-spacing:-.2px;margin:0;padding:0}.field-container-btn button[data-v-63951976]{align-items:center;border:none;border-radius:5px;box-shadow:0 0 10px rgba(0,0,0,.2);display:flex;display:inline;font-size:1.2vw;justify-content:center;margin-top:12px;max-width:-moz-fit-content;max-width:fit-content;padding:4px 12px;text-align:center;width:100%}.loader[data-v-63951976]{padding:0 8px}.loader span[data-v-63951976]{animation:animate-63951976 1s ease-in-out infinite;border-radius:50%;display:inline-block;height:.5vw;margin-right:.2vw;transition:all .3s;width:.5vw}@keyframes animate-63951976{0%{transform:scale(2)}50%{transform:scale(1.5)}to{transform:scale(1)}}.loader span[data-v-63951976]:first-child{animation-delay:0}.loader span[data-v-63951976]:nth-child(2){animation-delay:.1s}.loader span[data-v-63951976]:nth-child(3){animation-delay:.2s}@media screen and (max-width:768px){.field-container-btn button[data-v-63951976]{font-size:2vw}}@media screen and (max-width:480px){.field-container-btn button[data-v-63951976]{font-size:4vw}}',""]),e.locals={},t.exports=e},301:function(t,n,o){"use strict";o.r(n);var e={name:"SubmitButton",props:{text:{default:"Responder"},prefix:{default:null},loading:{default:!1}},computed:{buttonColor:function(){return this.$store.state.buttonColor},textColor:function(){return this.$store.state.textColor}},methods:{submit:function(){this.$emit("submit")}}},r=(o(299),o(48)),component=Object(r.a)(e,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"field-container-btn"},[n("button",{style:{backgroundColor:t.buttonColor},attrs:{disabled:t.loading},on:{click:t.submit}},[t.loading?n("div",{staticClass:"loader",style:{color:t.textColor}},[n("span",{style:{background:t.textColor}}),t._v(" "),n("span",{style:{background:t.textColor}}),t._v(" "),n("span",{style:{background:t.textColor}})]):n("div",[t.prefix?n("font-awesome-icon",{attrs:{icon:["fas",t.prefix]}}):t._e(),t._v("\n      "+t._s(t.text)+"\n    ")],1)])])}),[],!1,null,"63951976",null);n.default=component.exports}}]);