import type { ReactNode } from "react"


interface CardProps{
    children: ReactNode
}

function Card({children}: CardProps) {
  return (
    <div className="rouded-lg border bg-white p-6 shadow-sm">
        {children}
    </div>
  )
}

export default Card
