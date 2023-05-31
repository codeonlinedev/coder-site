import { User_2 } from "api/typesGenerated"
import { useAuth } from "components/AuthProvider/AuthProvider"
import { isAuthenticated } from "xServices/auth/authXService"

export const useMeV2 = (): User_2|undefined => {
  const [authState] = useAuth()
  const { userV2 } = authState.context

  return userV2 

}
