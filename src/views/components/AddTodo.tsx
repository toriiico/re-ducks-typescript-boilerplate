import React from "react"

interface Props extends React.Props<{}> {
  addTodo: (value: any) => void
}

const Fcomponent: React.FC<Props> = (props: Props) => {
  const { addTodo } = props

  let input: HTMLInputElement | null

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input) {
            return
          }

          addTodo(input.value)
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

export default Fcomponent
