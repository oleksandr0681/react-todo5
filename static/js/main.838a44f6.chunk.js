(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,function(t,e,n){t.exports={filterPanel:"filter-panel_filterPanel__3Cehd",filterPanel__button:"filter-panel_filterPanel__button__2754X",filterPanel__button_clicked:"filter-panel_filterPanel__button_clicked__2xU08"}},function(t,e,n){t.exports={todoItem:"todo-item_todoItem__dOybJ",todoItemDone:"todo-item_todoItemDone__1VDUG",todoItemImportant:"todo-item_todoItemImportant__1Az1t",todoItemDelete:"todo-item_todoItemDelete__2vidn",todoItem__content:"todo-item_todoItem__content__2Qp3L",todoItem__buttonGreen:"todo-item_todoItem__buttonGreen__1v3dx",todoItem__buttonRed:"todo-item_todoItem__buttonRed__1BYG_"}},,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(9),i=n.n(r),c=n(7),l=n(1),s=n(2),m=n(4),d=n(3),u=(n(14),function(){return o.a.createElement("h1",{className:"appTitle"},"ToDo App")}),p=(n(15),function(t){Object(m.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={text:""},t.onTextChange=function(e){t.setState({text:e.target.value})},t.onSearchClick=function(){t.props.onSearch(t.state.text)},t}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"search-panel"},o.a.createElement("p",{className:"search-panel__title"},"To do:"),o.a.createElement("input",{type:"text",onChange:this.onTextChange,value:this.state.text,placeholder:"search...",className:"search-panel__input"}),o.a.createElement("button",{onClick:this.onSearchClick,className:"search-panel__button"},"\u041f\u041e\u0418\u0421\u041a"))}}]),n}(a.Component)),f=n(5),h=n.n(f),_=function(t){Object(m.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={all:!0,todo:!1,important:!1},t.setAll=function(){t.setState((function(){return{all:!0,todo:!1,important:!1}})),t.props.onFilter("all")},t.setTodo=function(){t.setState((function(){return{all:!1,todo:!0,important:!1}})),t.props.onFilter("todo")},t.setImportant=function(){t.setState((function(){return{all:!1,todo:!1,important:!0}})),t.props.onFilter("important")},t}return Object(s.a)(n,[{key:"render",value:function(){var t=h.a.filterPanel__button,e=h.a.filterPanel__button,n=h.a.filterPanel__button;return this.state.all&&(t+=" ".concat(h.a.filterPanel__button_clicked)),this.state.todo&&(e+=" ".concat(h.a.filterPanel__button_clicked)),this.state.important&&(n+=" ".concat(h.a.filterPanel__button_clicked)),o.a.createElement("div",{className:h.a.filterPanel},o.a.createElement("button",{onClick:this.setAll,className:t},"all"),o.a.createElement("button",{onClick:this.setTodo,className:e},"todo"),o.a.createElement("button",{onClick:this.setImportant,className:n},"important"))}}]),n}(a.Component),b=n(6),I=n.n(b),v=function(t){Object(m.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={done:t.props.done,important:t.props.important,delete:!1,item:t.props.item},t.itemDone=function(){t.setState((function(t){return{done:!t.done}})),t.props.onDoneChange(t.props.item.id,!t.props.done)},t.setImportant=function(){t.setState((function(t){return{important:!t.important}})),t.props.onImportantChange(t.props.item.id,!t.props.important)},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props,e=t.text,n=t.onDelItem,a=I.a.todoItem;this.state.done&&(a+=" ".concat(I.a.todoItemDone)),this.state.important&&(a+=" ".concat(I.a.todoItemImportant)),this.state.delete&&(a+=" ".concat(I.a.todoItemDelete));var r=I.a.todoItem__buttonGreen,i=I.a.todoItem__buttonRed;return o.a.createElement("li",{className:a},o.a.createElement("div",{className:I.a.todoItem__content},o.a.createElement("span",{onClick:this.itemDone},e),o.a.createElement("div",null,o.a.createElement("button",{onClick:this.setImportant,className:r},"i"),o.a.createElement("button",{onClick:n,className:i},"del"))))}}]),n}(a.Component),g=(n(16),function(t){var e=t.todos,n=t.onDelItem,a=t.onChangeDone,r=t.onChangeImportant;console.log(n);var i=e.map((function(t){return o.a.createElement(v,{key:t.id,text:t.text,checked:t.checked,done:t.done,important:t.important,item:t,onDoneChange:a,onImportantChange:r,onDelItem:function(){n(t.id)}})}));return o.a.createElement("ul",{className:"todo-list"},i)}),x=(n(17),function(t){Object(m.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={text:""},t.onTextChange=function(e){console.log(e.target.value),t.setState({text:e.target.value})},t.onSubmitFunction=function(e){e.preventDefault(),t.props.onAddItem(t.state.text),t.setState({text:""})},t}return Object(s.a)(n,[{key:"render",value:function(){this.props.onAddItem,this.state.text;return o.a.createElement("form",{action:"#",onSubmit:this.onSubmitFunction},o.a.createElement("div",{className:"addItem"},o.a.createElement("div",{className:"addItem__title"},"Task"),o.a.createElement("input",{type:"text",onChange:this.onTextChange,value:this.state.text,placeholder:"What do you need to do?",className:"addItem__input"})),o.a.createElement("div",{className:"addItem__buttonDiv"},o.a.createElement("button",{type:"submit",className:"addItem__button"},"Save Item")))}}]),n}(a.Component)),E=(n(18),n(19),n(20),n.p+"static/media/react.887f90e5.png"),C=function(t){Object(m.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={todoList:[{id:1,text:"Wake up",done:!0,important:!1},{id:2,text:"Eat breakfast",done:!1,important:!1},{id:3,text:"Go to work",done:!1,important:!1}],searchText:"",filterParameter:"all"},t.delItem=function(e){t.setState((function(t){var n=t.todoList,a=n.findIndex((function(t){return e===t.id}));return{todoList:[].concat(Object(c.a)(n.slice(0,a)),Object(c.a)(n.slice(a+1)))}}))},t.addItem=function(e){console.log(e),t.setState((function(t){var n,a=t.todoList.slice(),o=-1;a.length>0&&(o=a[0].id);for(var r=0;r<a.length;r++)a[r].id>o&&(o=a[r].id);return n=-1===o?1:o+1,a.push({id:n,text:e,done:!1,important:!1}),{todoList:a}}))},t.changeDone=function(e,n){console.log("id="+e+" done="+n),t.setState((function(t){var a=t.todoList.slice(),o=a.findIndex((function(t){return e===t.id}));return a[o].done=n,console.log(a[o]),{todoList:a}}))},t.changeImportant=function(e,n){t.setState((function(t){var a=t.todoList.slice(),o=a.findIndex((function(t){return e===t.id}));return a[o].important=n,console.log(a[o]),{todoList:a}}))},t.search=function(e){console.log(e),t.setState({searchText:e})},t.todoFilter=function(e){console.log(e),t.setState({filterParameter:e})},t}return Object(s.a)(n,[{key:"render",value:function(){var t,e,n=this;return t=""===this.state.searchText?this.state.todoList.slice():this.state.todoList.filter((function(t){var e=!1;return t.text.includes(n.state.searchText)&&(e=!0),e})),e="all"===this.state.filterParameter?t:t.filter((function(t){var e=!1;return"todo"===n.state.filterParameter&&!1===t.done&&(e=!0),"important"===n.state.filterParameter&&!0===t.important&&(e=!0),e})),o.a.createElement("div",{className:"app"},o.a.createElement("div",null,o.a.createElement("img",{src:"img/react.png",alt:"react",className:"picture"}),o.a.createElement(u,null),o.a.createElement(p,{onSearch:this.search}),o.a.createElement(_,{onFilter:this.todoFilter}),o.a.createElement(g,{todos:e,onDelItem:this.delItem,onChangeDone:this.changeDone,onChangeImportant:this.changeImportant}),o.a.createElement(x,{onAddItem:this.addItem}),o.a.createElement("img",{src:E,alt:"react",className:"picture"})))}}]),n}(a.Component);i.a.render(o.a.createElement(C,null),document.querySelector("#root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.838a44f6.chunk.js.map