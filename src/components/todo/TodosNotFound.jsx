import React, { Component } from 'react'

export default class TodosNotFound extends Component {
  render() {
    return (
      <h4 className="todos__empty">
        You haven't got any todos.
        So you can add it.
      </h4>
    )
  }
}
