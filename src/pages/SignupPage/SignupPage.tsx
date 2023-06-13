import { Helmet } from "react-helmet-async"
import SignupPageView from "./SignupPageView"
import { FC } from "react"
import { signUp } from "api/api"
import { string } from "yup"

const signup = async (email: string, password: string, fullname: string) => {
  await signUp(email, password, fullname)
}

export const SignupPage: FC = () => {
  
  return (
  <>
      <Helmet>
      <title>
          {"Sign up"}
      </title>
      </Helmet>
      <SignupPageView
        signUp={signup}  
      />
  </>
  )
    
}
  
export default SignupPage