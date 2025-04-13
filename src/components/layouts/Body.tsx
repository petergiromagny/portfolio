import { ReactNode } from "react"

const Index = (props: { children: ReactNode }) => {
  return <main className='body__container'>{props.children}</main>
}

export default Index
