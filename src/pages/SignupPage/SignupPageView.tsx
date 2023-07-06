import { TextField, makeStyles } from "@material-ui/core"
import { CoderIcon } from "components/Icons/CoderIcon"
import { LoadingButton } from "components/LoadingButton/LoadingButton"
import { Stack } from "components/Stack/Stack"
import { FormikContextType, useFormik } from "formik"
import { FC } from "react"
import { Helmet } from "react-helmet-async"
import { getFormHelpers, onChangeTrimmed } from "util/formUtils"
import * as Yup from "yup"
export interface SignupPageViewProps {
  signUp: (email: string, password: string, fullname: string) => void
}

export const SignupPageView: FC<SignupPageViewProps> = ({
  signUp,
}) => {
  const styles = useStyles()

  const validationSchema = Yup.object({
    email: Yup.string()
      .trim()
      .email("Please enter a valid email address.")
      .required("Please enter an email address."),
    password: Yup.string()
    .required(),
    fullname: Yup.string()
    .required(),
  })

  const form= useFormik({
    initialValues: {
      email: "",
      password: "",
      fullname: "",
    },
    onSubmit: () => {
      const formValues = form.values
      signUp(formValues.email, formValues.password, formValues.fullname)
      // const words = form.values.fullname.match(/\b(\w+)\b/g);
      // for(let i=0; i<words.length; i++) {
      //   if (i === words.length-1) {
      //     ketqua+=word[i]
      //   }
      //   else {
      //     ketqua+=words[i]+" "
      //   }
      // }
      console.log(form.values)
    },
  })
  const getFieldHelpers = getFormHelpers(form)

  return (
  <div className={styles.root1}>
    <div className={styles.container}>
      <CoderIcon fill="white" opacity={1} className={styles.icon} />
      <div className={styles.root2}>
        <h1 className={styles.title}>
          Sign up to&nbsp;
          <strong>Coder</strong>
        </h1>
        <form onSubmit={form.handleSubmit}>
          <Stack>
            <TextField
              {...getFieldHelpers("email")}
              onChange={onChangeTrimmed(form)}
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              autoComplete="off"
            />
            <TextField
              {...getFieldHelpers("password")}
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              autoComplete="off"
              onChange={onChangeTrimmed(form)}
            />
            <TextField
              {...getFieldHelpers("fullname")}
              fullWidth
              label="Fullname"
              type="text"
              variant="outlined"
              autoComplete="off"
            />
            <div>
              <LoadingButton
                loading={false}
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
              >
              {/* {isSigningIn ? "" : Language.passwordSignIn} */} Sign up
              </LoadingButton>
            </div>
          </Stack>  
        </form>
      </div>
    </div>
  </div>
  )    
}

const useStyles = makeStyles((theme) => ({
  root1: {
    padding: theme.spacing(3),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    textAlign: "center",
  },
  root2: {
    width: "100%",
  },
  title: {
    fontSize: theme.spacing(4),
    fontWeight: 400,
    margin: 0,
    marginBottom: theme.spacing(4),
    lineHeight: 1,

    "& strong": {
      fontWeight: 600,
    },
  },
  icon: {
    fontSize: theme.spacing(5),
  },

  container: {
    width: "100%",
    maxWidth: 385,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(2),
  },

  // icon: {
  //   fontSize: theme.spacing(8),
  // },

  footer: {
    fontSize: 12,
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(3),
  },
}))
  
export default SignupPageView