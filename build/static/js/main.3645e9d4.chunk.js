(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(2),r=n(4),u=n(3),o=n(5),l=n(0),i=n.n(l),s=n(7),h=n.n(s),p=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("header",null,i.a.createElement("h1",null,"Counters R Fun"))}}]),t}(i.a.Component),b=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("footer",null,"\xa9 2018 Code Fellows")}}]),t}(i.a.Component),j=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(u.a)(t).call(this,e))).handleUp=function(e){var t=n.state.count+1;n.updateCounter(t)},n.handleDown=function(e){var t=n.state.count-1;n.updateCounter(t)},n.state={count:0},n}return Object(o.a)(t,e),Object(c.a)(t,[{key:"updateCounter",value:function(e){var t="";e>0?t="positive":e<0&&(t="negative"),this.setState({count:e,polarity:t})}},{key:"render",value:function(){var e=["count",this.state.polarity].join(" ");return i.a.createElement("section",{className:"counter"},i.a.createElement("a",{href:"#",className:"down clicker",onClick:this.handleDown},"-"),i.a.createElement("span",{className:e},this.state.count),i.a.createElement("a",{href:"#",className:"up clicker",onClick:this.handleUp},"+"))}}]),t}(i.a.Component),m=(n(14),function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p,null),i.a.createElement(j,null),i.a.createElement(b,null))}}]),t}(i.a.Component)),O=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(m,null)}}]),t}(i.a.Component),f=document.getElementById("root");h.a.render(i.a.createElement(O,null),f)},8:function(e,t,n){e.exports=n(16)}},[[8,2,1]]]);
//# sourceMappingURL=main.3645e9d4.chunk.js.map