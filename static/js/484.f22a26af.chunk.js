"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[484],{9484:function(e,s,n){n.r(s),n.d(s,{default:function(){return b}});n(2791);var a=n(8115),t={main:"Messenger_main__rwweg",flex:"Messenger_flex__LJmy4",textarea:"Messenger_textarea__61-W2",btn:"Messenger_btn__sTUr4"},r="Message_messages__edO+O",i="Message_message__-5n-s",c=n(184),m=function(e){return(0,c.jsx)("div",{className:r,children:(0,c.jsx)("div",{className:i,children:e.message})})},u="Chat_chat__kIniP",o="Chat_img__1nZpV",g="Chat_person__tG-pG",d=n(3504),l=function(e){var s="https://glebs1mple.github.io/demo-socialNetwork/img/Follower"+e.srcimg,n="/Messenger/"+e.id;return(0,c.jsxs)("div",{className:u,children:[(0,c.jsx)("img",{src:s,alt:"",className:o}),(0,c.jsx)(d.OL,{to:n,className:g,children:e.name})]})},h=n(6139),_=n(704),f=n(7526),x=n(8610),p=(0,x.L)(10),j=(0,_.Z)({form:"message"})((function(e){return(0,c.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,c.jsx)(h.Z,{component:f.gx,className:t.textarea,name:"message",placeholder:"Add",validate:[x.C,p]}),(0,c.jsx)("button",{className:t.btn,children:"Add Message"})]})})),v=function(e){var s=e.chats.map((function(e){return(0,c.jsx)(l,{name:e.name,id:e.id,srcimg:e.srcimg},e.id)})),n=e.messages.map((function(e){return(0,c.jsx)(m,{message:e.message},e.id)}));return(0,c.jsxs)("div",{className:t.main,children:[(0,c.jsx)("div",{className:t.chats,children:s}),(0,c.jsx)("div",{className:t.messages,children:n}),(0,c.jsx)("div",{className:t.flex}),(0,c.jsx)(j,{onSubmit:function(s){e.addMessage(s.message)}})]})},M=n(364),N=n(3268),b=(0,n(7781).qC)((0,M.$j)((function(e){return{chats:e.messenger.chats,messages:e.messenger.messages,newMessageText:e.messenger.newMessageText}}),(function(e){return{addMessage:function(s){e((0,a.a)(s))}}})),N.e)(v)},3268:function(e,s,n){n.d(s,{e:function(){return l}});var a=n(1413),t=n(5671),r=n(3144),i=n(136),c=n(5716),m=n(2791),u=n(6871),o=n(364),g=n(184),d=function(e){return{isAuth:e.auth.isAuth}},l=function(e){var s=function(s){(0,i.Z)(m,s);var n=(0,c.Z)(m);function m(){return(0,t.Z)(this,m),n.apply(this,arguments)}return(0,r.Z)(m,[{key:"render",value:function(){return!1===this.props.isAuth?(0,g.jsx)(u.Fg,{to:"/Login"}):(0,g.jsx)(e,(0,a.Z)({},this.props))}}]),m}(m.Component);return(0,o.$j)(d)(s)}}}]);
//# sourceMappingURL=484.f22a26af.chunk.js.map