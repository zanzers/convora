import type { ReactNode } from "react"


interface CardProps{
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}

function Card({children, className = "", onClick}: CardProps) {
  return (
    <div className= {`rouded-lg border border-slate-200 bg-white p-6 shadow-sm ${className}`}
      onClick={onClick}
    >
        {children}
    </div>
  )
}

export default Card
