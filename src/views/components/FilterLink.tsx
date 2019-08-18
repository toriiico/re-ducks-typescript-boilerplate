import React from "react"

type Props = React.Props<{}> & {
  filter: string
  text: string
  disabled: boolean
  onClick: (filter: string, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Component: React.FC<Props> = props => {
  const { filter, text, disabled, onClick } = props

  if (disabled) {
    return <button disabled={true}>{text}</button>
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    onClick(filter, e)
  }

  return <button onClick={handleClick}>{text}</button>
}

export default Component
