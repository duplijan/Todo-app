import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
    return (
      <div className='todoList'>
        <ul>
          {props.todos.map( (todo, index) => {
            return (

               <TodoItem key={index}
                        todo={todo}
                        index={index}
                        toggleTodoDone={props.toggleTodoDone}
                        removeTodo={props.removeTodo}
               />
            )
          })}
        </ul>
      </div>

    )
}

export default TodoList;
