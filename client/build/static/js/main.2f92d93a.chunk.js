(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t){},118:function(e,t,a){},121:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(50),l=a(123),o=(a(59),a(125)),i=a(124),c=a(5),u=a.n(c),m=a(7),h=a(16),p=a(11),d=a(12),f=a(14),g=a(13),E=a(15),b=a(122),v=(a(64),function(e){var t=e.error[1];return r.a.createElement("li",{className:"error-container__error-message"},t)}),y=function(e){return r.a.createElement("div",{className:"error-container"},r.a.createElement("h3",{className:"error-container__title"},"Uh oh, it looks like you missed a thing or two!"),r.a.createElement("ul",{className:"error-container__errors-list"},e.children))},w=a(8),_=a.n(w),S=(a(84),function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(f.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={loginCredentials:{email:null,password:null},errorBin:{email:null,password:null},failedLogin:!1},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value,s=Object(h.a)({},a.state.loginCredentials);s[n]=r,a.setState({loginCredentials:s})},a.handleSubmit=function(){var e=Object(m.a)(u.a.mark(function e(t){var n,r,s,l,o;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.state.loginCredentials,r=n.email,s=n.password,e.next=4,_.a.post("/api/login",{email:r,password:s});case 4:l=e.sent,o=Object(h.a)({},a.state.errorBin),console.log(l),l.data.errors?(o.email=null,o.password=null,l.data.errors.forEach(function(e){o[e.param]=e.msg}),a.setState({failedLogin:!0}),a.setState({errorBin:o}),a.form.password.value=null,a.setState({loginCredentials:{email:r,password:null}})):a.props.history.push(l.data.redirectUrl);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.errorBin,n=t.failedLogin,s=Object.entries(a).filter(function(e){return e[1]}).map(function(e,t){return r.a.createElement(v,{key:t,error:e})}),l=n?r.a.createElement(y,null,s):null;return r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"login__outline"},r.a.createElement("header",{className:"login__header"},r.a.createElement("h1",{className:"login__h1"},"Chatterbox"),r.a.createElement("h2",{className:"login__h3"},"A place for chatting")),n?l:null,r.a.createElement("form",{action:"/login",method:"POST",className:"login__form",onSubmit:this.handleSubmit,ref:function(t){return e.form=t}},r.a.createElement("fieldset",null,r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"text",name:"email",placeholder:"matthew@chatterbox.com",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",name:"password",placeholder:"iCh@tt3rb0x!",onChange:this.handleChange}),r.a.createElement("input",{type:"submit",className:"login__btn",value:"Log In"}))),r.a.createElement(b.a,{to:"/sign-up",className:"login__register-link"},"Sign up for an account")))}}]),t}(r.a.Component)),x=a(53),N=(a(88),function(e){return r.a.createElement("form",{action:"/sign-up",method:"POST",className:"sign-up__form",onSubmit:e.handleSubmit},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{type:"text",id:"username",name:"username",onChange:e.handleChange}),r.a.createElement("label",{htmlFor:"first-name"},"First name"),r.a.createElement("input",{type:"text",id:"first-name",name:"firstName",onChange:e.handleChange}),r.a.createElement("label",{htmlFor:"last-name"},"Last name"),r.a.createElement("input",{type:"text",id:"last-name",name:"lastName",onChange:e.handleChange}),r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"text",id:"email",name:"email",onChange:e.handleChange}),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",name:"password",onChange:e.handleChange}),r.a.createElement("label",{htmlFor:"confirm-password"},"Confirm password"),r.a.createElement("input",{type:"password",id:"confirm-password",name:"confirmPassword",onChange:e.handleChange}),r.a.createElement("input",{type:"submit",value:"Sign up"}))}),k=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(f.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={user:{username:null,firstName:null,lastName:null,email:null,password:null,confirmPassword:null},errorBin:{username:null,firstName:null,lastName:null,email:null,password:null,confirmPassword:null},successfulSubmission:null,viewportIsWide:null},a.setViewportStatus=function(){window.innerWidth<950?a.setState({viewportIsWide:!1}):a.setState({viewportIsWide:!0})},a.clearErrorBin=function(e){var t=Object.entries(e).map(function(e){var t=Object(x.a)(e,2),a=t[0];return t[1]?a:null}).filter(function(e){return e});t.length&&t.forEach(function(t){return e[t]=null})},a.handleSubmit=function(){var e=Object(m.a)(u.a.mark(function e(t){var n,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,_.a.post("/api/sign-up",a.state.user);case 3:n=e.sent,r=Object(h.a)({},a.state.errorBin),console.log(n),n.data.errors?(a.clearErrorBin(r),n.data.errors.forEach(function(e){r[e.param]=e.msg}),a.setState({errorBin:r}),a.setState({successfulSubmission:!1})):(a.clearErrorBin(r),a.setState({errorBin:r}),console.log(n.data),a.setState({successfulSubmission:!0}));case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){var t=e.target,n=t.name,r=t.value,s=Object(h.a)({},a.state.user);s[n]=r,a.setState({user:s})},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.setViewportStatus()}},{key:"componentDidUpdate",value:function(){window.addEventListener("resize",this.setViewportStatus)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.setViewportStatus)}},{key:"render",value:function(){var e,t=this.state,a=t.errorBin,n=t.successfulSubmission,s=t.viewportIsWide,l=t.user,o=Object.entries(a).filter(function(e){return e[1]}).map(function(e,t){return r.a.createElement(v,{key:t,error:e})}),i=!1===n?r.a.createElement(y,null,o):null;return r.a.createElement("div",{className:"sign-up"},r.a.createElement("div",{className:"sign-up__outline"},r.a.createElement("header",{className:"sign-up__header"},r.a.createElement("h1",{className:"sign-up__h1"},n?"Welcome, ".concat((e=l.firstName)[0].toUpperCase()+e.substring(1).toLowerCase(),"!"):"Chatterbox"),r.a.createElement("h2",{className:"sign-up__h2"},n?"\ud83c\udf89 You're an official Chatterboxer! \ud83c\udf89":"Welcome to your new social life")),s?null:i,n?r.a.createElement(b.a,{className:"success-message__login-link",style:{textDecoration:"none",color:"cadetblue",borderBottom:"1px dashed green"},to:"/"},"You can continue to login here"):r.a.createElement(N,{handleChange:this.handleChange,handleSubmit:this.handleSubmit})),s?i:null)}}]),t}(n.Component),C=a(24),O=a(51),j=a.n(O),B=function(e){var t=e.user,a=e.logout;return r.a.createElement("ul",{className:"top-nav"},r.a.createElement("li",null,r.a.createElement("h2",{style:{margin:"0"}},"# ".concat(t.username))),r.a.createElement("li",{className:"top-nav__menu",onClick:a},"Logout"))},D=function(e){return r.a.createElement("p",null,"Loading your Chatterbox!")},T=function(e){var t=e.chat,a=e.classStatus;return r.a.createElement("li",{className:a},t.msg)},U=function(e){var t=e.chat,a=e.classStatus;return r.a.createElement("li",{className:a},r.a.createElement("div",{className:"chatterbox__user-info"},r.a.createElement("p",{className:"chatterbox__username"},t.user.username),r.a.createElement("p",null,t.timestamp.time)),r.a.createElement("span",null,t.msg))},L=(a(118),function(){var e=(new Date).toLocaleDateString(),t=(new Date).toLocaleTimeString();return{date:e,time:t=(t=t.split(" "))[0].length>7?t[0].slice(0,5).concat(" ").concat(t[1]):t[0].slice(0,4).concat(" ").concat(t[1])}}),F=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(f.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={user:{_id:null,firstName:null,lastName:null,username:null,email:null,dateCreated:null},chatHistory:[],userIsTyping:null,onlineUsers:[]},a.logout=Object(m.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.socket.emit("disconnect",a.state.user.username,a.socket.id),e.next=3,_.a.get("/api/logout");case 3:e.sent.data&&(window.location.href="/");case 5:case"end":return e.stop()}},e,this)})),a.handleKeyDown=function(e){var t=e.currentTarget.parentNode;13!==e.keyCode||e.shiftKey||(e.preventDefault(),t.dispatchEvent(new Event("submit")))},a.handleKeyUp=function(e){var t=a.state.user,n=e.currentTarget.value;a.socket.emit("typing",t,n)},a.handleSubmit=function(){var e=Object(m.a)(u.a.mark(function e(t){var n,r,s;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n=a.form.message.value,r=a.state.user,s=L(),n.trim().length&&(a.socket.emit("message",r,n,s),a.form.message.value="");case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(u.a.mark(function e(){var t,a=this;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.socket=j()(),e.next=3,_.a.get("/api/user");case 3:t=e.sent,console.log(t),t.data.username?this.setState({user:t.data}):this.props.history.goBack(),this.socket.emit("login",this.state.user.username,this.socket.id),this.socket.on("login",function(e){var t=Object(C.a)(a.state.chatHistory),n=L();t.push({user:{_id:"admin",username:"admin"},msg:"<--- ".concat(e," logged in at ").concat(n.time," ---\x3e"),timestamp:n}),a.setState({chatHistory:t})}),this.socket.on("logout",function(e){var t=Object(C.a)(a.state.chatHistory),n=L();t.push({user:{_id:"admin",username:e},msg:"<--- ".concat(e," logged out at ").concat(n.time," ---\x3e"),timestamp:n}),a.setState({chatHistory:t})}),this.socket.on("online",function(e){console.log(e),a.setState({onlineUsers:e})}),this.socket.on("message",function(e,t,n){var r=Object(C.a)(a.state.chatHistory);r.push({user:e,msg:t,timestamp:n}),a.setState({chatHistory:r}),a.setState({userIsTyping:null})}),this.socket.on("typing",function(e,t){if(console.log(e,t),t){var n="".concat(e.username," is typing...");a.setState({userIsTyping:n})}else a.setState({userIsTyping:null})});case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=document.querySelector(".chatterbox__conversation-bin");e.scrollTop=e.scrollHeight}},{key:"render",value:function(){var e=this,t=this.state,a=t.user,n=t.chatHistory,s=t.userIsTyping,l=t.onlineUsers.filter(function(e){return e!==a.username}).map(function(e,t){return r.a.createElement("li",{key:t},e)}),o=n.map(function(e,t){var n=e.user._id===a._id?"chatterbox__message chatterbox__message-sent":"admin"===e.user._id?"chatterbox__group-update":"chatterbox__message chatterbox__message-received";return n.includes("chatterbox__message")?r.a.createElement(U,{key:t,chat:e,classStatus:n}):r.a.createElement(T,{key:t,chat:e,classStatus:n})});return r.a.createElement("div",{className:"chatterbox"},a.username?r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement(B,{user:a,logout:this.logout})),r.a.createElement("main",null,r.a.createElement("div",{className:"chatterbox__inventory"},r.a.createElement("ul",{className:"chatterbox__online-users"},r.a.createElement("li",null,"Online users"),l.length?l:r.a.createElement("li",{id:"no-users-online"},r.a.createElement("span",null,"No other users are online! Feel free to ",r.a.createElement("span",{role:"img","aria-label":"monkey emoji"},"\ud83d\udc12")," around, no one's watching! ",r.a.createElement("span",{role:"img","aria-label":"winky face emoji"},"\ud83d\ude09"))))),r.a.createElement("div",{className:"chatterbox__messaging-container"},r.a.createElement("ul",{className:"chatterbox__conversation-bin",ref:function(t){return e.conversationBin=t}},o,r.a.createElement("li",{className:"chatterbox__user-is-typing"},s)),r.a.createElement("form",{className:"chatterbox__form",action:"/message",method:"POST",onSubmit:this.handleSubmit,ref:function(t){return e.form=t}},r.a.createElement("textarea",{name:"message",className:"chatterbox__type-message",placeholder:"Type anything...",onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp}))))):r.a.createElement(D,null))}}]),t}(n.Component),I=function(e){return r.a.createElement(o.a,null,r.a.createElement(i.a,{exact:!0,path:"/",component:S}),r.a.createElement(i.a,{exact:!0,path:"/sign-up",component:k}),r.a.createElement(i.a,{exact:!0,path:"/chatterbox",component:F}))};Object(s.render)(r.a.createElement(l.a,null,r.a.createElement(I,null)),document.getElementById("root"))},54:function(e,t,a){e.exports=a(121)},59:function(e,t,a){},64:function(e,t,a){},84:function(e,t,a){},88:function(e,t,a){}},[[54,2,1]]]);
//# sourceMappingURL=main.2f92d93a.chunk.js.map