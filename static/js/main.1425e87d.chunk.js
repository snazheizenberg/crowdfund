(this.webpackJsonpcrowdfund=this.webpackJsonpcrowdfund||[]).push([[0],{139:function(e,t,c){},140:function(e,t,c){},392:function(e,t,c){},393:function(e,t,c){},395:function(e,t,c){},396:function(e,t,c){},398:function(e,t,c){"use strict";c.r(t);var s=c(4),a=c.n(s),n=c(12),i=c.n(n),r=(c(139),c.p+"static/media/logo.e6f12bc6.svg"),o=c.p+"static/media/icon-hamburger.f8a9f0cf.svg",l=c.p+"static/media/icon-close-menu.32169d31.svg",d=(c(140),c(2)),j=function(){return Object(s.useEffect)((function(){var e=document.querySelector("#hamburger"),t=document.querySelector("#nav-ul");e.addEventListener("click",(function(){1===t.classList.length?(e.innerHTML='<img src= "'+l+' " alt="hamburger icon"/> ',t.classList.add("show")):(e.innerHTML='<img src= "'+o+' " alt="hamburger icon"/> ',t.classList.remove("show"))}))})),Object(d.jsx)("header",{className:"hero",children:Object(d.jsx)("div",{className:"header-content",children:Object(d.jsxs)("nav",{id:"nav",className:"nav",children:[Object(d.jsx)("span",{children:Object(d.jsx)("img",{src:r,alt:"crowdfund logo"})}),Object(d.jsx)("button",{className:"menu",id:"hamburger",children:Object(d.jsx)("img",{src:o,alt:"hamburger icon"})}),Object(d.jsxs)("ul",{className:"nav-ul",id:"nav-ul",children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#about",children:"About"})}),Object(d.jsx)("li",{className:"mid-anchor",children:Object(d.jsx)("a",{href:"#discover",children:"Discover"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#getStarted",children:"Get Started"})})]})]})})})},b=c(11),u=c(16),h=c.p+"static/media/logo-mastercraft.dca2a831.svg",m=c.p+"static/media/icon-bookmark.35f2f44c.svg",O=c.p+"static/media/icon-bookmarked.03cfb653.svg",p=c(25),x=c.n(p),g=(c(392),function(e){var t=e.dialogStatus,c=e.toggleModal,a=Object(s.useState)(t),n=Object(b.a)(a,2),i=n[0],r=n[1],o=Object(s.useState)(""),l=Object(b.a)(o,2),j=l[0],h=l[1],m=Object(s.useState)(null),O=Object(b.a)(m,2),p=O[0],g=O[1],f=Object(s.useState)(null),v=Object(b.a)(f,2),k=v[0],N=v[1],w=Object(s.useState)(null),S=Object(b.a)(w,2),y=S[0],B=S[1],C=Object(s.useState)(null),E=Object(b.a)(C,2),I=E[0],P=E[1],M=function(){p?(x.a.dispatch("sendPledgeWithoutReward",p),c()):u.Notification.error({title:"Error",message:"Please you must pledge an amount before you continue"})};return Object(s.useEffect)((function(){})),Object(d.jsx)(u.Dialog,{title:"Back this Project",visible:i,onCancel:function(){return r(i),void x.a.dispatch("showProjectBacking",i)},size:"tiny",className:"back-project",children:Object(d.jsx)(u.Dialog.Body,{children:Object(d.jsxs)("div",{className:"dialog-content",children:[Object(d.jsx)("p",{children:"Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world"}),Object(d.jsxs)(u.Radio.Group,{value:j,onChange:function(e){return h(e)},children:[Object(d.jsxs)(u.Radio,{value:"no_reward",className:"no_reward",children:[Object(d.jsxs)("div",{className:"radio-content",children:[Object(d.jsx)("h1",{children:"Pledge with no reward"}),Object(d.jsxs)("p",{children:["Choose to support us without a reward if you simply believe in our project. As a"," "]}),Object(d.jsx)("p",{children:"backer, you'll be signed up to receive product updates via email."})]}),"no_reward"===j&&Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"pledging",children:[Object(d.jsx)("p",{children:"Enter your pledge"}),Object(d.jsxs)("div",{className:"input-btn",children:[Object(d.jsx)("span",{children:"$"}),Object(d.jsx)("input",{type:"text",value:p,onChange:function(e){return g(e.target.value)}}),Object(d.jsx)("button",{onClick:function(){return M()},children:"Continue"})]})]})]})]}),Object(d.jsxs)(u.Radio,{value:"with_stand",className:"with_stand",children:[Object(d.jsxs)("div",{className:"radio-stand-content",children:[Object(d.jsxs)("div",{className:"stand-header",children:[Object(d.jsxs)("div",{className:"first-header",children:[Object(d.jsx)("h1",{children:"Bamboo Stand"}),Object(d.jsx)("span",{className:"buck",children:"Pledge $25 or more"})]}),Object(d.jsxs)("span",{className:"number-left",children:["101 ",Object(d.jsx)("small",{children:"left"})]})]}),Object(d.jsxs)("p",{children:["You get an ergonomic stand made of natural bamboo. You've helped us launch ",Object(d.jsx)("br",{}),"our promotional campaign and you'll be added to a special Backer member list"]})]}),"with_stand"===j&&Object(d.jsxs)("div",{className:"show_if",children:[Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"pledging",children:[Object(d.jsx)("p",{children:"Enter your pledge"}),Object(d.jsxs)("div",{className:"input-btn",children:[Object(d.jsx)("span",{children:"$"}),Object(d.jsx)("input",{type:"text",value:k,onChange:function(e){return N(e.target.value)}}),Object(d.jsx)("button",{onClick:function(){!k||k<25?u.Notification.error({title:"Error",message:"Please you must pledge $25 or more to continue"}):(x.a.dispatch("sendBambooPledge",k),c())},children:"Continue"})]})]})]})]}),Object(d.jsxs)(u.Radio,{value:"with_black",className:"with_black",children:[Object(d.jsxs)("div",{className:"radio-black-content",children:[Object(d.jsxs)("div",{className:"black-header",children:[Object(d.jsxs)("div",{className:"first-header",children:[Object(d.jsx)("h1",{children:"Black Edition Stand"}),Object(d.jsx)("span",{className:"buck",children:"Pledge $75 or more"})]}),Object(d.jsxs)("span",{className:"number-left",children:["64 ",Object(d.jsx)("small",{children:"left"})]})]}),Object(d.jsxs)("p",{children:["You get a Black Special Edition computer stand and a personal thank you. ",Object(d.jsx)("br",{}),"You'll be added to our Backer member list. Shipping is included."]})]}),"with_black"===j&&Object(d.jsxs)("div",{className:"show_if",children:[Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"pledging",children:[Object(d.jsx)("p",{children:"Enter your pledge"}),Object(d.jsxs)("div",{className:"input-btn",children:[Object(d.jsx)("span",{children:"$"}),Object(d.jsx)("input",{type:"text",value:y,onChange:function(e){return B(e.target.value)}}),Object(d.jsx)("button",{onClick:function(){!y||y<75?u.Notification.error({title:"Error",message:"Please you must pledge $75 or more to continue"}):(x.a.dispatch("sendSpecialEdition",y),c())},children:"Continue"})]})]})]})]}),Object(d.jsxs)(u.Radio,{value:"with_mahogany",className:"with_mahogany",children:[Object(d.jsxs)("div",{className:"radio-mahogany-content",children:[Object(d.jsxs)("div",{className:"mahogany-header",children:[Object(d.jsxs)("div",{className:"first-header",children:[Object(d.jsx)("h1",{children:"Mahogany Special Edition"}),Object(d.jsx)("span",{className:"buck",children:"Pledge $200 or more"})]}),Object(d.jsxs)("span",{className:"number-left",children:["0 ",Object(d.jsx)("small",{children:"left"})]})]}),Object(d.jsxs)("p",{children:["You get two Special Edition Mahogany stand, a Backer T-shirt and a personal",Object(d.jsx)("br",{}),"thank you. You'll be added to our Backer member list. Shipping is included."]})]}),"with_mahogany"===j&&Object(d.jsxs)("div",{className:"show_if",children:[Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"pledging",children:[Object(d.jsx)("p",{children:"Enter your pledge"}),Object(d.jsxs)("div",{className:"input-btn",children:[Object(d.jsx)("span",{children:"$"}),Object(d.jsx)("input",{type:"text",value:I,onChange:function(e){return P(e.target.value)}}),Object(d.jsx)("button",{onClick:function(){return M()},children:"Continue"})]})]})]})]})]})]})})})}),f=c.p+"static/media/icon-check.bdee5269.svg",v=(c(393),function(e){var t=e.dialogStatus,c=Object(s.useState)(t),a=Object(b.a)(c,2),n=a[0],i=a[1],r=function(){i(n),x.a.dispatch("showConfirmBacking",n)};return Object(s.useEffect)((function(){})),Object(d.jsx)(u.Dialog,{visible:n,onCancel:function(){return r()},size:"tiny",className:"confirm-backing",children:Object(d.jsx)(u.Dialog.Body,{children:Object(d.jsxs)("div",{className:"dialog-content",children:[Object(d.jsx)("div",{className:"check",children:Object(d.jsx)("img",{src:f,alt:"check icon"})}),Object(d.jsx)("h1",{children:"Thanks for your support!"}),Object(d.jsx)("p",{children:"Your pledge brings us one step closer to sharing Mastercraft"}),Object(d.jsx)("p",{children:"Bamboo Monitor Riser Worldwide. You will get an email once "}),Object(d.jsx)("p",{children:"our campaign is completed."}),Object(d.jsx)("button",{onClick:function(){return r()},children:"Got it!"})]})})})}),k=c(133),N=(c(395),function(e){var t=Object(s.useState)(!1),c=Object(b.a)(t,2),a=c[0],n=c[1],i=Object(s.useState)(!1),r=Object(b.a)(i,2),o=r[0],l=r[1],j=Object(s.useState)(0),p=Object(b.a)(j,2),f=p[0],N=p[1],w=Object(s.useState)(0),S=Object(b.a)(w,2),y=S[0],B=S[1],C=Object(s.useState)(!1),E=Object(b.a)(C,2),I=E[0],P=E[1],M=function(){n(!1),l(!0)};return Object(s.useEffect)((function(){x.a.subscribe("showProjectBacking",(function(){n(!1)})),x.a.subscribe("showConfirmBacking",(function(){l(!1)})),x.a.subscribe("sendPledgeWithoutReward",(function(e){if(JSON.parse(window.localStorage.getItem("sum"))){var t=[];t.push(parseInt(e),JSON.parse(window.localStorage.getItem("sum")));var c=t.reduce((function(e,t){return e+t}));P(!0),setTimeout((function(){N(c),P(!1)}),2e3),JSON.parse(window.localStorage.getItem("backers")),B(JSON.parse(window.localStorage.getItem("backers"))+1)}else{var s=[];s.push(e);var a=s.reduce((function(e,t){return e+t}));N(a),B(y+1)}})),x.a.subscribe("sendBambooPledge",(function(e){if(JSON.parse(window.localStorage.getItem("sum"))){var t=[];t.push(parseInt(e),JSON.parse(window.localStorage.getItem("sum")));var c=t.reduce((function(e,t){return e+t}));P(!0),setTimeout((function(){N(c),P(!1)}),2e3),JSON.parse(window.localStorage.getItem("backers")),B(JSON.parse(window.localStorage.getItem("backers"))+1)}else{var s=[];s.push(e);var a=s.reduce((function(e,t){return e+t}));N(a),B(y+1)}})),x.a.subscribe("sendSpecialEdition",(function(e){if(JSON.parse(window.localStorage.getItem("sum"))){var t=[];t.push(parseInt(e),JSON.parse(window.localStorage.getItem("sum")));var c=t.reduce((function(e,t){return e+t}));P(!0),setTimeout((function(){N(c),P(!1)}),2e3),JSON.parse(window.localStorage.getItem("backers")),B(JSON.parse(window.localStorage.getItem("backers"))+1)}else{var s=[];s.push(e);var a=s.reduce((function(e,t){return e+t}));N(a),B(y+1)}})),N(JSON.parse(window.localStorage.getItem("sum"))),B(JSON.parse(window.localStorage.getItem("backers")))}),[]),Object(s.useEffect)((function(){window.localStorage.setItem("sum",+f),window.localStorage.setItem("backers",+y)}),[f],[y]),Object(d.jsx)(k.Spring,{from:{opacity:0},to:{opacity:1},config:{delay:1e3,duration:1e3},children:function(e){return Object(d.jsxs)("article",{children:[Object(d.jsxs)("div",{className:"content",children:[Object(d.jsxs)("div",{className:"riser",children:[Object(d.jsx)("div",{className:"logo",children:Object(d.jsx)("img",{src:h,alt:"bamboo logo"})}),Object(d.jsx)("h2",{children:"Mastercraft Bamboo Monitor Riser"}),Object(d.jsx)("span",{className:"bamboo-span",children:"A beautiful & handicrafted monitor stand to reduce neck and eye strain"}),Object(d.jsxs)("div",{className:"btns",children:[Object(d.jsx)("button",{onClick:function(){n(!0)},className:"project-btn",children:"Back this project"}),Object(d.jsxs)("button",{className:"bookmark-btn",id:"marked-btn",onClick:function(){return function(){var e=document.querySelector("#marked-btn");1===e.classList.length?e.innerHTML='<img src= "'+O+' " alt="bookmark icon"/>  <span class="btn-label"> Bookmarked </span>':e.innerHTML='<img src= "'+m+' " alt="bookmark icon"/>  <span class="btn-label"> Bookmark </span>',e.classList.toggle("bookmarked")}()},children:[" ",Object(d.jsx)("img",{src:m,alt:"bookmark icon"})," ",Object(d.jsx)("span",{className:"btn-label",children:"Bookmark"})]})]})]}),Object(d.jsx)(u.Loading,{loading:I,children:Object(d.jsxs)("div",{className:"backers",children:[Object(d.jsxs)("div",{className:"backers-figures",children:[Object(d.jsxs)("p",{children:["$",f," ",Object(d.jsx)("br",{}),Object(d.jsx)("small",{children:"of $100,000 backed"})]}),Object(d.jsxs)("p",{children:[y," ",Object(d.jsx)("br",{}),Object(d.jsx)("small",{children:"total backers"})]}),Object(d.jsxs)("p",{children:["56 ",Object(d.jsx)("br",{}),Object(d.jsx)("small",{children:"days left"})]})]}),Object(d.jsx)("div",{className:"progress",children:Object(d.jsx)(u.Progress,{percentage:100*f/1e5,showText:!1})})]})}),Object(d.jsxs)("div",{className:"about",children:[Object(d.jsx)("h2",{children:"About this project"}),Object(d.jsxs)("p",{children:["The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates ",Object(d.jsx)("br",{}),"your screen to a more comfortable viewing height. Placing your monitor at eye level has ",Object(d.jsx)("br",{}),"the potential to improve your posture and make you more comfortable while at work, ",Object(d.jsx)("br",{}),"helping you stay focused on the task at hand."]}),Object(d.jsxs)("p",{children:["Featuring artisan craftmanship, the simplicity of design creates extra desk space below ",Object(d.jsx)("br",{}),"your computer to allow notepads, pens, and USB sticks to be stored under the stand"]}),Object(d.jsxs)("div",{className:"stand",children:[Object(d.jsxs)("div",{className:"bamboo",children:[Object(d.jsxs)("div",{className:"pledge",children:[Object(d.jsx)("h3",{children:"Bamboo Stand"}),Object(d.jsx)("span",{children:"Pledge $25 or more"})]}),Object(d.jsxs)("p",{children:["You get an ergonomic stand made of natural bamboo. You've helped us launch ",Object(d.jsx)("br",{}),"our promotional campaign and you'll be added to a special Backer member list"]}),Object(d.jsxs)("div",{className:"remnant",children:[Object(d.jsxs)("span",{children:["101 ",Object(d.jsx)("small",{children:"left"})]}),Object(d.jsx)("button",{children:"Select Reward"})]})]}),Object(d.jsxs)("div",{className:"black-edition",children:[Object(d.jsxs)("div",{className:"edition",children:[Object(d.jsx)("h3",{children:"Black Edition Stand"}),Object(d.jsx)("span",{children:"Pledge $75 or more"})]}),Object(d.jsxs)("p",{children:["You get a Black Special Edition computer stand and a personal thank you. you'll ",Object(d.jsx)("br",{}),"be added to our Backer member list. Shipping is included"]}),Object(d.jsxs)("div",{className:"reward",children:[Object(d.jsxs)("span",{children:["64 ",Object(d.jsx)("small",{children:"left"})]}),Object(d.jsx)("button",{children:"Select Reward"})]})]}),Object(d.jsxs)("div",{className:"special-edition",children:[Object(d.jsxs)("div",{className:"mahogany",children:[Object(d.jsx)("h3",{children:"Mahogany Special Edition"}),Object(d.jsx)("span",{children:"Pledge $200 or more"})]}),Object(d.jsxs)("p",{children:["You get two Special Edition Mahogany stands, a Backer T-Shirt and a personal ",Object(d.jsx)("br",{}),"thank you. You'll be added to our Backer member list. Shipping included"]}),Object(d.jsxs)("div",{className:"stock",children:[Object(d.jsxs)("span",{children:["0 ",Object(d.jsx)("small",{children:"left"})]}),Object(d.jsx)("button",{children:"Out of Stock"})]})]})]})]})]}),a&&Object(d.jsx)(g,{dialogStatus:a,toggleModal:M}),o&&Object(d.jsx)(v,{dialogStatus:o})]})}})}),w=(c(396),function(e){return Object(d.jsxs)("div",{className:"main-app",children:[Object(d.jsx)(j,{}),Object(d.jsx)(N,{})]})}),S=(c(397),function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(w,{})})}),y=c(134),B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,399)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))};u.i18n.use(y.a),i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root")),B()}},[[398,1,2]]]);
//# sourceMappingURL=main.1425e87d.chunk.js.map