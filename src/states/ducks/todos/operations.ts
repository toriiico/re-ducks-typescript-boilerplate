import actions from "./actions"

const addTodo = (text: string) => actions.addTodo(text)

const setVisibilityFilter = (filter: string) => actions.setVisibilityFilter(filter)

const toggleTodo = (id: string) => actions.toggleTodo(id)

export default {
  addTodo,
  setVisibilityFilter,
  toggleTodo,
}
