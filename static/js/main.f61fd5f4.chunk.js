(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,o){e.exports=o(18)},16:function(e,t,o){},18:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),l=o(4),d=o.n(l),s=(o(16),o(9)),c=o(2),i=o(5),r=o(6),u=o(8),m=o(7),h=o(10),b=o(1),T=function(e){return a.a.createElement("div",{className:"newTodo"},a.a.createElement("form",{onSubmit:e.handleSubmit},a.a.createElement("label",{htmlFor:"new-todo"},"What is needed to be done?"),a.a.createElement("br",null),a.a.createElement("input",{id:"new-todo",onChange:e.handleChange,value:e.newTodo,type:"text",placeholder:"new todo..."}),a.a.createElement("button",{type:"submit",className:"addTodo_button"},"Add Todo!")))},v=function(e){return a.a.createElement("div",{className:"buttons_group"},a.a.createElement("button",{onClick:e.selectAllTodos},"Select All"),a.a.createElement("button",{onClick:e.unselectAllTodos},"UnSelect All"),a.a.createElement("button",{onClick:e.deleteAllTodos},"Delete All"))},g=function(e){var t=e.todo,o=e.index;return a.a.createElement("div",{className:"todoItem",key:t},a.a.createElement("input",{type:"checkbox",onChange:function(t){return e.toggleTodoDone(t,o)},checked:t.done})," ",a.a.createElement("span",{className:t.done?"done":""}," ",t.title," "),a.a.createElement("button",{className:"delete_button",onClick:function(){return e.removeTodo(o)}},"Remove"))},f=function(e){var t=e.todos,o=t.length?t.map(function(t,o){return a.a.createElement(g,{key:o,todo:t,index:o,toggleTodoDone:e.toggleTodoDone,removeTodo:e.removeTodo})}):a.a.createElement("div",{className:"message"},a.a.createElement("h3",null," Not Posts Yet!"));return a.a.createElement("div",{className:"todoList"},o)},E=function(e){function t(e){var o;return Object(i.a)(this,t),(o=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={newTodo:"",todos:[{title:"Learn React",done:!1},{title:"Create Todo App",done:!1}]},o.handleChange=o.handleChange.bind(Object(b.a)(Object(b.a)(o))),o.handleSubmit=o.handleSubmit.bind(Object(b.a)(Object(b.a)(o))),o.toggleTodoDone=o.toggleTodoDone.bind(Object(b.a)(Object(b.a)(o))),o.removeTodo=o.removeTodo.bind(Object(b.a)(Object(b.a)(o))),o.selectAllTodos=o.selectAllTodos.bind(Object(b.a)(Object(b.a)(o))),o.unselectAllTodos=o.unselectAllTodos.bind(Object(b.a)(Object(b.a)(o))),o.deleteAllTodos=o.deleteAllTodos.bind(Object(b.a)(Object(b.a)(o))),o}return Object(h.a)(t,e),Object(r.a)(t,[{key:"handleChange",value:function(e){this.setState({newTodo:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.state.newTodo&&this.setState({newTodo:"",todos:Object(c.a)(this.state.todos).concat([{title:this.state.newTodo,done:!1}])})}},{key:"toggleTodoDone",value:function(e,t){var o=Object(c.a)(this.state.todos);o[t]=Object(s.a)({},o[t],{done:e.target.checked}),this.setState({todos:o})}},{key:"removeTodo",value:function(e){var t=Object(c.a)(this.state.todos);t.splice(e,1),this.setState({todos:t})}},{key:"deleteAllTodos",value:function(){this.setState({todos:[]})}},{key:"selectAllTodos",value:function(){var e=this.state.todos.map(function(e){return{title:e.title,done:!0}});this.setState({todos:e})}},{key:"unselectAllTodos",value:function(){var e=this.state.todos.map(function(e){return{title:e.title,done:!1}});this.setState({todos:e})}},{key:"render",value:function(){return a.a.createElement("div",{className:"TodoApp"},a.a.createElement("h1",{className:"todo_heading"},"TODO'S"),a.a.createElement(T,{handleChange:this.handleChange,handleSubmit:this.handleSubmit,newTodo:this.state.newTodo}),a.a.createElement(f,{todos:this.state.todos,toggleTodoDone:this.toggleTodoDone,removeTodo:this.removeTodo}),a.a.createElement(v,{selectAllTodos:this.selectAllTodos,unselectAllTodos:this.unselectAllTodos,deleteAllTodos:this.deleteAllTodos}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));d.a.render(a.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.f61fd5f4.chunk.js.map