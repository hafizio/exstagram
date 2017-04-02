import React from "react"
import { Provider } from "react-redux"
import store from "./store"
import Connector from "./connector"

export default class CommentApp extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Connector />
      </Provider>
    )
  }

}
