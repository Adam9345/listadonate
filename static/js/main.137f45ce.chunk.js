(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(22)},,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(9),s=n.n(c),i=(n(17),n(7)),r=n.n(i),l=n(10),u=n(2),h=n(3),g=n(5),m=n(4),d=n(1),p=n(6),v=(n(19),n(20),function(e){function t(){return Object(u.a)(this,t),Object(g.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"changeUrl",value:function(){return this.props.value.content.replace("https:","https://").replace("youtube.com","youtube.com/").replace("picosong.com","picosong.com/").replace("youtu.be","youtu.be/")}},{key:"render",value:function(){var e=this.props,t=e.value,n=e.theme,a=Math.fround(t.payment.amount_netto/100).toFixed(2),c=new Date(t.created_at),s=c.getDate()<10?"0".concat(c.getDate()):c.getDate(),i=c.getMonth()+1,r=i<10?"0".concat(i):i,l=c.getHours()<10?"0".concat(c.getHours()):c.getHours(),u=c.getMinutes()<10?"0".concat(c.getMinutes()):c.getMinutes(),h=c.getSeconds()<10?"0".concat(c.getSeconds()):c.getSeconds(),g="".concat(s,"-").concat(r,"-").concat(c.getFullYear()," ").concat(l,":").concat(u,":").concat(h),m=this.changeUrl();return o.a.createElement("div",{className:"message_container ".concat(n?"message_container_dark_theme":"")},o.a.createElement("div",{className:"message_flex"},o.a.createElement("div",{className:"message_login"},t.login),o.a.createElement("div",{className:"message_currency"},a," ",t.payment.currency)),o.a.createElement("div",{className:"message_flex"},o.a.createElement("div",{className:"message_date_prov"},g),o.a.createElement("div",{className:"message_date_prov"},"P\u0142atno\u015b\u0107: ",t.payment.provider)),o.a.createElement("div",{className:"message_content"},m))}}]),t}(a.Component)),f=(n(21),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(g.a)(this,Object(m.a)(t).call(this,e))).toggleChange=n.toggleChange.bind(Object(d.a)(n)),n}return Object(p.a)(t,e),Object(h.a)(t,[{key:"toggleChange",value:function(){this.props.toggleChange()}},{key:"render",value:function(){return o.a.createElement("div",{className:"switch_container"},o.a.createElement("label",{className:"switch"},o.a.createElement("input",{type:"checkbox",checked:this.props.checked,onChange:this.toggleChange}),o.a.createElement("span",{className:"slider round"})))}}]),t}(a.Component)),b=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(g.a)(this,Object(m.a)(t).call(this,e))).myRef=o.a.createRef(),n.inputRef=o.a.createRef(),n.state={isChecked:!1,limit:0,listOfMsgs:[],login:"",showButton:!1},n.toggleChange=n.toggleChange.bind(Object(d.a)(n)),n.buttonClick=n.buttonClick.bind(Object(d.a)(n)),n.fetchMessages=n.fetchMessages.bind(Object(d.a)(n)),n.numberChange=n.numberChange.bind(Object(d.a)(n)),n.loginChange=n.loginChange.bind(Object(d.a)(n)),n.scrollEvent=n.scrollEvent.bind(Object(d.a)(n)),n}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;localStorage.getItem("dark_theme")&&this.setState({isChecked:JSON.parse(localStorage.getItem("dark_theme")||"")});var t=localStorage.getItem("limit");this.setState({limit:null!=t?parseInt(t,10):100,login:localStorage.getItem("login")||"brudna-malpa"},function(){e.fetchMessages().then(function(t){t&&setInterval(e.fetchMessages,5e3)})}),window.addEventListener("scroll",this.scrollEvent,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollEvent,!0)}},{key:"scrollEvent",value:function(){window.scrollY>window.innerHeight?this.setState({showButton:!0}):this.setState({showButton:!1})}},{key:"fetchMessages",value:function(){var e=Object(l.a)(r.a.mark(function e(){var t,n,a,o,c=this;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,n=t.login,a=t.limit,o={calls:[{method:"POST",params:{limit:a,login:n,offset:0},url:"/user/page/getMessagesByLogin"}],lang:"pl",token:"0"},e.prev=2,e.next=5,fetch("https://prod.tipanddonation.com/core/batchcall",{body:JSON.stringify(o),headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"},method:"POST"}).then(function(e){return e.json()}).then(function(e){return c.setState({listOfMsgs:e[o.calls[0].url].data.data}),e[o.calls[0].url].success});case 5:return e.abrupt("return",e.sent);case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}},e,this,[[2,8]])}));return function(){return e.apply(this,arguments)}}()},{key:"renderMsgs",value:function(){var e=this,t=this.state.listOfMsgs;try{return void 0!==t?t.map(function(t,n){return o.a.createElement(v,{key:n,value:t,theme:e.state.isChecked})}):o.a.createElement("div",{style:{height:"100vh",fontSize:"4em"}},"Error")}catch(n){console.log(n)}}},{key:"toggleChange",value:function(){var e=this;this.setState({isChecked:!this.state.isChecked},function(){localStorage.setItem("dark_theme",e.state.isChecked.toString())})}},{key:"numberChange",value:function(e){var t=this;this.setState({limit:parseInt(e.currentTarget.value,10)},function(){setTimeout(function(){t.setState({limit:t.state.limit},function(){localStorage.setItem("limit",t.state.limit.toString())})},1e3)})}},{key:"loginChange",value:function(e){var t=this;this.setState({login:e.currentTarget.value},function(){setTimeout(function(){t.setState({login:t.state.login},function(){localStorage.setItem("login",t.state.login)})},1e3)})}},{key:"scrollToTop",value:function(){window.scroll({top:0,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.isChecked,n=e.showButton;return o.a.createElement("div",{className:"App ".concat(t?"dark_theme":"light_theme")},o.a.createElement(f,{checked:t,toggleChange:this.toggleChange}),o.a.createElement("div",{className:"page-container"},o.a.createElement("input",{className:"myInput ".concat(t?"myInput_dark_theme":""),type:"text",onChange:this.loginChange,value:this.state.login}),o.a.createElement("input",{className:"myInput ".concat(t?"myInput_dark_theme":""),type:"number",onChange:this.numberChange,value:this.state.limit,max:"1000"}),this.renderMsgs()),o.a.createElement("div",{onClick:this.scrollToTop,className:"arrow-up ".concat(t?"arrow-up-dark-theme":""),style:{display:n?"block":"none"}},"\u2191"))}},{key:"buttonClick",value:function(e){this.fetchMessages()}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.137f45ce.chunk.js.map