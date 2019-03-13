import { connect } from "react-redux"
import { Dispatch } from "redux"
import { todosOperations } from "../../states/ducks/todos"
import Link from "../components/Link"

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    active: ownProps.filter === state.visibilityFilter,
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: any) => {
  return {
    onClick: () => {
      dispatch(todosOperations.setVisibilityFilter(ownProps.filter))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link as any)
