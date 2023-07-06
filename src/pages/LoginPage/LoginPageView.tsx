import { makeStyles } from "@material-ui/core/styles"
import { FullScreenLoader } from "components/Loader/FullScreenLoader"
import { FC } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AuthContext, UnauthenticatedData } from "xServices/auth/authXService"
import { SignInForm } from "components/SignInForm/SignInForm"
import { retrieveRedirect } from "util/redirect"
import { CoderIcon } from "components/Icons/CoderIcon"
import { Button, Icon } from "@material-ui/core"


export interface LoginPageViewProps {
  context: AuthContext
  isLoading: boolean
  isSigningIn: boolean
  onSignIn: (credentials: { email: string; password: string }) => void
  signInWithGoogle: () => void
}

export const LoginPageView: FC<LoginPageViewProps> = ({
  context,
  isLoading,
  isSigningIn,
  onSignIn,
  signInWithGoogle,
}) => {
  const location = useLocation()
  const redirectTo = retrieveRedirect(location.search)
  const { error } = context
  const data = context.data as UnauthenticatedData
  const styles = useStyles()
  const navigate = useNavigate()

  return isLoading ? (
    <FullScreenLoader />
  ) : (
    <div className={styles.root}>
      <div className={styles.container}>
        <CoderIcon fill="white" opacity={1} className={styles.icon} />
        <SignInForm
          authMethods={data.authMethods}
          redirectTo={redirectTo}
          isSigningIn={isSigningIn}
          error={error}
          onSubmit={onSignIn}
        />
        <Link
          to="/forgot-password"
          className={styles.link}
          style={{color: "primary"}}
        >
          Forgot password?
        </Link>
        <Button
          fullWidth
          variant="outlined"
          onClick={() => {
            navigate("/signup")
          }}
        >
          Sign up
        </Button>
        <Button
          fullWidth
          variant="outlined"
          startIcon={
            <img src="/icon/google.svg"/>
          }
          onClick={signInWithGoogle}
        >
          Continue with Google
        </Button>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    textAlign: "center",
  },

  container: {
    width: "100%",
    maxWidth: 385,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(2),
  },

  icon: {
    fontSize: theme.spacing(5),
  },

  footer: {
    fontSize: 12,
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(3),
  },
  link: {
    color: "hsl(220deg 100% 71.02%)",
  },
}))
