(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{290:function(e,t,n){"use strict";function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],a=!0,o=!1,r=void 0;try{for(var u,s=e[Symbol.iterator]();!(a=(u=s.next()).done)&&(n.push(u.value),!t||n.length!==t);a=!0);}catch(l){o=!0,r=l}finally{try{a||null==s.return||s.return()}finally{if(o)throw r}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",(function(){return a}))},293:function(e,t,n){e.exports=n.p+"static/media/avatarDefault.6c93098b.jpg"},295:function(e,t,n){e.exports={pagination:"Pagination_pagination__1Ru4s",displayNone:"Pagination_displayNone__FcH8C",buttonsColor:"Pagination_buttonsColor__3XYj7",jump:"Pagination_jump__9E_kH",pageNumber:"Pagination_pageNumber__4ByWK"}},296:function(e,t,n){e.exports={avatar:"Users_avatar__2wANC"}},301:function(e,t,n){"use strict";n.r(t);var a=n(47),o=n(48),r=n(50),u=n(49),s=n(51),l=n(0),i=n.n(l),c=n(60),p=n(290),m=n(295),b=n.n(m),f=function(e){for(var t=e.totalItemsCount,n=e.usersCount,a=e.numberPage,o=e.onNumberPage,r=e.portionSize,u=void 0===r?10:r,s=Math.ceil(t/n),c=[],m=1;m<=s;m++)c.push(m);var f=Math.ceil(s/u),g=Object(l.useState)(1),d=Object(p.a)(g,2),h=d[0],C=d[1],E=(h-1)*u+1,k=h*u;return i.a.createElement(i.a.Fragment,null,0!==t?i.a.createElement("div",{className:b.a.pagination},i.a.createElement("button",{className:h>1?b.a.jump:b.a.displayNone,onClick:function(){C(h-1)}},"JUMP"),i.a.createElement("button",{className:1!==a?b.a.jump:b.a.displayNone,onClick:function(){a>k?o(k):a<=E?(o(E-1),C(h-1)):o(a-1)}},"PREV"),c.filter((function(e){return e>=E&&e<=k})).map((function(e){return i.a.createElement("button",{className:a===e?b.a.pageNumber:b.a.buttonsColor,key:e,onClick:function(){o(e)}}," ".concat(e))})),i.a.createElement("button",{className:c.length!==a?b.a.jump:b.a.displayNone,onClick:function(){a<E?o(E):a>=k?(o(k+1),C(h+1)):o(a+1)}},"NEXT"),i.a.createElement("button",{className:f>h?b.a.jump:b.a.displayNone,onClick:function(){C(h+1)}},"JUMP")):null)},g=n(95),d=n(296),h=n.n(d),C=n(293),E=n.n(C),k=n(14),v=function(e){var t=e.users,n=e.deleteFollowThunk,a=e.postFollowThunk;Object(g.a)(e,["users","deleteFollowThunk","postFollowThunk"]);return i.a.createElement("div",null,t.map((function(e){return i.a.createElement("div",{key:e.id},i.a.createElement("span",null,i.a.createElement("div",null,i.a.createElement(k.b,{to:"/profile/".concat(e.id)},i.a.createElement("img",{alt:"avatarDefault",src:null!==e.photos.small?e.photos.small:E.a,className:h.a.avatar}))),i.a.createElement("div",null,e.followed?i.a.createElement("button",{onClick:function(){n(e.id)}},"UNFOLLOW"):i.a.createElement("button",{onClick:function(){a(e.id)}},"FOLLOW"))),i.a.createElement("span",null,i.a.createElement("span",null,i.a.createElement("div",null,e.name),i.a.createElement("div",null,e.status?e.status:"<<<Not indicated>>>"))))})))},N=function(e){return i.a.createElement("div",null,i.a.createElement(f,{totalItemsCount:e.totalCount,usersCount:e.usersCount,numberPage:e.numberPage,onNumberPage:e.onNumberPage}),e.isLoading?i.a.createElement(c.a,null):i.a.createElement(v,e))},P=n(13),y=n(105),j=n(7),_=function(e){return e.usersPage.users},w=function(e){return e.usersPage.usersCount},O=function(e){return e.usersPage.totalCount},T=function(e){return e.usersPage.numberPage},F=function(e){return e.usersPage.isLoading},L=function(e){function t(){var e,n;Object(a.a)(this,t);for(var o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return(n=Object(r.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).onNumberPage=function(e){n.props.getUsersThunk(n.props.usersCount,e)},n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsersThunk(this.props.usersCount,this.props.pageNumber)}},{key:"render",value:function(){return i.a.createElement(N,{isLoading:this.props.isLoading,totalCount:this.props.totalCount,usersCount:this.props.usersCount,numberPage:this.props.numberPage,users:this.props.users,onNumberPage:this.onNumberPage,postFollowThunk:this.props.postFollowThunk,deleteFollowThunk:this.props.deleteFollowThunk})}}]),t}(i.a.Component);t.default=Object(j.d)(Object(P.b)((function(e){return{users:_(e),usersCount:w(e),totalCount:O(e),numberPage:T(e),isLoading:F(e)}}),{postFollowThunk:y.d,deleteFollowThunk:y.b,getUsersThunk:y.c}))(L)}}]);
//# sourceMappingURL=4.f1bb31da.chunk.js.map