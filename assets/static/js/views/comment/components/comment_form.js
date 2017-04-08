import React from "react"

export default class CommentForm extends React.Component {

  _onSubmit(e) {
    e.preventDefault()
    this.props.addComment(this.refs.user.value, this.refs.text.value)
    this.refs.commentForm.reset()
  }

  render() {
    return (
      <form onSubmit={::this._onSubmit} ref="commentForm" className="comment-form">
        <div className="form-group">
          <input className="form-control" type="text" ref="user" placeholder="Author"/>
        </div>
        <div className="form-group">
          <textarea className="form-control" type="text" ref="text" placeholder="Comment"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }

}
