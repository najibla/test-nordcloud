(this.webpackJsonpnordcloud=this.webpackJsonpnordcloud||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(3),r=n.n(i),o=(n(10),n(4)),s=(n(11),n(1)),l=function e(t,n){Object(s.a)(this,e),this.x=t,this.y=n},u=function e(t,n,a){Object(s.a)(this,e),this.x=t,this.y=n,this.reach=a},m=function(e){return a.createElement("div",null,a.createElement("div",{className:"section"},a.createElement("div",{className:"title"},"Stations:"),a.createElement("div",null,JSON.stringify(e.stations.map((function(e){return Object.values(e)}))))),a.createElement("div",{className:"section"},a.createElement("div",{className:"title"},"Devices"),a.createElement("div",null,JSON.stringify(e.devices.map((function(e){return Object.values(e)}))))))},d=[new u(0,0,10),new u(20,20,5),new u(10,0,12)],h=[new l(1,2),new l(100,100),new l(15,10),new l(18,18)],v=function(e,t){var n=e.reach;if(n<=0)return 0;var a=function(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}(e,t);return a>n?0:n-a},f=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(m,{stations:d,devices:h}),c.a.createElement("div",{className:"section"},c.a.createElement("div",{className:"title"},"Results:"),h.map((function(e,t){return c.a.createElement("div",{key:t},function(e,t){return Object.entries(e).length?"Best link station for device (".concat(t.x,",").concat(t.y,") is ").concat(e.x,", ").concat(e.y," with power ").concat(e.reach):"no link for device ".concat(t.x,", ").concat(t.y)}(function(e,t){var n=0;return Object(o.a)(e).reduce((function(e,a){var c=v(a,t);return c&&(e&&c>n?e=Object.assign({},a):(e=Object.assign({},a),n=c)),e}),{})}(d,e),e))}))),c.a.createElement("a",{href:"https://github.com/najibla/test-nordcloud/",target:"blank"},"View on git"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);