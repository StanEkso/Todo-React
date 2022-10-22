import React, { PureComponent } from 'react'
import "./TodoCreate.css"
export default class TodoCreate extends PureComponent {
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

  handleAddTodo = (e) => {
    e.preventDefault()
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
        {this.state.error &&
          <div className="todo__errors">
            {this.state.error}
          </div>
        }
        <div className="todo__create">
          <form onSubmit={this.handleAddTodo}>

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
              type="submit"
            >
              Add
            </button>
          </form>
        </div>
      </>
    )
  }
}
