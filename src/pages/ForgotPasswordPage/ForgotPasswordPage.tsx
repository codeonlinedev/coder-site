import { Helmet } from "react-helmet-async"
import ForgotPasswordPageView from "./ForgotPasswordPageView"
import { FC } from "react"
import { sendResetPassword } from "api/api"
import { string } from "yup"
import { displayError, displaySuccess } from "components/GlobalSnackbar/utils"

const resetPassword = async (email: string) => {
  try {
    const res = await sendResetPassword(email)
    if (res) {
      displaySuccess("We have sent you a password reset link via this email.")
    }
  } catch{
    displayError("This email could not be found.")
  }

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