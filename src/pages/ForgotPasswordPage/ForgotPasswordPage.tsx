import { Helmet } from "react-helmet-async"
import ForgotPasswordPageView from "./ForgotPasswordPageView"
import { FC } from "react"
import { sendResetPassword } from "api/api"
import { string } from "yup"

const resetPassword = async (email: string) => {
  await sendResetPassword(email)
}

export const ForgotPasswordPage: FC = () => {
  
  return (
  <>
      <Helmet>
      <title>
          {"Recover password"}
      </title>
      </Helmet>
      <ForgotPasswordPageView
        sendResetPassword={resetPassword}  
      />
  </>
  )
    
}
  
export default ForgotPasswordPage