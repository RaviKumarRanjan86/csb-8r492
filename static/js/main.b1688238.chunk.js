(this.webpackJsonpreactredux=this.webpackJsonpreactredux||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),r=n(3),s=n.n(r),a=(n(12),n(13),n(2)),u=n(1),l=function(){var e=Object(a.c)((function(e){return e.changeTheNumber})),t=Object(a.b)();return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"main-div",children:Object(u.jsxs)("div",{class:"container",children:[Object(u.jsx)("h1",{children:"Increment/Decrement counter"}),Object(u.jsx)("h4",{children:"using React and Redux"}),Object(u.jsxs)("div",{class:"quantity",children:[Object(u.jsx)("a",{class:"quantity__minus",title:"Decrement",onClick:function(){return t({type:"DECREMENT"})},children:Object(u.jsx)("span",{children:"-"})}),Object(u.jsx)("input",{name:"quantity",type:"text",class:"quantity__input",value:e}),Object(u.jsx)("a",{class:"quantity__plus",title:"Increment",onClick:function(){return t({type:"INCREMENT",payload:5})},children:Object(u.jsx)("span",{children:"+"})})]})]})})})},o=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))},d=n(4),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return e+t.payload;case"DECREMENT":return e-1;default:return e}},b=Object(d.a)({changeTheNumber:j}),h=Object(d.b)(b,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());h.subscribe((function(){return console.log(h.getState())})),s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(a.a,{store:h,children:Object(u.jsx)(l,{})})}),document.getElementById("root")),o()}},[[19,1,2]]]);
//# sourceMappingURL=main.b1688238.chunk.js.map