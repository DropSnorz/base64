(this.webpackJsonpbase64=this.webpackJsonpbase64||[]).push([[0],{27:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),s=a.n(r),i=(a(26),a(27),a(11)),o=a(5);var l=function(){return Object(o.jsx)("div",{children:Object(o.jsxs)(i.a,{bg:"dark",variant:"dark",expand:"lg",children:[Object(o.jsx)(i.a.Brand,{href:"#home",children:"Base64"}),Object(o.jsx)(i.a.Toggle,{"aria-controls":"basic-navbar-nav"})]})})},d=a(18),h=a(19),j=a(9),b=a(21),u=a(20),v=a(13),O=a(12),x=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={encodeSwitch:!0,output:"",error:""},n.handleChange=n.handleChange.bind(Object(j.a)(n)),n}return Object(h.a)(a,[{key:"handleChange",value:function(e){var t="",a="";try{t=this.state.encodeSwitch?btoa(e.target.value):atob(e.target.value)}catch(n){a=n.message}this.setState({output:t,error:a})}},{key:"render",value:function(){var e=this;return Object(o.jsxs)("div",{class:"row mt-4",children:[Object(o.jsxs)("div",{class:"col-6",children:[Object(o.jsxs)("div",{class:"float-right mb-2",children:[Object(o.jsx)(v.a,{className:"ml-1",variant:this.state.encodeSwitch?"primary":"outline-primary",onClick:function(){return e.setState({encodeSwitch:!0})},children:"Encode"}),Object(o.jsx)(v.a,{className:"ml-1",variant:this.state.encodeSwitch?"outline-primary":"primary",onClick:function(){return e.setState({encodeSwitch:!1})},children:"Decode"})]}),Object(o.jsx)(O.a.Control,{as:"textarea",rows:3,onChange:this.handleChange,isInvalid:""!==this.state.error}),Object(o.jsx)(O.a.Control.Feedback,{type:"invalid",children:this.state.error})]}),Object(o.jsxs)("div",{class:"col-6",children:[Object(o.jsx)("div",{class:"float-right mb-2",children:Object(o.jsx)(v.a,{className:"ml-1",variant:"light",onClick:function(){navigator.clipboard.writeText(e.state.output)},children:"Copy"})}),Object(o.jsx)(O.a.Control,{as:"textarea",rows:3,value:this.state.output,readOnly:!0})]})]})}}]),a}(c.a.Component);var g=function(){return Object(o.jsx)("footer",{class:"footer",children:Object(o.jsx)("div",{class:"container",children:Object(o.jsx)("span",{class:"text-muted",children:"Base64 converter on browser side."})})})};var p=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(l,{}),Object(o.jsx)("div",{class:"container",children:Object(o.jsx)(x,{})}),Object(o.jsx)(g,{})]})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,34)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root")),f()}},[[32,1,2]]]);
//# sourceMappingURL=main.758663a8.chunk.js.map