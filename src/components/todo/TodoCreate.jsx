import React, { Component } from 'react'
import "./TodoCreate.css"
export default class TodoCreate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      error: ""
    }
  }
  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      error: ""
    })
  }

  handleAddTodo = () => {
    if (!this.state.title.trim()) {
      this.setState({
        error: "Todo title mustn't be empty!"
      })
      return;
    }
    this.props.onAdd(this.state.title);
    this.setState({
      title: ""
    })
  }

  render() {
    return (
      <>
        { this.state.error && 
        <div className="todo__errors">
          { this.state.error }
        </div>
        }
        <div className="todo__create">
          <input
            type="text"
            name='title'
            value={this.state.title}
            className='field todo__create-field'
            placeholder='Your todo title here.'
            onChange={this.handleInputChange}
            required
          />
          <button
            className='btn'
            onClick={this.handleAddTodo}
          >
            Add
          </button>
        </div>
      </>
    )
  }
}
