import React from "react"
import { connect } from "react-redux"
import { todosOperations } from "../../states/ducks/todos"

const AddTodo = (props: any) => {
  const { dispatch } = props

  let input: any

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(todosOperations.addTodo(input.value))
          input.value = ""
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default connect()(AddTodo as any)
