import TextField from "@material-ui/core/TextField"
import { FormikContextType, FormikTouched, useFormik } from "formik"
import { FC, useEffect } from "react"
import * as Yup from "yup"
import {
  getFormHelpers,
  nameValidator,
  onChangeTrimmed,
} from "../../util/formUtils"
import { LoadingButton } from "../LoadingButton/LoadingButton"
import { Stack } from "../Stack/Stack"
import { AlertBanner } from "components/AlertBanner/AlertBanner"

export interface AccountFormValues {
  fullname: string
}

export const Language = {
  usernameLabel: "Username",
  emailLabel: "Email",
  updateSettings: "Update settings",
}

export interface AccountFormProps {
  // editable: boolean
  email: string
  username: string
  isLoading: boolean
  onSubmit: (values: AccountFormValues) => void
  updateProfileError?: Error | unknown
  // initialTouched is only used for testing the error state of the form.
  initialTouched?: FormikTouched<AccountFormValues>
  fullname: string
}

export const AccountForm: FC<React.PropsWithChildren<AccountFormProps>> = ({
  email,
  username,
  isLoading,
  onSubmit,
  updateProfileError,
  initialTouched,
  fullname
}) => {
  const form: FormikContextType<AccountFormValues> =
    useFormik<AccountFormValues>({
      initialValues: {
        fullname: fullname
      },
      onSubmit,
      initialTouched,
    })
  return (
    <>
      <form onSubmit={form.handleSubmit}>
        <Stack>
          {Boolean(updateProfileError) && (
            <AlertBanner severity="error" error={updateProfileError} />
          )}
          <TextField
            disabled
            fullWidth
            label={Language.emailLabel}
            value={email}
            variant="outlined"
          />
          <TextField
            disabled
            fullWidth
            label={Language.usernameLabel}
            variant="outlined"
            value={username}
          />
          <TextField
            id="fullname"
            name="fullname"
            onChange={form.handleChange}
            fullWidth
            label="Fullname"
            variant="outlined"
            value={form.values.fullname}
          />

          <div>
            <LoadingButton
              loading={isLoading}
              type="submit"
              variant="contained"
            >
              {isLoading ? "" : Language.updateSettings}
            </LoadingButton>
          </div>
        </Stack>
      </form>
    </>
  )
}
