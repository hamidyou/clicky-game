(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e){e.exports=[{id:1,src:"./images/aladdin.jpg"},{id:2,src:"./images/alice.jpg"},{id:3,src:"./images/bambi.jpg"},{id:4,src:"./images/beauty-beast.jpg"},{id:5,src:"./images/cinderella.jpg"},{id:6,src:"./images/dalmations.jpg"},{id:7,src:"./images/fantasia.jpg"},{id:8,src:"./images/fantasia2000.jpg"},{id:9,src:"./images/frozen.jpg"},{id:10,src:"./images/hunchback.jpg"},{id:11,src:"./images/lady-tramp.jpg"},{id:12,src:"./images/lilo-stitch.jpg"},{id:13,src:"./images/lion-king.jpg"},{id:14,src:"./images/mermaid.jpg"},{id:15,src:"./images/mulan.jpg"},{id:16,src:"./images/princess-frog.jpg"},{id:17,src:"./images/robin-hood.jpg"},{id:18,src:"./images/robinsons.jpg"},{id:19,src:"./images/sleeping-beauty.jpg"},{id:20,src:"./images/snow-white.jpg"},{id:21,src:"./images/tangled.jpg"},{id:22,src:"./images/tarzan.jpg"}]},18:function(e,t,a){e.exports=a(39)},23:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),i=a(3),c=a.n(i),s=(a(23),a(5)),o=a(6),l=a(9),g=a(7),m=a(10),u=(a(25),a(8)),d=(a(27),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{id:"heroDiv"},n.a.createElement(u.b,{id:"hero"}))}}]),t}(r.Component)),h=(a(31),function(e){return n.a.createElement("div",{className:"wrapper bg-dark text-light"},n.a.createElement("p",{id:"currentScore"},"Your score: ",e.currentScore),n.a.createElement("p",{id:"highScore"},"High score: ",e.highScore))}),p=(a(33),function(e){return n.a.createElement("div",null,n.a.createElement(u.a,null,n.a.createElement("section",{onClick:function(){return e.selectMovie(e.id)},id:e.id},n.a.createElement("img",{alt:"",src:e.image}))))}),j=a(11),f=(a(35),function(e){return n.a.createElement("div",{className:"nav text-light bg-dark"},n.a.createElement("h1",null,"Disney Memory"))}),b=function(e){return n.a.createElement("div",{className:"wrapper bg-light text-dark"},n.a.createElement("p",null,n.a.createElement("strong",null,"You already selected that one.  GAME OVER!")),n.a.createElement("button",{className:"btn btn-success",onClick:e.game},"Click Here to Play Again"))},v=a(4),E=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),r=e[t];e[t]=e[a],e[a]=r}return Object(v.slice)(0,12,e)},S=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(n)))).state={selected:[],currentScore:0,highScore:0,movies:E(j),game:!0},a.selectMovie=function(e){var t=a.state.selected;Object(v.includes)(e,t)?a.setState({game:!1}):a.setState({currentScore:a.state.currentScore+1,selected:Object(v.concat)(e,t),movies:E(j)})},a.restartGame=function(){a.setState({game:!0,currentScore:0,highScore:a.state.highScore,movies:E(j)})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App"},n.a.createElement(d,null),n.a.createElement(f,null),this.state.game?n.a.createElement(h,{currentScore:this.state.currentScore,highScore:Object(v.gte)(this.state.highScore,this.state.currentScore)?this.state.currentScore:this.state.highScore}):n.a.createElement(b,{game:this.restartGame}),n.a.createElement("div",{class:"grid"},this.state.movies.map(function(t){return n.a.createElement(p,{selectMovie:e.selectMovie,id:t.id,key:t.id,image:t.src})})))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(37);c.a.render(n.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.106a3255.chunk.js.map