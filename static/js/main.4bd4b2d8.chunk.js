(this["webpackJsonpplaces-test"]=this["webpackJsonpplaces-test"]||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(23),s=n.n(r),o=(n(30),n(31),n(12)),u=n(2),i=n(3),l=n.n(i),j=n(8),b=n(11),f=n(9),p=n(5),O="https://unwieldy-impressive-argusfish.gigalixirapp.com/api",h=new Headers;h.append("Content-Type","application/json");var d=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=JSON.stringify(t),console.log(n),e.next=4,fetch("".concat(O,"/users"),{method:"post",body:n,headers:h});case 4:return c=e.sent,e.next=7,c.json();case 7:if(a=e.sent,c.ok){e.next=11;break}throw console.warn(c),a;case 11:return e.abrupt("return",a);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=JSON.stringify(t),console.log(n),e.next=4,fetch("".concat(O,"/auth/"),{method:"post",body:n,headers:h});case 4:return c=e.sent,e.next=7,c.json();case 7:if(a=e.sent,c.ok){e.next=11;break}throw console.warn(c),a;case 11:return e.abrupt("return",a);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(O,"/places/"));case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,t.ok){e.next=9;break}throw console.warn(t),n;case 9:return e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(j.a)(l.a.mark((function e(t,n){var c,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=JSON.stringify(Object(f.a)(Object(f.a)({},t),{},{owner_id:n})),console.log(c),e.next=4,fetch("".concat(O,"/places/"),{method:"post",body:c,headers:h});case 4:return a=e.sent,e.next=7,a.json();case 7:if(r=e.sent,a.ok){e.next=11;break}throw console.warn(a),r;case 11:return e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=n(0),w={username:"",password:""},S=function(e){var t=Object(c.useState)(w),n=Object(p.a)(t,2),a=n[0],r=n[1],s=Object(u.f)(),i=function(e){e.preventDefault(),r(Object(f.a)(Object(f.a)({},a),{},Object(b.a)({},e.target.name,e.target.value)))},O=function(){var e=Object(j.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,m(a);case 4:n=e.sent,console.log(n),localStorage.setItem("user",JSON.stringify(n)),s.push("/list"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.warn(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("main",{children:[Object(g.jsx)("h1",{children:"SignIn"}),Object(g.jsxs)("form",{children:[Object(g.jsxs)("label",{children:["Username",Object(g.jsx)("input",{name:"username",onChange:i,value:a.username})]}),Object(g.jsxs)("label",{children:["Password",Object(g.jsx)("input",{type:"password",name:"password",onChange:i,value:a.password})]}),Object(g.jsx)("button",{onClick:O,children:"Enter"})]}),Object(g.jsx)(o.b,{to:"/register",children:"SignUp"})]})},k={username:"",email:"",password:""},y=function(e){var t=Object(c.useState)(k),n=Object(p.a)(t,2),a=n[0],r=n[1],s=Object(u.f)(),i=function(e){e.preventDefault(),r(Object(f.a)(Object(f.a)({},a),{},Object(b.a)({},e.target.name,e.target.value)))},O=function(){var e=Object(j.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,d(a);case 4:n=e.sent,console.log(n),localStorage.setItem("user",JSON.stringify(n)),s.push("/list"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.warn(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("main",{children:[Object(g.jsx)("h1",{children:"SignUp"}),Object(g.jsxs)("form",{children:[Object(g.jsxs)("label",{children:["Username",Object(g.jsx)("input",{name:"username",onChange:i,value:a.username})]}),Object(g.jsxs)("label",{children:["E-mail",Object(g.jsx)("input",{name:"email",onChange:i,value:a.email})]}),Object(g.jsxs)("label",{children:["Password",Object(g.jsx)("input",{type:"password",name:"password",onChange:i,value:a.password})]}),Object(g.jsx)("button",{onClick:O,children:"Register"})]}),Object(g.jsx)(o.b,{to:"/",children:"SignIn"})]})},C=n(17),N={name:""},E=function(e){var t=Object(u.f)(),n=Object(c.useState)({}),a=Object(p.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)([]),O=Object(p.a)(i,2),h=O[0],d=O[1],m=Object(c.useState)(N),w=Object(p.a)(m,2),S=w[0],k=w[1];Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("user"));console.log(e),s(e)}),[]),Object(c.useEffect)((function(){(function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,console.log(t),d(t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var y=function(){var e=Object(j.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,v(S,null===r||void 0===r?void 0:r.id);case 4:n=e.sent,console.log(n),d([].concat(Object(C.a)(h),[n.data])),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.warn(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("main",{children:[Object(g.jsx)("h1",{children:"Places"}),Object(g.jsxs)("p",{children:["Welcome, ","<".concat(r.username,">")]}),Object(g.jsx)("button",{onClick:function(){localStorage.removeItem("user"),t.push("/")},children:"SignOut"}),Object(g.jsxs)("form",{children:[Object(g.jsx)("h2",{children:"Create a place for you"}),Object(g.jsxs)("label",{children:["Name",Object(g.jsx)("input",{name:"name",onChange:function(e){e.preventDefault(),k(Object(f.a)(Object(f.a)({},S),{},Object(b.a)({},e.target.name,e.target.value)))},value:S.name})]}),Object(g.jsx)("button",{onClick:y,children:"Create"})]}),Object(g.jsxs)("section",{children:[Object(g.jsx)("h2",{children:"Available Places"}),Object(g.jsx)("ul",{children:h.map((function(e){return Object(g.jsx)("li",{children:Object(g.jsxs)(o.b,{to:"/chat/".concat(e.name),children:["@",e.name]})},"place-".concat(e.id))}))})]})]})},J=n(25),D=function(e){var t=Object(c.useState)({}),n=Object(p.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(""),o=Object(p.a)(s,2),i=o[0],l=o[1],j=Object(c.useState)(null),b=Object(p.a)(j,2),f=b[0],O=b[1],h=Object(c.useState)(null),d=Object(p.a)(h,2),m=d[0],x=d[1],v=Object(c.useState)([]),w=Object(p.a)(v,2),S=w[0],k=w[1],y=Object(u.g)().place,N=Object(c.useRef)(null),E=Object(c.useRef)(null);Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("user"));r(e),E.current.focus()}),[]),Object(c.useEffect)((function(){var e=new J.Socket("wss://unwieldy-impressive-argusfish.gigalixirapp.com/socket",{});return e.connect(),O(e),function(){console.log("disconnect"),e.disconnect()}}),[]),Object(c.useEffect)((function(){if(f){var e=f.channel("place:".concat(y));return e.join().receive("ok",(function(e){console.log("Joined successfully",e)})).receive("error",(function(e){console.log("Unable to join",e)})),x(e),function(){console.log("leaveChannel"),e.leave()}}}),[y,f]),Object(c.useEffect)((function(){if(m){var e=m.on("place:".concat(y,":new_message"),(function(e){console.log(e),k([].concat(Object(C.a)(S),[e])),N.current.scrollBy(0,30)}));return function(){console.log("offEvent"),m.off("place:".concat(y,":new_message"),e)}}}),[m,y,S]);var D=function(e){if(e.preventDefault(),""!==i){var t={message:i,from:a.username,time:(new Date).toUTCString()};m.push("message:add",t),l("")}};return Object(g.jsxs)("main",{className:"chat-window",children:[Object(g.jsxs)("h1",{className:"chat-place-name",children:["@",y]}),Object(g.jsx)("section",{className:"messages",ref:N,children:S.map((function(e){return Object(g.jsxs)("p",{className:"message",id:"".concat(e.from,"-").concat(e.time),children:[Object(g.jsxs)("span",{className:"sender",children:["<".concat(e.from,">")," "]}),Object(g.jsx)("span",{className:"message-content",children:e.message})]})}))}),Object(g.jsxs)("form",{className:"chat-form",children:[Object(g.jsxs)("label",{children:[Object(g.jsx)("span",{className:"label-text",children:"message:"}),Object(g.jsx)("input",{value:i,onChange:function(e){return l(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&D(e)},ref:E})]}),Object(g.jsx)("button",{onClick:D,children:"send"})]})]})};var I=function(){return Object(g.jsx)(o.a,{children:Object(g.jsxs)(u.c,{children:[Object(g.jsx)(u.a,{path:"/chat/:place",children:Object(g.jsx)(D,{})}),Object(g.jsx)(u.a,{path:"/list",children:Object(g.jsx)(E,{})}),Object(g.jsx)(u.a,{path:"/register",children:Object(g.jsx)(y,{})}),Object(g.jsx)(u.a,{path:"/",children:Object(g.jsx)(S,{})})]})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(I,{})}),document.getElementById("root")),P()}},[[39,1,2]]]);
//# sourceMappingURL=main.4bd4b2d8.chunk.js.map