import { FC, useEffect, useState } from "react"
import { Section } from "../../../components/SettingsLayout/Section"
import { AccountForm } from "../../../components/SettingsAccountForm/SettingsAccountForm"
import { useAuth } from "components/AuthProvider/AuthProvider"
import { useMe } from "hooks/useMe"
import { getUser } from "api/api"
import { LoadingButton } from "components/LoadingButton/LoadingButton"
import { tr } from "date-fns/locale"
import { FullScreenLoader } from "components/Loader/FullScreenLoader"
import { useMe_2 } from "hooks/useMe_2"
// import { usePermissions } from "hooks/usePermissions"

export const Language = {
  title: "Account",
}

export const AccountPage: FC = () => {
  const [authState, authSend] = useAuth()
  const me = useMe()
  const me_2 = useMe_2()
  const { updateProfileError } = authState.context


    return (
      <Section title={Language.title} description="Update your account info">
        <AccountForm
          email={me.email}
          username={me.username}
          updateProfileError={updateProfileError}
          isLoading={authState.matches("signedIn.profile.updatingProfile")}
          fullname={me_2.fullname}
          onSubmit={(data) => {
            authSend({
              type: "UPDATE_PROFILE_V2",
              data
            })
          }}
        />
      </Section>
    )
  
  // return (<FullScreenLoader />)
}

export default AccountPage
