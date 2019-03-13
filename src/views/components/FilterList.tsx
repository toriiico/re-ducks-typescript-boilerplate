import React from "react"

interface Props extends React.Props<{}> {
  visibilityFilter: string
  onFilterClick: (filter: string) => void
}

const Fcomponent: React.FC<Props> = (props: Props) => {
  const { visibilityFilter, onFilterClick } = props

  const FilterLink = (filter: string, text: string) => {
    if (visibilityFilter === filter) {
      return <span>{text}</span>
    }

    return (
      <a
        href="#"
        onClick={e => {
          e.preventDefault()
          onFilterClick(filter)
        }}
      >
        {text}
      </a>
    )
  }

  return (
    <p>
      Show: {FilterLink("SHOW_ALL", "All")}
      {", "}
      {FilterLink("SHOW_ACTIVE", "Active")}
      {", "}
      {FilterLink("SHOW_COMPLETED", "Completed")}
    </p>
  )
}

export default Fcomponent
