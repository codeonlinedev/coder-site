import { useAuth } from "components/AuthProvider/AuthProvider"
import { FC } from "react"
import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"
import { Navigate, useLocation } from "react-router-dom"
import { retrieveRedirect } from "../../util/redirect"
import { LoginPageView } from "./LoginPageView"
import { useAuth_2 } from "components/AuthProvider_2/AuthProvider_2"
import { type } from "os"

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';

export const LoginPage: FC = () => {

  firebase.initializeApp({
    apiKey: "AIzaSyB7HAnr-7v1D9giLD8JYTYGYQs-fFasGiI",
    authDomain: "chat-firebase-d8938.firebaseapp.com",
    projectId: "chat-firebase-d8938",
    storageBucket: "chat-firebase-d8938.appspot.com",
    messagingSenderId: "407071322588",
    appId: "1:407071322588:web:5bde820dc63f5b4e32df19",
    measurementId: "G-DQMX3Y2C4V"
  })

  const auth = firebase.auth();

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then((res)=> {
      console.log(res)
    });
  }


  const location = useLocation()
  const [authState, authSend] = useAuth()
  // const [authState_2, authSend_2] = useAuth_2()
  // console.log(authState_2.toStrings(), authState_2.context)
  const redirectTo = retrieveRedirect(location.search)
  const commonTranslation = useTranslation("common")
  const loginPageTranslation = useTranslation("loginPage")
  
  if (authState.matches("signedIn")) {
    return <Navigate to={redirectTo} replace />
  } else if (authState.matches("configuringTheFirstUser")) {
    return <Navigate to="/setup" />
  } else {
    return (
      <>
        <Helmet>
          <title>
            {loginPageTranslation.t("signInTo")} {commonTranslation.t("coder")}
          </title>
        </Helmet>
        <LoginPageView
          context={authState.context}
          isLoading={authState.matches("loadingInitialAuthData")}
          isSigningIn={authState.matches("signingIn")}
          onSignIn={({ email, password }) => {
            authSend({ type: "SIGN_IN", email, password })
            // authSend_2({ type: "SIGN_IN"})
          }}
          signInWithGoogle={signInWithGoogle}
        />
      </>
    )
  }
}

export default LoginPage
