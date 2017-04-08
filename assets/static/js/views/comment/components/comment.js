import React from "react"

export default class Comment extends React.Component {

  _removeComment() {
    this.props.removeComment(this.props.index)
  }

  render() {
    return (
      <div className="card">
        <strong>{this.props.comment.user}</strong>
        <p>{this.props.comment.text}</p>
        <button className="remove-comment" onClick={::this._removeComment}>x</button>
      </div>
    )
  }

}
