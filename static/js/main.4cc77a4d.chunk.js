(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(9),s=a.n(o),i=(a(17),a(7)),r=a.n(i),l=a(10),u=a(2),h=a(3),g=a(5),m=a(4),d=a(1),p=a(6),v=(a(19),a(20),function(e){function t(){return Object(u.a)(this,t),Object(g.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"changeUrl",value:function(){return this.props.value.content.replace("https:","https://").replace("youtube.com","youtube.com/").replace("picosong.com","picosong.com/").replace("youtu.be","youtu.be/").replace("soundcloud.com","soundcloud.com/").replace("[...]","/")}},{key:"createMarkup",value:function(e){return{__html:"".concat(e)}}},{key:"render",value:function(){var e=this.props,t=e.value,a=e.theme,n=e.index,o=Math.fround(t.payment.amount_netto/100).toFixed(2),s=new Date(t.created_at),i=s.getDate()<10?"0".concat(s.getDate()):s.getDate(),r=s.getMonth()+1,l=r<10?"0".concat(r):r,u=s.getHours()<10?"0".concat(s.getHours()):s.getHours(),h=s.getMinutes()<10?"0".concat(s.getMinutes()):s.getMinutes(),g=s.getSeconds()<10?"0".concat(s.getSeconds()):s.getSeconds(),m="".concat(i,"-").concat(l,"-").concat(s.getFullYear()," ").concat(u,":").concat(h,":").concat(g),d=this.changeUrl(),p=d.match(/\bhttps?:\/\/\S+/),v=d.replace(p,'<a href="'.concat(p,'">').concat(p,"</a>"));return c.a.createElement("div",{className:"message_container ".concat(a?"message_container_dark_theme":"")},c.a.createElement("div",{className:"message_flex"},c.a.createElement("div",{className:"message_login"},t.login),c.a.createElement("div",{className:"message_currency"},o," ",t.payment.currency)),c.a.createElement("div",{className:"message_flex"},c.a.createElement("div",{className:"message_date_prov"},m),c.a.createElement("div",{className:"message_date_prov"},"P\u0142atno\u015b\u0107: ",t.payment.provider)),c.a.createElement("div",{className:"message_content",dangerouslySetInnerHTML:this.createMarkup(v)}),c.a.createElement("div",{className:"numberOfDonate"},n+1))}}]),t}(c.a.PureComponent)),f=(a(21),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(g.a)(this,Object(m.a)(t).call(this,e))).toggleChange=a.toggleChange.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"toggleChange",value:function(){this.props.toggleChange()}},{key:"render",value:function(){return c.a.createElement("div",{className:"switch_container"},c.a.createElement("label",{className:"switch"},c.a.createElement("input",{type:"checkbox",checked:this.props.checked,onChange:this.toggleChange}),c.a.createElement("span",{className:"slider round"})))}}]),t}(n.Component)),y=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(g.a)(this,Object(m.a)(t).call(this,e))).myRef=c.a.createRef(),a.inputRef=c.a.createRef(),a.myInterval=void 0,a.state={isChecked:!1,limit:0,listOfMsgs:[],login:"",showButton:!1},a.myInterval=null,a.toggleChange=a.toggleChange.bind(Object(d.a)(a)),a.fetchMessages=a.fetchMessages.bind(Object(d.a)(a)),a.numberChange=a.numberChange.bind(Object(d.a)(a)),a.loginChange=a.loginChange.bind(Object(d.a)(a)),a.scrollEvent=a.scrollEvent.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;localStorage.getItem("dark_theme")&&this.setState({isChecked:JSON.parse(localStorage.getItem("dark_theme")||"")});var t=localStorage.getItem("limit");this.setState({limit:null!=t?parseInt(t,10):100,login:localStorage.getItem("login")||"brudna-malpa"},function(){document.title="Lista donate: ".concat(e.state.login),e.fetchMessages().then(function(t){t&&(e.myInterval=setInterval(e.fetchMessages,5e3))})}),window.addEventListener("scroll",this.scrollEvent,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollEvent,!0),clearInterval(this.myInterval)}},{key:"scrollEvent",value:function(){window.scrollY>window.innerHeight?this.setState({showButton:!0}):this.setState({showButton:!1})}},{key:"fetchMessages",value:function(){var e=Object(l.a)(r.a.mark(function e(){var t,a,n,c,o=this;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,a=t.login,n=t.limit,c={calls:[{method:"POST",params:{limit:n,login:a,offset:0},url:"/user/page/getMessagesByLogin"}],lang:"pl",token:"0"},e.prev=2,e.next=5,fetch("https://prod.tipanddonation.com/core/batchcall",{body:JSON.stringify(c),headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"},method:"POST"}).then(function(e){return e.json()}).then(function(e){return o.setState({listOfMsgs:e[c.calls[0].url].data.data}),e[c.calls[0].url].success});case 5:return e.abrupt("return",e.sent);case 8:throw e.prev=8,e.t0=e.catch(2),e.t0;case 11:case"end":return e.stop()}},e,this,[[2,8]])}));return function(){return e.apply(this,arguments)}}()},{key:"renderMsgs",value:function(){var e=this,t=this.state.listOfMsgs;try{return void 0!==t?t.map(function(t,a){return c.a.createElement(v,{key:a,value:t,theme:e.state.isChecked,index:a})}):c.a.createElement("div",{style:{height:"100vh",fontSize:"4em"}})}catch(a){throw a}}},{key:"toggleChange",value:function(){var e=this;this.setState({isChecked:!this.state.isChecked},function(){localStorage.setItem("dark_theme",e.state.isChecked.toString())})}},{key:"numberChange",value:function(e){var t=this;this.setState({limit:parseInt(e.currentTarget.value,10)},function(){setTimeout(function(){t.setState({limit:t.state.limit},function(){isNaN(t.state.limit)||localStorage.setItem("limit",t.state.limit.toString())})},1e3)})}},{key:"loginChange",value:function(e){var t=this;document.title="Lista donate: ".concat(e.currentTarget.value),this.setState({login:e.currentTarget.value},function(){setTimeout(function(){t.setState({login:t.state.login},function(){""!==t.state.login&&localStorage.setItem("login",t.state.login)})},1e3)})}},{key:"scrollToTop",value:function(){window.scroll({top:0,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.isChecked,a=e.showButton;return c.a.createElement("div",{className:"App ".concat(t?"dark_theme":"light_theme")},c.a.createElement(f,{checked:t,toggleChange:this.toggleChange}),c.a.createElement("div",{className:"page-container"},c.a.createElement("input",{className:"myInput ".concat(t?"myInput_dark_theme":""),type:"text",onChange:this.loginChange,onBlur:this.fetchMessages,value:this.state.login}),c.a.createElement("input",{className:"myInput ".concat(t?"myInput_dark_theme":""),type:"text",onChange:this.numberChange,onBlur:this.fetchMessages,value:this.state.limit||""}),this.renderMsgs()),c.a.createElement("div",{onClick:this.scrollToTop,className:"arrow-up ".concat(t?"arrow-up-dark-theme":""),style:{display:a?"block":"none"}},"\u2191"))}}]),t}(c.a.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.4cc77a4d.chunk.js.map