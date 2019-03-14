import { connect } from "react-redux"
import { Dispatch } from "redux"

import { todosOperations, todosSelectors } from "../../../states/ducks/todos"
import { StateAll } from "../../../states/ducks/types"
import component from "./component"

const mapStateToProps = (state: StateAll, ownProps: any) => {
  return {
    todos: todosSelectors.getVisibleTodos(state.todosState),
    visibilityFilter: todosSelectors.getVisibilityFilter(state.todosState),
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
)(component as any)
