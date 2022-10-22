import React, { PureComponent } from 'react'

export default class TodoInfo extends PureComponent {
  render() {
    return (
      <div className="todo__statistics">
        <p>
          Count: {this.props.count}
        </p>
        <p>
          Completed: {this.props.completedCount}
        </p>
        <p>
          Left: {this.props.count - this.props.completedCount}
        </p>
      </div>
    )
  }
}
