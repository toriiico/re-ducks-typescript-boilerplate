import { connect } from "react-redux"
import { Dispatch } from "redux"

import { StateAll } from "../states/ducks/types"
import component from "./component"

// NOTE: If you want to have the title as the state of the app, it is recommended to add 'app' ducks.
const mapStateToProps = (state: StateAll, ownProps: any) => {
  return {
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
