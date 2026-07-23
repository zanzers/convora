import type { ButtonHTMLAttributes } from "react"


type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>


function Button({className="", children, ...props}: ButtonProps) {
  return (
    <button className={`
   bg-red-500 px-10 py-5 text-white rounded-xl text-xl font-bold cursor-pointer

    ${className}`}{...props}>
        {children}
    </button>
  
  )
}

export default Button
