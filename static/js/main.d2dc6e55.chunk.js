(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(8),s=n.n(c),i=(n(15),n(2)),l=n(3),r=n(5),u=n(4),g=n(1),h=n(6),m=(n(16),n(17),function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"changeUrl",value:function(){return this.props.value.content.replace("https:","https://").replace("youtube.com","youtube.com/").replace("picosong.com","picosong.com/").replace("youtu.be","youtu.be/").replace("soundcloud.com","soundcloud.com/").replace("[...]","/")}},{key:"createMarkup",value:function(e){return{__html:"".concat(e)}}},{key:"render",value:function(){var e=this.props,t=e.value,n=e.theme,a=e.index,c=Math.fround(t.payment.amount_netto/100).toFixed(2),s=new Date(t.created_at),i=s.getDate()<10?"0".concat(s.getDate()):s.getDate(),l=s.getMonth()+1,r=l<10?"0".concat(l):l,u=s.getHours()<10?"0".concat(s.getHours()):s.getHours(),g=s.getMinutes()<10?"0".concat(s.getMinutes()):s.getMinutes(),h=s.getSeconds()<10?"0".concat(s.getSeconds()):s.getSeconds(),m="".concat(i,"-").concat(r,"-").concat(s.getFullYear()," ").concat(u,":").concat(g,":").concat(h),d=this.changeUrl(),p=d.match(/\bhttps?:\/\/\S+/),v=d.replace(p,'<a href="'.concat(p,'">').concat(p,"</a>"));return o.a.createElement("div",{className:"message_container ".concat(n?"message_container_dark_theme":"")},o.a.createElement("div",{className:"message_flex"},o.a.createElement("div",{className:"message_login"},t.login),o.a.createElement("div",{className:"message_currency"},c," ",t.payment.currency)),o.a.createElement("div",{className:"message_flex"},o.a.createElement("div",{className:"message_date_prov"},m),o.a.createElement("div",{className:"message_date_prov"},"P\u0142atno\u015b\u0107: ",t.payment.provider)),o.a.createElement("div",{className:"message_content",dangerouslySetInnerHTML:this.createMarkup(v)}),o.a.createElement("div",{className:"numberOfDonate"},a+1))}}]),t}(o.a.PureComponent)),d=(n(18),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(r.a)(this,Object(u.a)(t).call(this,e))).toggleChange=n.toggleChange.bind(Object(g.a)(n)),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"toggleChange",value:function(){this.props.toggleChange()}},{key:"render",value:function(){return o.a.createElement("div",{className:"switch_container"},o.a.createElement("label",{className:"switch"},o.a.createElement("input",{type:"checkbox",checked:this.props.checked,onChange:this.toggleChange}),o.a.createElement("span",{className:"slider round"})))}}]),t}(a.Component)),p=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(r.a)(this,Object(u.a)(t).call(this,e))).myRef=o.a.createRef(),n.inputRef=o.a.createRef(),n.myInterval=void 0,n.state={isChecked:!0,limit:0,listOfMsgs:[],login:"",showButton:!1,listLength:10},n.myInterval=null,n.toggleChange=n.toggleChange.bind(Object(g.a)(n)),n.fetchMessages=n.fetchMessages.bind(Object(g.a)(n)),n.numberChange=n.numberChange.bind(Object(g.a)(n)),n.loginChange=n.loginChange.bind(Object(g.a)(n)),n.scrollEvent=n.scrollEvent.bind(Object(g.a)(n)),n.scrollToTop=n.scrollToTop.bind(Object(g.a)(n)),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;localStorage.getItem("dark_theme")&&this.setState({isChecked:JSON.parse(localStorage.getItem("dark_theme")||"")});var t=localStorage.getItem("limit");this.setState({limit:null!=t?parseInt(t,10):100,login:localStorage.getItem("login")||"brudna-malpa"},function(){document.title="Lista donate: ".concat(e.state.login),e.fetchMessages()}),window.addEventListener("scroll",this.scrollEvent,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollEvent,!0),clearInterval(this.myInterval)}},{key:"scrollEvent",value:function(){window.innerHeight+window.pageYOffset>=document.body.offsetHeight-window.innerHeight&&this.setState({listLength:this.state.listLength+10}),window.scrollY<=0&&this.setState({listLength:10}),window.scrollY>window.innerHeight?this.setState({showButton:!0}):this.setState({showButton:!1})}},{key:"fetchMessages",value:function(){var e=this,t=this.state,n=(t.login,t.limit,{calls:[{method:"POST",params:{limit:50,login:"brudna-malpa",offset:0},url:"/user/page/getMessagesByLogin"}],lang:"pl",token:"0"});try{return fetch("https://prod.tipanddonation.com/core/batchcall",{body:JSON.stringify(n),headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"},method:"POST"}).then(function(e){return e.json()}).then(function(t){e.setState({listOfMsgs:t[n.calls[0].url].data.data})})}catch(a){console.log("Error")}}},{key:"renderMsgs",value:function(){var e=this,t=this.state.listOfMsgs,n=void 0!==t?t.slice(0,this.state.listLength):void 0;return void 0!==n?n.map(function(t,n){return o.a.createElement(m,{key:n,value:t,theme:e.state.isChecked,index:n})}):o.a.createElement("div",{style:{height:"100vh",fontSize:"4em"}})}},{key:"toggleChange",value:function(){var e=this;this.setState({isChecked:!this.state.isChecked},function(){localStorage.setItem("dark_theme",e.state.isChecked.toString())})}},{key:"numberChange",value:function(e){var t=this,n=parseInt(e.currentTarget.value,10);n>=500&&(n=500),this.setState({limit:n,listLength:10},function(){setTimeout(function(){t.setState({limit:t.state.limit},function(){isNaN(t.state.limit)||localStorage.setItem("limit",t.state.limit.toString())})},1e3)})}},{key:"loginChange",value:function(e){var t=this;document.title="Lista donate: ".concat(e.currentTarget.value),this.setState({login:e.currentTarget.value,listLength:10},function(){setTimeout(function(){t.setState({login:t.state.login},function(){""!==t.state.login&&localStorage.setItem("login",t.state.login)})},1e3)})}},{key:"scrollToTop",value:function(){window.scroll({top:0,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.isChecked,n=e.showButton;return o.a.createElement("div",{className:"App ".concat(t?"dark_theme":"light_theme")},o.a.createElement(d,{checked:t,toggleChange:this.toggleChange}),o.a.createElement("div",{className:"page-container"},this.renderMsgs()),o.a.createElement("div",{onClick:this.scrollToTop,className:"arrow-up ".concat(t?"arrow-up-dark-theme":""),style:{display:n?"block":"none"}},"\u2191"))}}]),t}(o.a.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.d2dc6e55.chunk.js.map