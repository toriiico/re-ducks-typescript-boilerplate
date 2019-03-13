import { connect } from "react-redux"
import { Dispatch } from "redux"

import { todosOperations, todosSelectors } from "../../states/ducks/todos"
import TodoList from "../components/TodoList"

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    todos: todosSelectors.getVisibleTodos(state.todosState.todos, state.todosState.visibilityFilter),
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: any) => {
  return {
    onTodoClick: (id: string) => {
      dispatch(todosOperations.toggleTodo(id))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList as any)
