import React from "react"

interface Props extends React.Props<{}> {
  visibilityFilter: string
  onFilterClick: (filter: string) => void
}

const Fcomponent: React.FC<Props> = (props: Props) => {
  const { visibilityFilter, onFilterClick } = props

  const FilterLink = (filter: string, text: string) => {
    if (visibilityFilter === filter) {
      return <button disabled={true}>{text}</button>
    }

    return (
      <button
        onClick={(e: any) => {
          e.preventDefault()
          onFilterClick(filter)
        }}
      >
        {text}
      </button>
    )
  }

  return (
    <div>
      <span>Show: </span>
      {FilterLink("SHOW_ALL", "All")}
      {FilterLink("SHOW_ACTIVE", "Active")}
      {FilterLink("SHOW_COMPLETED", "Completed")}
    </div>
  )
}

export default Fcomponent
