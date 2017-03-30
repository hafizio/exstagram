import React from "react"
import ReactDOM from "react-dom"
import CommentApp from "../apps/comment/app"

export default Controllers["page"] = class Page {

  index() {
    ReactDOM.render(<CommentApp />, document.getElementById("comment-app"))
  }

}
