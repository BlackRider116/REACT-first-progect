(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(181),r=n(0),o=n.n(r),c=n(79),s=n.n(c),i=n(173),u=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]),c=n.touched&&n.error;return o.a.createElement("span",{className:"".concat(s.a.formControl," ").concat(c?s.a.error:"")},"input"===r.types?o.a.createElement("input",Object.assign({},t,r)):o.a.createElement("textarea",Object.assign({},t,r)),c&&o.a.createElement("span",{className:s.a.errorText},n.error))},l=function(e,t,n,a,r){return o.a.createElement(i.a,{validate:e,name:t,placeholder:a,type:r,component:u,types:n})}},127:function(e,t,n){e.exports={img:"News_img__2FhU_",displayNone:"News_displayNone__296KQ"}},133:function(e,t,n){e.exports={tests:"Login_tests__h1IcX",captcha:"Login_captcha__1ICN-"}},175:function(e,t,n){e.exports={wrapper:"App_wrapper__2czeP",content:"App_content__11LgW"}},179:function(e,t,n){e.exports={wrapper:"Preloader_wrapper__1dlYF",loading:"Preloader_loading__1v2Zm"}},183:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return m})),n.d(t,"h",(function(){return E})),n.d(t,"f",(function(){return h})),n.d(t,"e",(function(){return g})),n.d(t,"g",(function(){return v}));var a=n(10),r=n.n(a),o=n(21),c=n(60),s=n(11),i=n(27),u=n(62),l="/profile/ADD-POST",A={posts:[{id:4,postText:"helo, how are you?",likes:10},{id:3,postText:"hdfghghdfhdfh",likes:15},{id:2,postText:"551++596",likes:7},{id:1,postText:"helo",likes:9}],profile:null,profileUpdate:null,status:""},d=function(e,t){return{type:l,postText:e,photo:t}},p=function(e){return function(t){i.c.getProfile(e).then((function(e){t({type:"/profile/SET_USER_PROFILE",profile:e.data})}))}},f=function(e){return{type:"/profile/SET_USER_STATUS",status:e}},m=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.getUserStatus(e);case 2:a=t.sent,n(f(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.updateUserStatus(e);case 2:0===t.sent.data.resultCode&&n(f(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.saveAvatarPhoto(e);case 2:0===(a=t.sent).data.resultCode&&n({type:"/profile/SAVE_PHOTO_SUCCESS",photos:a.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return{type:"/profile/PROFILE_UPDATE_SUCCESS",isUpdate:e}},v=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n,a){var o,c,s,l,A;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=a().auth.userId,t.next=3,i.c.saveProfileInfo(e);case 3:0===(c=t.sent).data.resultCode?(n(p(o)),n(g(!0))):(s="",l="   Invalid url format","Invalid url format (Contacts->Facebook)"===(A=c.data.messages[0])&&(s={contacts:{facebook:l}}),"Invalid url format (Contacts->Website)"===A&&(s={contacts:{website:l}}),"Invalid url format (Contacts->Vk)"===A&&(s={contacts:{vk:l}}),"Invalid url format (Contacts->Twitter)"===A&&(s={contacts:{twitter:l}}),"Invalid url format (Contacts->Instagram)"===A&&(s={contacts:{instagram:l}}),"Invalid url format (Contacts->Youtube)"===A&&(s={contacts:{youtube:l}}),"Invalid url format (Contacts->Github)"===A&&(s={contacts:{github:l}}),"Invalid url format (Contacts->MainLink)"===A&&(s={contacts:{mainLink:l}}),n(Object(u.b)("profileUserInfo",s)),n(g(!1))),setTimeout((function(){n(g(null))}),1e3);case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(s.a)({},e,{posts:[{id:e.posts[0].id+1,postText:t.postText.newPost,likes:0,src:t.photo}].concat(Object(c.a)(e.posts))});case"/profile/SET_USER_PROFILE":return Object(s.a)({},e,{profile:t.profile});case"/profile/SET_USER_STATUS":return Object(s.a)({},e,{status:t.status});case"/profile/SAVE_PHOTO_SUCCESS":return Object(s.a)({},e,{profile:Object(s.a)({},e.profile,{photos:t.photos})});case"/profile/PROFILE_UPDATE_SUCCESS":return Object(s.a)({},e,{profileUpdate:t.isUpdate});default:return e}}},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(60),r=n(11),o={messages:[],users:[],listAllDialogs:null,totalCountMessages:null},c=function(e){return{type:"/profile/ADD-MESSAGE",message:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"/profile/ADD-MESSAGE":var n=e.messages[e.messages.length-1].id;return Object(r.a)({},e,{messages:[].concat(Object(a.a)(e.messages),[{id:n+1,message:t.message.newMessage}])});default:return e}}},193:function(e,t,n){"use strict";n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return m})),n.d(t,"b",(function(){return E}));var a=n(10),r=n.n(a),o=n(21),c=n(11),s=n(27),i="/users/FOLLOW",u={users:[],usersCount:10,totalCount:0,numberPage:1,isLoading:!1},l=function(e,t,n){return e.map((function(e){return e.id===t?Object(c.a)({},e,{followed:n}):e}))},A=function(e){return{type:i,userId:e}},d=function(e){return{type:"/users/UNFOLLOW",userId:e}},p=function(e){return{type:"/users/SET_LOADING",isLoading:e}},f=function(e,t){return function(){var n=Object(o.a)(r.a.mark((function n(a){var o;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t&&a({type:"/users/SET_NUMBER_PAGE",numberPage:t}),a(p(!0)),n.next=4,s.d.getUsers(e,t);case 4:o=n.sent,a({type:"/users/SET_USERS",users:o.items}),a({type:"/users/SET_TOTAL_COUNT",totalCount:o.totalCount}),a(p(!1));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.postFollow(e);case 2:0===t.sent.data.resultCode&&n(A(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.deleteFollow(e);case 2:0===t.sent.data.resultCode&&n(d(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return Object(c.a)({},e,{users:l(e.users,t.userId,!0)});case"/users/UNFOLLOW":return Object(c.a)({},e,{users:l(e.users,t.userId,!1)});case"/users/SET_USERS":return Object(c.a)({},e,{users:t.users});case"/users/SET_NUMBER_PAGE":return Object(c.a)({},e,{numberPage:t.numberPage});case"/users/SET_TOTAL_COUNT":return Object(c.a)({},e,{totalCount:t.totalCount});case"/users/SET_LOADING":return Object(c.a)({},e,{isLoading:t.isLoading});default:return e}}},25:function(e,t,n){e.exports={nav:"Navbar_nav__K0-a5",item:"Navbar_item__2FGpR",active:"Navbar_active__2AmRo",setting:"Navbar_setting__106UY"}},254:function(e,t,n){},256:function(e,t,n){e.exports=n.p+"static/media/loading.0e2358c3.gif"},259:function(e,t){e.exports="data:image/gif;base64,R0lGODlhGQAZAKUAAAQCBISChERCRMzOzCQmJKSmpOzq7GRiZBQSFDQ2NJSSlLS2tPT29FRSVNze3AwKDCwuLKyurHx6fBwaHJyanExOTPTy9GxqbDw+PPz+/OTm5AQGBIyKjERGRNza3CwqLKyqrOzu7BQWFDw6PJSWlLy+vPz6/FxaXOTi5AwODDQyNLSytBweHJyenGxubAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCQAvACwAAAAAGQAZAAAG1cCXcEgsGo/IpHLJBEASKigUIERsmK8TI8PNWK4vkkeSYp5M3a+QwvWMlghPGkxKY5KASNcLJrS6GhNIFWgZJSYhYEJnXBRIJVwDDycGikIBXAyCRSJbGQ1CFVREKRZcJ0YjXCYPSitcHEYVXBqWRnUZjkUCXGpJIFwKRiyFb0UfQhsoXBdGAANcEUYFLi8HqwRHF13VRCAmASFcC0gP0MGbLwV7JhBJHwZdDkPrXc1KKg60o/UZJt1KEHAIgYIfO4ABBQzpcKHhBRcXymCZSLGiRSFBAAAh+QQJCQA3ACwAAAAAGQAZAIUEAgSEgoTEwsQ8PjykoqQkIiTk4uRcXlwUEhSUkpS0srT08vRMTkw0MjRsbmzMzswMCgyMioysqqwsKizs6uxkZmQcGhycmpy8urz8+vxUVlTMyswEBgSEhoTExsREQkSkpqQkJiTk5uRkYmQUFhSUlpS0trT09vRUUlQ8Ojx0dnTU0tQMDgyMjoysrqwsLizs7uxsamwcHhycnpy8vrz8/vxcWlwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG5MCbcEgsGo/FwICDbBYdtVUM4XQiFrUarCSrGgEoUTbb8BJJinFWABBWUlXEQ521CTmixaAJcI03LTUiEEIaWSIWSAxjBBwQFAFDKBlZM0g0WQ9MNwEFRAFZJ4lFJCdZKEObQwgwdUYpWRmETSZZEUaLNQaqRyVZF0YfWQu8RhJZCUYylDVwRG13BlkxXytZLkUq0COxIUcVYw5DEycvNy+tNRhIEHPqQxE1FxVYNRnmSBMUNag3LGJ0KlRpQGPTATonqHnZBMCDGgUTzBCBIMFUlg8SlQWQBiLjEQgoTIzy+OVIEAAh+QQJCQAyACwAAAAAGQAZAIUEAgSEgoTExsQ8Ojzk5uQcHhysqqxUVlQUEhSUkpTU1tT09vRMSkxkYmQsKiy0trQMCgzMzszs7uycmpyMioxEQkRcXlwcGhzc3tz8/vxUUlRsamw0MjS8vrwEBgSEhoTMyszs6uwkJiS0srRcWlwUFhSUlpT8+vxMTkxkZmQsLiy8urwMDgzU0tT08vScnpxERkTk4uQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG2kCZcEgUOkTFpLI4wCCXUGIl44wuARdYIEN9WoUAjWDBLVe/pVF5nTkd0JG1i8A9Nb4AQxnE8EztQxAISyhlLx5CFScWgQ8TSx1cIBBDA4xCEA8ZCxdJJWQZKEQARAguXCRJA3WUUJoZFEmFGQSkUCZcj0VTGS6IUHoZCUkFJ1wDUB4xXBtJAC1tFUMIqUMWdV5EKQsa0wLDQiqnGStLENJCLALCMh4pElwLHF8I6xkKDyFrzVbqbGUL7ny5AI3NiREOvgwhyKXFhwYFFBZhCE5iEoIVLU5M8SUIACH5BAkJADcALAAAAAAZABkAhQQCBISGhERCRMTGxCQiJGRiZKSmpOTm5BQSFFRWVDQyNHRydLS2tPT29JSWlNTW1AwKDExKTCwqLKyurOzu7BwaHHx6fIyOjMzOzGxubFxeXDw6PLy+vPz+/JyenNze3AQGBERGRMzKzCQmJGRmZKyqrOzq7BQWFFxaXDQ2NHR2dPz6/JyanNza3AwODExOTCwuLLSytPTy9BweHHx+fJSSlMTCxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbYwJtwSCwaj0hjKMkkVg6IJhEwC6FeEoClk5HeAAnbqkPutA6dB6B5ipXfbwHzhHnLPiZ4KQmYlEURIAAAL28fLkiFZB4gRBdkNigQSRxkIpNDEC0OCmxjHS9FLlFTjUUbZA2ISRAJHAFGigdrSY8dLEYCDRNyTCVkNUYuBEamQyBoHSRNAAIlCUUFZCsjSQgZDx0HmEIwFGQMSTQyZReZJN8dDZ1IC28NNgYxyWTLSSfkcO8FUh5k+WVWxJDgZcOKFide0KgRoMAML0IADFABMUmCExUzMgkCACH5BAkJADMALAAAAAAZABkAhQQCBISGhERGRMTGxCQiJOTm5KSmpGRmZBQSFDQyNFRWVPT29JSWlNza3LS2tAwKDMzOzCwqLOzu7Hx6fBwaHDw6PFxeXJSSlExOTPz+/JyenLy+vAQGBIyKjExKTMzKzCQmJOzq7LSytGxubBQWFDQ2NFxaXPz6/JyanNze3AwODNTS1CwuLPTy9Hx+fBweHDw+PGRiZMTCxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa/wJlwSCwaj8ikcsk0Al4CEyYCKFaTAIXslOlmGhOVMBFLkkTedLdRSRQmSBIk3WqE6JIM3InufgQPAAAsGmp7RRheGldELmmHRBt+D0YJd16QQggrDQ0CRgQQBaOjI01Wgqmnq6xMLyKwsQpGHCgGBhVGEWooHEYxXScgumkDjEMseRkOR7tpDBRDHActXQsszcFeCzIGDpddB0i7GiUNamkLZeOLMwgdyl4nIhFKHL5DCBguFwExL60CChyoJAgAIfkECQkANgAsAAAAABkAGQCFBAIEhIaEREJExMbEJCYkpKakZGJk5ObkFBIUlJaUVFZUNDY0tLa09Pb0fHp83NrcDAoMTEpMLC4srK6sbGps7O7sHBocnJ6cjI6MzM7MXF5cPD48xMLE/P78BAYEjIqMREZELCosrKqsZGZk7OrsFBYUnJqcXFpcPDo8vLq8/Pr8fH583N7cDA4MTE5MNDI0tLK0bG5s9PL0HB4cpKKk1NLUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABs1Am3BILBqPyKRyyTQCZqCTKwRoDgEKjqrD7TwcrWYJ1i1zWahlqVaWPQ7tjXK17QwiHoAndOkeLEoSCQlVRSd1Ji0GIh5WQwFcKiQdK0QQEEseJ2UNM0QxBwEESAYPZiJEHmwdKjAgjUQtGgNlAkQCZh0FYUUALyYyNYVCImUpKMNHCBJEMw1lE45DKykRMV0xRy8OnkYIQhAZXQmA4BQVrBewRyGTXA0cBQzuXBRLL6a57wZNCB/oZVRMCCGthYsVGD6c6CatocOHTIIAACH5BAkJADMALAAAAAAZABkAhQQCBISChERCRMTCxCwqLGxqbOTi5KSmpBQSFFRSVPTy9JSWlDQ2NNza3HR2dLS2tAwKDIyKjExKTOzq7BwaHFxaXPz6/MzOzDQyNKyurDw+PHx+fAQGBISGhERGRMTGxCwuLHRydOTm5KyqrBQWFFRWVPT29JyenDw6PNze3Hx6fLy6vAwODIyOjExOTOzu7BweHFxeXPz+/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbJwJlwSCwaj8ikcsk0AmCeSoLAaQ4BpYFFxpU1VCwrqdEty1IoK4ysaIjKCk0SQhhCIQAO4dQVUY4cGS9pSBVbMidGECNcg0kBXCZ/Q4FljkcsClwVQ4tmMpdGD1wRQxodHYwyChEBDlVDDAkuK1wrLgkeQwJcCrBFBAafJhJ2h4RGwWXERAAXXBlJyjLMRQVdIdIG1UUQz1wLkzMQ4gRySAQTXSYDBw8TIiBWGGSfMvFWCBEvZhYZdVZmsHCxoUWECjACKlzIkGEQACH5BAkJADUALAAAAAAZABkAhQQCBISChMTCxERCRKSipCQiJOTm5GRmZBQSFJSSlLSytPT29FRSVDQyNHR2dNza3AwKDIyKjExKTKyqrOzu7BwaHJyanMzOzCwqLHRydLy6vPz+/Dw6PHx+fAQGBISGhMTGxERGRKSmpCQmJOzq7GxqbBQWFJSWlLS2tPz6/FxaXDQ2NHx6fNze3AwODIyOjExOTKyurPTy9BweHJyenAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbYwJpwSCwaj8ikcsk8ekIqBsbTNAIum+yD5WK6DjFq7ZAttzhJzIuUhQldF1KqLBsYOZpFeYMaAgAYNGUGFUUAMChzWSkjRiqKNEgCexFHAVkLhUUmehsJIAYQRi4yWSp3ixAAKwVHClmVRTBZBgBKJ1kWRgNZMmJEHq01E1kJRjOKaEYKKDAGWSVWWBsKR7NljEclZRlWLdgEK7ZEENMbJ5pDLHsbKQ5GGGyYAiINQiaKLR3pRQ0P7JGEENDAQJQSBBEo0DEhxGAVFxJYvPggrIrFixgzDgkCADs0NHFJanBuQ0tvdjFXNUFtQzhmRGdnbndSa2xva252dlBIQ3hGNVhUamNmSGFEUTlDWk9wK2FOOU84L3pnZWpx"},27:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return i}));var a=n(125),r=a.create({baseURL:"https://social-network.samuraijs.com/api/1.0",withCredentials:!0,headers:{"API-KEY":"fc98c8d1-fcc0-4027-a270-97c3e19bdaad"}}),o={getUsers:function(e,t){return r.get("/users?count=".concat(e,"&page=").concat(t)).then((function(e){return e.data}))}},c={postFollow:function(e){return r.post("/follow/".concat(e))},deleteFollow:function(e){return r.delete("/follow/".concat(e))}},s={getAuth:function(){return r.get("/auth/me")},login:function(e,t,n,a){return r.post("/auth/login",{email:e,password:t,rememberMe:n,captcha:a})},logout:function(){return r.delete("/auth/login")},getCaptcha:function(){return r.get("security/get-captcha-url")}},i={getProfile:function(e){return r.get("/profile/".concat(e))},getUserStatus:function(e){return r.get("/profile/status/".concat(e))},updateUserStatus:function(e){return r.put("/profile/status/",{status:e})},saveAvatarPhoto:function(e){var t=new FormData;return t.append("image",e),r.put("/profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfileInfo:function(e){return r.put("/profile",e)}}},295:function(e,t,n){e.exports=n(496)},296:function(e,t,n){},496:function(e,t,n){"use strict";n.r(t);n(296),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(16),r=n(184),o=n(183),c=n(193),s=n(10),i=n.n(s),u=n(21),l=n(11),A=n(27),d=n(62),p="/auth/me/SET_AUTH",f={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},m=function(e,t,n,a){return{type:p,payload:{userId:e,email:t,login:n,isAuth:a}}},E=function(){return function(e){return A.a.getAuth().then((function(t){if(!t.data.resultCode){var n=t.data.data,a=n.id,r=n.email,o=n.login;e(m(a,r,o,!0))}}))}},h=function(e){return{type:"/auth/me/GET_CAPTCHA",payload:{captchaUrl:e}}},g=function(){return function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.getCaptcha();case 2:n=e.sent,a=n.data.url,t(h(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:case"/auth/me/GET_CAPTCHA":return Object(l.a)({},e,{},t.payload);default:return e}},y=n(251),w=n(250),S={initialized:!1,globalError:null},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"/auth/me/INITIALIZED_SUCCESS":return Object(l.a)({},e,{initialized:!0});case"GLOBAL_ERROR":return Object(l.a)({},e,{globalError:t.globalError});default:return e}},b=n(60),x=n(125),k="https://backend-dz11.herokuapp.com",B=x.create({baseURL:k,headers:{"Content-Type":"application/json"}}),O=function(e){return B.get("/posts/seenPosts/".concat(e)).then((function(e){return e.data})).catch((function(e){console.log(e)}))},T=function(e){return B.post("/posts",JSON.stringify(e)).then((function(e){return e.data})).catch((function(e){console.log(e)}))},Q=function(e){return B.post("/posts/".concat(e,"/likes")).then((function(e){return e.data})).catch((function(e){console.log(e)}))},U=function(e){return B.delete("/posts/".concat(e,"/likes")).then((function(e){return e.data})).catch((function(e){console.log(e)}))},I=function(e){return B.delete("/posts/".concat(e)).then((function(e){return e.data})).catch((function(e){console.log(e)}))},R=function(e){var t=new FormData;return t.append("media",e),B.post("/upload",t).then((function(e){return e.data}))},L="/posts/seenPosts/GET_POSTS",P="/posts/seenPosts/SET_POSTS",j="/posts//likes/SET_LIKES",N="/posts/TEXT",F={},D={posts:[],firstSeenId:null,newPostsButton:!0,lastSeenId:null,prevPostsButton:!1,textPost:""},G=function(e,t,n){return{type:P,posts:e,lastSeenId:t,prevPostsButton:n}},M=function(e,t,n){return{type:L,payload:{posts:e,lastSeenId:t,prevPostsButton:n}}},_=function(e,t){return{type:j,postId:e,likes:t}},J=function(e,t,n){return e.map((function(e){return e.id===t?Object(l.a)({},e,{likes:n}):e}))},K=function(e){return{type:"/posts//DELETE_POST",postId:e}},z=function(e,t){return e.filter((function(e){return e.id!==t}))},H=function(e){return{type:"/posts/ADD_POST",post:e}},Z=function(){var e=Object(u.a)(i.a.mark((function e(t,n){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(t);case 2:a=e.sent,r=n||a.types,F={type:r,file:"".concat(k,"/static/").concat(a.name)};case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(l.a)({},e,{textPost:t.textPost});case L:return Object(l.a)({},e,{},t.payload);case P:return Object(l.a)({},e,{posts:[].concat(Object(b.a)(e.posts),Object(b.a)(t.posts)),lastSeenId:t.lastSeenId,prevPostsButton:t.prevPostsButton});case j:return Object(l.a)({},e,{posts:J(e.posts,t.postId,t.likes)});case"/posts//DELETE_POST":return Object(l.a)({},e,{posts:z(e.posts,t.postId)});case"/posts/ADD_POST":return Object(l.a)({},e,{posts:[t.post].concat(Object(b.a)(e.posts)),textPost:""});default:return e}},V=Object(a.c)({messagesPage:r.b,profilePage:o.b,usersPage:c.a,auth:v,form:w.a,app:C,news:W}),Y=Object(a.e)(V,Object(a.a)(y.a));window.store=Y;var q=Y,X=n(0),$=n.n(X),ee=n(42),te=n.n(ee),ne=n(69),ae=n(70),re=n(72),oe=n(71),ce=n(73),se=n(175),ie=n.n(se),ue=n(61),le=function(){return $.a.createElement("div",null,"Setting")},Ae=n(254),de=n.n(Ae),pe=function(){return $.a.createElement("div",{className:de.a},"Music")},fe=n(25),me=n.n(fe),Ee=n(34),he=function(){return $.a.createElement("nav",{className:me.a.nav},$.a.createElement("div",{className:me.a.item},$.a.createElement(Ee.b,{to:"/profile",activeClassName:me.a.active},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c")),$.a.createElement("div",{className:me.a.item},$.a.createElement(Ee.b,{to:"/dialogs",activeClassName:me.a.active},"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f")),$.a.createElement("div",{className:me.a.item},$.a.createElement(Ee.b,{to:"/news",activeClassName:me.a.active},"\u041d\u043e\u0432\u043e\u0441\u0442\u0438")),$.a.createElement("div",{className:me.a.item},$.a.createElement(Ee.b,{to:"/music",activeClassName:me.a.active},"\u041c\u0443\u0437\u044b\u043a\u0430")),$.a.createElement("div",{className:"".concat(me.a.item," ").concat(me.a.setting)},$.a.createElement(Ee.b,{to:"/setting",activeClassName:me.a.active},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438")),$.a.createElement("div",{className:"".concat(me.a.item," ").concat(me.a.setting)},$.a.createElement(Ee.b,{to:"/users",activeClassName:me.a.active},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438")))},ge=n(68),ve=n.n(ge),ye=function(e){return $.a.createElement("header",{className:ve.a.header},$.a.createElement("img",{alt:"Logotype",src:"https://liputan60.files.wordpress.com/2018/02/cropped-00106-3d-company-logo-design-free-logo-online-template-03.png?w=200"}),$.a.createElement("span",null,"Social Network"),$.a.createElement("div",{className:ve.a.loginBlockPosition},e.isAuth?$.a.createElement("div",{className:ve.a.loginBlockName},"".concat(e.login,"   "),$.a.createElement("button",{onClick:e.logout,className:ve.a.loginBlockButton},"LOGOUT")):$.a.createElement("div",{className:ve.a.loginBlock},$.a.createElement(Ee.b,{to:"/login",activeClassName:ve.a.active},"LOGIN"))))},we=n(29),Se=function(e){function t(){return Object(ne.a)(this,t),Object(re.a)(this,Object(oe.a)(t).apply(this,arguments))}return Object(ce.a)(t,e),Object(ae.a)(t,[{key:"render",value:function(){return $.a.createElement(ye,{isAuth:this.props.isAuth,login:this.props.login,logout:this.props.logout})}}]),t}($.a.Component),Ce=Object(we.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.logout();case 2:e.sent.data.resultCode||t(m(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Se),be=n(249),xe=n(99),ke=n(100),Be=n(79),Oe=n.n(Be),Te=n(133),Qe=n.n(Te),Ue=Object(xe.a)(30),Ie=Object(be.a)({form:"login"})((function(e){return $.a.createElement("form",{onSubmit:e.handleSubmit},$.a.createElement("div",null,Object(ke.a)([xe.b,Ue],"email","input","Email")),$.a.createElement("div",null,Object(ke.a)([xe.b,Ue],"password","input","Password","password")),$.a.createElement("div",null,Object(ke.a)(null,"rememberMe","input",null,"checkbox")," remember me"),e.error&&$.a.createElement("div",{className:Oe.a.errorText},e.error),e.captchaUrl&&$.a.createElement("img",{className:Qe.a.captcha,src:e.captchaUrl,alt:"captcha"}),e.captchaUrl&&$.a.createElement("div",null,Object(ke.a)(xe.b,"captcha","input")),$.a.createElement("div",null,$.a.createElement("button",null,"Sign in")))})),Re=Object(we.b)((function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}}),{login:function(e,t,n,a){return function(){var r=Object(u.a)(i.a.mark((function r(o){var c,s;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,A.a.login(e,t,n,a);case 2:0===(c=r.sent).data.resultCode?o(E()):(s=c.data.messages.length>0?c.data.messages[0]:"Some Error",o(Object(d.b)("login",{_error:s})),10===c.data.resultCode&&o(g()));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?$.a.createElement(ue.a,{to:"/profile"}):$.a.createElement("div",null,$.a.createElement("h1",null,"Login"),$.a.createElement(Ie,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl}),$.a.createElement("div",null,$.a.createElement("div",null,"\u0415\u0441\u043b\u0438 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u043b\u043e\u0433\u0438\u043d\u0438\u0442\u044c\u0441\u044f, \u0437\u043d\u0430\u0447\u0438\u0442 \u0432\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0431\u043b\u043e\u043a\u0438\u0440\u0443\u0435\u0442 \u0444\u0430\u0439\u043b\u044b cookie"),$.a.createElement("b",null,"\u0422\u0435\u0441\u0442\u043e\u0432\u044b\u0439 \u0430\u043a\u043a\u0430\u0443\u043d\u0442:"),$.a.createElement("div",{className:Qe.a.tests},$.a.createElement("b",null,"Email:")," free@samuraijs.com"),$.a.createElement("div",{className:Qe.a.tests},$.a.createElement("b",null,"Password:")," free")))})),Le=n(77),Pe=function(e){return function(t){return $.a.createElement(X.Suspense,{fallback:$.a.createElement(Le.a,null)},$.a.createElement(e,t))}},je=n(182),Ne=n(127),Fe=n.n(Ne),De=n(505),Ge=n(258),Me=function(e){var t=Object.assign({},e);return t.posts.length?$.a.createElement("div",null,0!==t.lastSeenId&&t.posts.map((function(e){return $.a.createElement("div",{key:e.id},$.a.createElement(De.a,{style:{margin:"5px",borderColor:"black"}},function(e){return""===e.type?null:"image"===e.type?$.a.createElement(De.a.Img,{variant:"top",src:e.file,alt:""}):"audio"===e.type?$.a.createElement("audio",{style:{width:"100%"},src:e.file,controls:!0}):"video"===e.type?$.a.createElement("video",{style:{width:"100%",maxHeight:"640px"},src:e.file,controls:!0}):void 0}(e),$.a.createElement(De.a.Body,{style:{backgroundColor:"rgb(215, 215, 215)"}},$.a.createElement(De.a.Text,{style:{fontSize:"20px"}},e.content),$.a.createElement("span",{style:{marginRight:"10px",fontSize:"20px"}},"\ud83d\udc97 ".concat(e.likes)),$.a.createElement(Ge.a,{variant:"outline-success",onClick:function(){t.likePost(e.id)}},"\ud83d\udc4d"),$.a.createElement(Ge.a,{variant:"outline-warning",onClick:function(){t.dislikePost(e.id)}},"\ud83d\udc4e"),$.a.createElement(Ge.a,{variant:"outline-danger",onClick:function(){t.deletePost(e.id)}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))))})),$.a.createElement("div",null,$.a.createElement(Ge.a,{variant:"secondary",block:!0,className:t.prevPostsButton?"":Fe.a.displayNone,onClick:function(){t.getMyPosts(t.lastSeenId)}},"Previous posts"))):$.a.createElement(Le.a,null)},_e=n(501),Je=n(506),Ke=n(502),ze=n(135),He=n(504),Ze=n(259),We=n.n(Ze),Ve=n(260),Ye=n.n(Ve),qe=function(e){function t(e){var n;return Object(ne.a)(this,t),(n=Object(re.a)(this,Object(oe.a)(t).call(this,e))).addPost=function(){n.props.addPostThunk(n.props.textPost),n.setState({uploadBtn:!1,uploadBtnLoading:!1,recordBtn:!1,addBtn:!1})},n.onPostChange=function(e){n.props.textPostAdd(e.target.value)},n.fileUpload=$.a.createRef(),n.fileSelected=function(e){n.setState({recordBtn:!0,uploadBtnLoading:!0,addBtn:!0});var t=Array.from(e.currentTarget.files),a=Object(je.a)(t,1)[0];Z(a).finally((function(){n.setState({addBtn:!1,uploadBtnLoading:!1})}))},n.recordMediaUser=function(e){if(navigator.mediaDevices&&window.MediaRecorder){"audio"===e&&navigator.mediaDevices.getUserMedia({audio:!0}).then((function(n){t(n,e)})).catch((function(e){n.setState({error:!0,errorText:"\u041d\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u043c\u0438\u043a\u0440\u043e\u0444\u043e\u043d\u0443"})})),"video"===e&&navigator.mediaDevices.getUserMedia({audio:!0,video:!0}).then((function(a){t(a,e),n.video.srcObject=a,n.video.play(),n.setState({recordVideo:!0})})).catch((function(e){n.setState({error:!0,errorText:"\u041d\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u043a\u0430\u043c\u0435\u0440\u0435 \u0438/\u0438\u043b\u0438 \u043a \u043c\u0438\u043a\u0440\u043e\u0444\u043e\u043d\u0443"})}));var t=function(e,t){n.setState({uploadBtn:!0,addBtn:!0,recordBtnDisable:!0,recordBtn:!0}),n.mediaRecorder=new MediaRecorder(e),n.mediaRecorder.start(),n.mediaRecorder.ondataavailable=function(a){e.getTracks().forEach((function(e){return e.stop()})),n.setState({recordBtnDisable:!1,recordVideo:!1});var r=new Blob([a.data]);Z(r,t).finally((function(){n.setState({addBtn:!1,recordBtn:!1})}))},setTimeout((function(){"recording"===n.mediaRecorder.state&&n.mediaRecorder.stop()}),6e4)}}else n.setState({error:!0,errorText:"\u041d\u0435\u0442 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044b\u0445 \u043c\u0435\u0434\u0438\u0430 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432"})},n.state={uploadBtn:!1,uploadBtnLoading:!1,recordVideo:!1,recordBtn:!1,recordBtnDisable:!1,error:!1,errorText:"",addBtn:!1},n}return Object(ce.a)(t,e),Object(ae.a)(t,[{key:"componentDidMount",value:function(){this.props.getMyPosts()}},{key:"componentDidUpdate",value:function(e){this.props.posts.length!==e.posts.length&&this.props.posts.length<5&&this.props.getMyPosts(0)}},{key:"render",value:function(){var e=this;return $.a.createElement("div",null,$.a.createElement(_e.a,{style:{position:"fixed",width:"60%",marginTop:"5px",zIndex:"100"}},$.a.createElement(Je.a,{value:this.props.textPost,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u043e\u0441\u0442\u0430",onChange:this.onPostChange}),$.a.createElement("input",{ref:this.fileUpload,type:"file",onChange:this.fileSelected,style:{display:"none"}}),$.a.createElement(Ge.a,{onClick:function(){return e.fileUpload.current.click()},disabled:this.state.uploadBtn,variant:"secondary",style:{marginLeft:"2px"}},this.state.uploadBtnLoading?$.a.createElement("div",null,$.a.createElement("img",{src:We.a,alt:"Loading"}),$.a.createElement("span",null," \u0416\u0434\u0438\u0442\u0435...")," "):" \u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c"),this.state.recordBtnDisable?$.a.createElement(Ge.a,{variant:"warning",onClick:function(){return e.mediaRecorder.stop()}},$.a.createElement(Ye.a,null)," \u0421\u0442\u043e\u043f"):$.a.createElement(Ke.a,{title:"\u0417\u0430\u043f\u0438\u0441\u044c",variant:"secondary",style:{paddingLeft:"2px"},disabled:this.state.recordBtn},$.a.createElement(ze.a.Item,{onClick:function(){return e.recordMediaUser("video")}},"\u0412\u0438\u0434\u0435\u043e"),$.a.createElement(ze.a.Item,{onClick:function(){return e.recordMediaUser("audio")}},"\u0410\u0443\u0434\u0438\u043e")),$.a.createElement(Ge.a,{disabled:this.state.addBtn,style:{marginLeft:"2px"},variant:"success",onClick:this.addPost},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")),$.a.createElement("div",{style:{position:"fixed",width:"60%",marginTop:"50px",zIndex:"100"}},$.a.createElement(De.a,{className:!this.state.recordVideo&&Fe.a.displayNone},$.a.createElement("video",{style:{width:"100%"},muted:!0,ref:function(t){e.video=t}}))),$.a.createElement(He.a,{show:this.state.error,onHide:function(){return e.setState({error:!1})}},$.a.createElement(He.a.Header,{closeButton:!0},$.a.createElement(He.a.Title,null,"\u041e\u0448\u0438\u0431\u043a\u0430 !")),$.a.createElement(He.a.Body,null,this.state.errorText),$.a.createElement(He.a.Footer,null,$.a.createElement(Ge.a,{variant:"secondary",onClick:function(){return e.setState({error:!1})}},"Close"))),$.a.createElement("div",{style:{paddingTop:"50px"}},$.a.createElement(Me,this.props)))}}]),t}($.a.Component),Xe=Object(a.d)(Object(we.b)((function(e){return{posts:e.news.posts,lastSeenId:e.news.lastSeenId,prevPostsButton:e.news.prevPostsButton,textPost:e.news.textPost,addPostFormData:e.news.addPostFormData}}),{getMyPosts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return(function(){var t=Object(u.a)(i.a.mark((function t(n){var a,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(e);case 2:(a=t.sent)&&0!==a.length&&(r=[a.reverse(),a[a.length-1].id],0===e?a.length<5?n(M.apply(void 0,r.concat([!1]))):n(M.apply(void 0,r.concat([!0]))):a.length<5?n(G.apply(void 0,r.concat([!1]))):n(G.apply(void 0,r.concat([!0]))));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},likePost:function(e){return function(){var t=Object(u.a)(i.a.mark((function t(n){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Q(e);case 2:a=t.sent,n(_(e,a.likes));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},dislikePost:function(e){return function(){var t=Object(u.a)(i.a.mark((function t(n){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U(e);case 2:a=t.sent,n(_(e,a.likes));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},deletePost:function(e){return function(){var t=Object(u.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I(e);case 2:n(K(e));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},addPostThunk:function(e){return function(){var t=Object(u.a)(i.a.mark((function t(n){var a,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={id:0,content:e,type:F.type||"",file:F.file||""},F={},t.next=4,T(a);case 4:r=t.sent,n(H(r));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},textPostAdd:function(e){return{type:N,textPost:e}}}))(qe),$e=$.a.lazy((function(){return n.e(5).then(n.bind(null,515))})),et=$.a.lazy((function(){return n.e(3).then(n.bind(null,514))})),tt=$.a.lazy((function(){return n.e(4).then(n.bind(null,513))})),nt=function(e){function t(){var e,n;Object(ne.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(re.a)(this,(e=Object(oe.a)(t)).call.apply(e,[this].concat(r)))).catchAllUnhandledErrors=function(e,t){var n="";n="Request failed with status code 403"===e.reason.message?'Invalid "API-KEY" in api.js':e.reason.message,alert(n)},n}return Object(ce.a)(t,e),Object(ae.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?$.a.createElement("div",{className:ie.a.wrapper},$.a.createElement(Ce,null),$.a.createElement(he,null),$.a.createElement("div",{className:ie.a.content},$.a.createElement(ue.d,null,$.a.createElement(ue.b,{exact:!0,path:"/"},$.a.createElement(ue.a,{to:"/profile"})),$.a.createElement(ue.b,{path:"/profile/:userId?",render:Pe(tt)}),$.a.createElement(ue.b,{path:"/dialogs",render:Pe($e)}),$.a.createElement(ue.b,{path:"/news",render:Pe(Xe)}),$.a.createElement(ue.b,{path:"/music",render:function(){return $.a.createElement(pe,null)}}),$.a.createElement(ue.b,{path:"/setting",render:function(){return $.a.createElement(le,null)}}),$.a.createElement(ue.b,{path:"/users",render:Pe(et)}),$.a.createElement(ue.b,{path:"/login",render:function(){return $.a.createElement(Re,null)}}),$.a.createElement(ue.b,{path:"*",render:function(){return $.a.createElement("div",null,"404 NOT FOUND")}})))):$.a.createElement(Le.a,null)}}]),t}($.a.Component),at=Object(a.d)(Object(we.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(E()).finally((function(){e({type:"/auth/me/INITIALIZED_SUCCESS"})}))}}}),ue.g)(nt);te.a.render($.a.createElement(Ee.a,null,$.a.createElement(we.a,{store:q},$.a.createElement(at,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},68:function(e,t,n){e.exports={header:"Header_header__2xxxm",loginBlockPosition:"Header_loginBlockPosition__170YU",loginBlockButton:"Header_loginBlockButton__LLRAe",loginBlock:"Header_loginBlock__2QqnK",active:"Header_active__3FiQc",loginBlockName:"Header_loginBlockName__VEKZW"}},77:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(179),c=n.n(o),s=n(256),i=n.n(s);t.a=function(){return r.a.createElement("div",{className:c.a.wrapper},r.a.createElement("img",{className:c.a.loading,src:i.a,alt:"Loader"}))}},79:function(e,t,n){e.exports={formControl:"FormControl_formControl__e7Zms",error:"FormControl_error___XZeI",errorText:"FormControl_errorText__31o7d"}},99:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"   Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}}},[[295,1,2]]]);
//# sourceMappingURL=main.7e089433.chunk.js.map