"use strict";(self.webpackChunkplannerproject=self.webpackChunkplannerproject||[]).push([[413],{413:function(e,n,i){i.r(n),i.d(n,{default:function(){return u}});var a=i(433),t=i(890),l=i.n(t),c=i(434),s=i(689),r=i(61),o=i(184);function d(e){var n=e.value,i=e.index,a=e.state,t=e.id,l=e.dispatch,c=new Array(24).fill(0),s=new Array(12).fill(0);return(0,o.jsxs)("div",{className:"detail-location-container",children:[(0,o.jsxs)("div",{className:"detail-location-time",children:[(0,o.jsx)("select",{name:"hour",defaultValue:void 0!==a[t][i].time?a[t][i].time[0]:"",children:c.map((function(e,n){var i;return i=n<10?"0".concat(n):"".concat(n),(0,o.jsx)("option",{value:i,children:i},n)}))}),(0,o.jsx)("span",{children:":"}),(0,o.jsx)("select",{name:"minute",defaultValue:void 0!==a[t][i].time?a[t][i].time[1]:"",children:s.map((function(e,n){var i,a=5*n;return a<10?(i="0".concat(a),(0,o.jsx)("option",{value:i,children:i},n)):(0,o.jsx)("option",{value:a,children:a},n)}))}),(0,o.jsx)("span",{children:"To"}),(0,o.jsx)("select",{name:"hour",defaultValue:void 0!==a[t][i].time?a[t][i].time[2]:"",children:c.map((function(e,n){var i;return i=n<10?"0".concat(n):"".concat(n),(0,o.jsx)("option",{value:i,children:i},n)}))}),(0,o.jsx)("span",{children:":"}),(0,o.jsx)("select",{name:"minute",defaultValue:void 0!==a[t][i].time?a[t][i].time[3]:"",children:s.map((function(e,n){var i,a=5*n;return a<10?(i="0".concat(a),(0,o.jsx)("option",{value:i,children:i},n)):(0,o.jsx)("option",{value:a,children:a},n)}))})]}),(0,o.jsxs)("div",{className:"detail-location",children:[(0,o.jsx)("div",{children:(0,o.jsx)("i",{className:"ri-flag-fill"})}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:n.location}),(0,o.jsx)("li",{children:n.locationName}),(0,o.jsx)("li",{children:n.locationCategory})]}),(0,o.jsxs)("div",{className:"detail-updown-btn",children:[(0,o.jsx)("button",{className:"detail-up-btn",onClick:function(){var e=a[t].length-1;void 0===a[t][i-1]?l((0,r.nt)([t,n,a[t][e]])):l((0,r.nt)([t,n,a[t][i-1]]))},children:(0,o.jsx)("i",{className:"ri-arrow-up-s-line"})}),(0,o.jsx)("button",{className:"detail-down-btn",onClick:function(){void 0===a[t][i+1]?l((0,r.nt)([t,n,a[t][0]])):l((0,r.nt)([t,n,a[t][i+1]]))},children:(0,o.jsx)("i",{className:"ri-arrow-down-s-line"})})]})]})]})}var u=function(){var e=(0,s.UO)().id,n=(0,c.v9)((function(e){return e.days})),i=(0,c.I0)();return(0,o.jsxs)("main",{className:"detail-container",children:[(0,o.jsxs)("h3",{children:["Day ",e]}),(0,o.jsx)("button",{className:"detail-saveBtn",onClick:function(){var n=(0,a.Z)(l()(".detail-location-time")),t=(0,a.Z)(l()("select")),c=[];n.map((function(e,n){var i=[];t.map((function(e,a){if(a>=4*n&&a<4*(n+1)){var t=l()("select").eq(a).val();"string"===typeof t&&i.push(t)}})),c.push(i)})),console.log(c),i((0,r.yG)([Number(e),c])),window.alert("Save!")},children:"SAVE"}),(0,o.jsx)("div",{className:"detail-schedule-container",children:n[Number(e)].map((function(a,t){return(0,o.jsx)(d,{dispatch:i,id:Number(e),state:n,value:a,index:t},t)}))})]})}}}]);
//# sourceMappingURL=413.582678e7.chunk.js.map