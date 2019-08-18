import React from "react"

type Props = React.Props<{}> & {
  addTodo: (value: string) => void
}

const Component: React.FC<Props> = (props: Props) => {
  const { addTodo } = props

  const inputEl = React.useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!inputEl) {
      return
    }

    addTodo(inputEl.current!.value)
    inputEl.current!.value = ""
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={inputEl} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default Component
