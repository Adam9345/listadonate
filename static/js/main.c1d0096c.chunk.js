(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/channels4_banner.7947a779.png"},function(e,t,a){e.exports=a(23)},,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(9),o=a.n(c),r=(a(18),a(7)),i=a.n(r),l=a(10),g=a(2),u=a(3),h=a(5),m=a(4),d=a(1),p=a(6),f=(a(20),a(21),function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={messageLogin:"",messageDate:"",messageSelected:!1,storage_login:"",storage_date:""},a.onSelectMessage=a.onSelectMessage.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("message_date"),t=localStorage.getItem("message_login");this.setState({storage_login:t,storage_date:e})}},{key:"changeUrl",value:function(){return this.props.value.content.replace("https:","https://").replace("youtube.com","youtube.com/").replace("picosong.com","picosong.com/").replace("youtu.be","youtu.be/").replace("soundcloud.com","soundcloud.com/").replace("[...]","/")}},{key:"createMarkup",value:function(e){return{__html:"".concat(e)}}},{key:"onSelectMessage",value:function(e){if("Range"!==document.getSelection().type){var t=e.currentTarget.firstChild.firstChild.textContent,a=e.currentTarget.firstChild.nextSibling.firstChild.textContent;e.currentTarget.parentElement.childNodes.forEach(function(e){var t=e;t.classList.remove("selectDark"),t.classList.remove("selectLight")}),localStorage.setItem("message_login",t.toString()),localStorage.setItem("message_date",a.toString()),this.props.theme?e.currentTarget.classList.add("selectDark"):e.currentTarget.classList.add("selectLight"),this.setState({messageSelected:!this.state.messageSelect,messageLogin:t,messageDate:a})}}},{key:"render",value:function(){var e=this.props,t=e.value,a=e.theme,n=e.index,c=this.state,o=(c.messageLogin,c.messageDate,c.messageSelected,c.storage_login),r=c.storage_date,i=Math.fround(t.payment.amount_netto/100).toFixed(2),l=new Date(t.created_at),g=new Date,u=new Date;u.setDate(u.getDate()-1);var h=l.getDate()<10?"0".concat(l.getDate()):l.getDate(),m=l.getMonth()+1,d=m<10?"0".concat(m):m,p=l.getHours()<10?"0".concat(l.getHours()):l.getHours(),f=l.getMinutes()<10?"0".concat(l.getMinutes()):l.getMinutes(),v=l.getSeconds()<10?"0".concat(l.getSeconds()):l.getSeconds(),b="".concat(h,"-").concat(d,"-").concat(l.getFullYear()," ").concat(p,":").concat(f,":").concat(v),k=this.changeUrl(),y=k.match(/\bhttps?:\/\/\S+/),w=k.replace(y,'<a href="'.concat(y,'">').concat(y,"</a>")),S=g.getDate()==l.getDate()||u.getDate()==l.getDate(),_=t.login==o&&b==r?a?"selectDark":"selectLight":"";return s.a.createElement("div",{onClick:this.onSelectMessage,style:S?{}:{display:"none"},className:"".concat(_," message_container ").concat(a?"message_container_dark_theme":"")},s.a.createElement("div",{className:"message_flex"},s.a.createElement("div",{className:"message_login"},t.login),s.a.createElement("div",{className:"message_currency"},i," ",t.payment.currency)),s.a.createElement("div",{className:"message_flex"},s.a.createElement("div",{className:"message_date_prov"},b),s.a.createElement("div",{className:"message_date_prov"},"P\u0142atno\u015b\u0107: ",t.payment.provider)),s.a.createElement("div",{className:"message_content",dangerouslySetInnerHTML:this.createMarkup(w)}),s.a.createElement("div",{className:"numberOfDonate"},n+1))}}]),t}(s.a.PureComponent)),v=(a(22),function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).toggleChange=a.toggleChange.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"toggleChange",value:function(){this.props.toggleChange()}},{key:"render",value:function(){return s.a.createElement("div",{className:"switch_container"},s.a.createElement("label",{className:"switch"},s.a.createElement("input",{type:"checkbox",checked:this.props.checked,onChange:this.toggleChange}),s.a.createElement("span",{className:"slider round"})))}}]),t}(n.Component)),b=a(11),k=a.n(b),y=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={isChecked:!0,limit:0,listLength:10,listOfMsgs:[],login:"",showButton:!1,isActiveList:!0},a.toggleChange=a.toggleChange.bind(Object(d.a)(a)),a.fetchMessages=a.fetchMessages.bind(Object(d.a)(a)),a.scrollEvent=a.scrollEvent.bind(Object(d.a)(a)),a.scrollToTop=a.scrollToTop.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){localStorage.getItem("dark_theme")&&this.setState({isChecked:JSON.parse(localStorage.getItem("dark_theme")||"")}),document.title="Lista donate: brudna-malpa",this.fetchMessages()}},{key:"componentWillUnmount",value:function(){}},{key:"scrollEvent",value:function(){window.innerHeight+window.pageYOffset>=document.body.offsetHeight-window.innerHeight&&this.setState({listLength:this.state.listLength+10}),window.scrollY>window.innerHeight?this.setState({showButton:!0}):this.setState({showButton:!1})}},{key:"fetchMessages",value:function(){var e=this,t={calls:[{method:"POST",params:{limit:1,login:"brudna-malpa",offset:0},url:"/user/page/getMessagesByLogin"}],lang:"pl",token:"0"},a="https://prod.tipanddonation.com/api/core/batchcall";try{fetch(a,{body:JSON.stringify(t),headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"},method:"POST"}).then(function(e){return e.json()}).then(function(n){var s=n[t.calls[0].url].data.results,c=n[t.calls[0].url].data.data[0].created_at,o=new Date("".concat(c)).getFullYear()!==(new Date).getFullYear();function r(){return(r=Object(l.a)(i.a.mark(function e(){var n,c;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.calls[0].params.limit=150,t.calls[0].params.offset=o?s-150:0,e.next=4,fetch(a,{body:JSON.stringify(t),headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"},method:"POST"});case 4:return n=e.sent,e.next=7,n.json();case 7:return c=e.sent,e.abrupt("return",c[t.calls[0].url].data.data);case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}(function(){return r.apply(this,arguments)})().then(function(t){e.setState({listOfMsgs:o?t?t.reverse():[]:t})})})}catch(n){}}},{key:"renderMsgs",value:function(){var e=this,t=this.state.listOfMsgs;return t.length>0?t.map(function(t,a){return s.a.createElement(f,{key:a,value:t,theme:e.state.isChecked,index:a})}):s.a.createElement("div",{style:{height:"100vh",fontSize:"2em"}})}},{key:"toggleChange",value:function(){var e=this;this.setState({isChecked:!this.state.isChecked},function(){localStorage.setItem("dark_theme",e.state.isChecked.toString())})}},{key:"scrollToTop",value:function(){window.scroll({top:0,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.isChecked,a=e.showButton;e.isActiveList;return s.a.createElement("div",{className:"App ".concat(t?"dark_theme":"light_theme")},s.a.createElement("img",{className:"banner",src:k.a,alt:"brudna_malpa_banner"}),s.a.createElement(v,{checked:t,toggleChange:this.toggleChange}),this.state.listOfMsgs.length>0?s.a.createElement("div",{className:"page-container"},this.renderMsgs()):null,s.a.createElement("div",{onClick:this.scrollToTop,className:"arrow-up ".concat(t?"arrow-up-dark-theme":""),style:{display:a?"block":"none"}},"\u2191"))}}]),t}(s.a.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[12,1,2]]]);
//# sourceMappingURL=main.c1d0096c.chunk.js.map