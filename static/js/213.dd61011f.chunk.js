"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[213],{2213:function(s,e,i){i.r(e),i.d(e,{default:function(){return ks}});var t=i(1413),a=i(5671),n=i(3144),o=i(136),l=i(5716),r=i(2791),c=i(4942),m=i(885),d={main:"Main_main__0+I96"},u="Contacts__info_main__DZ75I",h="Info_main__U-uyf",p="Info_heading__ngEkQ",_="Info_sub__-aJQ5",g="Info_people__ggNVN",x="Info_buttons__MoX+d",f="Info_btn__rCk6z",j=i(184),v=function(){return(0,j.jsxs)("div",{className:h,children:[(0,j.jsx)("img",{src:"https://glebs1mple.github.io/demo-socialNetwork/img/people.png",alt:"",className:g}),(0,j.jsx)("div",{className:p,children:"Jessica\u2019s Wedding Plan"}),(0,j.jsx)("div",{className:_,children:"Active Now"}),(0,j.jsxs)("div",{className:x,children:[(0,j.jsx)("button",{className:f,children:"Call group"}),(0,j.jsx)("button",{className:f,children:"Video call"})]})]})},N="Contacts_main__hVsoV",b="Contacts_heading__VvRM9",k={main:"Contact_main__XWoV2",img:"Contact_img__Ng9QA"},w=function(s){var e="https://glebs1mple.github.io/demo-socialNetwork/img/Contact"+s.srcimg;return(0,j.jsxs)("div",{className:k.main,children:[(0,j.jsx)("img",{src:e,alt:"",className:k.img}),(0,j.jsx)("div",{className:k.name,children:s.name})]})},P=function(s){var e=s.contacts.map((function(s){return(0,j.jsx)(w,{name:s.name,id:s.id,srcimg:s.srcimg},s.id)}));return(0,j.jsxs)("div",{className:N,children:[(0,j.jsx)("div",{className:b,children:"Online Contacts"}),e]})},C=function(s){return(0,j.jsxs)("div",{className:u,children:[(0,j.jsx)(v,{}),(0,j.jsx)(P,{contacts:s.contacts})]})},Z="Posts__heading_main__Ne+F+",y={main:"Heading_main__2n2iF"},E=function(s){return(0,j.jsxs)("div",{className:y.main,children:["What\u2019s on you mind, ",(0,j.jsx)("span",{className:y.name,children:s.profile.fullName}),"?"]})},S=i(9556),I="Posts_main__WvBEb",M="Posts_area__cP+Gx",D="Posts_btn__vyofZ",F={main:"Post_main__Ut-6v",block:"Post_block__uBE2P",smallflex:"Post_smallflex__ke7Ny",name:"Post_name__Mj578",lastseen:"Post_lastseen__cENC+",message:"Post_message__1zJvD",statblock:"Post_statblock__o8cs1",stat:"Post_stat__D7ZZS",nums:"Post_nums__yzUYr"},W=function(s){var e="https://glebs1mple.github.io/demo-socialNetwork/img/Post"+s.srcimg;return(0,j.jsxs)("div",{className:F.main,children:[(0,j.jsxs)("div",{className:F.block,children:[(0,j.jsx)("img",{src:e,alt:"",className:F.photo}),(0,j.jsxs)("div",{className:F.smallflex,children:[(0,j.jsx)("div",{className:F.name,children:s.name}),(0,j.jsx)("div",{className:F.lastseen,children:s.lastseen})]})]}),(0,j.jsx)("div",{className:F.message,children:s.message}),(0,j.jsxs)("div",{className:F.statblock,children:[(0,j.jsxs)("div",{className:F.stat,children:[(0,j.jsx)("img",{src:"https://glebs1mple.github.io/demo-socialNetwork/img/like.png",alt:"",className:F.icon}),(0,j.jsx)("div",{className:F.nums,children:s.likes})]}),(0,j.jsxs)("div",{className:F.stat,children:[(0,j.jsx)("img",{src:"https://glebs1mple.github.io/demo-socialNetwork/img/Comments.png",alt:"",className:F.icon}),(0,j.jsx)("div",{className:F.nums,children:s.comments})]}),(0,j.jsxs)("div",{className:F.stat,children:[(0,j.jsx)("img",{src:"https://glebs1mple.github.io/demo-socialNetwork/img/share.png",alt:"",className:F.icon}),(0,j.jsx)("div",{className:F.nums,children:s.shares})]})]})]})},A=i(704),U=i(6139),J=i(8610),O=i(7526),V=(0,J.L)(10),T=(0,A.Z)({form:"posts"})((function(s){return(0,j.jsxs)("form",{className:I,onSubmit:s.handleSubmit,children:[(0,j.jsx)(U.Z,{component:O.gx,className:M,name:"post",placeholder:"Add post",validate:[J.C,V]}),(0,j.jsx)("button",{className:D,children:"Add post"})]})})),G=function(s){var e=s.posts.map((function(s){return(0,j.jsx)(W,{id:s.id,name:s.name,message:s.message,lastseen:s.lastseen,likes:s.likes,comments:s.likes,shares:s.shares,srcimg:s.srcimg},s.id)}));return(0,j.jsxs)("div",{className:I,children:[e,(0,j.jsx)(T,{onSubmit:function(e){s.addPost(e.post)}})]})},z=i(364),B=(0,z.$j)((function(s){return{posts:s.main.posts}}),(function(s){return{addPost:function(e){s((0,S.Wl)(e))}}}))(G),L=i(8570),Q=function(s){return s.profile?(0,j.jsxs)("div",{className:Z,children:[(0,j.jsx)(E,{profile:s.profile}),(0,j.jsx)(B,{store:s.store})]}):(0,j.jsx)(L.Z,{})},R="Stories_main__DVnMm",X="Events_main__D8EBb",q={bigimg:"Event_bigimg__dlQ2y",main:"Event_main__TKlP1",text:"Event_text__KbWCX",block:"Event_block__6WQCR",flexblock:"Event_flexblock__Lovel",opening:"Event_opening__Ch6Sb",heading:"Event_heading__pHY+q",icon:"Event_icon__PbkF6",discription:"Event_discription__hz59t",btn:"Event_btn__kbyeF",stat:"Event_stat__igZUN",photos:"Event_photos__YkyQ3"},H=function(s){var e="https://glebs1mple.github.io/demo-socialNetwork/img/Events"+s.srcimg,i="https://glebs1mple.github.io/demo-socialNetwork/img/Groups"+s.srcimg;return(0,j.jsxs)("div",{className:q.main,children:[(0,j.jsxs)("div",{className:q.block,children:[(0,j.jsx)("img",{src:e,alt:"",className:q.bigimg}),(0,j.jsxs)("div",{className:q.flexblock,children:[(0,j.jsxs)("div",{className:q.opening,children:[(0,j.jsx)("img",{src:"https://glebs1mple.github.io/demo-socialNetwork/img/corn.png",alt:"",className:q.icon}),(0,j.jsx)("div",{className:q.heading,children:s.name})]}),(0,j.jsx)("div",{className:q.discription,children:s.text}),(0,j.jsx)("button",{className:q.btn,children:s.btn})]})]}),(0,j.jsxs)("div",{className:q.text,children:[(0,j.jsx)("div",{className:q.photos,children:(0,j.jsx)("img",{src:i,alt:"",className:q.group})}),(0,j.jsxs)("div",{className:q.stat,children:[(0,j.jsx)("div",{className:q.friends,children:s.friends}),(0,j.jsx)("div",{className:q.what,children:s.what})]})]})]})},K=function(s){var e=s.events.map((function(s){return(0,j.jsx)(H,{name:s.name,text:s.text,btn:s.btn,friends:s.friends,what:s.what,srcimg:s.srcimg},s.id)}));return(0,j.jsx)("div",{className:X,children:e})},Y={flex:"Walls_flex__eTw6W",heading:"Walls_heading__2Rtzu"},$={main:"Wall_main__9+IAY",flex:"Wall_flex__g6XaA",name:"Wall_name__Bv24p"},ss=function(s){var e="https://glebs1mple.github.io/demo-socialNetwork/img/Walls"+s.srcimg,i="https://glebs1mple.github.io/demo-socialNetwork/img/Contact"+s.srcimg;return(0,j.jsxs)("div",{className:$.main,children:[(0,j.jsx)("img",{src:e,alt:"",className:$.bigimg}),(0,j.jsxs)("div",{className:$.flex,children:[(0,j.jsx)("img",{src:i,alt:"",className:$.smallimg}),(0,j.jsx)("div",{className:$.name,children:s.name})]})]})},es=function(s){var e=s.walls.map((function(s){return(0,j.jsx)(ss,{name:s.name,id:s.id,srcimg:s.srcimg},s.id)}));return(0,j.jsxs)("div",{className:Y.main,children:[(0,j.jsx)("h1",{className:Y.heading,children:"Stories"}),(0,j.jsx)("div",{className:Y.flex,children:e})]})},is="Who_main__rzHkt",ts="Who_heading__iOZ4m",as={main:"Follower_main__dCydl",flex:"Follower_flex__3XphI",photo:"Follower_photo__5+WMR",name:"Follower_name__4tRKV",btn:"Follower_btn__i3LME"},ns=function(s){var e="https://glebs1mple.github.io/demo-socialNetwork/img/Follower"+s.srcimg;return(0,j.jsxs)("div",{className:as.main,children:[(0,j.jsxs)("div",{className:as.flex,children:[(0,j.jsx)("img",{src:e,alt:"",className:as.photo}),(0,j.jsx)("div",{className:as.name,children:s.name}),(0,j.jsx)("img",{src:"../img/Frame.png",alt:"",className:as.check})]}),(0,j.jsx)("button",{className:as.btn,children:"Follow"})]})},os=function(s){var e=s.whos.map((function(s){return(0,j.jsx)(ns,{id:s.id,name:s.name,srcimg:s.srcimg},s.id)}));return(0,j.jsxs)("div",{className:is,children:[(0,j.jsx)("h1",{className:ts,children:"Who to Follow"}),e]})},ls="Footer_main__jZkqg",rs=function(){return(0,j.jsxs)("div",{className:ls,children:["Privacy  .  Terms  .  Advertising  .  Ad Choices  .  Cookies  .",(0,j.jsx)("br",{}),"More  .  Facebook \xa9 2020"]})},cs=function(s){return(0,j.jsxs)("div",{className:R,children:[(0,j.jsx)(es,{walls:s.walls}),(0,j.jsx)(K,{events:s.events}),(0,j.jsx)(os,{whos:s.whos}),(0,j.jsx)(rs,{})]})},ms={main:"Discription_main__wtnu7",background:"Discription_background__coO6e",icon:"Discription_icon__TrV5C",discription:"Discription_discription__E8yGm",discriptionfree:"Discription_discriptionfree__hUJEu",photo:"Discription_photo__We3Dt",name:"Discription_name__geddJ",imgblock:"Discription_imgblock__WEcgu",links:"Discription_links__sP4fU",change:"Discription_change__TJNwq",editbtn:"Discription_editbtn__mZMJc"},ds="Status_status__VngcT",us="Status_statusinput__tmhfB",hs="Status_statusblock__SKhGk",ps=function(s){var e=(0,r.useState)(!1),i=(0,m.Z)(e,2),t=i[0],a=i[1],n=(0,r.useState)(s.status),o=(0,m.Z)(n,2),l=o[0],c=o[1];(0,r.useEffect)((function(){c(s.status)}),[s.status]);return(0,j.jsxs)("div",{className:hs,children:[(0,j.jsxs)("span",{onClick:function(){a(!0)},className:ds,children:["Status: ",s.status," "]}),t?(0,j.jsx)("input",{onChange:function(s){c(s.currentTarget.value)},onBlur:function(){a(!1),s.statusUpdate(l)},type:"text",className:us,value:l}):""]})},_s=function(s){if(!s.profile)return(0,j.jsx)(L.Z,{});var e="https://glebs1mple.github.io/demo-socialNetwork/img/";return(0,j.jsxs)("div",{className:ms.main,children:[(0,j.jsxs)("div",{className:ms.imgblock,children:[(0,j.jsx)("img",{src:"https://glebs1mple.github.io/demo-socialNetwork/img/back.jpg",alt:"background",className:ms.background}),s.isOwner&&(0,j.jsx)("button",{className:ms.editbtn,onClick:s.goToEditMode,children:"Edit"}),s.isOwner&&(0,j.jsx)("input",{type:"file",className:ms.change,onChange:function(e){e.target.files.length&&s.savePhoto(e.target.files[0])}}),(0,j.jsx)("div",{className:ms.name,children:s.profile.fullName})]}),(0,j.jsxs)("div",{className:ms.discription,children:[(0,j.jsx)("img",{src:s.profile.photos.large?s.profile.photos.large:e+"user.jpg",alt:"",className:ms.photo}),(0,j.jsx)(ps,{status:s.status,statusUpdate:s.updateStatus}),s.profile.lookingForAJob?(0,j.jsxs)("div",{className:ms.job,children:["Work: ",s.profile.lookingForAJobDescription]}):"",(0,j.jsxs)("ul",{className:ms.links,children:[(0,j.jsx)("li",{children:(0,j.jsx)("a",{href:s.profile.contacts.facebook,className:"",children:(0,j.jsx)("img",{src:e+"facebook.png",alt:"",className:ms.icon})})}),(0,j.jsx)("li",{children:(0,j.jsx)("a",{href:s.profile.contacts.vk,className:"",children:(0,j.jsx)("img",{src:e+"vk.png",alt:"",className:ms.icon})})}),(0,j.jsx)("li",{children:(0,j.jsx)("a",{href:s.profile.contacts.twitter,className:"",children:(0,j.jsx)("img",{src:e+"twitter.png",alt:"",className:ms.icon})})}),(0,j.jsx)("li",{children:(0,j.jsx)("a",{href:s.profile.contacts.instagram,className:"",children:(0,j.jsx)("img",{src:e+"instagram.png",alt:"",className:ms.icon})})}),(0,j.jsx)("li",{children:(0,j.jsx)("a",{href:s.profile.contacts.youtube,className:"",children:(0,j.jsx)("img",{src:e+"youtube.png",alt:"",className:ms.icon})})}),(0,j.jsx)("li",{children:(0,j.jsx)("a",{href:s.profile.contacts.github,className:"",children:(0,j.jsx)("img",{src:e+"github.png",alt:"",className:ms.icon})})})]})]})]})},gs={},xs=(0,A.Z)({form:"main-edit"})((function(s){var e=s.handleSubmit,i=s.profile,t=s.error;return(0,j.jsx)("div",{className:"",children:(0,j.jsxs)("form",{onSubmit:e,children:[(0,j.jsx)("button",{className:gs.save,children:"Save"}),t&&(0,j.jsx)("div",{className:gs.error,children:t}),(0,j.jsxs)("div",{className:gs.name,children:["full name: ",(0,O.Gr)("Full name","fullName",[J.C],O.II)]}),(0,j.jsxs)("div",{className:gs.job,children:["Looking for a job? ",(0,O.Gr)("","lookingForAJob",[],O.II,{type:"checkbox"})]}),(0,j.jsxs)("div",{className:gs.skills,children:["My proffessional skills: ",(0,O.Gr)(" My proffessional skills","lookingForAJobDescription",[J.C],O.gx)]}),(0,j.jsxs)("div",{className:gs.about,children:["About me : ",(0,O.Gr)("About me","aboutMe",[],O.gx)]}),(0,j.jsxs)("div",{className:gs.contacs,children:["Contacts : ",Object.keys(i.contacts).map((function(s){return(0,j.jsxs)("div",{className:gs.contact,children:[s,":",(0,O.Gr)(s,"contacts."+s,[],O.II)]})}))]})]})})})),fs=r.memo((function(s){var e,i=(0,r.useState)(!1),t=(0,m.Z)(i,2),a=t[0],n=t[1];return(0,j.jsxs)("div",{className:d.m,children:[(0,j.jsx)(_s,(e={goToEditMode:function(){n(!0)},savePhoto:s.savePhoto,isOwner:s.isOwner,profile:s.profile,status:s.status},(0,c.Z)(e,"savePhoto",s.savePhoto),(0,c.Z)(e,"updateStatus",s.updateStatus),e)),a?(0,j.jsx)(xs,{initialValues:s.profile,profile:s.profile,onSubmit:function(e){s.saveMain(e).then((function(){n(!1)}))}}):"",(0,j.jsxs)("div",{className:d.main,children:[(0,j.jsx)(C,{profile:s.profile,contacts:s.contacts}),(0,j.jsx)(Q,{profile:s.profile,store:s.store}),(0,j.jsx)(cs,{profile:s.profile,events:s.events,walls:s.walls,whos:s.whos})]})]})})),js=i(6871),vs=i(3268),Ns=i(7781),bs=function(s){(0,o.Z)(i,s);var e=(0,l.Z)(i);function i(){return(0,a.Z)(this,i),e.apply(this,arguments)}return(0,n.Z)(i,[{key:"refreshMain",value:function(){var s=this.props.router.params.userId;s||(s=this.props.authorizedUserId)||this.props.history.push("/Login"),this.props.getUserProfile(s),this.props.getStatus(s)}},{key:"componentDidMount",value:function(){this.refreshMain()}},{key:"componentDidUpdate",value:function(s){this.props.router.params.userId!=s.router.params.userId&&this.refreshMain()}},{key:"render",value:function(){return(0,j.jsx)(fs,(0,t.Z)((0,t.Z)({saveMain:this.props.saveMain,savePhoto:this.props.savePhoto,isOwner:!this.props.router.params.userId,contacts:this.props.contacts,posts:this.props.posts,events:this.props.events,walls:this.props.walls,whos:this.props.whos},this.props),{},{status:this.props.status,updateStatus:this.props.updateStatus}))}}]),i}(r.Component);var ks=(0,Ns.qC)((0,z.$j)((function(s){return{profile:s.main.profile,status:s.main.status,authorizedUserId:s.auth.userId,isAuth:s.auth.isAuth,contacts:s.main.contacts,posts:s.main.posts,events:s.main.events,walls:s.main.walls,whos:s.main.who}}),{getUserProfile:S.et,getStatus:S.lR,updateStatus:S.Nf,savePhoto:S.Ju,saveMain:S.Oi}),(function(s){return function(e){var i=(0,js.TH)(),a=(0,js.s0)(),n=(0,js.UO)();return(0,j.jsx)(s,(0,t.Z)((0,t.Z)({},e),{},{router:{location:i,navigate:a,params:n}}))}}),vs.e)(bs)},3268:function(s,e,i){i.d(e,{e:function(){return h}});var t=i(1413),a=i(5671),n=i(3144),o=i(136),l=i(5716),r=i(2791),c=i(6871),m=i(364),d=i(184),u=function(s){return{isAuth:s.auth.isAuth}},h=function(s){var e=function(e){(0,o.Z)(r,e);var i=(0,l.Z)(r);function r(){return(0,a.Z)(this,r),i.apply(this,arguments)}return(0,n.Z)(r,[{key:"render",value:function(){return!1===this.props.isAuth?(0,d.jsx)(c.Fg,{to:"/Login"}):(0,d.jsx)(s,(0,t.Z)({},this.props))}}]),r}(r.Component);return(0,m.$j)(u)(e)}}}]);
//# sourceMappingURL=213.dd61011f.chunk.js.map