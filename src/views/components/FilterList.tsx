import React from "react"

import { VISIBILITY_FILTER } from "../../states/ducks/todos/constants"
import FiliterLink from "./FilterLink"

type Props = React.Props<{}> & {
  visibilityFilter: string
  onFilterClick: (filter: string) => void
}

const Component: React.FC<Props> = (props: Props) => {
  const { visibilityFilter, onFilterClick } = props

  const handleClick = (filter: string) => {
    onFilterClick(filter)
  }

  const getText = (filter: string) => {
    switch (filter) {
      case VISIBILITY_FILTER.SHOW_ALL:
        return "All"
      case VISIBILITY_FILTER.SHOW_ACTIVE:
        return "Active"
      case VISIBILITY_FILTER.SHOW_COMPLETED:
        return "Completed"
      default:
        return "None"
    }
  }

  return (
    <div>
      <span>Show: </span>
      {Object.values(VISIBILITY_FILTER).map(filter => (
        <FiliterLink
          key={filter}
          filter={filter}
          text={getText(filter)}
          disabled={visibilityFilter === filter}
          onClick={handleClick}
        />
      ))}
    </div>
  )
}

export default Component
