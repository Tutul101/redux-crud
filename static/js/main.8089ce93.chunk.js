(this.webpackJsonpredux_todo=this.webpackJsonpredux_todo||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(5),d=n.n(a),r=(n(17),n(18),n(11)),s=n(3),o=(n(23),n(1)),j=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],i=t[1],a=Object(s.b)(),d=Object(s.c)((function(e){return e.todoReducer.list}));return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"main-div",children:Object(o.jsxs)("div",{className:"child-div",children:[Object(o.jsx)("figure",{children:Object(o.jsx)("h2",{children:"Add Your List Here"})}),Object(o.jsxs)("div",{className:"add-items",children:[Object(o.jsx)("input",{type:"text",placeholder:"Add items... \u270d",value:n,onChange:function(e){i(e.target.value)}}),Object(o.jsx)("button",{className:"btn btn-primary",onClick:function(){var e;a((e=n,{type:"ADD_TODO",payload:{id:(new Date).getTime().toString(),data:e}})),i("")},children:"Save"})]}),Object(o.jsx)("div",{className:"show-items",children:d.map((function(e,t){return Object(o.jsx)("div",{className:"each-item",children:Object(o.jsxs)("span",{children:[Object(o.jsx)("h3",{children:e.data}),Object(o.jsx)("button",{className:"btn btn-danger",onClick:function(){a({type:"DELETE_TODO",id:e.id})},children:"Delete"})]})},e.id)}))})]})})})};var l=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(j,{})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,d=t.getTTFB;n(e),c(e),i(e),a(e),d(e)}))},u=n(7),b=n(12),h=n(4),x={list:[]},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":var n=t.payload,c=n.id,i=n.data;return Object(h.a)(Object(h.a)({},e),{},{list:[].concat(Object(b.a)(e.list),[{id:c,data:i}])});case"DELETE_TODO":var a=e.list.filter((function(e){return e.id!==t.id}));return Object(h.a)(Object(h.a)({},e),{},{list:a});default:return e}},f=Object(u.a)({todoReducer:v}),m=Object(u.b)(f,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());d.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(s.a,{store:m,children:Object(o.jsx)(l,{})})}),document.getElementById("root")),O()}},[[25,1,2]]]);
//# sourceMappingURL=main.8089ce93.chunk.js.map