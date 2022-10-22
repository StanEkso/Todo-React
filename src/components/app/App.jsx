import React, { PureComponent } from "react"
import Todo from '../todo/Todo';
import TodoCreateField from "../todo/TodoCreate";
import TodoInfo from '../todo/TodoStatistics';
import "../../styles.css"
import TodosNotFound from "../todo/TodosNotFound";
export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: (+new Date(2022, 8, 24)).toString(16),
          title: "React Class Components TodoList",
          completed: true,
        },
        {
          id: (+new Date(2022, 8, 24, 20, 43)).toString(16),
          title: "User can add todos with same names",
          completed: true,
        },
        {
          id: (+new Date(2022, 8, 24, 21, 47)).toString(16),
          title: "Adaptive design (button in right corner to open menu)",
          completed: true,
        },
      ]
    }
  }

  handleComplete = (id, status) => {
    const existingTodo = this.state.todos.find((todo) => todo.id === id);
    existingTodo.completed = status;
    if (existingTodo) {
      this.setState({
        todos: this.state.todos
      })
    }
  }

  handleDelete = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  handleAdd = (title) => {
    const todo = {
      title,
      completed: false,
      id: Date.now().toString(16)
    }
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  render() {
    const count = this.state.todos.length;
    const completedCount = this.state.todos.filter(({ completed }) => completed).length;
    return (
      <div className='app__container'>
        <div className="todo-list__container">
          <h1>ToDo List</h1>
          <TodoInfo
            count={count}
            completedCount={completedCount}
          />
          <TodoCreateField
            onAdd={this.handleAdd}
          />
          {this.state.todos.map(({ id, title, completed }) => (
            <Todo
              key={id}
              id={id}
              title={title}
              completed={completed}
              onComplete={this.handleComplete}
              onDelete={this.handleDelete}
            />
          ))}
          {!this.state.todos.length && <TodosNotFound />}
        </div>
      </div>
    )
  }
}
