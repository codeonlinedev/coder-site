import { FC } from "react"
import { Navigate } from "react-router-dom"

const IndexPage: FC = () => {
  return <Navigate to="/projects" replace />
}

export default IndexPage
