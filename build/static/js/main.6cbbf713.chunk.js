(this["webpackJsonpbudget-control"]=this["webpackJsonpbudget-control"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(6),r=n.n(c),i=(n(13),n(7)),u=n(2),l=n(0),j=function(e){var t=e.message;return Object(l.jsx)("p",{className:"alert alert-danger error",children:t})},b=function(e){var t=e.setbudget,n=e.setremaining,a=e.setshowQuestion,c=Object(s.useState)(0),r=Object(u.a)(c,2),i=r[0],b=r[1],d=Object(s.useState)(!1),o=Object(u.a)(d,2),O=o[0],m=o[1];return Object(l.jsxs)(s.Fragment,{children:[Object(l.jsx)("h2",{children:"What's your budget"}),O?Object(l.jsx)(j,{message:"An error occured, set a valid number"}):null,Object(l.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),i<1||isNaN(i))return m(!0);t(i),n(i),m(!1),a(!1)},children:[Object(l.jsx)("input",{type:"number",className:"u-full-width",placeholder:"For example: $1500",onChange:function(e){var t=e.target;b(Number(t.value))}}),Object(l.jsx)("input",{type:"submit",className:"button-primary u-full-width",value:"Set budget"})]})]})},d=n(8),o=function(e){var t=e.setSpending,n=e.setSpendingStatus,a=Object(s.useState)(""),c=Object(u.a)(a,2),r=c[0],i=c[1],b=Object(s.useState)(0),o=Object(u.a)(b,2),O=o[0],m=o[1],h=Object(s.useState)(!1),g=Object(u.a)(h,2),p=g[0],f=g[1];return Object(l.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),O<1||isNaN(O)||""===r.trim())return f("Invalid format or empty field");f(!1);var s={name:r,quantity:O,id:Object(d.a)(10)};t(s),n(!0)},children:[Object(l.jsx)("h2",{children:"Add spending"}),p?Object(l.jsx)(j,{message:p}):null,Object(l.jsxs)("div",{className:"campo",children:[Object(l.jsx)("label",{htmlFor:"Name"}),Object(l.jsx)("input",{type:"text",className:"u-full-width",placeholder:"Shopping",onChange:function(e){return i(e.target.value)}})]}),Object(l.jsxs)("div",{className:"campo",children:[Object(l.jsx)("label",{htmlFor:"Quantity"}),Object(l.jsx)("input",{type:"text",className:"u-full-width",placeholder:"300",onChange:function(e){return m(Number(e.target.value))}})]}),Object(l.jsx)("button",{type:"submit",className:"button-primary u-full-width",children:"Add now"})]})},O=function(e){var t=e.singleSpending;return Object(l.jsx)("li",{className:"gastos",children:Object(l.jsxs)("p",{children:[t.name,Object(l.jsxs)("span",{className:"gasto",children:["$ ",t.quantity]})]})})},m=function(e){var t=e.spendingArr;return Object(l.jsxs)("div",{className:"gastos-realizados",children:[Object(l.jsx)("h2",{children:"List"}),t.map((function(e){return Object(l.jsx)(O,{singleSpending:e},e.id)}))]})},h=function(e,t){return e/4>t?"alert alert-danger":e/2>t?"alert alert-warning":"alert alert-success"},g=function(e){var t=e.budget,n=e.remaining;return Object(l.jsxs)(s.Fragment,{children:[Object(l.jsxs)("div",{className:"alert alert-primary",children:["Budget: ",t]}),Object(l.jsxs)("div",{className:h(t,n),children:["Remaining: ",n]})]})},p=function(){var e=Object(s.useState)(0),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(0),r=Object(u.a)(c,2),d=r[0],O=r[1],h=Object(s.useState)(!0),p=Object(u.a)(h,2),f=p[0],x=p[1],v=Object(s.useState)([]),S=Object(u.a)(v,2),N=S[0],y=S[1],w=Object(s.useState)(!1),F=Object(u.a)(w,2),A=F[0],C=F[1],D=Object(s.useState)({}),k=Object(u.a)(D,2),q=k[0],B=k[1],E=Object(s.useState)(!1),I=Object(u.a)(E,2),L=I[0],Q=I[1];return Object(s.useEffect)((function(){C(!1);var e=N.some((function(e){return e.name===q.name}));if(console.log("file: App.js ~ line 21 ~ useEffect ~ exist",e),e)return C("Don't add duplicate spendings");if(L){y([].concat(Object(i.a)(N),[q]));var t=d-q.quantity;O(t)}}),[q]),Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("header",{children:[Object(l.jsx)("h1",{children:"Spending of the week"}),Object(l.jsxs)("div",{className:"contenido-principal contenido",children:[A?Object(l.jsx)(j,{message:A}):null,f?Object(l.jsx)(b,{setbudget:a,setremaining:O,setshowQuestion:x}):Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"one-half column",children:Object(l.jsx)(o,{setSpending:B,setSpendingStatus:Q})}),Object(l.jsxs)("div",{className:"one-half column",children:[Object(l.jsx)(m,{spendingArr:N}),Object(l.jsx)(g,{budget:n,remaining:d})]})]})]})]})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),c(e),r(e)}))};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.6cbbf713.chunk.js.map