(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{507:function(e,t,a){e.exports={profileInfoItem:"Profile_profileInfoItem__2IUMz",profileInfoAvatar:"Profile_profileInfoAvatar__2ZoPx",profileInfoContact:"Profile_profileInfoContact__2sCXr",profilePostItem:"Profile_profilePostItem__3fX0W",profilePostLikes:"Profile_profilePostLikes__XhHl3",myPostsContent:"Profile_myPostsContent__2bkM_",myPostsInput:"Profile_myPostsInput__3lxoZ"}},509:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(69),r=a(70),o=a(72),l=a(71),s=a(73),i=a(0),u=a.n(i),c=a(61),p=a(29),f=function(e){return{isAuth:e.auth.isAuth}},m=function(e){var t=function(t){function a(){return Object(n.a)(this,a),Object(o.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(s.a)(a,t),Object(r.a)(a,[{key:"render",value:function(){return this.props.isAuth?u.a.createElement(e,this.props):u.a.createElement(c.a,{to:"/login"})}}]),a}(u.a.Component);return Object(p.b)(f)(t)}},510:function(e,t,a){e.exports=a.p+"static/media/avatarDefault.6c93098b.jpg"},513:function(e,t,a){"use strict";a.r(t);var n=a(69),r=a(70),o=a(72),l=a(71),s=a(73),i=a(0),u=a.n(i),c=a(29),p=a(61),f=a(16),m=a(182),b=a(181),d=a(510),h=a.n(d),E=a(507),v=a.n(E),P=function(e){var t=Object(i.useState)(!1),a=Object(m.a)(t,2),n=a[0],r=a[1],o=Object(i.useState)(e.status),l=Object(m.a)(o,2),s=l[0],c=l[1],p=e.match.params.userId;Object(i.useEffect)((function(){c(e.status)}),[e.status]);return u.a.createElement("div",{className:v.a.profileInfoItem},!n&&u.a.createElement("div",{onClick:function(){void 0===p&&r(!0)},style:{cursor:"pointer"}},u.a.createElement("b",null,"\u0421\u0442\u0430\u0442\u0443\u0441: "),u.a.createElement("span",null,e.status)),n&&u.a.createElement("div",{style:{cursor:"pointer"}},u.a.createElement("b",null,"\u0421\u0442\u0430\u0442\u0443\u0441: "),u.a.createElement("input",{onChange:function(e){c(e.currentTarget.value)},onBlur:function(){setTimeout((function(){r(!1)}),500)},autoFocus:!0,value:s}),u.a.createElement("button",{onClick:function(){r(!1),e.updateUserStatus(s)}},"OK")))},O=a(79),j=a.n(O),g=a(249),I=a(100),k=a(99),y=function(e){var t=e.profile,a=e.onEditMode,n=e.isOwner;return u.a.createElement("div",null,!n&&u.a.createElement("button",{onClick:a},"Edit"),u.a.createElement("div",null,u.a.createElement("b",null,"Full Name: "),t.fullName),u.a.createElement("div",null,u.a.createElement("b",null,"About me: "),t.aboutMe),u.a.createElement("div",null,u.a.createElement("b",null,"Looking for a job: "),t.lookingForAJob?"Yes":"No"),u.a.createElement("div",null,u.a.createElement("b",null,"My professional skills: "),t.lookingForAJobDescription),u.a.createElement("div",null,u.a.createElement("b",null,"Contacts: "),Object.keys(t.contacts).map((function(e){return u.a.createElement("div",{key:e,className:v.a.profileInfoContact},u.a.createElement("b",null,e,": "),t.contacts[e])}))))},S=Object(g.a)({form:"profileUserInfo"})((function(e){var t=e.profile,a=e.error,n=Object(b.a)(e,["profile","error"]);return u.a.createElement("form",{onSubmit:n.handleSubmit},!n.isOwner&&u.a.createElement("button",null,"Save"),u.a.createElement("div",null,a&&u.a.createElement("div",{className:j.a.errorText},a)),u.a.createElement("div",null,u.a.createElement("b",null,"Full Name: "),Object(I.a)(k.b,"fullName","input",null,null,t.fullName)),u.a.createElement("div",null,u.a.createElement("b",null,"About me: "),Object(I.a)(k.b,"aboutMe",null)),u.a.createElement("div",null,u.a.createElement("b",null,"Looking for a job: "),Object(I.a)(k.b,"lookingForAJob","input",null,"checkbox")),u.a.createElement("div",null,u.a.createElement("b",null,"My professional skills: "),Object(I.a)(k.b,"lookingForAJobDescription",null,null,null)),u.a.createElement("div",null,u.a.createElement("b",null,"Contacts: "),Object.keys(t.contacts).map((function(e){return u.a.createElement("div",{key:e,className:v.a.profileInfoContact},u.a.createElement("b",null,e,": "),Object(I.a)([],"contacts."+e,"input",null,null))}))))})),U=a(258),_=function(e){var t=e.profileUpdate,a=Object(b.a)(e,["profileUpdate"]),n=u.a.createRef(),r=Object(i.useState)(!1),o=Object(m.a)(r,2),l=o[0],s=o[1];Object(i.useEffect)((function(){!0===t&&s(!1)}),[t]);return u.a.createElement("div",null,u.a.createElement("div",{className:v.a.profileInfoItem},u.a.createElement("img",{className:v.a.profileInfoAvatar,src:null!==a.profile.photos.large?a.profile.photos.large:h.a,alt:"AvaPhoto"}),u.a.createElement("input",{ref:n,type:"file",onChange:function(e){e.target.files.length&&a.savePhoto(e.target.files[0])},style:{display:"none"}}),!a.isOwner&&u.a.createElement("div",{style:{paddingTop:"3px"}},u.a.createElement(U.a,{style:{width:"250px"},onClick:function(){return n.current.click()},variant:"secondary"},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u043e\u0442\u043e"))),u.a.createElement(P,Object.assign({},a,{status:a.status,updateUserStatus:a.updateUserStatus})),l?u.a.createElement(S,Object.assign({},a,{onSubmit:function(e){e!==a.profile?a.saveProfile(e):!1!==t&&s(!1)},initialValues:a.profile})):u.a.createElement(y,{onEditMode:function(){s(!0)},profile:a.profile,isOwner:a.isOwner}))},N=a(183),A=function(e){return u.a.createElement("div",{className:v.a.profilePostItem},u.a.createElement("img",{alt:"Post",src:e.avaPhoto}),e.posts.postText,u.a.createElement("div",{className:v.a.profilePostLikes},e.posts.likes,u.a.createElement("button",null,"Likes")))},C=a(173),w=a(62),x=Object(g.a)({form:"myNewPost"})((function(e){return u.a.createElement("form",{onSubmit:e.handleSubmit},u.a.createElement("div",{className:v.a.myPostsInput},u.a.createElement(C.a,{name:"newPost",component:"textarea"}),u.a.createElement("button",null,"Add Post")))})),M=Object(p.g)((function(e){var t=e.posts.map((function(t){return u.a.createElement(A,{avaPhoto:e.avaPhoto,posts:t,key:t.id})})),a=e.match.params.userId;return u.a.createElement(u.a.Fragment,null,!a&&u.a.createElement("div",null,u.a.createElement(x,{onSubmit:function(t,a){e.addNewPost(t,e.avaPhoto),a(Object(w.a)("myNewPost"))}}),u.a.createElement("div",{className:v.a.myPostsContent},t)))})),F=Object(c.b)((function(e){return{posts:e.profilePage.posts,avaPhoto:e.profilePage.profile.photos.small}}),{addNewPost:N.a})(M),T=a(77),J=function(e){return e.profile?u.a.createElement("div",null,u.a.createElement(_,Object.assign({},e,{isOwner:e.isOwner,savePhoto:e.savePhoto,saveProfile:e.saveProfile,status:e.status,updateUserStatus:e.updateUserStatus,profileUpdateSuccess:e.profileUpdateSuccess})),u.a.createElement(F,null)):u.a.createElement(T.a,null)},L=a(509),D=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"userProfileId",value:function(){var e=this.props.match.params.userId;!e&&this.props.isAuth&&(e=this.props.authUserId),e||this.props.isAuth||this.props.history.push("/login"),this.props.getProfileThunk(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.userProfileId()}},{key:"componentDidUpdate",value:function(e){this.props.match.params.userId!==e.match.params.userId&&this.userProfileId()}},{key:"render",value:function(){return u.a.createElement(J,Object.assign({},this.props,{isOwner:this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile,profileUpdateSuccess:this.props.profileUpdateSuccess}))}}]),t}(u.a.Component);t.default=Object(f.d)(Object(c.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,profileUpdate:e.profilePage.profileUpdate,authUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getProfileThunk:N.c,getUserStatus:N.d,updateUserStatus:N.h,savePhoto:N.f,saveProfile:N.g,profileUpdateSuccess:N.e}),p.g,L.a)(D)}}]);
//# sourceMappingURL=4.70f7c2c7.chunk.js.map