import React from "react"
import Comment from "./comment"

export default class Comments extends React.Component {

  renderComment(comment, i) {
    return (
      <Comment comment={comment} key={i} />
    )
  }

  render() {
    return (
      <div className="card-deck">
        {this.props.comments.map((comment, i) => (::this.renderComment(comment, i))) }
      </div>
    )
  }

}
