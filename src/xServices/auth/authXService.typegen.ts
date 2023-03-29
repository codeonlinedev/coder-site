// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true
  internalEvents: {
    "done.invoke.authState.loadingInitialAuthData:invocation[0]": {
      type: "done.invoke.authState.loadingInitialAuthData:invocation[0]"
      data: unknown
      __tip: "See the XState TS docs to learn how to strongly type this."
    }
    "done.invoke.signIn": {
      type: "done.invoke.signIn"
      data: unknown
      __tip: "See the XState TS docs to learn how to strongly type this."
    }
    "done.invoke.signOut": {
      type: "done.invoke.signOut"
      data: unknown
      __tip: "See the XState TS docs to learn how to strongly type this."
    }
    "error.platform.authState.loadingInitialAuthData:invocation[0]": {
      type: "error.platform.authState.loadingInitialAuthData:invocation[0]"
      data: unknown
    }
    "error.platform.signIn": { type: "error.platform.signIn"; data: unknown }
    "error.platform.signOut": { type: "error.platform.signOut"; data: unknown }
    "done.invoke.authState.signedIn.profile.updatingProfile:invocation[0]": {
      type: "done.invoke.authState.signedIn.profile.updatingProfile:invocation[0]"
      data: unknown
      __tip: "See the XState TS docs to learn how to strongly type this."
    }
    "error.platform.authState.signedIn.profile.updatingProfile:invocation[0]": {
      type: "error.platform.authState.signedIn.profile.updatingProfile:invocation[0]"
      data: unknown
    }
    "xstate.init": { type: "xstate.init" }
  }
  invokeSrcNameMap: {
    loadInitialAuthData: "done.invoke.authState.loadingInitialAuthData:invocation[0]"
    signIn: "done.invoke.signIn"
    updateProfile: "done.invoke.authState.signedIn.profile.updatingProfile:invocation[0]"
    signOut: "done.invoke.signOut"
  }
  missingImplementations: {
    actions: never
    services: never
    guards: never
    delays: never
  }
  eventsCausingActions: {
    assignData:
      | "done.invoke.authState.loadingInitialAuthData:invocation[0]"
      | "done.invoke.signIn"
    clearError:
      | "done.invoke.authState.loadingInitialAuthData:invocation[0]"
      | "done.invoke.signOut"
      | "SIGN_IN"
    assignError:
      | "error.platform.authState.loadingInitialAuthData:invocation[0]"
      | "error.platform.signIn"
      | "error.platform.signOut"
    updateUser: "done.invoke.authState.signedIn.profile.updatingProfile:invocation[0]"
    notifySuccessProfileUpdate: "done.invoke.authState.signedIn.profile.updatingProfile:invocation[0]"
    assignUpdateProfileError: "error.platform.authState.signedIn.profile.updatingProfile:invocation[0]"
    clearData: "done.invoke.signOut"
    redirect: "done.invoke.signOut"
    clearUpdateProfileError: "UPDATE_PROFILE"
  }
  eventsCausingServices: {
    loadInitialAuthData: "xstate.init"
    signIn: "SIGN_IN"
    updateProfile: "UPDATE_PROFILE"
    signOut: "SIGN_OUT"
  }
  eventsCausingGuards: {
    isAuthenticated: "done.invoke.authState.loadingInitialAuthData:invocation[0]"
    needSetup: "done.invoke.authState.loadingInitialAuthData:invocation[0]"
    hasRedirectUrl: "done.invoke.signOut"
  }
  eventsCausingDelays: {}
  matchesStates:
    | "loadingInitialAuthData"
    | "signedOut"
    | "signingIn"
    | "signedIn"
    | "signedIn.profile"
    | "signedIn.profile.idle"
    | "signedIn.profile.idle.noError"
    | "signedIn.profile.idle.error"
    | "signedIn.profile.updatingProfile"
    | "signingOut"
    | "configuringTheFirstUser"
    | {
        signedIn?:
          | "profile"
          | {
              profile?:
                | "idle"
                | "updatingProfile"
                | { idle?: "noError" | "error" }
            }
      }
  tags: never
}
