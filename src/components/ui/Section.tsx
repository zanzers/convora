import type { ReactNode } from "react"



interface SectionProps{
    children: ReactNode
}



function Section({children} : SectionProps) {
  return (
    <section className="py-20">
        {children}
    </section>
  )
}

export default Section
