import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as actionCreators from "./action"
import Main from "./main"

function mapStateToProps(state) {
  return {
    comments : state.comments
  }
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

const Connector = connect(mapStateToProps, mapDispatchToProps)(Main)

export default Connector
