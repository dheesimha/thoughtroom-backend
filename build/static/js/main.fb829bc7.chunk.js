(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{180:function(e,t){},182:function(e,t){},193:function(e,t){},195:function(e,t){},223:function(e,t){},225:function(e,t){},226:function(e,t){},231:function(e,t){},233:function(e,t){},25:function(e,t,n){},252:function(e,t){},264:function(e,t){},267:function(e,t){},303:function(e,t,n){},304:function(e,t,n){"use strict";n.r(t);var r=n(37),a=n(1),c=n(157),s=n.n(c),i=n(30),o=n(12),l=n(5),u=n(7),j=n.n(u),b=n(312),d=n(313),g=n(314),m=n(9),O=(n(25),n(0)),h=n(176),f=function(e){var t=JSON.parse(localStorage.getItem("loggedInBlogUser")),n=t.token,r=t.username,a=h.decode(n,"thisisthesecretfor@uthentication").id;return Object(O.jsxs)("div",{className:"blogItems",children:[Object(O.jsx)("h1",{className:"blogTitle",children:e.blog.title}),Object(O.jsx)("br",{}),Object(O.jsxs)("p",{className:"blogContent",children:[e.blog.content.substr(0,150)," ..."]}),Object(O.jsx)("p",{className:"readMoreContent",children:Object(O.jsx)(m.b,{to:"/blogs/".concat(e.blog.id),children:"Read more"})}),Object(O.jsx)("br",{}),Object(O.jsxs)("p",{className:"authorContent",children:["Author : ",e.blog.user.name]}),Object(O.jsxs)("p",{className:"iconsDiv",children:[e.blog.likersList.includes(r)?Object(O.jsx)(b.a,{style:{color:"red"},className:"liked",onClick:function(){return t=e.blog.id,n=r,e.likeDecrement(t,n);var t,n}}):Object(O.jsx)(d.a,{className:"notLiked",color:"error",onClick:function(){var t,n;t=e.blog.id,n=r,e.likeIncrement(t,n)}}),e.blog.likes,a===e.blog.user.id?Object(O.jsx)(g.a,{className:"deleteIcon",color:"primary",onClick:function(){return t=e.blog.id,e.deleteBlog(t);var t}}):null]}),Object(O.jsx)("br",{})]})},x=n(23),p=n.n(x),v="/api/blogs",w=null,N=function(){var e=Object(o.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,"bearer ".concat(t);case 2:w=e.sent;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(o.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{authorization:w}},e.next=3,p.a.post(v,t,n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(o.a)(j.a.mark((function e(t,n){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.put("".concat(v,"/").concat(t),{username:n});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),y=function(){var e=Object(o.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{authorization:w}},e.next=3,p.a.delete("".concat(v,"/").concat(t),n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C={getAll:function(){return p.a.get(v).then((function(e){return e.data}))},setToken:N,create:S,update:k,deleteBlog:y,getSingleBlog:function(e){return p.a.get("".concat(v,"/").concat(e)).then((function(e){return e.data}))}},I=n(4);var L=function(e){var t=e.loggedInAs,n=Object(I.g)(),r=Object(a.useState)(""),c=Object(l.a)(r,2),s=c[0],i=c[1];return Object(a.useEffect)((function(){window.location.href.includes("write")?i("write"):i("read")}),[s]),Object(O.jsx)("div",{children:Object(O.jsxs)("ul",{className:"nav",children:[Object(O.jsx)(m.b,{to:"/blogs",className:"navHeading",id:"navTitle",children:"ThoughtRoom"}),Object(O.jsxs)("div",{className:"endItems",children:[Object(O.jsx)("li",{className:"listItem otherNavComponent ".concat("read"===s?"selectedNav":""),onClick:function(){i("read")},children:Object(O.jsx)(m.b,{to:"/blogs",children:"Read"})}),Object(O.jsx)("li",{className:"listItem otherNavComponent ".concat("write"===s?"selectedNav":""),onClick:function(){i("write")},children:Object(O.jsx)(m.b,{to:"/write",children:"Write"})}),Object(O.jsxs)("li",{className:"listItem usernameComponent",children:[t," "]}),Object(O.jsx)("li",{className:"listItem",children:Object(O.jsx)("button",{className:"logout",onClick:function(e){e.preventDefault(),window.localStorage.clear(),n("/login")},children:"Logout"})})]})]})})},T=Object(r.b)({name:"blogRoute",initialState:[],reducers:{blogList:function(e,t){t.payload}}}),U=T.actions.blogList,B=T.reducer,R=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(i.c)((function(e){return e.users})),s=Object(a.useState)(null),u=Object(l.a)(s,2),b=u[0],d=u[1],g=Object(a.useState)(null),m=Object(l.a)(g,2),h=m[0],x=m[1],p=Object(I.g)(),v=Object(i.b)(),w=function(){var e=Object(o.a)(j.a.mark((function e(t,n){var a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.update(t,n);case 2:return e.next=4,C.getAll();case 4:a=e.sent,c=a.reverse(a),r(c);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),N=function(){var e=Object(o.a)(j.a.mark((function e(t,n){var a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.update(t,n);case 2:return e.next=4,C.getAll();case 4:a=e.sent,c=a.reverse(),r(c);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){try{C.getAll().then((function(e){r(e.reverse())}))}catch(e){p("/login")}}),[p]),Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedInBlogUser");if(e){var t=JSON.parse(e);d(t),x(c[c.length-1]),C.setToken(t.token)}else p("/login")}),[c,p]);var S=function(e){var t=n.filter((function(t){return t.id===e}));window.confirm("Delete ".concat(t[0].title," by ").concat(b.name))&&C.deleteBlog(e).then(window.location.reload())},k=Object(I.f)("/blogs/:id");if(null!==(k?n.find((function(e){return e.id.toString()===k.params.id.toString()})):null)&&v(U(n)),null!==h)return Object(O.jsx)("div",{className:"pageEntire",children:Object(O.jsxs)("div",{children:[Object(O.jsx)(L,{loggedInAs:b.name}),Object(O.jsx)("h1",{className:"blogh1",children:"Study, Comprehend, Decipher, Unravel all thoughts !"}),n.map((function(e){return Object(O.jsx)("div",{className:"blogContainer",children:Object(O.jsxs)("div",{className:"innerContainer",children:[Object(O.jsxs)("div",{className:"design",children:[Object(O.jsx)("p",{className:"dateContent",children:new Date(e.timeStamp).toDateString()}),Object(O.jsx)("div",{className:"straightLine",children:" "})]}),Object(O.jsx)(f,{blog:e,likeIncrement:function(){return w(e.id,b.username)},likeDecrement:function(){return N(e.id,b.username)},deleteBlog:function(){return S(e.id)},className:"blogContent"},e.id),Object(O.jsx)("br",{}),Object(O.jsx)("br",{})]})},e.id)}))]})})},D=(n(303),Object(r.b)({name:"users",initialState:[],reducers:{newUser:function(e,t){e.push(t.payload)}}})),A=D.actions.newUser,F=D.reducer;var E=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){window.location.href.includes("login")?r("login"):window.location.href.includes("register")&&r("register")}),[n]),Object(O.jsx)("div",{children:Object(O.jsxs)("ul",{className:"nav",children:[Object(O.jsx)(m.b,{to:"/",className:"navHeading nav2Title",children:"ThoughtRoom"}),Object(O.jsxs)("div",{className:"endItems",children:[Object(O.jsx)("li",{className:"listItem2 otherNavComponent2 ".concat("register"===n?"selectedNav":""),onClick:function(){r("register")},children:Object(O.jsx)(m.b,{to:"/register",children:"Register"})}),Object(O.jsx)("li",{className:"listItem2 otherNavComponent2 ".concat("login"===n?"selectedNav":""),onClick:function(){r("login")},children:Object(O.jsx)(m.b,{to:"/login",children:"Login"})})]})]})})};var P=function(){return Object(O.jsxs)("div",{className:"home",children:[Object(O.jsx)(E,{}),Object(O.jsxs)("div",{className:"homeMain",children:[Object(O.jsx)("div",{className:"heroImg",children:Object(O.jsx)("img",{src:"/tr-home-banner.png",alt:"home",width:"400px",height:"350px"})}),Object(O.jsxs)("div",{className:"nextSec",children:[Object(O.jsx)("p",{className:"heroText",children:"Stumble across thoughts,ponder over them or share your own thought !"}),Object(O.jsx)(m.b,{to:"/register",children:Object(O.jsx)("button",{id:"homeSubmitBtn",children:" Get Started !"})})]})]})]})},J=function(){var e=Object(o.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("/api/users",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H={registerUser:J};var M=function(e){var t=e.message,n=e.intent;return null===t?null:Object(O.jsx)("div",{className:"".concat("success"===n?"successNote":"failureNote"),children:t})};var z=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),s=Object(l.a)(c,2),i=s[0],u=s[1],b=Object(a.useState)(""),d=Object(l.a)(b,2),g=d[0],h=d[1],f=Object(a.useState)(""),x=Object(l.a)(f,2),p=x[0],v=x[1],w=Object(a.useState)(""),N=Object(l.a)(w,2),S=N[0],k=N[1],y=Object(I.g)(),C=function(){var e=Object(o.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,H.registerUser({name:i,username:n,password:g});case 4:return e.next=6,k("success");case 6:return e.next=8,v("Successfuly Registered! Please Log in .");case 8:return e.next=10,u("");case 10:return e.next=12,r("");case 12:return e.next=14,h("");case 14:setTimeout((function(){k(""),v(""),y("/login")}),1500),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(1),"Username/password length must be more than 3 characters"===(a=e.t0.response.data.error)?(k("failure"),v("Username/password length must be more than 3 characters."),setTimeout((function(){k(""),v(""),u(""),r(""),h("")}),2500)):"username must be unique"===a?(k("failure"),v("Username already taken ! Try another username ."),setTimeout((function(){k(""),v(""),u(""),r(""),h("")}),3e3)):"Enter all the fields"===a?(k("failure"),v("Enter all the fields."),setTimeout((function(){k(""),v(""),u(""),r(""),h("")}),2500)):(k("failure"),v("An error occured.Try again."),setTimeout((function(){k(""),v(""),u(""),r(""),h("")}),2500));case 21:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(E,{}),Object(O.jsxs)("div",{className:"pageCol2",children:[p?Object(O.jsx)(M,{message:p,intent:S}):null,Object(O.jsx)("h2",{id:"RegisterHeader",children:"Register"}),Object(O.jsxs)("form",{onSubmit:C,children:[Object(O.jsx)("label",{id:"nameLabel",htmlFor:"name",children:"First Name"}),Object(O.jsx)("input",{id:"RegisterName",type:"text",autoComplete:"off",name:"name",value:i,onChange:function(e){u(e.target.value)}}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{id:"usernameLabel",htmlFor:"RegisterUsername",children:"Username"}),Object(O.jsx)("input",{id:"RegisterUsername",type:"text",autoComplete:"off",name:"username",value:n,onChange:function(e){r(e.target.value)}}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{id:"passwordLabel",htmlFor:"RegisterPassword",children:"Password"}),Object(O.jsx)("input",{id:"RegisterPassword",type:"password",name:"password",value:g,onChange:function(e){h(e.target.value)}}),Object(O.jsx)("br",{}),Object(O.jsx)("button",{id:"RegisterSubmitBtn",type:"submit",children:"Sign Up"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsxs)("p",{className:"userLink",children:["Already a registered user?"," ",Object(O.jsx)(m.b,{to:"/login",className:"signLinks",children:"Sign In"})," "]})]})]})]})},q=function(){var e=Object(o.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G={login:q};var K=function(){var e=Object(i.b)(),t=Object(I.g)(),n=Object(a.useState)(""),r=Object(l.a)(n,2),c=r[0],s=r[1],u=Object(a.useState)(""),b=Object(l.a)(u,2),d=b[0],g=b[1],h=Object(a.useState)(""),f=Object(l.a)(h,2),x=f[0],p=f[1],v=Object(a.useState)(""),w=Object(l.a)(v,2),N=w[0],S=w[1],k=function(){var n=Object(o.a)(j.a.mark((function n(r){var a;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.prev=1,n.next=4,G.login({username:c,password:d});case 4:a=n.sent,window.localStorage.setItem("loggedInBlogUser",JSON.stringify(a)),C.setToken(a.token),e(A(a)),p("Logged In as ".concat(c)),S("success"),g(""),s(""),setTimeout((function(){p(""),S(""),t("/blogs")}),1500),n.next=22;break;case 15:n.prev=15,n.t0=n.catch(1),p("Login failed. Retry!"),S("failure"),g(""),s(""),setTimeout((function(){p(""),S("")}),3e3);case 22:case"end":return n.stop()}}),n,null,[[1,15]])})));return function(e){return n.apply(this,arguments)}}();return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(E,{}),Object(O.jsxs)("div",{className:"pageCol",children:[x?Object(O.jsx)(M,{message:x,intent:N}):null,Object(O.jsx)("h2",{id:"loginHeader",children:"Login"}),Object(O.jsxs)("form",{onSubmit:k,children:[Object(O.jsx)("label",{id:"usernameLabel",htmlFor:"loginUsername",children:"Username"}),Object(O.jsx)("input",{id:"loginUsername",type:"text",autoComplete:"off",name:"username",value:c,onChange:function(e){s(e.target.value)}}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{id:"passwordLabel",htmlFor:"loginPassword",children:"Password"}),Object(O.jsx)("input",{id:"loginPassword",type:"password",name:"password",value:d,onChange:function(e){g(e.target.value)}}),Object(O.jsx)("br",{}),Object(O.jsx)("button",{id:"loginSubmitBtn",type:"submit",children:"Login"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsxs)("p",{className:"userLink",children:["New User?"," ",Object(O.jsx)(m.b,{to:"/register",className:"signLinks",children:"Sign Up"})," "]})]})]})]})};var W=function(e){e.addBlog;var t=Object(I.g)(),n=Object(a.useState)(""),r=Object(l.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)(""),u=Object(l.a)(i,2),b=u[0],d=u[1],g=function(){var e=Object(o.a)(j.a.mark((function e(n){var r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r={title:n.target[0].value,content:n.target[1].value},e.prev=2,e.next=5,C.create(r);case 5:return e.next=7,d("success");case 7:return e.next=9,s("Successfully published the blog !");case 9:setTimeout((function(){d(""),s(""),n.target[0].value="",n.target[1].value="",t("/blogs")}),2e3),e.next=19;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0),"Missing token or invalid"===(a=e.t0.response.data.error)?(d("failure"),s(a),setTimeout((function(){d(""),s(""),t("/login")}),2500)):"Title / Content missing"===a?(d("failure"),s(a),setTimeout((function(){d(""),s("")}),2500)):(d("failure"),s("Your token has expired. Kindly login again ."),setTimeout((function(){d(""),s("")}),2500)),n.target[0].value="",n.target[1].value="";case 19:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"blogForm",children:[Object(O.jsx)(L,{loggedInAs:JSON.parse(localStorage.getItem("loggedInBlogUser")).name}),c?Object(O.jsx)(M,{message:c,intent:b}):null,Object(O.jsxs)("div",{className:"createBlog",children:[Object(O.jsx)("h1",{className:"blogh1",children:"Create a new thought !"}),Object(O.jsxs)("form",{onSubmit:g,children:[Object(O.jsx)("label",{htmlFor:"title",className:"blogLabel",children:"Title"}),Object(O.jsx)("br",{}),Object(O.jsx)("textarea",{name:"title",id:"title",cols:"70",rows:"3",className:"titleInput",maxLength:"100"}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{htmlFor:"content",className:"blogLabel",children:"Content"}),Object(O.jsx)("br",{}),Object(O.jsx)("textarea",{name:"content",id:"content",cols:"90",rows:"10",className:"contentInput"}),Object(O.jsx)("br",{}),Object(O.jsx)("button",{type:"submit",className:"logout",children:"Create"})]})]})]})};var Y=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(null),s=Object(l.a)(c,2),i=s[0],u=s[1],g=Object(I.h)().id,m=Object(I.g)();Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedInBlogUser");if(e){var t=JSON.parse(e);u(t)}else m("/login")}),[m]),Object(a.useEffect)((function(){C.getSingleBlog(g).then((function(e){return r(e)}))}),[g]);var h=function(){var e=Object(o.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.update(t,n);case 2:return e.next=4,C.getSingleBlog(t).then((function(e){return r(e)}));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=Object(o.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.update(t,n);case 2:return e.next=4,C.getSingleBlog(t).then((function(e){return r(e)}));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();if(null!==i)return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(L,{loggedInAs:i.name}),Object(O.jsxs)("div",{className:"singleBlog",children:[Object(O.jsx)("h1",{id:"singleBlogHeading",children:n.title}),Object(O.jsxs)("p",{className:"authorPara",children:["Author : ",n.user?n.user.name:null]}),Object(O.jsx)("p",{className:"authorPara",children:new Date(n.timeStamp).toDateString()}),Object(O.jsx)("br",{}),Object(O.jsx)("p",{className:"blogContentPara",children:n.content}),Object(O.jsxs)("p",{className:"iconsDiv",children:[n.likersList?n.likersList.includes(i.username)?Object(O.jsx)(b.a,{style:{color:"red"},className:"liked",onClick:function(){return function(e,t){return f(e,t)}(n.id,i.username)}}):Object(O.jsx)(d.a,{className:"notLiked",color:"error",onClick:function(){!function(e,t){h(e,t)}(n.id,i.username)}}):null,n.likes]})]})]})},Q=Object(r.a)({reducer:{users:F,blogRoute:B}});s.a.createRoot(document.getElementById("root")).render(Object(O.jsx)(i.a,{store:Q,children:Object(O.jsx)(m.a,{children:Object(O.jsxs)(I.c,{children:[Object(O.jsx)(I.a,{exact:!0,path:"/login",element:Object(O.jsx)(K,{})}),Object(O.jsx)(I.a,{exact:!0,path:"/register",element:Object(O.jsx)(z,{})}),Object(O.jsx)(I.a,{exact:!0,path:"/",element:Object(O.jsx)(P,{})}),Object(O.jsx)(I.a,{exact:!0,path:"/blogs/",element:Object(O.jsx)(R,{})}),Object(O.jsx)(I.a,{exact:!0,path:"/write",element:Object(O.jsx)(W,{})}),Object(O.jsx)(I.a,{path:"/blogs/:id",element:Object(O.jsx)(Y,{})})]})})}))}},[[304,1,2]]]);
//# sourceMappingURL=main.fb829bc7.chunk.js.map