import { connect } from "react-redux"
import { Dispatch } from "redux"

import { StateAll } from "../../states/ducks/types"
import Component from "./Component"

const mapStateToProps = (state: StateAll, ownProps: any) => {
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
)(Component)
