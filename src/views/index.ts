import { connect } from "react-redux"
import { Dispatch } from "redux"

import component from "./component"

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    // TODO: add 'app' ducks state and get title
    title: "Header Title",
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: any) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(component as any)
