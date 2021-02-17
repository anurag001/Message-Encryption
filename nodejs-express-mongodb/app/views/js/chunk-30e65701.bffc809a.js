(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30e65701"],{"1dde":function(e,t,r){var n=r("d039"),a=r("b622"),s=r("2d00"),o=a("species");e.exports=function(e){return s>=51||!n((function(){var t=[],r=t.constructor={};return r[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"1f5b":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h4",[e._v("Message List")]),r("br"),r("div",{staticClass:"row"},e._l(e.messages,(function(t,n){var a,s;return r("div",{key:t.id,staticClass:"card list col-4",attrs:{index:n}},[r("div",{staticClass:"card-body"},[r("label",{attrs:{for:"message"}},[e._v("Message:")]),e.editId!==t.id?r("p",{staticClass:"card-text",domProps:{innerHTML:e._s(t.content)}}):e._e(),e.editId===t.id?r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.decryptedMessageForEdit,expression:"decryptedMessageForEdit"}],class:(a={},a["form-control"]=!0,a["has-error"]=e.contentError,a),attrs:{type:"text",name:"message"},domProps:{value:e.decryptedMessageForEdit},on:{change:e.handleFieldChange,input:function(t){t.target.composing||(e.decryptedMessageForEdit=t.target.value)}}}):e._e(),e._v(" "),r("label",{attrs:{for:"encryption-type"}},[e._v("Encryption Type:")]),e.editId!==t.id?r("p",{staticClass:"card-text"},[e._v(e._s(t.encryption_type))]):e._e(),e.editId===t.id?r("select",{directives:[{name:"model",rawName:"v-model",value:t.encryption_type,expression:"message.encryption_type"}],class:(s={},s["form-control"]=!0,s["has-error"]=e.encryptionTypeError,s),attrs:{name:"encryption-type"},on:{change:[function(r){var n=Array.prototype.filter.call(r.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(t,"encryption_type",r.target.multiple?n:n[0])},e.handleFieldChange]}},[r("option",{attrs:{value:"backwards"}},[e._v("Backwards")]),r("option",{attrs:{value:"emo-gize"}},[e._v("Emo-gize")]),r("option",{attrs:{value:"letter-scramble"}},[e._v("Letter-scramble")]),r("option",{attrs:{value:"nothing"}},[e._v("Nothing")])]):e._e(),r("br"),r("span",[e._v("Created on: "+e._s(e.formatDate(t.createdAt)))]),r("br"),e.editId!==t.id?r("a",{staticClass:"btn btn-primary",attrs:{href:"#"},on:{click:function(r){return e.editMessage(t.id,n)}}},[e._v("Edit")]):e._e(),e._v(" "),e.editId===t.id?r("a",{staticClass:"btn btn-primary",attrs:{href:"#"},on:{click:function(t){return e.saveEditedMessage(n)}}},[e._v("Save")]):e._e(),e._v(" "),e.editId!==t.id?r("a",{staticClass:"btn btn-success",attrs:{href:"#"},on:{click:function(t){return e.readMessage(n)}}},[e._v("Read")]):e._e(),e._v(" "),r("a",{staticClass:"btn btn-warning",attrs:{href:"#"},on:{click:function(t){return e.deleteMessage(n)}}},[e._v("Delete")])])])})),0)])},a=[],s=(r("a15b"),r("a434"),r("b0c0"),r("498a"),r("a205")),o={name:"message-list",data:function(){return{messages:[],editId:"",decryptedMessageForEdit:"",contentError:!1,encryptionTypeError:!1}},methods:{formatDate:function(e){var t=new Date(e),r=""+(t.getMonth()+1),n=""+t.getDate(),a=t.getFullYear();return r.length<2&&(r="0"+r),n.length<2&&(n="0"+n),[a,r,n].join("-")},retrieveMessages:function(){var e=this;s["a"].getAll().then((function(t){e.messages=t.data.messages,console.log(t.data)})).catch((function(e){console.log(e)}))},editMessage:function(e,t){this.editId=e,this.contentError=!1,this.encryptionTypeError=!1,this.readMessage(t),console.log("Edit")},handleFieldChange:function(e){switch(e.target.name){case"message":void 0===e.target.value||"string"===typeof e.target.value&&""===e.target.value.trim()?this.contentError=!0:this.contentError=!1;break;case"encryption-type":void 0===e.target.value||"string"===typeof e.target.value&&""===e.target.value.trim()?this.encryptionTypeError=!0:this.encryptionTypeError=!1;break;default:}},saveEditedMessage:function(e){var t=this,r=this.messages[e];r.content=this.decryptedMessageForEdit,(void 0===r.content||"string"===typeof r.content&&""===r.content.trim())&&(this.contentError=!0),void 0===r.encryption_type&&(this.encryptionTypeError=!0),this.contentError||this.encryptionTypeError||(s["a"].update(r).then((function(e){e.data.success?(alert("Updated Successfully"),t.editId="",t.decryptedMessageForEdit="",r.content=e.data.encrypted_message):alert("Something went wrong")})).catch((function(e){console.log(e)})),console.log("Save Edited"))},readMessage:function(e){var t=this,r=this.messages[e].id;s["a"].get(r).then((function(e){e.data.success?t.editId?t.decryptedMessageForEdit=e.data.decrypted_message:alert("Decrypted Message "+e.data.decrypted_message):alert("Something went wrong"),console.log(e.data)})).catch((function(e){console.log(e)})),console.log("Save Edited")},deleteMessage:function(e){var t=this;s["a"].delete(this.messages[e].id).then((function(r){r.data.success?(alert("Deleted Successfully"),t.messages.splice(e,1)):alert("Something went wrong")})).catch((function(e){console.log(e)})),console.log("Delete")},refreshList:function(){this.retrieveMessages()}},mounted:function(){this.retrieveMessages()}},i=o,c=(r("e3b5"),r("2877")),d=Object(c["a"])(i,n,a,!1,null,null,null);t["default"]=d.exports},"59fc":function(e,t,r){},"65f0":function(e,t,r){var n=r("861d"),a=r("e8b5"),s=r("b622"),o=s("species");e.exports=function(e,t){var r;return a(e)&&(r=e.constructor,"function"!=typeof r||r!==Array&&!a(r.prototype)?n(r)&&(r=r[o],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===t?0:t)}},8418:function(e,t,r){"use strict";var n=r("c04e"),a=r("9bf2"),s=r("5c6c");e.exports=function(e,t,r){var o=n(t);o in e?a.f(e,o,s(0,r)):e[o]=r}},a15b:function(e,t,r){"use strict";var n=r("23e7"),a=r("44ad"),s=r("fc6a"),o=r("a640"),i=[].join,c=a!=Object,d=o("join",",");n({target:"Array",proto:!0,forced:c||!d},{join:function(e){return i.call(s(this),void 0===e?",":e)}})},a434:function(e,t,r){"use strict";var n=r("23e7"),a=r("23cb"),s=r("a691"),o=r("50c4"),i=r("7b0b"),c=r("65f0"),d=r("8418"),l=r("1dde"),u=r("ae40"),f=l("splice"),g=u("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,v=Math.min,h=9007199254740991,y="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!f||!g},{splice:function(e,t){var r,n,l,u,f,g,m=i(this),b=o(m.length),_=a(e,b),E=arguments.length;if(0===E?r=n=0:1===E?(r=0,n=b-_):(r=E-2,n=v(p(s(t),0),b-_)),b+r-n>h)throw TypeError(y);for(l=c(m,n),u=0;u<n;u++)f=_+u,f in m&&d(l,u,m[f]);if(l.length=n,r<n){for(u=_;u<b-n;u++)f=u+n,g=u+r,f in m?m[g]=m[f]:delete m[g];for(u=b;u>b-n+r;u--)delete m[u-1]}else if(r>n)for(u=b-n;u>_;u--)f=u+n-1,g=u+r-1,f in m?m[g]=m[f]:delete m[g];for(u=0;u<r;u++)m[u+_]=arguments[u+2];return m.length=b-n+r,l}})},a640:function(e,t,r){"use strict";var n=r("d039");e.exports=function(e,t){var r=[][e];return!!r&&n((function(){r.call(null,t||function(){throw 1},1)}))}},ae40:function(e,t,r){var n=r("83ab"),a=r("d039"),s=r("5135"),o=Object.defineProperty,i={},c=function(e){throw e};e.exports=function(e,t){if(s(i,e))return i[e];t||(t={});var r=[][e],d=!!s(t,"ACCESSORS")&&t.ACCESSORS,l=s(t,0)?t[0]:c,u=s(t,1)?t[1]:void 0;return i[e]=!!r&&!a((function(){if(d&&!n)return!0;var e={length:-1};d?o(e,1,{enumerable:!0,get:c}):e[1]=1,r.call(e,l,u)}))}},e3b5:function(e,t,r){"use strict";r("59fc")},e8b5:function(e,t,r){var n=r("c6b6");e.exports=Array.isArray||function(e){return"Array"==n(e)}}}]);
//# sourceMappingURL=chunk-30e65701.bffc809a.js.map