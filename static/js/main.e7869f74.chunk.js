(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return h})),n.d(t,"h",(function(){return v})),n.d(t,"f",(function(){return g})),n.d(t,"e",(function(){return b})),n.d(t,"g",(function(){return E}));var a=n(6),r=n.n(a),o=n(11),c=n(32),s=n(8),i=n(15),u=n(34),l="/profile/ADD-POST",p={posts:[{id:4,postText:"helo, how are you?",likes:10,src:"https://avatars.mds.yandex.net/get-pdb/1378807/02efeda4-5dd6-4f01-aa37-65eba04f077b/s1200"},{id:3,postText:"hdfghghdfhdfh",likes:15,src:"https://avatars.mds.yandex.net/get-pdb/1378807/02efeda4-5dd6-4f01-aa37-65eba04f077b/s1200"},{id:2,postText:"551++596",likes:7,src:"https://avatars.mds.yandex.net/get-pdb/1378807/02efeda4-5dd6-4f01-aa37-65eba04f077b/s1200"},{id:1,postText:"helo",likes:9,src:"https://avatars.mds.yandex.net/get-pdb/1378807/02efeda4-5dd6-4f01-aa37-65eba04f077b/s1200"}],profile:null,profileUpdate:null,status:""},d=function(e){return{type:l,postText:e}},f=function(e){return function(t){i.c.getProfile(e).then((function(e){t({type:"/profile/SET_USER_PROFILE",profile:e.data})}))}},m=function(e){return{type:"/profile/SET_USER_STATUS",status:e}},h=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.getUserStatus(e);case 2:a=t.sent,n(m(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.updateUserStatus(e);case 2:0===t.sent.data.resultCode&&n(m(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.saveAvatarPhoto(e);case 2:0===(a=t.sent).data.resultCode&&n({type:"/profile/SAVE_PHOTO_SUCCESS",photos:a.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return{type:"/profile/PROFILE_UPDATE_SUCCESS",isUpdate:e}},E=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n,a){var o,c,s,l,p;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=a().auth.userId,t.next=3,i.c.saveProfileInfo(e);case 3:0===(c=t.sent).data.resultCode?(n(f(o)),n(b(!0))):(s="",l="   Invalid url format","Invalid url format (Contacts->Facebook)"===(p=c.data.messages[0])&&(s={contacts:{facebook:l}}),"Invalid url format (Contacts->Website)"===p&&(s={contacts:{website:l}}),"Invalid url format (Contacts->Vk)"===p&&(s={contacts:{vk:l}}),"Invalid url format (Contacts->Twitter)"===p&&(s={contacts:{twitter:l}}),"Invalid url format (Contacts->Instagram)"===p&&(s={contacts:{instagram:l}}),"Invalid url format (Contacts->Youtube)"===p&&(s={contacts:{youtube:l}}),"Invalid url format (Contacts->Github)"===p&&(s={contacts:{github:l}}),"Invalid url format (Contacts->MainLink)"===p&&(s={contacts:{mainLink:l}}),n(Object(u.b)("profileUserInfo",s)),n(b(!1))),setTimeout((function(){n(b(null))}),1e3);case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var n=e.posts[0].id;return Object(s.a)({},e,{posts:[{id:n+1,postText:t.postText.newPost,likes:0,src:"https://www.nastol.com.ua/download.php?img=201112/1280x1024/nastol.com.ua-12179.jpg"}].concat(Object(c.a)(e.posts))});case"/profile/SET_USER_PROFILE":return Object(s.a)({},e,{profile:t.profile});case"/profile/SET_USER_STATUS":return Object(s.a)({},e,{status:t.status});case"/profile/SAVE_PHOTO_SUCCESS":return Object(s.a)({},e,{profile:Object(s.a)({},e.profile,{photos:t.photos})});case"/profile/PROFILE_UPDATE_SUCCESS":return Object(s.a)({},e,{profileUpdate:t.isUpdate});default:return e}}},101:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(32),r=n(8),o={messages:[],users:[],listAllDialogs:null,totalCountMessages:null},c=function(e){return{type:"/profile/ADD-MESSAGE",message:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"/profile/ADD-MESSAGE":var n=e.messages[e.messages.length-1].id;return Object(r.a)({},e,{messages:[].concat(Object(a.a)(e.messages),[{id:n+1,message:t.message.newMessage}])});default:return e}}},110:function(e,t,n){"use strict";n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return h})),n.d(t,"b",(function(){return v}));var a=n(6),r=n.n(a),o=n(11),c=n(8),s=n(15),i="/users/FOLLOW",u={users:[],usersCount:10,totalCount:0,numberPage:1,isLoading:!1},l=function(e,t,n){return e.map((function(e){return e.id===t?Object(c.a)({},e,{followed:n}):e}))},p=function(e){return{type:i,userId:e}},d=function(e){return{type:"/users/UNFOLLOW",userId:e}},f=function(e){return{type:"/users/SET_LOADING",isLoading:e}},m=function(e,t){return function(){var n=Object(o.a)(r.a.mark((function n(a){var o;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t&&a({type:"/users/SET_NUMBER_PAGE",numberPage:t}),a(f(!0)),n.next=4,s.d.getUsers(e,t);case 4:o=n.sent,a({type:"/users/SET_USERS",users:o.items}),a({type:"/users/SET_TOTAL_COUNT",totalCount:o.totalCount}),a(f(!1));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.postFollow(e);case 2:0===t.sent.data.resultCode&&n(p(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.deleteFollow(e);case 2:0===t.sent.data.resultCode&&n(d(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return Object(c.a)({},e,{users:l(e.users,t.userId,!0)});case"/users/UNFOLLOW":return Object(c.a)({},e,{users:l(e.users,t.userId,!1)});case"/users/SET_USERS":return Object(c.a)({},e,{users:t.users});case"/users/SET_NUMBER_PAGE":return Object(c.a)({},e,{numberPage:t.numberPage});case"/users/SET_TOTAL_COUNT":return Object(c.a)({},e,{totalCount:t.totalCount});case"/users/SET_LOADING":return Object(c.a)({},e,{isLoading:t.isLoading});default:return e}}},139:function(e,t,n){},14:function(e,t,n){e.exports={nav:"Navbar_nav__K0-a5",item:"Navbar_item__2FGpR",active:"Navbar_active__2AmRo",setting:"Navbar_setting__106UY"}},141:function(e,t,n){e.exports=n.p+"static/media/loading.0e2358c3.gif"},142:function(e,t,n){e.exports={img:"News_img__2FhU_",displayNone:"News_displayNone__296KQ"}},15:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return i}));var a=n(70),r=a.create({baseURL:"https://social-network.samuraijs.com/api/1.0",withCredentials:!0,headers:{"API-KEY":"fc98c8d1-fcc0-4027-a270-97c3e19bdaad"}}),o={getUsers:function(e,t){return r.get("/users?count=".concat(e,"&page=").concat(t)).then((function(e){return e.data}))}},c={postFollow:function(e){return r.post("/follow/".concat(e))},deleteFollow:function(e){return r.delete("/follow/".concat(e))}},s={getAuth:function(){return r.get("/auth/me")},login:function(e,t,n,a){return r.post("/auth/login",{email:e,password:t,rememberMe:n,captcha:a})},logout:function(){return r.delete("/auth/login")},getCaptcha:function(){return r.get("security/get-captcha-url")}},i={getProfile:function(e){return r.get("/profile/".concat(e))},getUserStatus:function(e){return r.get("/profile/status/".concat(e))},updateUserStatus:function(e){return r.put("/profile/status/",{status:e})},saveAvatarPhoto:function(e){var t=new FormData;return t.append("image",e),r.put("/profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfileInfo:function(e){return r.put("/profile",e)}}},170:function(e,t,n){e.exports=n(299)},171:function(e,t,n){},299:function(e,t,n){"use strict";n.r(t);n(171),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(10),r=n(101),o=n(100),c=n(110),s=n(6),i=n.n(s),u=n(11),l=n(8),p=n(15),d=n(34),f="/auth/me/SET_AUTH",m={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},h=function(e,t,n,a){return{type:f,payload:{userId:e,email:t,login:n,isAuth:a}}},v=function(){return function(e){return p.a.getAuth().then((function(t){if(!t.data.resultCode){var n=t.data.data,a=n.id,r=n.email,o=n.login;e(h(a,r,o,!0))}}))}},g=function(e){return{type:"/auth/me/GET_CAPTCHA",payload:{captchaUrl:e}}},b=function(){return function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.getCaptcha();case 2:n=e.sent,a=n.data.url,t(g(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:case"/auth/me/GET_CAPTCHA":return Object(l.a)({},e,{},t.payload);default:return e}},y=n(135),O=n(134),_={initialized:!1,globalError:null},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"/auth/me/INITIALIZED_SUCCESS":return Object(l.a)({},e,{initialized:!0});case"GLOBAL_ERROR":return Object(l.a)({},e,{globalError:t.globalError});default:return e}},S=n(32),j=n(70),P="https://backend-dz11.herokuapp.com",k=j.create({baseURL:P,headers:{"Content-Type":"application/json"}}),x=function(e){return k.get("/posts/seenPosts/".concat(e)).then((function(e){return e.data})).catch((function(e){console.log(e)}))},C=function(e){return k.post("/posts",JSON.stringify(e)).then((function(e){return e.data})).catch((function(e){console.log(e)}))},T=function(e){return k.post("/posts/".concat(e,"/likes")).then((function(e){return e.data})).catch((function(e){console.log(e)}))},I=function(e){return k.delete("/posts/".concat(e,"/likes")).then((function(e){return e.data})).catch((function(e){console.log(e)}))},N=function(e){return k.delete("/posts/".concat(e)).then((function(e){return e.data})).catch((function(e){console.log(e)}))},U=function(e){return k.post("/upload",e)},A="/posts/seenPosts/GET_POSTS",L="/posts/seenPosts/SET_POSTS",B="/posts//likes/SET_LIKES",D="/posts/TEXT",F={},R={posts:[],firstSeenId:null,newPostsButton:!0,lastSeenId:null,prevPostsButton:!1,textPost:""},M=function(e,t,n){return{type:L,posts:e,lastSeenId:t,prevPostsButton:n}},z=function(e,t,n){return{type:A,payload:{posts:e,lastSeenId:t,prevPostsButton:n}}},G=function(e,t){return{type:B,postId:e,likes:t}},H=function(e,t,n){return e.map((function(e){return e.id===t?Object(l.a)({},e,{likes:n}):e}))},W=function(e){return{type:"/posts//DELETE_POST",postId:e}},K=function(e,t){return e.filter((function(e){return e.id!==t}))},Y=function(e){return{type:"/posts/ADD_POST",post:e}},Z=function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U(t);case 2:n=e.sent,F={type:n.data.types,file:"".concat(P,"/static/").concat(n.data.name)};case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(l.a)({},e,{textPost:t.textPost});case A:return Object(l.a)({},e,{},t.payload);case L:return Object(l.a)({},e,{posts:[].concat(Object(S.a)(e.posts),Object(S.a)(t.posts)),lastSeenId:t.lastSeenId,prevPostsButton:t.prevPostsButton});case B:return Object(l.a)({},e,{posts:H(e.posts,t.postId,t.likes)});case"/posts//DELETE_POST":return Object(l.a)({},e,{posts:K(e.posts,t.postId)});case"/posts/ADD_POST":return Object(l.a)({},e,{posts:[t.post].concat(Object(S.a)(e.posts)),textPost:""});default:return e}},q=Object(a.c)({messagesPage:r.b,profilePage:o.b,usersPage:c.a,auth:E,form:O.a,app:w,news:V}),J=Object(a.e)(q,Object(a.a)(y.a));window.store=J;var Q=J,X=n(0),$=n.n(X),ee=n(67),te=n.n(ee),ne=n(39),ae=n(40),re=n(42),oe=n(41),ce=n(43),se=n(93),ie=n.n(se),ue=n(33),le=function(){return $.a.createElement("div",null,"Setting")},pe=n(139),de=n.n(pe),fe=function(){return $.a.createElement("div",{className:de.a},"Music")},me=n(14),he=n.n(me),ve=n(20),ge=function(){return $.a.createElement("nav",{className:he.a.nav},$.a.createElement("div",{className:he.a.item},$.a.createElement(ve.b,{to:"/profile",activeClassName:he.a.active},"Profile")),$.a.createElement("div",{className:he.a.item},$.a.createElement(ve.b,{to:"/dialogs",activeClassName:he.a.active},"Messages")),$.a.createElement("div",{className:he.a.item},$.a.createElement(ve.b,{to:"/news",activeClassName:he.a.active},"My news")),$.a.createElement("div",{className:he.a.item},$.a.createElement(ve.b,{to:"/music",activeClassName:he.a.active},"Music")),$.a.createElement("div",{className:"".concat(he.a.item," ").concat(he.a.setting)},$.a.createElement(ve.b,{to:"/setting",activeClassName:he.a.active},"Setting")),$.a.createElement("div",{className:"".concat(he.a.item," ").concat(he.a.setting)},$.a.createElement(ve.b,{to:"/users",activeClassName:he.a.active},"Users")))},be=n(38),Ee=n.n(be),ye=function(e){return $.a.createElement("header",{className:Ee.a.header},$.a.createElement("img",{alt:"Logotype",src:"https://liputan60.files.wordpress.com/2018/02/cropped-00106-3d-company-logo-design-free-logo-online-template-03.png?w=200"}),$.a.createElement("span",null,"Social Network"),$.a.createElement("div",{className:Ee.a.loginBlockPosition},e.isAuth?$.a.createElement("div",{className:Ee.a.loginBlockName},"".concat(e.login,"   "),$.a.createElement("button",{onClick:e.logout,className:Ee.a.loginBlockButton},"LOGOUT")):$.a.createElement("div",{className:Ee.a.loginBlock},$.a.createElement(ve.b,{to:"/login",activeClassName:Ee.a.active},"LOGIN"))))},Oe=n(16),_e=function(e){function t(){return Object(ne.a)(this,t),Object(re.a)(this,Object(oe.a)(t).apply(this,arguments))}return Object(ce.a)(t,e),Object(ae.a)(t,[{key:"render",value:function(){return $.a.createElement(ye,{isAuth:this.props.isAuth,login:this.props.login,logout:this.props.logout})}}]),t}($.a.Component),we=Object(Oe.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.logout();case 2:e.sent.data.resultCode||t(h(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(_e),Se=n(133),je=n(57),Pe=n(58),ke=n(47),xe=n.n(ke),Ce=n(73),Te=n.n(Ce),Ie=Object(je.a)(30),Ne=Object(Se.a)({form:"login"})((function(e){return $.a.createElement("form",{onSubmit:e.handleSubmit},$.a.createElement("div",null,Object(Pe.a)([je.b,Ie],"email","input","Email")),$.a.createElement("div",null,Object(Pe.a)([je.b,Ie],"password","input","Password","password")),$.a.createElement("div",null,Object(Pe.a)(null,"rememberMe","input",null,"checkbox")," remember me"),e.error&&$.a.createElement("div",{className:xe.a.errorText},e.error),e.captchaUrl&&$.a.createElement("img",{className:Te.a.captcha,src:e.captchaUrl,alt:"captcha"}),e.captchaUrl&&$.a.createElement("div",null,Object(Pe.a)(je.b,"captcha","input")),$.a.createElement("div",null,$.a.createElement("button",null,"Sign in")))})),Ue=Object(Oe.b)((function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}}),{login:function(e,t,n,a){return function(){var r=Object(u.a)(i.a.mark((function r(o){var c,s;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,p.a.login(e,t,n,a);case 2:0===(c=r.sent).data.resultCode?o(v()):(s=c.data.messages.length>0?c.data.messages[0]:"Some Error",o(Object(d.b)("login",{_error:s})),10===c.data.resultCode&&o(b()));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?$.a.createElement(ue.a,{to:"/profile"}):$.a.createElement("div",null,$.a.createElement("h1",null,"Login"),$.a.createElement(Ne,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl}),$.a.createElement("div",null,$.a.createElement("div",null,"\u041b\u043e\u0433\u0438\u043d\u0438\u0437\u0430\u0446\u0438\u044f \u043c\u043e\u0436\u0435\u0442 \u043d\u0435 \u043f\u0440\u043e\u0439\u0442\u0438 \u0432 \u0425\u0440\u043e\u043c\u0435 \u0438\u0437 \u0437\u0430 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438 CORS, \u0437\u0430\u0449\u0438\u0442\u044b \u043a\u0443\u043a\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 SameSite (\u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443 \u0443 \u043c\u0435\u043d\u044f \u043d\u0435\u0442).  \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0434\u0440\u0443\u0433\u0438\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u044b, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u043a\u0430\u043a \u044f \u041c\u043e\u0437\u0438\u043b\u0443"),$.a.createElement("b",null,"\u0422\u0435\u0441\u0442\u043e\u0432\u044b\u0439 \u0430\u043a\u043a\u0430\u0443\u043d\u0442:"),$.a.createElement("div",{className:Te.a.tests},$.a.createElement("b",null,"Email:")," free@samuraijs.com"),$.a.createElement("div",{className:Te.a.tests},$.a.createElement("b",null,"Password:")," free")))})),Ae=n(45),Le=function(e){return function(t){return $.a.createElement(X.Suspense,{fallback:$.a.createElement(Ae.a,null)},$.a.createElement(e,t))}},Be=n(99),De=n(142),Fe=n.n(De),Re=n(301),Me=n(302),ze=function(e){var t=Object.assign({},e);return t.posts.length?$.a.createElement("div",null,0!==t.lastSeenId&&t.posts.map((function(e){return $.a.createElement("div",{key:e.id},$.a.createElement(Re.a,{style:{margin:"5px",borderColor:"black"}},function(e){return""===e.type?null:"image"===e.type?$.a.createElement(Re.a.Img,{variant:"top",src:e.file,alt:""}):"audio"===e.type?$.a.createElement("audio",{style:{width:"100%"},src:e.file,controls:!0}):"video"===e.type?$.a.createElement("video",{style:{width:"100%"},src:e.file,controls:!0}):void 0}(e),$.a.createElement(Re.a.Body,{style:{backgroundColor:"rgb(215, 215, 215)"}},$.a.createElement(Re.a.Text,{style:{fontSize:"20px"}},e.content),$.a.createElement("span",{style:{marginRight:"10px",fontSize:"20px"}},"\ud83d\udc97 ".concat(e.likes)),$.a.createElement(Me.a,{variant:"outline-success",onClick:function(){t.likePost(e.id)}},"\ud83d\udc4d"),$.a.createElement(Me.a,{variant:"outline-warning",onClick:function(){t.dislikePost(e.id)}},"\ud83d\udc4e"),$.a.createElement(Me.a,{variant:"outline-danger",onClick:function(){t.deletePost(e.id)}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))))})),$.a.createElement("div",null,$.a.createElement(Me.a,{variant:"secondary",block:!0,className:t.prevPostsButton?"":Fe.a.displayNone,onClick:function(){t.getMyPosts(t.lastSeenId)}},"Previous posts"))):$.a.createElement(Ae.a,null)},Ge=n(300),He=n(303),We=function(e){function t(e){var n;return Object(ne.a)(this,t),(n=Object(re.a)(this,Object(oe.a)(t).call(this,e))).addPost=function(){n.props.addPostThunk(n.props.textPost),n.setState({uploadBtn:!1,recordBtn:!1,addBtn:!1})},n.onPostChange=function(e){n.props.textPostAdd(e.target.value)},n.fileUpload=$.a.createRef(),n.fileSelected=function(e){n.setState({recordBtn:!0,addBtn:!0});var t=Array.from(e.currentTarget.files),a=Object(Be.a)(t,1)[0],r=new FormData;r.append("media",a),Z(r).finally((function(){n.setState({addBtn:!1})}))},n.state={uploadBtn:!1,recordBtn:!1,addBtn:!1},n}return Object(ce.a)(t,e),Object(ae.a)(t,[{key:"componentDidMount",value:function(){this.props.getMyPosts()}},{key:"componentDidUpdate",value:function(e){this.props.posts.length!==e.posts.length&&this.props.posts.length<5&&this.props.getMyPosts(0)}},{key:"render",value:function(){var e=this;return $.a.createElement("div",null,$.a.createElement(Ge.a,null,$.a.createElement(He.a,{value:this.props.textPost,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u043e\u0441\u0442\u0430",onChange:this.onPostChange}),$.a.createElement(Ge.a.Append,null,$.a.createElement("input",{ref:this.fileUpload,type:"file",onChange:this.fileSelected,style:{display:"none"}}),$.a.createElement(Me.a,{onClick:function(){return e.fileUpload.current.click()},disabled:this.state.uploadBtn,variant:"secondary",style:{marginLeft:"2px"}},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c"),$.a.createElement(Me.a,{disabled:this.state.recordBtn,variant:"secondary",style:{marginLeft:"2px"}},"\u0417\u0430\u043f\u0438\u0441\u044c"),$.a.createElement(Me.a,{disabled:this.state.addBtn,style:{marginLeft:"2px"},variant:"success",onClick:this.addPost},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))),$.a.createElement(ze,this.props))}}]),t}($.a.Component),Ke=Object(a.d)(Object(Oe.b)((function(e){return{posts:e.news.posts,lastSeenId:e.news.lastSeenId,prevPostsButton:e.news.prevPostsButton,textPost:e.news.textPost,addPostFormData:e.news.addPostFormData}}),{getMyPosts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return(function(){var t=Object(u.a)(i.a.mark((function t(n){var a,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(e);case 2:0!==(a=t.sent).length&&(r=[a.reverse(),a[a.length-1].id],0===e?a.length<5?n(z.apply(void 0,r.concat([!1]))):n(z.apply(void 0,r.concat([!0]))):a.length<5?n(M.apply(void 0,r.concat([!1]))):n(M.apply(void 0,r.concat([!0]))));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},likePost:function(e){return function(){var t=Object(u.a)(i.a.mark((function t(n){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T(e);case 2:a=t.sent,n(G(e,a.likes));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},dislikePost:function(e){return function(){var t=Object(u.a)(i.a.mark((function t(n){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I(e);case 2:a=t.sent,n(G(e,a.likes));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},deletePost:function(e){return function(){var t=Object(u.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(e);case 2:n(W(e));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},addPostThunk:function(e){return function(){var t=Object(u.a)(i.a.mark((function t(n){var a,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={id:0,content:e,type:F.type||"",file:F.file||""},F={},t.next=4,C(a);case 4:r=t.sent,n(Y(r));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},textPostAdd:function(e){return{type:D,textPost:e}}}))(We),Ye=$.a.lazy((function(){return n.e(5).then(n.bind(null,312))})),Ze=$.a.lazy((function(){return n.e(3).then(n.bind(null,311))})),Ve=$.a.lazy((function(){return n.e(4).then(n.bind(null,310))})),qe=function(e){function t(){var e,n;Object(ne.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(re.a)(this,(e=Object(oe.a)(t)).call.apply(e,[this].concat(r)))).catchAllUnhandledErrors=function(e,t){var n="";n="Request failed with status code 403"===e.reason.message?'Invalid "API-KEY" in api.js':e.reason.message,alert(n)},n}return Object(ce.a)(t,e),Object(ae.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?$.a.createElement("div",{className:ie.a.wrapper},$.a.createElement(we,null),$.a.createElement(ge,null),$.a.createElement("div",{className:ie.a.content},$.a.createElement(ue.d,null,$.a.createElement(ue.b,{exact:!0,path:"/"},$.a.createElement(ue.a,{to:"/profile"})),$.a.createElement(ue.b,{path:"/profile/:userId?",render:Le(Ve)}),$.a.createElement(ue.b,{path:"/dialogs",render:Le(Ye)}),$.a.createElement(ue.b,{path:"/news",render:Le(Ke)}),$.a.createElement(ue.b,{path:"/music",render:function(){return $.a.createElement(fe,null)}}),$.a.createElement(ue.b,{path:"/setting",render:function(){return $.a.createElement(le,null)}}),$.a.createElement(ue.b,{path:"/users",render:Le(Ze)}),$.a.createElement(ue.b,{path:"/login",render:function(){return $.a.createElement(Ue,null)}}),$.a.createElement(ue.b,{path:"*",render:function(){return $.a.createElement("div",null,"404 NOT FOUND")}})))):$.a.createElement(Ae.a,null)}}]),t}($.a.Component),Je=Object(a.d)(Object(Oe.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(v()).finally((function(){e({type:"/auth/me/INITIALIZED_SUCCESS"})}))}}}),ue.g)(qe);te.a.render($.a.createElement(ve.a,null,$.a.createElement(Oe.a,{store:Q},$.a.createElement(Je,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},38:function(e,t,n){e.exports={header:"Header_header__2xxxm",loginBlockPosition:"Header_loginBlockPosition__170YU",loginBlockButton:"Header_loginBlockButton__LLRAe",loginBlock:"Header_loginBlock__2QqnK",active:"Header_active__3FiQc",loginBlockName:"Header_loginBlockName__VEKZW"}},45:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(97),c=n.n(o),s=n(141),i=n.n(s);t.a=function(){return r.a.createElement("div",{className:c.a.wrapper},r.a.createElement("img",{className:c.a.loading,src:i.a,alt:"Loader"}))}},47:function(e,t,n){e.exports={formControl:"FormControl_formControl__e7Zms",error:"FormControl_error___XZeI",errorText:"FormControl_errorText__31o7d"}},57:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"   Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},58:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(98),r=n(0),o=n.n(r),c=n(47),s=n.n(c),i=n(91),u=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]),c=n.touched&&n.error;return o.a.createElement("span",{className:"".concat(s.a.formControl," ").concat(c?s.a.error:"")},"input"===r.types?o.a.createElement("input",Object.assign({},t,r)):o.a.createElement("textarea",Object.assign({},t,r)),c&&o.a.createElement("span",{className:s.a.errorText},n.error))},l=function(e,t,n,a,r){return o.a.createElement(i.a,{validate:e,name:t,placeholder:a,type:r,component:u,types:n})}},73:function(e,t,n){e.exports={tests:"Login_tests__h1IcX",captcha:"Login_captcha__1ICN-"}},93:function(e,t,n){e.exports={wrapper:"App_wrapper__2czeP",content:"App_content__11LgW"}},97:function(e,t,n){e.exports={wrapper:"Preloader_wrapper__1dlYF",loading:"Preloader_loading__1v2Zm"}}},[[170,1,2]]]);
//# sourceMappingURL=main.e7869f74.chunk.js.map