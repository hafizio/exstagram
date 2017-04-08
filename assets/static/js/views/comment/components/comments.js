import React from "react"
import Comment from "./comment"

export default class Comments extends React.Component {

  renderComment(comment, i) {
    return (
      <Comment
        key={i}
        index={i}
        comment={comment}
        removeComment={this.props.removeComment}
      />
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
