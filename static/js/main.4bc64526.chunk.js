(this.webpackJsonpexcerciese3=this.webpackJsonpexcerciese3||[]).push([[0],[,,,,,,function(e,t,n){},,function(e,t,n){e.exports=n.p+"static/media/kbc.cd5df429.png"},function(e,t,n){e.exports=n.p+"static/media/good_luck.bdbc7ea6.gif"},function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(7),r=n.n(i),s=n(1),c=n(2),u=n(4),l=n(3),p=n(8),d=n.n(p),m=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"row justify-content-center bg-primary"},a.a.createElement("div",{className:"col-auto py-2"},a.a.createElement("img",{src:d.a,alt:"logo",width:"100px"})),a.a.createElement("div",{className:"col-auto py-3"},a.a.createElement("h1",{className:"font-weight-bold title"},"Kon Banega karodpati")))}}]),n}(o.Component),h=n(9),v=n.n(h),b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"col-1"},a.a.createElement("img",{src:v.a,alt:"Best of luck",width:"80px"}))}}]),n}(o.Component),g=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"row footer bg-secondary py-2"},a.a.createElement(b,null),a.a.createElement(b,null),a.a.createElement(b,null),a.a.createElement(b,null),a.a.createElement("div",{className:"col-4 text-center py-2"},a.a.createElement("h1",{className:"text-danger"},"Best of Luck")),a.a.createElement(b,null),a.a.createElement(b,null),a.a.createElement(b,null),a.a.createElement(b,null))}}]),n}(o.Component),_=(n(6),[{type:"radio",question_id:1,Question:"The language spoken by the people by Pakistan is ?",Options:[{option_id:1,option:"Hindi"},{option_id:2,option:"Palauan"},{option_id:3,option:"Sindhi"},{option_id:4,option:"Nauruan"}],Answer:"Sindhi"},{type:"text",question_id:2,Question:"The World Largest desert is ?",Options:[{option_id:1,option:"Thar"},{option_id:2,option:"Kalahari"},{option_id:3,option:"Sahara"},{option_id:4,option:"Sonoran"}],Answer:"Sahara"},{type:"range",question_id:3,Question:"How much increment you are expecting in your salary this year ?",Options:[{option_id:1,option:10},{option_id:2,option:25},{option_id:3,option:70},{option_id:4,option:85}],Answer:""},{type:"radio",question_id:4,Question:"The metal whose salts are sensitive to light is ?",Options:[{option_id:1,option:"Zinc"},{option_id:2,option:"Silver"},{option_id:3,option:"Copper"},{option_id:4,option:"Aluminium"}],Answer:"Silver"},{type:"text",question_id:5,Question:"10 + 20 - 6 * 5 = ?",Options:[{option_id:1,option:"0"},{option_id:2,option:"25"},{option_id:3,option:"18"},{option_id:4,option:"20"}],Answer:"0"},{type:"text",question_id:6,Question:"The Central Rice Research Station is situated in ?",Options:[{option_id:1,option:"Chennai"},{option_id:2,option:"Cuttack"},{option_id:3,option:"Bangalore"},{option_id:4,option:"Quilon"}],Answer:"Cuttack"},{type:"select",question_id:7,Question:"What is your Zodic sign ?",Options:[{option_id:1,option:"Aquarius"},{option_id:2,option:"Pisces"},{option_id:3,option:"Aries"},{option_id:4,option:"Taurus"},{option_id:5,option:"Gemini"},{option_id:6,option:"Cancer"},{option_id:7,option:"leo"},{option_id:8,option:"Virgo"},{option_id:9,option:"Libra"},{option_id:10,option:"Scorpio"},{option_id:11,option:"Sagittarius"},{option_id:12,option:"Capricorn"}],Answer:""},{type:"radio",question_id:8,Question:"What is the capital of India ?",Options:[{option_id:1,option:"Bombay"},{option_id:2,option:"Delhi"},{option_id:3,option:"Ahmedabad"},{option_id:4,option:"Kolkata"}],Answer:"Delhi"},{type:"range",question_id:9,Question:"How much you are interested in front-end ?",Options:[{option_id:1,option:25},{option_id:2,option:50},{option_id:3,option:75},{option_id:4,option:100}],Answer:""},{type:"radio",question_id:10,Question:"Which one is your Favourite car ?",Options:[{option_id:1,option:"Audi"},{option_id:2,option:"Mercedes"},{option_id:3,option:"Bugatti"},{option_id:4,option:"scoda"},{option_id:5,option:"farrari"},{option_id:6,option:"lamborghini"},{option_id:7,option:"rolls royce"},{option_id:8,option:"Other"}],Answer:"Audi"}]),w=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e;switch(console.log(this.props.status),this.props.type){case"radio":e="Please choose any option";break;case"select":e="Please select Answer";break;case"text":e="Please Enter Answer";break;case"range":e="Please choose answer"}return"valid"===this.props.status?a.a.createElement("div",{className:"mt-4 d-none"},a.a.createElement("h6",{className:"text-danger font-weight-bold"},e)):a.a.createElement("div",{className:"mt-4"},a.a.createElement("h6",{className:"text-danger font-weight-bold"},e))}}]),n}(o.Component),A=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.props.currentAnswer,n=this.props.question_object.Options.map((function(n){var o=n.option_id;return a.a.createElement("div",{className:"col-6",key:n.option_id},a.a.createElement("input",{type:"text",name:"kbc_option",value:t[o],id:o,className:"form-control my-2",onChange:e.props.textAnswer}))}));return a.a.createElement(a.a.Fragment,null,a.a.createElement("h4",{key:this.props.question_object.question_id},a.a.createElement("span",{className:"mx-1"},"Q.",this.props.active_index+1),this.props.question_object.Question),a.a.createElement("div",{className:"row my-4"},n),a.a.createElement(w,{status:this.props.validationWarning,type:"text"}))}}]),n}(o.Component),E=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.props.currentAnswer,n=this.props.question_object.Options.map((function(n){var o=n.option_id;return a.a.createElement("div",{className:"col-6",key:o},a.a.createElement("input",{type:"radio",name:"kbc_option",id:o,key:e.props.question_object.Options.option_id,value:e.props.question_object.Options.option,onChange:e.props.radioAnswer,checked:t[o]}),a.a.createElement("label",{htmlFor:o,className:"font-weight-bold mx-1"},n.option))}));return a.a.createElement(a.a.Fragment,null,a.a.createElement("h4",{key:this.props.question_object.question_id},a.a.createElement("span",{className:"mx-1"},"Q.",this.props.active_index+1),this.props.question_object.Question),a.a.createElement("div",{className:"row my-4"},n),a.a.createElement(w,{status:this.props.validationWarning,type:"radio"}))}}]),n}(o.Component),y=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={range_value:0},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.props.question_object.Options.map((function(t){var n=t.option_id;return a.a.createElement("div",{className:"col",key:n},a.a.createElement("input",{type:"range",id:n,min:1,max:100,step:1,value:t.option,name:"kbc_option",onChange:function(t){e.setState({range_value:t.target.value}),e.props.rangeAnswer(t)},className:"form-control"}),a.a.createElement("label",{htmlFor:n},t.option+"%"))}));return a.a.createElement(a.a.Fragment,null,a.a.createElement("h4",{key:this.props.question_object.question_id},a.a.createElement("span",{className:"mx-1"},"Q.",this.props.active_index+1),this.props.question_object.Question),a.a.createElement("div",{className:"row my-4"},a.a.createElement("div",{className:"col"},t)),a.a.createElement(w,{status:this.props.validationWarning,type:"range"}))}}]),n}(o.Component),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.currentAnswer,t=this.props.question_object.Options.map((function(t){var n=t.option_id;return a.a.createElement("option",{key:n,id:n,value:t.option,selected:e[n]},t.option)}));return a.a.createElement(a.a.Fragment,null,a.a.createElement("h4",{key:this.props.question_object.question_id},a.a.createElement("span",{className:"mx-1"},"Q.",this.props.active_index+1),this.props.question_object.Question),a.a.createElement("div",{className:"row my-4"},a.a.createElement("div",{className:"col-6"},a.a.createElement("select",{className:"form-control",onChange:this.props.selectAnswer},t))),a.a.createElement(w,{status:this.props.validationWarning,type:"select"}))}}]),n}(o.Component),k=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement("button",{className:"btn btn-success my-5",onClick:this.props.operation},this.props.button_usage)}}]),n}(o.Component),C=[{backgroundColor:"#F0F8FF"},{backgroundColor:"#FAEBD7"},{backgroundColor:"#00FFFF"},{backgroundColor:"#7FFFD4"},{backgroundColor:"#FFEBCD"},{backgroundColor:"#7FFF00"},{backgroundColor:"#00FFFF"},{backgroundColor:"#FF7F50"},{backgroundColor:"#9932CC"},{backgroundColor:"#FF8C00"},{backgroundColor:"#9932CC"},{backgroundColor:"#E9967A"},{backgroundColor:"#9400D3"},{backgroundColor:"#FF1493"},{backgroundColor:"#696969"},{backgroundColor:"#FFFAF0"},{backgroundColor:"#FFD700"},{backgroundColor:"#ADFF2F"},{backgroundColor:"#F0FFF0"},{backgroundColor:"#7CFC00"},{backgroundColor:"#D3D3D3"},{backgroundColor:"#87CEFA"},{backgroundColor:"#F5DEB3"},{backgroundColor:"#00FF7F"},{backgroundColor:"#87CEEB"},{backgroundColor:"#C0C0C0"},{backgroundColor:"#FFC0CB"},{backgroundColor:"#40E0D0"},{backgroundColor:"#FF4500"},{backgroundColor:"#C71585"},{backgroundColor:"#FAF0E6"},{backgroundColor:"#FFF0F5"}],Q=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={colors:C,timer:1},e.changeColors=function(){e.state.colors[0]!==e.state.colors[0]&&e.setState({colors:C})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;setInterval(this.changeColors(),1e3);var t=["H","A","V","E","","A","","G","O","O","D","","D","A","Y"].map((function(t){return a.a.createElement("div",{className:"text-center",style:e.state.colors[Math.floor(Math.random()*C.length)]},a.a.createElement("span",{className:"py-3 h4 px-4 font-weight-bold"},t))}));return a.a.createElement("div",{className:"row justify-content-center my-5"},a.a.createElement("div",{className:"col-8"},a.a.createElement("div",{className:"h2 text-center text-success"},"Participation Completed",a.a.createElement("span",{className:"text-dark"},"\u2714")),a.a.createElement("div",null,a.a.createElement("div",{className:"row my-5"},t))))}}]),n}(o.Component),j=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).userAnswers=[],e.activeAnswer={},e.state={currentQuestion:0,submited:!1,activeQuestionAnswer:{},validationWarning:"valid",finished:!1,showFinishMessage:!1},e.previousQuestion=function(){e.setState({finished:!1}),e.setState({validationWarning:"valid"}),e.state.currentQuestion>0&&e.setState({currentQuestion:e.state.currentQuestion-1})},e.nextQuestion=function(){if(0===Object.keys(e.activeAnswer).length&&!e.userAnswers[e.state.currentQuestion])return e.setState({validationWarning:"invalid"}),!1;e.userAnswers[e.state.currentQuestion]&&(e.state.currentQuestion>-1&&e.userAnswers.splice(e.state.currentQuestion,1),e.userAnswers.splice(e.state.currentQuestion,0,e.state.activeQuestionAnswer)),e.activeAnswer={},e.userAnswers.push(e.state.activeQuestionAnswer),e.setState({activeQuestionAnswer:{}}),console.log(e.userAnswers),e.state.currentQuestion===_.length-2&&e.setState({finished:!0}),e.state.currentQuestion<_.length-1&&e.setState({currentQuestion:e.state.currentQuestion+1})},e.textAnswer=function(t){console.log("hello World"),e.setState({validationWarning:"valid"});var n=t.target.id.toString(),o=t.target.value;""!==o.trim()&&(e.activeAnswer.q_id=_[e.state.currentQuestion].question_id,e.activeAnswer[n]=o.trim(),e.setState({activeQuestionAnswer:e.activeAnswer}))},e.selectAnswer=function(t){e.setState({validationWarning:"valid"}),e.activeAnswer={},e.setState({activeQuestionAnswer:{}});var n=t.target.options[t.target.selectedIndex].id.toString();e.activeAnswer.q_id=_[e.state.currentQuestion].question_id,e.activeAnswer[n]=!0,e.setState({activeQuestionAnswer:e.activeAnswer})},e.radioAnswer=function(t){e.setState({validationWarning:"valid"}),e.activeAnswer={},e.setState({activeQuestionAnswer:{}});var n=t.target.id.toString();e.activeAnswer.q_id=_[e.state.currentQuestion].question_id,e.activeAnswer[n]=!0,e.setState({activeQuestionAnswer:e.activeAnswer})},e.rangeAnswer=function(t){e.setState({validationWarning:"valid"}),e.activeAnswer={},e.setState({activeQuestionAnswer:{}});var n=t.target.value;e.activeAnswer.q_id=_[e.state.currentQuestion].question_id,e.activeAnswer.option_id=n,e.setState({activeQuestionAnswer:e.activeAnswer})},e}return Object(c.a)(n,[{key:"componentDidUpdate",value:function(e,t){if(console.log(t),t.currentQuestion!==this.state.currentQuestion&&this.userAnswers[this.state.currentQuestion]){var n=this.userAnswers[this.state.currentQuestion];this.setState({activeQuestionAnswer:n})}}},{key:"render",value:function(){var e=this,t="",n=a.a.createElement(k,{button_usage:"Finish",operation:function(){return e.setState({showFinishMessage:!0})}});switch(_[this.state.currentQuestion].type){case"text":t=a.a.createElement(A,{active_index:this.state.currentQuestion,textAnswer:this.textAnswer,currentAnswer:this.state.activeQuestionAnswer,question_object:_[this.state.currentQuestion],validationWarning:this.state.validationWarning});break;case"radio":t=a.a.createElement(E,{active_index:this.state.currentQuestion,radioAnswer:this.radioAnswer,currentAnswer:this.state.activeQuestionAnswer,question_object:_[this.state.currentQuestion],validationWarning:this.state.validationWarning});break;case"range":t=a.a.createElement(y,{active_index:this.state.currentQuestion,rangeAnswer:this.rangeAnswer,currentAnswer:this.state.activeQuestionAnswer,question_object:_[this.state.currentQuestion],validationWarning:this.state.validationWarning});break;case"select":t=a.a.createElement(f,{active_index:this.state.currentQuestion,selectAnswer:this.selectAnswer,currentAnswer:this.state.activeQuestionAnswer,question_object:_[this.state.currentQuestion],validationWarning:this.state.validationWarning});break;default:t=a.a.createElement(E,{active_index:this.state.currentQuestion,currentAnswer:this.state.activeQuestionAnswer,question_object:_[this.state.currentQuestion],validationWarning:this.validationWarning})}return this.state.showFinishMessage?a.a.createElement(Q,null):a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"row justify-content-center my-4"},a.a.createElement("div",{className:"col-1 py-5"},a.a.createElement(k,{operation:this.previousQuestion,button_usage:"Previous"})),a.a.createElement("div",{className:"col-6 border border-dark my-2"},t),a.a.createElement("div",{className:"col-1 py-5"},a.a.createElement(k,{operation:this.nextQuestion,button_usage:"Next"}),e.state.finished?n:null)))}}]),n}(o.Component),F=(n(15),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(m,null),a.a.createElement(j,null),a.a.createElement(g,null))}}]),n}(o.Component));r.a.render(a.a.createElement(F,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.4bc64526.chunk.js.map