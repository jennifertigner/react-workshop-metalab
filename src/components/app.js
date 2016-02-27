import React from 'react';
import AppHeader from './app-header';
import TodoList from './todo-list.js';
import TodoInput from './todo-input.js';

export default React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          task: "Learn React", 
          done: true
        }, 
        {
          task: "Fix my dishwasher", 
          done: false
        }
      ]
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
  
  render: function () {
    return (
      <div>
        <AppHeader title="Jenn's To-Do List" tagline="Note to self: don't be so lazy"/>
        <TodoList todos={this.state.todos}/>
        <TodoInput onSubmit={this.addTodo}/>
      </div>
    );
  }
});