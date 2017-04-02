import React from "react"

export default class CommentForm extends React.Component {

  _onSubmit(e) {
    e.preventDefault()
    this.props.addComment(this.refs.author.value, this.refs.comment.value)
    this.refs.commentForm.reset()
  }

  render() {
    return (
      <form onSubmit={::this._onSubmit} ref="commentForm" className="comment-form">
        <div className="form-group">
          <input className="form-control" type="text" ref="author" placeholder="author"/>
        </div>
        <div className="form-group">
          <textarea className="form-control" type="text" ref="comment" placeholder="comment"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }

}
