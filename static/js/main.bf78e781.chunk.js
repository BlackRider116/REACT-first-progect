(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){e.exports={nav:"Navbar_nav__31ocV",item:"Navbar_item__aRDoY",active:"Navbar_active__2J4Ty",setting:"Navbar_setting__23d7Q",friend:"Navbar_friend__23CFe"}},104:function(e,t,n){"use strict";n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return h})),n.d(t,"b",(function(){return b}));var a=n(8),r=n.n(a),s=n(20),o=n(9),c=n(17),i="/users/FOLLOW",u={users:[],usersCount:10,totalCount:0,numberPage:1,isLoading:!1},l=function(e,t,n){return e.map((function(e){return e.id===t?Object(o.a)({},e,{followed:n}):e}))},d=function(e){return{type:i,userId:e}},f=function(e){return{type:"/users/UNFOLLOW",userId:e}},m=function(e){return{type:"/users/SET_LOADING",isLoading:e}},p=function(e,t){return function(){var n=Object(s.a)(r.a.mark((function n(a){var s;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t&&a({type:"/users/SET_NUMBER_PAGE",numberPage:t}),a(m(!0)),n.next=4,c.d.getUsers(e,t);case 4:s=n.sent,a({type:"/users/SET_USERS",users:s.items}),a({type:"/users/SET_TOTAL_COUNT",totalCount:s.totalCount}),a(m(!1));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.postFollow(e);case 2:0===t.sent.data.resultCode&&n(d(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.deleteFollow(e);case 2:0===t.sent.data.resultCode&&n(f(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return Object(o.a)({},e,{users:l(e.users,t.userId,!0)});case"/users/UNFOLLOW":return Object(o.a)({},e,{users:l(e.users,t.userId,!1)});case"/users/SET_USERS":return Object(o.a)({},e,{users:t.users});case"/users/SET_NUMBER_PAGE":return Object(o.a)({},e,{numberPage:t.numberPage});case"/users/SET_TOTAL_COUNT":return Object(o.a)({},e,{totalCount:t.totalCount});case"/users/SET_LOADING":return Object(o.a)({},e,{isLoading:t.isLoading});default:return e}}},117:function(e,t,n){"use strict";var a=n(0),r=n.n(a),s=n(89),o=n.n(s);t.a=function(e){return r.a.createElement("div",{className:o.a.item},r.a.createElement("img",{alt:"FriendsOnline",src:e.state.src}),r.a.createElement("div",{className:o.a.item},e.state.name))}},134:function(e,t,n){e.exports={sidebar:"Sidebar_sidebar__2PIQJ"}},136:function(e,t,n){e.exports=n.p+"static/media/loading.0e2358c3.gif"},162:function(e,t,n){e.exports=n(288)},163:function(e,t,n){},17:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return i}));var a=n(130),r=a.create({baseURL:"https://social-network.samuraijs.com/api/1.0",withCredentials:!0,headers:{"API-KEY":"fc98c8d1-fcc0-4027-a270-97c3e19bdaad"}}),s={getUsers:function(e,t){return r.get("/users?count=".concat(e,"&page=").concat(t)).then((function(e){return e.data}))}},o={postFollow:function(e){return r.post("/follow/".concat(e))},deleteFollow:function(e){return r.delete("/follow/".concat(e))}},c={getAuth:function(){return r.get("/auth/me")},login:function(e,t,n){return r.post("/auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return r.delete("/auth/login")}},i={getProfile:function(e){return r.get("/profile/".concat(e))},getUserStatus:function(e){return r.get("/profile/status/".concat(e))},updateUserStatus:function(e){return r.put("/profile/status/",{status:e})},saveAvatarPhoto:function(e){var t=new FormData;return t.append("image",e),r.put("/profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfileInfo:function(e){return r.put("/profile",e)}}},288:function(e,t,n){"use strict";n.r(t);n(163),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(7),r=n(95),s=n(93),o={friends:[{name:"Nail",id:1,src:"https://www.nastol.com.ua/download.php?img=201112/1280x1024/nastol.com.ua-12179.jpg"},{name:"Dasha",id:2,src:"https://avatars.mds.yandex.net/get-pdb/1706591/9d637326-f188-44f3-8117-76c62487dcd6/s1200"},{name:"Sasha",id:3,src:"http://www.topoboi.com/pic/201312/1440x900/topoboi.com-32873.jpg"},{name:"Petr",id:4,src:"https://avatars.mds.yandex.net/get-pdb/1942078/de777b22-35ba-4f83-925a-a95bb7ded7a1/s1200"},{name:"Dinar",id:5,src:"https://www.sunhome.ru/i/wallpapers/114/koshka-v3.orig.jpg"},{name:"Gena",id:6,src:"https://yt3.ggpht.com/a/AGF-l7-FVKXYlawwwX3FPFRUmbScWaQRXNFYMTe83Q=s900-c-k-c0xffffffff-no-rj-mo"},{name:"Masha",id:7,src:"https://avatars.mds.yandex.net/get-pdb/1365646/0d7c5f19-73d0-410d-a8ed-ec7529d8a167/s1200"},{name:"Sasha",id:8,src:"https://avatars.mds.yandex.net/get-pdb/195449/6eec6f67-e740-457e-9eb7-34bcde2f7082/s1200"}]},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;arguments.length>1&&arguments[1];return e},i=n(104),u=n(8),l=n.n(u),d=n(20),f=n(9),m=n(17),p=n(40),h="/auth/me/SET_AUTH",b={userId:null,email:null,login:null,isAuth:!1},g=function(e,t,n,a){return{type:h,payload:{userId:e,email:t,login:n,isAuth:a}}},v=function(){return function(e){return m.a.getAuth().then((function(t){if(!t.data.resultCode){var n=t.data.data,a=n.id,r=n.email,s=n.login;e(g(a,r,s,!0))}}))}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(f.a)({},e,{},t.payload);default:return e}},w=n(131),_=n(129),O={initialized:!1},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"/auth/me/INITIALIZED_SUCCESS":return Object(f.a)({},e,{initialized:!0});default:return e}},j=Object(a.c)({messagesPage:r.b,profilePage:s.b,friendsPage:c,usersPage:i.a,auth:E,form:_.a,app:y}),S=Object(a.e)(j,Object(a.a)(w.a));window.store=S;var x=S,N=n(0),k=n.n(N),T=n(61),C=n.n(T),A=n(47),P=n(48),U=n(50),F=n(49),I=n(51),L=n(88),B=n.n(L),D=n(29),R=function(){return k.a.createElement("div",null,"News")},M=function(){return k.a.createElement("div",null,"Setting")},G=function(){return k.a.createElement("div",null,"Music")},z=n(134),H=n.n(z),X=function(){return k.a.createElement("div",{className:H.a.sidebar},"SIDEBAR")},W=n(10),Y=n.n(W),Q=n(14),V=n(117),Z=function(e){var t=e.friends.map((function(e){return k.a.createElement(V.a,{state:e,key:e.id})}));return t.length=6,k.a.createElement("nav",{className:Y.a.nav},k.a.createElement("div",{className:Y.a.item},k.a.createElement(Q.b,{to:"/profile",activeClassName:Y.a.active},"Profile")),k.a.createElement("div",{className:Y.a.item},k.a.createElement(Q.b,{to:"/dialogs",activeClassName:Y.a.active},"Messages")),k.a.createElement("div",{className:Y.a.item},k.a.createElement(Q.b,{to:"/news",activeClassName:Y.a.active},"News")),k.a.createElement("div",{className:Y.a.item},k.a.createElement(Q.b,{to:"/music",activeClassName:Y.a.active},"Music")),k.a.createElement("div",{className:"".concat(Y.a.item," ").concat(Y.a.setting)},k.a.createElement(Q.b,{to:"/setting",activeClassName:Y.a.active},"Setting")),k.a.createElement("div",{className:"".concat(Y.a.item," ").concat(Y.a.setting)},k.a.createElement(Q.b,{to:"/users",activeClassName:Y.a.active},"Users")),k.a.createElement("div",{className:"".concat(Y.a.item)},k.a.createElement(Q.b,{to:"/friends",activeClassName:Y.a.active},"Friends")),k.a.createElement("div",{className:Y.a.friend},t))},J=n(13),K=Object(J.b)((function(e){return{friends:e.friendsPage.friends}}))(Z),q=n(33),$=n.n(q),ee=function(e){return k.a.createElement("header",{className:$.a.header},k.a.createElement("img",{alt:"Logotype",src:"https://liputan60.files.wordpress.com/2018/02/cropped-00106-3d-company-logo-design-free-logo-online-template-03.png?w=200"}),k.a.createElement("div",{className:$.a.loginBlockPosition},e.isAuth?k.a.createElement("div",{className:$.a.loginBlockName},"".concat(e.login,"   "),k.a.createElement("button",{onClick:function(){e.logout()},className:$.a.loginBlockButton},"LOGOUT")):k.a.createElement("div",{className:$.a.loginBlock},k.a.createElement(Q.b,{to:"/login",activeClassName:$.a.active},"LOGIN"))))},te=function(e){function t(){return Object(A.a)(this,t),Object(U.a)(this,Object(F.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){return k.a.createElement(ee,this.props)}}]),t}(k.a.Component),ne=Object(J.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.logout();case 2:e.sent.data.resultCode||t(g(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(te),ae=n(128),re=n(64),se=n(65),oe=n(39),ce=n.n(oe),ie=Object(re.a)(30),ue=Object(ae.a)({form:"login"})((function(e){return k.a.createElement("form",{onSubmit:e.handleSubmit},k.a.createElement("div",null,Object(se.a)([re.b,ie],"email","input","Email")),k.a.createElement("div",null,Object(se.a)([re.b,ie],"password","input","Password","password")),k.a.createElement("div",null,Object(se.a)(null,"rememberMe","input",null,"checkbox")," remember me"),e.error&&k.a.createElement("div",{className:ce.a.errorText},e.error),k.a.createElement("div",null,k.a.createElement("button",null,"Sign in")))})),le=Object(J.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var a=Object(d.a)(l.a.mark((function a(r){var s,o;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,m.a.login(e,t,n);case 2:(s=a.sent).data.resultCode?(o=s.data.messages.length>0?s.data.messages[0]:"Some Error",r(Object(p.a)("login",{_error:o}))):r(v());case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?k.a.createElement(D.a,{to:"/profile"}):k.a.createElement("div",null,k.a.createElement("h1",null,"Login"),k.a.createElement(ue,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))})),de=n(60),fe=function(e){return function(t){return k.a.createElement(N.Suspense,{fallback:k.a.createElement(de.a,null)},k.a.createElement(e,t))}},me=k.a.lazy((function(){return n.e(5).then(n.bind(null,301))})),pe=k.a.lazy((function(){return n.e(6).then(n.bind(null,302))})),he=k.a.lazy((function(){return n.e(4).then(n.bind(null,300))})),be=k.a.lazy((function(){return n.e(3).then(n.bind(null,299))})),ge=function(e){function t(){return Object(A.a)(this,t),Object(U.a)(this,Object(F.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(P.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?k.a.createElement("div",{className:B.a.wrapper},k.a.createElement(ne,null),k.a.createElement(K,null),k.a.createElement("div",{className:B.a.content},k.a.createElement(D.b,{path:"/dialogs",render:fe(me)}),k.a.createElement(D.b,{path:"/profile/:userId?",render:fe(be)}),k.a.createElement(D.b,{path:"/news",render:function(){return k.a.createElement(R,null)}}),k.a.createElement(D.b,{path:"/music",render:function(){return k.a.createElement(G,null)}}),k.a.createElement(D.b,{path:"/setting",render:function(){return k.a.createElement(M,null)}}),k.a.createElement(D.b,{path:"/users",render:fe(he)}),k.a.createElement(D.b,{path:"/friends",render:fe(pe)}),k.a.createElement(D.b,{path:"/login",render:function(){return k.a.createElement(le,null)}})),k.a.createElement(X,null)):k.a.createElement(de.a,null)}}]),t}(k.a.Component),ve=Object(a.d)(Object(J.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(v()).finally((function(){e({type:"/auth/me/INITIALIZED_SUCCESS"})}))}}}),D.f)(ge);C.a.render(k.a.createElement(Q.a,{basename:"/REACT-first-progect"},k.a.createElement(J.a,{store:x},k.a.createElement(ve,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},33:function(e,t,n){e.exports={header:"Header_header__jNHyT",loginBlockPosition:"Header_loginBlockPosition__2Xu2F",loginBlockButton:"Header_loginBlockButton__2-k02",loginBlock:"Header_loginBlock__3vzsl",active:"Header_active__2880G",loginBlockName:"Header_loginBlockName__1Zrki"}},39:function(e,t,n){e.exports={formControl:"FormControl_formControl__e7Zms",error:"FormControl_error___XZeI",errorText:"FormControl_errorText__31o7d"}},60:function(e,t,n){"use strict";var a=n(0),r=n.n(a),s=n(136),o=n.n(s);t.a=function(){return r.a.createElement("img",{src:o.a,alt:"Loader"})}},64:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return s}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}},s=function(e){if(!e)return""}},65:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(94),r=n(0),s=n.n(r),o=n(39),c=n.n(o),i=n(86),u=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]),o=n.touched&&n.error;return s.a.createElement("span",{className:"".concat(c.a.formControl," ").concat(o?c.a.error:"")},"input"===r.types?s.a.createElement("input",Object.assign({},t,r)):s.a.createElement("textarea",Object.assign({},t,r)),o&&s.a.createElement("span",{className:c.a.errorText},n.error))},l=function(e,t,n,a,r,o){return s.a.createElement(i.a,{validate:e,name:t,placeholder:a,type:r,component:u,types:n,value:o})}},88:function(e,t,n){e.exports={wrapper:"App_wrapper__2lv4I",content:"App_content__1wn3B"}},89:function(e,t,n){e.exports={item:"Friends_item__2kVw-"}},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return p})),n.d(t,"g",(function(){return h})),n.d(t,"e",(function(){return b})),n.d(t,"f",(function(){return g}));var a=n(8),r=n.n(a),s=n(20),o=n(68),c=n(9),i=n(17),u="/profile/ADD-POST",l={posts:[{id:4,postText:"helo, how are you?",likes:10,src:"https://avatars.mds.yandex.net/get-pdb/1378807/02efeda4-5dd6-4f01-aa37-65eba04f077b/s1200"},{id:3,postText:"hdfghghdfhdfh",likes:15,src:"https://avatars.mds.yandex.net/get-pdb/1378807/02efeda4-5dd6-4f01-aa37-65eba04f077b/s1200"},{id:2,postText:"551++596",likes:7,src:"https://avatars.mds.yandex.net/get-pdb/1378807/02efeda4-5dd6-4f01-aa37-65eba04f077b/s1200"},{id:1,postText:"helo",likes:9,src:"https://avatars.mds.yandex.net/get-pdb/1378807/02efeda4-5dd6-4f01-aa37-65eba04f077b/s1200"}],profile:null,status:""},d=function(e){return{type:u,postText:e}},f=function(e){return function(t){i.c.getProfile(e).then((function(e){t({type:"/profile/SET_USER_PROFILE",profile:e.data})}))}},m=function(e){return{type:"/profile/SET_USER_STATUS",status:e}},p=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.getUserStatus(e);case 2:a=t.sent,n(m(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.updateUserStatus(e);case 2:0===t.sent.data.resultCode&&n(m(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.saveAvatarPhoto(e);case 2:0===(a=t.sent).data.resultCode&&n({type:"/profile/SAVE_PHOTO_SUCCESS",photos:a.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n,a){var s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=a().auth.userId,t.next=3,i.c.saveProfileInfo(e);case 3:0===t.sent.data.resultCode&&n(f(s));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n=e.posts[0].id;return Object(c.a)({},e,{posts:[{id:n+1,postText:t.postText.newPost,likes:0,src:"https://www.nastol.com.ua/download.php?img=201112/1280x1024/nastol.com.ua-12179.jpg"}].concat(Object(o.a)(e.posts))});case"/profile/SET_USER_PROFILE":return Object(c.a)({},e,{profile:t.profile});case"/profile/SET_USER_STATUS":return Object(c.a)({},e,{status:t.status});case"/profile/SAVE_PHOTO_SUCCESS":return Object(c.a)({},e,{profile:Object(c.a)({},e.profile,{photos:t.photos})});default:return e}}},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(68),r=n(9),s={usersDialog:[{name:"Nail",id:1,src:"https://www.nastol.com.ua/download.php?img=201112/1280x1024/nastol.com.ua-12179.jpg"},{name:"Dasha",id:2,src:"https://avatars.mds.yandex.net/get-pdb/1706591/9d637326-f188-44f3-8117-76c62487dcd6/s1200"},{name:"Sasha",id:3,src:"http://www.topoboi.com/pic/201312/1440x900/topoboi.com-32873.jpg"},{name:"Petr",id:4,src:"https://avatars.mds.yandex.net/get-pdb/1942078/de777b22-35ba-4f83-925a-a95bb7ded7a1/s1200"},{name:"Dinar",id:5,src:"https://www.sunhome.ru/i/wallpapers/114/koshka-v3.orig.jpg"},{name:"Gena",id:6,src:"https://yt3.ggpht.com/a/AGF-l7-FVKXYlawwwX3FPFRUmbScWaQRXNFYMTe83Q=s900-c-k-c0xffffffff-no-rj-mo"},{name:"Masha",id:7,src:"https://avatars.mds.yandex.net/get-pdb/1365646/0d7c5f19-73d0-410d-a8ed-ec7529d8a167/s1200"},{name:"Sasha",id:8,src:"https://avatars.mds.yandex.net/get-pdb/195449/6eec6f67-e740-457e-9eb7-34bcde2f7082/s1200"}],messages:[{id:1,message:"Hello"},{id:2,message:"How are you"},{id:3,message:"Good. u?"},{id:4,message:"ok"},{id:5,message:"fuck"},{id:6,message:"Yo"},{id:7,message:"BlaBla"}]},o=function(e){return{type:"/profile/ADD-MESSAGE",message:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"/profile/ADD-MESSAGE":var n=e.messages[e.messages.length-1].id;return Object(r.a)({},e,{messages:[].concat(Object(a.a)(e.messages),[{id:n+1,message:t.message}])});default:return e}}}},[[162,1,2]]]);
//# sourceMappingURL=main.bf78e781.chunk.js.map