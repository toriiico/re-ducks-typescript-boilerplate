import * as React from "react"

interface MainProps {
  active: boolean
  children: JSX.Element
  onClick: Function
}

const Link: React.FC<MainProps> = (props: MainProps) => {
  const { active, children, onClick } = props

  if (active) {
    return <span>{children}</span>
  }

  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </a>
  )
}

export default Link
