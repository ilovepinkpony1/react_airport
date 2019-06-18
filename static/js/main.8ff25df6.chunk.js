(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(4),i=a.n(c),o=(a(16),a(5)),l=a(6),s=a(9),d=a(7),u=a(1),m=a(8),h={DEPARTURE:"departure",ARRIVAL:"arrival"},f=a(2);function g(e){var t=h.DEPARTURE,a=h.ARRIVAL;return function(r){var n={id:r.ID,terminal:r.term,airline:r.airline&&r.airline.en&&r.airline.en.name,flightNumber:r.codeShareData&&r.codeShareData[0]&&r.codeShareData[0].codeShare};switch(e){case t:return Object(f.a)({},n,{gate:r.gateNo,time:"".concat(E(r.timeDepShedule)),destination:r["airportToID.name_en"],status:"".concat(b(r.status)," ").concat(E(r.timeDepFact))});case a:return Object(f.a)({},n,{time:"".concat(E(r.timeArrShedule)),destination:r["airportFromID.name_en"],status:"".concat(b(r.status)," ").concat(E(r.timeTakeofFact))})}}}function E(e){return"string"!==typeof e?"":e.match(/\d{2}:\d{2}/)}function b(e){switch(e){case"ON":return"On time";case"LN":return"Landed";case"CX":return"Canceled";case"DP":return"Departed at";case"CK":return"Check -in";default:return"-"}}a(17);function _(e){var t=h.DEPARTURE,a=e.currRender;return n.a.createElement("thead",{className:"flights-body__head"},n.a.createElement("tr",null,n.a.createElement("th",{className:"flights-body__head-info"},"terminal"),a===t&&n.a.createElement("th",{className:"flights-body__head-info"},"gate"),n.a.createElement("th",{className:"flights-body__head-info"},"local time"),n.a.createElement("th",{className:"flights-body__head-info"},"destination"),n.a.createElement("th",{className:"flights-body__head-info"},"status"),n.a.createElement("th",{className:"flights-body__head-info"},"airline"),n.a.createElement("th",{className:"flights-body__head-info"},"flight")))}a(18);function v(e){var t=h.DEPARTURE,a=e.data,r=a.terminal,c=a.gate,i=a.time,o=a.destination,l=a.status,s=a.airline,d=a.flightNumber,u=e.currRender;return n.a.createElement("tr",{className:"flights-body__row"},n.a.createElement("td",{className:"flights-body__row-terminal"},n.a.createElement("p",null,r)),u===t&&n.a.createElement("td",{className:"flights-body__row-ggate"},c||"-"),n.a.createElement("td",{className:"flights-body__row-time"},i),n.a.createElement("td",{className:"flights-body__row-destination"},o),n.a.createElement("td",{className:"flights-body__row-status"},l),n.a.createElement("td",{className:"flights-body__row-airline"},s),n.a.createElement("td",{className:"flights-body__row-flight"},d))}function p(e){var t=e.currRender,a=e.data.map(function(e){return n.a.createElement(v,{data:e,currRender:t,key:e.id})});return n.a.createElement("div",{className:"flights-body"},n.a.createElement("table",null,n.a.createElement(_,{currRender:t}),n.a.createElement("tbody",null,a)))}a(19);function R(e){var t=h.DEPARTURE,a=h.ARRIVAL,r=e.toggler,c=e.currRender;return n.a.createElement("div",{className:"flights-buttons"},n.a.createElement("button",{className:c===t?"flights-buttons__departure active":"flights-buttons__departure",onClick:function(e){e.preventDefault(),r(t)},type:"button"},"departure"),n.a.createElement("button",{className:c===a?"flights-buttons__arrival active":"flights-buttons__arrival",onClick:function(e){e.preventDefault(),r(a)},type:"button"},"arrival"))}a(20);var y=h.DEPARTURE,N=h.ARRIVAL,D=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={depatrure:[],arrival:[],loaded:!1,currRender:y,currDate:new Date},a.toggleRender=a.toggleRender.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"toggleRender",value:function(e){var t=this.state.currRender;e===y&&t!==y&&this.setState({currRender:y}),e===N&&t!==N&&this.setState({currRender:N})}},{key:"getFlightsFromApi",value:function(){var e=this,t=function(e){var t=e.getDate().toString().padStart(2,"0"),a=(e.getMonth()+1).toString().padStart(2,"0"),r=e.getFullYear();return"".concat(t,"-").concat(a,"-").concat(r)}(this.state.currDate),a="".concat("https://api.iev.aero/api/flights/").concat(t);fetch(a).then(function(e){return e.json()}).then(function(t){var a=t.body,r=a.departure,n=a.arrival,c=r.map(g(y)),i=n.map(g(N));e.setState({departure:c,arrival:i,loaded:!0})})}},{key:"componentDidMount",value:function(){this.getFlightsFromApi()}},{key:"render",value:function(){var e=this.state,t=e.loaded,a=e.departure,r=e.arrival,c=e.currRender;return t?n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",{className:"buttons"},n.a.createElement(R,{toggler:this.toggleRender,currRender:c})),n.a.createElement(p,{currRender:c,data:c===y?a:r,changeDay:this.changeDay})):n.a.createElement("div",{className:"loader"},n.a.createElement("div",{className:"load"}))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.8ff25df6.chunk.js.map