import React from 'react'; 
import TodoItem from './todo-item';

export default React.createClass({
  render: function() {
    var todos = this.props.todos.map((todo, index) => {
      
      var onClick = () => {
        this.props.onTodoClick(index);
      }
      return( 
        <TodoItem 
          task={todo.task} 
          done={todo.done} 
          onClick={onClick}
          key={index}
        /> 
      );
    });
    return(
      <div>
        {todos}
      </div>
    );
  }
}); 

/* Number of things to do: {this.props.todos.length} */