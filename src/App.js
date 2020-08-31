import React from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: [],
    };
  }

  addNewListItem = (itemName, cb) => {
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false,
    };
    this.setState({ ...this.state, todo: [...this.state.todo, newItem] });
    if (cb) {
      cb();
    }
  };

  clearCompleted = (cb) => {
    this.setState({
      ...this.state,
      todo: this.state.todo.filter((item) => {
        return !item.completed;
      }),
    });
    if (cb) {
      cb();
    }
  };

  toggleCompleted = (itemID) => {
    this.setState({
      ...this.state,
      todo: this.state.todo.map((item) => {
        if (item.id !== itemID) {
          return item;
        } else {
          return { ...item, completed: !item.completed };
        }
      }),
    });
  };

  render() {
    return (
      <div>
        <h1>Todo</h1>
        <TodoForm
          onSubmit={this.addNewListItem}
          onClear={this.clearCompleted}
        />
        <TodoList
          todoList={this.state.todo}
          toggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default App;