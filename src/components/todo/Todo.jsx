import React, { Component } from 'react'
import "./Todo.css"
export default class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
  }

  toggleButtons = (status) => {
    this.setState({
      active: status
    })
  }

  handleComplete = (event) => {
    event.preventDefault();
    this.props.onComplete(this.props.id, event.target.checked)
  }

  render() {
    const classes = ["todo__container"]
    if (this.props.completed) {
      classes.push("todo__container-completed")
    }
    if (this.state.active) {
      classes.push("todo__container-active")
    }
    return (
      <div
        className={classes.join(" ")}
        onMouseEnter={() => this.toggleButtons(true)}
        onMouseLeave={() => this.toggleButtons(false)}
      >
        <input
          className='todo__checkbox'
          type="checkbox"
          checked={this.props.completed}
          onChange={this.handleComplete}
        />
        <div className="todo__container-content">
          <p>{this.props.title}</p>
        </div>
        <input
          type="checkbox"
          id="menu"
          className='todo__menu-toggle'
          onChange={(event) => this.toggleButtons(event.target.checked)}
        />
        <div className="todo__container-controls">
          <button
            className="btn todo__delete-button"
            onClick={() => this.props.onDelete(this.props.id)}
          >
            Delete
          </button>
        </div>
      </div>
    )
  }
}
