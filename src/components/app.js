import React from 'react';
import AppHeader from './app-header';
import TodoList from './todo-list.js';
import TodoInput from './todo-input.js';

export default React.createClass({
  getInitialState: function () {
    // When the page is loaded, this is loaded if the local storage is empty
    var fallback = JSON.stringify(
      [
        { task: "Learn React",       done: true }, 
        { task: "Fix my dishwasher", done: false }
      ]
    );
    return {
      // when page is refreshed, it loads what's in the local storage
      todos: JSON.parse(localStorage.getItem("todos") || fallback)
    }
  }, 
  
  // Keeps new items I've added in local storage, so it is still there when the page is refreshed
  componentDidUpdate: function (prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }, 
  
  addTodo: function(task) {
    var todo = {
      task: task, 
      done: false
    }; 
    // ... spreads it out so you have one array, rather than two nested arrays
    var todos = [
      ...this.state.todos, 
      todo
    ];
    this.setState({todos: todos});
  }, 
  
  // Toggles whether the to-do item was completed
  toggleTodo: function (index) {
    this.setState({
      todos: this.state.todos.map((el, id) => {
        if (index === id) {
          el.done = !el.done
          return el
        }
        return el
      })
    });
  },
  
  render: function () {
    return (
      <div>
        <AppHeader title="Jenn's To-Do List" tagline="Note to self: don't be so lazy"/>
        <TodoList onTodoClick={this.toggleTodo} todos={this.state.todos}/>
        <TodoInput onSubmit={this.addTodo}/>
      </div>
    );
  }
});