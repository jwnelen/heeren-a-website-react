(this["webpackJsonpheeren-a"]=this["webpackJsonpheeren-a"]||[]).push([[0],{31:function(e,t,n){e.exports=n(55)},36:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),l=n.n(o),c=(n(36),n(37),n(28)),i=n(6),s=n(2),u=n(3),d=n(5),m=n(4),p=n(7),h=n.n(p),f=n(12);function g(){return(g=Object(f.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/players").then((function(e){return e.json()})).catch((function(e){return console.log("error in api",e)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=Object(f.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/players/"+t).then((function(e){return e.json()})).catch((function(e){return console.log("error in api",e)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){return(b=Object(f.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/players/compressed").then((function(e){return e.json()})).then((function(e){for(var t={},n=0;n<e.length;n++)t[e[n].player_id]=e[n].nickname;return t})).catch((function(e){return console.log("error in api",e)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=Object(f.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/daltons").then((function(e){return e.json()})).catch((function(e){return console.log("error in api",e)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=Object(f.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=4;break}return e.abrupt("return",fetch("/api/daltons/"+t).then((function(e){return e.json()})).catch((function(e){return console.log("error in api",e)})));case 4:return(n=new Error).info={type:"Error",message:"Could not edit Dalton: "},e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(){return(D=Object(f.a)(h.a.mark((function e(t){var n,a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("dalton in api function: "+JSON.stringify(t)),e.next=3,fetch("/api/daltons",{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)});case 3:return n=e.sent,e.next=6,n;case 6:if(a=e.sent,!n.ok){e.next=11;break}return e.abrupt("return",a);case 11:return(r=new Error).info={type:"Error",message:"Could not add Dalton: "+JSON.stringify(t)},e.abrupt("return",r);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(f.a)(h.a.mark((function e(t){var n,a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("dalton deletion of "+JSON.stringify(t)),e.next=3,fetch("/api/daltons/"+t.dalton_id,{method:"DELETE",headers:{"Content-type":"application/json; charset=UTF-8"}});case 3:return n=e.sent,e.next=6,n;case 6:if(a=e.sent,!n.ok){e.next=11;break}return e.abrupt("return",a);case 11:return(r=new Error).info={type:"Error",message:"Could not delete Dalton: "+JSON.stringify(t)},e.abrupt("return",r);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return(O=Object(f.a)(h.a.mark((function e(t){var n,a,r,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("dalton in api function: "+JSON.stringify(t)),n=t.dalton_id,delete t.dalton_id,console.log("id in api: "+n),e.next=6,fetch("/api/daltons/"+n,{method:"PUT",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)});case 6:return a=e.sent,e.next=9,a;case 9:if(r=e.sent,!a.ok){e.next=14;break}return e.abrupt("return",r);case 14:return(o=new Error).info={type:"Error",message:"Could not update Dalton: "+JSON.stringify(t)},e.abrupt("return",o);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return(j=Object(f.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/posts").then((function(e){return e.json()})).catch((function(e){return console.log("error in api",e)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N={getPlayers:function(){return g.apply(this,arguments)},getPlayerById:function(e){return y.apply(this,arguments)},getDaltons:function(){return E.apply(this,arguments)},getPlayersIdAndName:function(){return b.apply(this,arguments)},addDalton:function(e){return D.apply(this,arguments)},deleteDalton:function(e){return k.apply(this,arguments)},updateDalton:function(e){return O.apply(this,arguments)},getDaltonById:function(e){return v.apply(this,arguments)},getPosts:function(){return j.apply(this,arguments)}},w=(n(39),n(15)),C=n.n(w),S=(n(23),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(e){var t=this.props,n=t.post,a=t.index;return r.a.createElement("div",{className:"m-3 no-border container-blog-post row",key:a},r.a.createElement("div",{className:"col-lg-10"},r.a.createElement("h4",{className:""},n.title),r.a.createElement("hr",null),r.a.createElement("h6",{className:" mb-2 text-muted"},C()(n.date).format("dddd DD MMMM YYYY")),r.a.createElement("hr",null),r.a.createElement("p",{style:{whiteSpace:"pre-wrap"}},n.body)))}}]),n}(a.Component)),_=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={posts:[],isLoading:!0},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;N.getPosts().then((function(t){e.setState({posts:t,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.posts.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(S,{post:e,index:t}),r.a.createElement("hr",null))}));return t?r.a.createElement("div",{className:"typewriter"},r.a.createElement("h1",{className:"App-header"},"Welcome")):r.a.createElement("div",null,r.a.createElement("div",{className:"front-image-container"},r.a.createElement("img",{src:"/background.jpg",className:"p-4",alt:"background"}),r.a.createElement("h1",null,"Heeren A ")),r.a.createElement("div",{className:"container"},n))}}]),n}(a.Component),x=n(13),M=(n(41),n(30)),L=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handleClick=function(e){a.props.onSelectCurrentDalton(a.props.dalton)},a.handleClick=a.handleClick.bind(Object(x.a)(a)),a}return Object(u.a)(n,[{key:"render",value:function(e){var t=this.props,n=t.dalton,a=t.index,o=t.players;return r.a.createElement("tr",null,r.a.createElement("td",null,a),r.a.createElement("td",null,o[n.person_earned_id]?o[n.person_earned_id]:"-"),r.a.createElement("td",null,n.reason),r.a.createElement("td",null,o[n.person_took_id]),r.a.createElement("td",null,n.date_earned?C()(n.date_earned).format("dddd DD MMMM YYYY"):""),r.a.createElement("td",null,n.date_taken?C()(n.date_taken).format("dddd DD MMMM YYYY"):""),r.a.createElement("td",null,r.a.createElement(M.a,{variant:"transparent",id:n.dalton_id,onClick:this.handleClick},r.a.createElement("svg",{width:"1.5em",height:"1.5em",viewBox:"0 0 16 16",className:"bi bi-pencil-square",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}),r.a.createElement("path",{fillRule:"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"})))))}}]),n}(a.Component),Y=(n(42),n(25)),B=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"renderRows",value:function(){var e=this,t=this.props,n=t.daltons,a=t.players,o=[];return n.forEach((function(t,n){o.push(r.a.createElement(L,{onSelectCurrentDalton:e.props.onSelectDalton,players:a,key:n,index:n,dalton:t}," "))})),o}},{key:"render",value:function(e){return r.a.createElement("div",{className:"container"},r.a.createElement(Y.a,{responsive:!0,striped:!0,bordered:!0,hover:!0,size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Verdiend"),r.a.createElement("th",null,"Reden"),r.a.createElement("th",null,"Genomen door"),r.a.createElement("th",null,"Datum verdient"),r.a.createElement("th",null,"Datum genomen"),r.a.createElement("th",null,"Edit"))),r.a.createElement("tbody",null,this.renderRows())))}}]),n}(a.Component),P=n(26),R=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).initialState={dalton_id:-1,reason:"",person_took_id:"0"},e.currentDalton.dalton_id?a.state=e.currentDalton:a.state=a.initialState,a.handleChange=a.handleChange.bind(Object(x.a)(a)),a.handleDeleteButton=a.handleDeleteButton.bind(Object(x.a)(a)),a}return Object(u.a)(n,[{key:"handleChange",value:function(e){var t=e.target.name,n=e.target.value;this.setState(Object(P.a)({},t,n))}},{key:"handleDeleteButton",value:function(e){e.preventDefault(),this.props.onSubmit(e,this.state,!0)}},{key:"render",value:function(e){var t,n=this,a=this.props,o=a.onSubmit,l=a.players,c=Object.keys(l).map((function(e){return r.a.createElement("option",{key:e,value:e},l[e])}));return t=-1===this.state.dalton_id?r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"form-control btn btn-primary",type:"submit"},"Add Dalton!")):r.a.createElement("div",{className:"row justify-content-around"},r.a.createElement("div",{className:"col-6"},r.a.createElement("button",{className:"form-control btn btn-primary",type:"submit"},"Confirm")),r.a.createElement("div",{className:"col-6"},r.a.createElement("button",{className:"form-control btn btn-danger",type:"button",onClick:this.handleDeleteButton},"Delete Dalton"))),r.a.createElement("form",{onSubmit:function(e){return o(e,n.state)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"reason"},"Reden"),r.a.createElement("input",{className:"form-control",id:"reason",name:"reason",value:this.state.reason,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"playerTook"},"Genomen door"),r.a.createElement("select",{className:"form-control",id:"playerTook",name:"person_took_id",value:this.state.person_took_id,onChange:this.handleChange},r.a.createElement("option",{value:0},"Choose..."),c)),t)}}]),n}(a.Component),A=n(27),J=n.n(A),T=(n(45),function(e){var t=e.onClickOutside,n=e.onKeyDown,a=e.modalRef,o=e.buttonRef,c=e.closeModal,i=e.onSubmit,s=e.players,u=e.currentDalton;return l.a.createPortal(r.a.createElement(J.a,null,r.a.createElement("aside",{tag:"aside",role:"dialog",tabIndex:"-1","aria-modal":"true",className:"modal-cover",onClick:t,onKeyDown:n},r.a.createElement("div",{className:"modal-area",ref:a},r.a.createElement("button",{ref:o,"aria-label":"Close Modal","aria-labelledby":"close-modal",className:"_modal-close",onClick:c},r.a.createElement("span",{id:"close-modal",className:"_hide-visual"},"Close"),r.a.createElement("svg",{className:"_modal-close-icon",viewBox:"0 0 40 40"},r.a.createElement("path",{d:"M 10,10 L 30,30 M 30,10 L 10,30"}))),r.a.createElement("div",{className:"modal-body"},r.a.createElement(R,{players:s,onSubmit:i,currentDalton:u}))))),document.body)}),W=function(e){e.triggerText;var t=e.buttonRef,n=e.showModal;return r.a.createElement("button",{className:"btn mb-4 m-2 btn-lg btn-danger center modal-button",ref:t,onClick:n},"Add Dalton")},I=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isShown:!1},e.showModal=function(){e.setState({isShown:!0},(function(){e.closeButton.focus()})),e.toggleScrollLock()},e.closeModal=function(){e.setState({isShown:!1}),e.TriggerButton.focus(),e.toggleScrollLock(),e.props.onClearDalton()},e.onKeyDown=function(t){27===t.keyCode&&e.closeModal()},e.onClickOutside=function(t){e.modal&&e.modal.contains(t.target)||e.closeModal()},e.toggleScrollLock=function(){document.querySelector("html").classList.toggle("scroll-lock")},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.onRefParent(this)}},{key:"componentWillUnmount",value:function(){this.props.onRefParent(void 0)}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(W,{showModal:this.showModal,buttonRef:function(t){return e.TriggerButton=t}}),this.state.isShown?r.a.createElement(T,{onSubmit:this.props.onSubmit,modalRef:function(t){return e.modal=t},buttonRef:function(t){return e.closeButton=t},closeModal:this.closeModal,onKeyDown:this.onKeyDown,onClickOutside:this.onClickOutside,players:this.props.players,currentDalton:this.props.currentDalton}):null)}}]),n}(a.Component),K=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handleDaltonChange=function(e){a.setState({currentDalton:e}),a.child.showModal()},a.getDaltonsData=function(){N.getDaltons().then((function(e){a.setState({daltons:e})}))},a.getPlayersData=function(){N.getPlayersIdAndName().then((function(e){a.setState({players:e,isLoading:!1})}))},a.clearDalton=function(){a.setState({currentDalton:{}})},a.onSubmit=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];e.preventDefault(e);var r=Object(x.a)(a);n?N.deleteDalton(t).then((function(e){200===e.status?(r.child.closeModal(),r.getDaltonsData(),window.alert("Dalton is deleted!")):window.alert("Could not delete dalton")})):null===t.dalton_id||-1===t.dalton_id?(delete t.dalton_id,N.addDalton(t).then((function(e){200===e.status?(r.child.closeModal(),r.getDaltonsData(),window.alert("Dalton is added!")):window.alert("Could not add dalton")}))):N.updateDalton(t).then((function(e){200===e.status?(r.child.closeModal(),r.getDaltonsData(),window.alert("Dalton is updated!")):window.alert("Could not update dalton")}))},a.state={daltons:[],players:[],currentDalton:{},isLoading:!0,errors:[]},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getDaltonsData(),this.getPlayersData()}},{key:"render",value:function(){var e=this,t=this.state,n=t.isLoading,a=t.daltons,o=t.players,l=t.currentDalton;return n?r.a.createElement("h3",{className:"mt-4"},"loading..."):r.a.createElement("div",null,r.a.createElement("h1",null,"Daltons"),r.a.createElement(I,{players:o,currentDalton:l,onRefParent:function(t){return e.child=t},onSubmit:this.onSubmit,onClearDalton:this.clearDalton}),r.a.createElement(B,{daltons:a,players:o,onSelectDalton:this.handleDaltonChange}))}}]),n}(a.Component),F=(n(46),n(47),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"rating border"},this.props.ratingSinglesEndingYear||6,r.a.createElement("span",{className:"current-rating"},this.props.ratingSingles||"0.0000"," ")),r.a.createElement("div",{className:"rating border"},this.props.ratingDoublesEndingYear||6,r.a.createElement("span",{className:"current-rating justify-content-center"},this.props.ratingDoubles||"0.0000"," ")))}}]),n}(a.Component)),H=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(e){return r.a.createElement("div",{className:"card player"},r.a.createElement("a",{href:"/players/"+this.props.player.player_id},r.a.createElement("img",{className:"card-img-top",src:"https://images2.persgroep.net/rcs/SkRGKcrJ4sDaW0oWOoBQKgW9lYA/diocontent/169326362/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8",alt:"player"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("a",{href:"/players/"+this.props.player.player_id},r.a.createElement("h3",{className:"card-title"},this.props.player.nickname||"Nickname")," "),r.a.createElement("p",{className:"card-text text-secondary mb-1 font-italic font-light"},this.props.player.name||"Name"),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement(F,{ratingSingles:this.props.player.singles_rating,ratingDoubles:this.props.player.doubles_rating,ratingSinglesEndingYear:this.props.player.singles_rating_ending_year,ratingDoublesEndingYear:this.props.player.doubles_rating_ending_year})))))}}]),n}(a.Component);n(48);function U(e){return e.players.map((function(e,t){return r.a.createElement(H,{className:"col-6",player:e,key:t})}))}var q=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(e){var t=this.props.players;return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(U,{players:t}))))}}]),n}(a.Component),z=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={playerData:[],isLoading:!0,errors:[]},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;N.getPlayers().then((function(t){t?e.setState({playerData:t,isLoading:!1}):console.log("data is undefined")}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.playerData;return t?r.a.createElement("h3",{className:"mt-4"},"loading..."):r.a.createElement("div",null,r.a.createElement("h1",null,"Team Heeren-A"),r.a.createElement(q,{players:n}))}}]),n}(a.Component),G=(n(49),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("ul",{className:"nav justify-content-center"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link active",href:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/team"},"Team")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/daltons"},"Daltons")))}}]),n}(a.Component)),Q=(n(50),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={playerData:[],amountDaltonsEarned:0,isLoading:!0,error:null},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;N.getPlayerById(t).then((function(t){console.log("data in component: "+JSON.stringify(t)),e.setState({playerData:t[0]})}))}},{key:"render",value:function(e){var t=this.state.playerData;return r.a.createElement("div",{className:"card container"},r.a.createElement("div",{className:"card-body player"},r.a.createElement("img",{className:"card-img-top",src:"https://images2.persgroep.net/rcs/SkRGKcrJ4sDaW0oWOoBQKgW9lYA/diocontent/169326362/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8",alt:"player"}),r.a.createElement("h3",{className:"card-title"},t.nickname||"Nickname"),r.a.createElement("p",{className:"card-text text-secondary mb-1 font-italic font-light"},t.name||"Name")),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement(F,{ratingSingles:t.singles_rating,ratingDoubles:t.doubles_rating,ratingSinglesEndingYear:t.singles_rating_ending_year,ratingDoublesEndingYear:t.doubles_rating_ending_year})),r.a.createElement("li",{className:"list-group-item"},"Daltons verdient: ",this.state.amountDaltonsEarned||0),r.a.createElement("li",{className:"list-group-item"},"Daltons uitgedeeld: ",this.state.playerData.amountDaltonsEarned||0," "),r.a.createElement("li",{className:"list-group-item"},"id: ",this.state.playerData.player_id," ")))}}]),n}(a.Component));var V=function(){return r.a.createElement(c.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(G,null),r.a.createElement(i.a,{exact:!0,path:"/",component:_}),r.a.createElement(i.a,{path:"/team",component:z}),r.a.createElement(i.a,{exact:!0,path:"/daltons",component:K}),r.a.createElement(i.a,{path:"/players/:id",component:Q})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(54);l.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.eb86580e.chunk.js.map