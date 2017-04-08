import React from "react"
import Comments from "./components/comments"
import CommentForm from "./components/comment_form"

export default class Main extends React.Component {

  render() {
    return (
      <div>
        <Comments comments={this.props.comments} removeComment={this.props.removeComment} />
        <CommentForm addComment={this.props.addComment}/>
      </div>
    )
  }

}
