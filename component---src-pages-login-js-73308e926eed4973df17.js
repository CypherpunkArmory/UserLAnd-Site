(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{336:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(29),i=a.n(r),l=a(346),s=(a(15),a(93)),c=a(10),d=a(472),m=(a(316),a(348)),u=a(353),p=a(354),_=a(31),f=a(148);var g=function(e){var t,a;function o(){for(var t,a=arguments.length,o=new Array(a),n=0;n<a;n++)o[n]=arguments[n];return(t=e.call.apply(e,[this].concat(o))||this).submitedTimer=null,t.state={email:"",password:"",errors:{},submited:!1},t.isValid=function(){var e=Object(p.a)(t.state),a=e.errors,o=e.isValid;return t.setState({errors:a}),o},t.handleUpdate=function(e){var a;t.setState(((a={})[e.target.name]=e.target.value,a))},t.handleSubmit=function(e){e.preventDefault(),t.isValid()&&t.props.login(t.state.email,t.state.password),t.setState({submited:!0}),t.submitedTimer=setTimeout(function(){t.setState({submited:!1})},4400)},t}a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=o.prototype;return r.componentWillUnmount=function(){clearInterval(this.submitedTimer)},r.render=function(){var e=this,t=this.state,a=t.errors,o=t.submited,r=this.props,i=r.loginError,l=r.authIsLoading;return n.a.createElement(d.a,{onSubmit:function(t){e.handleSubmit(t)},className:"mx-auto text-center login-module--form--35RHS"},n.a.createElement(u.a,{label:"Email",type:"email",field:"email",onChange:this.handleUpdate,id:"loginEmail",placeholder:"Enter Email",className:"login-module--form__input--2k0Rk",error:a.email}),n.a.createElement(u.a,{label:"Password",type:"password",field:"password",onChange:this.handleUpdate,id:"loginPassword",placeholder:"Password",className:"login-module--form__input--2k0Rk",error:a.password}),i&&o&&n.a.createElement("span",{className:"login-module--form__alert--2eyPm"},i.attributes.detail),n.a.createElement(m.a,{className:"login-module--form__btn--22onj",disabled:l,round:!0},"Login"),n.a.createElement("span",{className:"login-module--form__signup--38VcN"},"Don't have an account? ",n.a.createElement(c.a,{to:"/"},"Sign up")),n.a.createElement("span",{className:"mt-1 login-module--form__signup--38VcN"},"Forgot Your Password? ",n.a.createElement(c.a,{to:"/account-recovery"},"Reset")))},o}(o.Component),h=Object(s.b)(function(e){return{loginError:Object(f.b)(e),isLoggedIn:Object(f.c)(e),authIsLoading:Object(f.a)(e)}},function(e){return{login:function(t,a){e(_.a.request(t,a))}}})(g),b=a(140),y=a.n(b),w=a(78),E=a.n(w),v=(a(317),a(112)),N=a(63),j=a(360),O={"./modal.module.scss":{modal:"modal-module--modal--VXcAj",modal__card:"modal-module--modal__card--_0_qF",modal__close:"modal-module--modal__close--3VAor",modal__icon:"modal-module--modal__icon--X_L_j",modal__title:"modal-module--modal__title--1nFkh",modal__description:"modal-module--modal__description--zwow2",modal_success:"modal-module--modal_success--2A8SS",modal_failure:"modal-module--modal_failure--3m7sp"}};var P=function(e){var t,a;function o(){for(var t,a=arguments.length,o=new Array(a),n=0;n<a;n++)o[n]=arguments[n];return(t=e.call.apply(e,[this].concat(o))||this).state={modal:!1},t.toggleModal=function(){t.setState(function(e){return{modal:!e.modal}})},t}return a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,o.prototype.render=function(){var e=this.props,t=e.failure,a=e.title,o=e.description,r=t?N.k:N.b,i=t?"Failure":"Success",l=t?"Okay":"Continue";return this.state.modal?null:n.a.createElement(j.a,{handlesClose:this.toggleModal,className:y()(E()({modal_success:!t,modal_failure:t}),O)},n.a.createElement(v.a,{icon:r,className:"modal-module--modal__icon--X_L_j"}),n.a.createElement("h2",{className:"modal-module--modal__title--1nFkh"},a||i),o&&n.a.createElement("p",{className:"modal-module--modal__description--zwow2"},o),n.a.createElement(m.a,{onClick:this.toggleModal,round:!0,danger:t},l))},o}(o.Component);P.defaultProps={title:"",description:"",failure:!1};var C=function(e){var t,a;function o(){return e.apply(this,arguments)||this}return a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,o.prototype.render=function(){var e=this.props.location,t=!!i.a.has(e,"state.signupSuccess")&&e.state.signupSuccess,a=!!i.a.has(e,"state.errorMessage")&&e.state.errorMessage;return n.a.createElement("div",{className:"page"},n.a.createElement(l.a,{title:"UserLAnd Login"}),t&&n.a.createElement(P,{title:"Your registration was successful!",description:"Your registration was successful, you can now login."}),a&&n.a.createElement(P,{title:"Sorry",description:a,failure:!0}),n.a.createElement("div",{className:"container page__header"},n.a.createElement("h2",null,"Login")),n.a.createElement("div",{className:"container mb-5"},n.a.createElement(h,null)))},o}(n.a.Component);t.default=C},346:function(e,t,a){"use strict";var o=a(347),n=a(0),r=a.n(n),i=a(349),l=a.n(i);function s(e){var t=e.description,a=e.lang,n=e.meta,i=e.title,s=e.children,c=o.data.site,d=t||c.siteMetadata.description;return r.a.createElement(l.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s - "+c.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:i},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:d}].concat(n)},s)}s.defaultProps={lang:"en",meta:[],description:""},t.a=s},347:function(e){e.exports={data:{site:{siteMetadata:{title:"UserLAnd",description:"Get the full power of Linux on your Android. The easiest way to run a Linux distribution or application on Android. Download Now!",author:"@userlandtech"}}}}},348:function(e,t,a){"use strict";a(8),a(9),a(4),a(25),a(16);var o=a(140),n=a.n(o),r=a(0),i=a.n(r),l=a(78),s=a.n(l),c=(a(313),{"./button.module.scss":{btn:"button-module--btn--2_6ft",btn_danger:"button-module--btn_danger--gWCg7",btn_primary:"button-module--btn_primary--3tJwR",btn_round:"button-module--btn_round--25LEd",icon:"button-module--icon--1Fm1w"}});function d(e){var t=e.children,a=e.icon,o=e.tag,r=e.className,l=e.danger,d=e.round,m=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["children","icon","tag","className","danger","round"]);return m.href&&"button"===o&&(o="a"),i.a.createElement(o,Object.assign({type:"button"===o&&m.onClick?"button":void 0},m,{className:(r?r+" ":"")+n()(s()("btn",{btn_round:d,btn_primary:!l,btn_danger:l}),c)+" "+(m&&m.className||"")}),t,a&&i.a.createElement("span",{className:"button-module--icon--1Fm1w"}))}d.defaultProps={tag:"button",danger:!1,round:!1},t.a=d},353:function(e,t,a){"use strict";var o=a(0),n=a.n(o),r=a(3),i=a.n(r),l=a(468),s=a(469),c=a(470),d=a(471),m=a(112);a(315);function u(e){var t=e.field,a=e.type,o=e.label,r=e.placeholder,i=e.id,u=e.error,p=e.onChange,_=e.className;return n.a.createElement(l.a,{className:"TextFieldGroup-module--form--3ZTiz"},n.a.createElement(s.a,{for:i,hidden:!0},o),n.a.createElement(c.a,{type:a,name:t,onChange:p,id:i,placeholder:r,invalid:!!u,className:_}),u&&n.a.createElement(d.a,{tooltip:!0},n.a.createElement(m.a,{icon:["fa","exclamation-triangle"]}),u))}u.prototype={field:i.a.string.isRequired,type:i.a.string.isRequired,label:i.a.string.isRequired,placeholder:i.a.string.isRequired,id:i.a.string,error:i.a.object,onChange:i.a.func.isRequired},t.a=u},354:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var o=a(356),n=a(29),r=function(e){var t={};return e.hasOwnProperty("email")&&(Object(n.isEmpty)(e.email)&&(t.email="This field is required"),Object(o.isEmail)(e.email,{domain_specific_validation:!0})||(t.email="Email is invalid")),e.hasOwnProperty("password")&&Object(n.isEmpty)(e.password)&&(t.password="This field is required"),e.hasOwnProperty("oldPassword")&&Object(n.isEmpty)(e.oldPassword)&&(t.oldPassword="This field is required"),e.hasOwnProperty("newPassword")&&Object(n.isEmpty)(e.newPassword)&&(t.newPassword="This field is required"),{errors:t,isValid:Object(n.isEmpty)(t)}}},360:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var o=a(0),n=a.n(o),r=(a(317),a(112)),i=a(63);var l=function(e){var t,a;function o(){return e.apply(this,arguments)||this}a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=o.prototype;return l.componentDidMount=function(){document.body.classList.add("no-scroll")},l.componentWillUnmount=function(){document.body.classList.remove("no-scroll")},l.render=function(){var e=this.props,t=e.children,a=e.handlesClose,o=e.className;return n.a.createElement("div",{className:(o?o+" ":"")+"modal-module--modal--VXcAj"},n.a.createElement("div",{className:"modal-module--modal__card--_0_qF"},n.a.createElement("button",{className:"modal-module--modal__close--3VAor",onClick:a},n.a.createElement(r.a,{icon:i.j})),t))},o}(o.Component)}}]);
//# sourceMappingURL=component---src-pages-login-js-73308e926eed4973df17.js.map