import React from "react"

export default class Comment extends React.Component {

  render() {
    return (
      <div className="card">
        <strong>{this.props.comment.author}</strong>
        <p>{this.props.comment.text}</p>
        <small>x</small>
      </div>
    )
  }

}
