(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{326:function(e,t,n){"use strict";n.r(t);n(15);var a=n(0),r=n.n(a),i=n(93),o=n(346),s=(n(316),n(472)),c=n(348),l=n(353),u=n(354),d=n(19),m=n(352);var p=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).submitedTimer=null,t.state={email:"",errors:{},submited:!1},t.isValid=function(){var e=Object(u.a)(t.state),n=e.errors,a=e.isValid;return t.setState({errors:n}),a},t.handleUpdate=function(e){var n;t.setState(((n={})[e.target.name]=e.target.value,n))},t.handleSubmit=function(e){e.preventDefault(),t.isValid()&&t.props.sendResetEmail(t.state.email),t.setState({submited:!0}),t.submitedTimer=setTimeout(function(){t.setState({submited:!1})},4400)},t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=a.prototype;return i.componentWillUnmount=function(){clearInterval(this.submitedTimer)},i.render=function(){var e=this.state,t=e.errors,n=e.submited,a=this.props,i=a.submitError,u=a.isLoading;return r.a.createElement("div",{className:"page"},r.a.createElement(o.a,{title:"UserLAnd Reset Password"}),r.a.createElement("div",{className:"container page__header"},r.a.createElement("h2",null,"Recover Password")),r.a.createElement("div",{className:"container",style:{marginBottom:"7rem"}},r.a.createElement(s.a,{onSubmit:this.handleSubmit,className:"mx-auto text-center login-module--form--35RHS"},r.a.createElement(l.a,{label:"Email",type:"email",field:"email",onChange:this.handleUpdate,id:"resetEmail",placeholder:"Enter Email",className:"login-module--form__input--2k0Rk",error:t.email}),i&&n&&r.a.createElement("span",{className:"login-module--form__alert--2eyPm"},"Something Wrong Happened"),r.a.createElement(c.a,{className:"login-module--form__btn--22onj",disabled:u,round:!0},"submit"))))},a}(a.Component);t.default=Object(i.b)(function(e){return{submitError:Object(m.c)(e),isLoading:Object(m.a)(e)}},function(e){return{sendResetEmail:function(t){e(d.g.request(t))}}})(p)},346:function(e,t,n){"use strict";var a=n(347),r=n(0),i=n.n(r),o=n(349),s=n.n(o);function c(e){var t=e.description,n=e.lang,r=e.meta,o=e.title,c=e.children,l=a.data.site,u=t||l.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s - "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:o},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:u}].concat(r)},c)}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},347:function(e){e.exports={data:{site:{siteMetadata:{title:"UserLAnd",description:"Get the full power of Linux on your Android. The easiest way to run a Linux distribution or application on Android. Download Now!",author:"@userlandtech"}}}}},348:function(e,t,n){"use strict";n(8),n(9),n(4),n(25),n(16);var a=n(140),r=n.n(a),i=n(0),o=n.n(i),s=n(78),c=n.n(s),l=(n(313),{"./button.module.scss":{btn:"button-module--btn--2_6ft",btn_danger:"button-module--btn_danger--gWCg7",btn_primary:"button-module--btn_primary--3tJwR",btn_round:"button-module--btn_round--25LEd",icon:"button-module--icon--1Fm1w"}});function u(e){var t=e.children,n=e.icon,a=e.tag,i=e.className,s=e.danger,u=e.round,d=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["children","icon","tag","className","danger","round"]);return d.href&&"button"===a&&(a="a"),o.a.createElement(a,Object.assign({type:"button"===a&&d.onClick?"button":void 0},d,{className:(i?i+" ":"")+r()(c()("btn",{btn_round:u,btn_primary:!s,btn_danger:s}),l)+" "+(d&&d.className||"")}),t,n&&o.a.createElement("span",{className:"button-module--icon--1Fm1w"}))}u.defaultProps={tag:"button",danger:!1,round:!1},t.a=u},352:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"c",function(){return o}),n.d(t,"d",function(){return s}),n.d(t,"b",function(){return c});var a=n(141),r=function(e){return e.accountState.account},i=function(e){return e.accountState.isLoading},o=function(e){return e.accountState.error},s=Object(a.a)([r],function(e){return!!e&&!!e.access_token}),c=Object(a.a)([r],function(e){return e});Object(a.a)([r],function(e){return!!e})},353:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(3),o=n.n(i),s=n(468),c=n(469),l=n(470),u=n(471),d=n(112);n(315);function m(e){var t=e.field,n=e.type,a=e.label,i=e.placeholder,o=e.id,m=e.error,p=e.onChange,b=e.className;return r.a.createElement(s.a,{className:"TextFieldGroup-module--form--3ZTiz"},r.a.createElement(c.a,{for:o,hidden:!0},a),r.a.createElement(l.a,{type:n,name:t,onChange:p,id:o,placeholder:i,invalid:!!m,className:b}),m&&r.a.createElement(u.a,{tooltip:!0},r.a.createElement(d.a,{icon:["fa","exclamation-triangle"]}),m))}m.prototype={field:o.a.string.isRequired,type:o.a.string.isRequired,label:o.a.string.isRequired,placeholder:o.a.string.isRequired,id:o.a.string,error:o.a.object,onChange:o.a.func.isRequired},t.a=m},354:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(356),r=n(29),i=function(e){var t={};return e.hasOwnProperty("email")&&(Object(r.isEmpty)(e.email)&&(t.email="This field is required"),Object(a.isEmail)(e.email,{domain_specific_validation:!0})||(t.email="Email is invalid")),e.hasOwnProperty("password")&&Object(r.isEmpty)(e.password)&&(t.password="This field is required"),e.hasOwnProperty("oldPassword")&&Object(r.isEmpty)(e.oldPassword)&&(t.oldPassword="This field is required"),e.hasOwnProperty("newPassword")&&Object(r.isEmpty)(e.newPassword)&&(t.newPassword="This field is required"),{errors:t,isValid:Object(r.isEmpty)(t)}}}}]);
//# sourceMappingURL=component---src-pages-account-recovery-js-f0d5f23f9f9d926ec7e4.js.map