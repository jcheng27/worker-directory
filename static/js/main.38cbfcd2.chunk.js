(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),l=(n(13),n(3)),s=n(4),i=n(6),u=n(5),m=n(7),h=(n(14),n(15),function(e){var t=e.name,n=e.email,a=e.id;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"photos",src:"https://picsum.photos/id/".concat(a,"/200/200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n),r.a.createElement("p",null,a)))}),d=function(e){var t=e.robots;return r.a.createElement("div",{className:"tc"},r.a.createElement("p",null),t.map((function(e,n){return r.a.createElement(h,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})})))},p=function(e){var t=e.dynamicSearch;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--gren bg-lightest-blue",type:"search",placeholder:"Search for User",onChange:t}))},f=function(e){return console.log(e.children),r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"}},e.children)},b=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})})),console.log("The app was mounted")}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"User Directory"),r.a.createElement(p,{dynamicSearch:this.onSearchChange}),r.a.createElement("p",null),r.a.createElement(f,null,r.a.createElement(d,{robots:t})),r.a.createElement("p",null,"Number of unfiltered users is: ",this.state.robots.length))}}]),t}(a.Component);n(16),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.38cbfcd2.chunk.js.map