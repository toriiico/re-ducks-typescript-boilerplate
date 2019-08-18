import { connect } from "react-redux"
import { Dispatch } from "redux"

import { todosOperations, todosSelectors } from "../../../states/ducks/todos"
import { StateAll } from "../../../states/ducks/types"
import Component from "./Component"

const mapStateToProps = (state: StateAll, ownProps: any) => {
  return {
    todos: todosSelectors.getVisibleTodos(state),
    visibilityFilter: todosSelectors.getVisibilityFilter(state),
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: any) => {
  return {
    onTodoClick: (id: string) => {
      dispatch(todosOperations.toggleTodo(id))
    },
    addTodo: (text: string) => {
      dispatch(todosOperations.addTodo(text))
    },
    onFilterClick: (filter: string) => {
      dispatch(todosOperations.setVisibilityFilter(filter))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
