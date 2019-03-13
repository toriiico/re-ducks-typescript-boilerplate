import CONSTANTS from "./constants"

// TODO: todos の model作成
const getVisibleTodos = (todos: any, filter: string) => {
  switch (filter) {
    case CONSTANTS.SHOW_ALL:
      return todos
    case CONSTANTS.SHOW_COMPLETED:
      return todos.filter((t: any) => t.completed)
    case CONSTANTS.SHOW_ACTIVE:
      return todos.filter((t: any) => !t.completed)
    default:
      throw new Error(`Unknown filter: ${filter}`)
  }
}

export default {
  getVisibleTodos,
}
