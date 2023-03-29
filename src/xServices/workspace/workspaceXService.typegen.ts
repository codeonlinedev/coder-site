// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true
  internalEvents: {
    "xstate.stop": { type: "xstate.stop" }
    "done.invoke.getWorkspace": {
      type: "done.invoke.getWorkspace"
      data: unknown
      __tip: "See the XState TS docs to learn how to strongly type this."
    }
    "error.platform.getWorkspace": {
      type: "error.platform.getWorkspace"
      data: unknown
    }
    "done.invoke.getTemplate": {
      type: "done.invoke.getTemplate"
      data: unknown
      __tip: "See the XState TS docs to learn how to strongly type this."
    }
    "error.platform.getTemplate": {
      type: "error.platform.getTemplate"
      data: unknown
    }
    "done.invoke.checkPermissions": {
      type: "done.invoke.checkPermissions"
      data: unknown
      __tip: "See the XState TS docs to learn how to strongly type this."
    }
    "error.platform.checkPermissions": {
      type: "error.platform.checkPermissions"
      data: unknown
    }
    "xstate.after(2000)#workspaceState.ready.listening.error": {
      type: "xstate.after(2000)#workspaceState.ready.listening.error"
    }
    "done.invoke.workspaceState.ready.build.requestingUpdate:invocation[0]": {
      type: "done.invoke.workspaceState.ready.build.requestingUpdate:invocation[0]"
      data: unknown
      __tip: "See the XState TS docs to learn how to strongly type this."
    }
    "done.invoke.startWorkspace": {
      type: "done.invoke.startWorkspace"
      data: unknown
      __tip: "See the XState TS docs to learn how to strongly type this."
    }
    "done.invoke.stopWorkspace": {
      type: "done.invoke.stopWorkspace"
      data: unknown
      __tip: "See the XState TS docs to learn how to strongly type this."
    }
    "done.invoke.deleteWorkspace": {
      type: "done.invoke.deleteWorkspace"
      data: unknown
      __tip: "See the XState TS docs to learn how to strongly type this."
    }
    "error.platform.workspaceState.ready.build.requestingUpdate:invocation[0]": {
      type: "error.platform.workspaceState.ready.build.requestingUpdate:invocation[0]"
      data: unknown
    }
    "error.platform.startWorkspace": {
      type: "error.platform.startWorkspace"
      data: unknown
    }
    "error.platform.stopWorkspace": {
      type: "error.platform.stopWorkspace"
      data: unknown
    }
    "error.platform.deleteWorkspace": {
      type: "error.platform.deleteWorkspace"
      data: unknown
    }
    "done.invoke.cancelWorkspace": {
      type: "done.invoke.cancelWorkspace"
      data: unknown
      __tip: "See the XState TS docs to learn how to strongly type this."
    }
    "error.platform.cancelWorkspace": {
      type: "error.platform.cancelWorkspace"
      data: unknown
    }
    "done.invoke.workspaceState.ready.timeline.gettingBuilds:invocation[0]": {
      type: "done.invoke.workspaceState.ready.timeline.gettingBuilds:invocation[0]"
      data: unknown
      __tip: "See the XState TS docs to learn how to strongly type this."
    }
    "error.platform.workspaceState.ready.timeline.gettingBuilds:invocation[0]": {
      type: "error.platform.workspaceState.ready.timeline.gettingBuilds:invocation[0]"
      data: unknown
    }
    "done.invoke.workspaceState.ready.applications.gettingApplicationsHost:invocation[0]": {
      type: "done.invoke.workspaceState.ready.applications.gettingApplicationsHost:invocation[0]"
      data: unknown
      __tip: "See the XState TS docs to learn how to strongly type this."
    }
    "error.platform.workspaceState.ready.applications.gettingApplicationsHost:invocation[0]": {
      type: "error.platform.workspaceState.ready.applications.gettingApplicationsHost:invocation[0]"
      data: unknown
    }
    "xstate.init": { type: "xstate.init" }
    "done.invoke.listening": {
      type: "done.invoke.listening"
      data: unknown
      __tip: "See the XState TS docs to learn how to strongly type this."
    }
    "error.platform.listening": {
      type: "error.platform.listening"
      data: unknown
    }
  }
  invokeSrcNameMap: {
    getWorkspace: "done.invoke.getWorkspace"
    getTemplate: "done.invoke.getTemplate"
    checkPermissions: "done.invoke.checkPermissions"
    listening: "done.invoke.listening"
    updateWorkspace: "done.invoke.workspaceState.ready.build.requestingUpdate:invocation[0]"
    startWorkspace: "done.invoke.startWorkspace"
    stopWorkspace: "done.invoke.stopWorkspace"
    deleteWorkspace: "done.invoke.deleteWorkspace"
    cancelWorkspace: "done.invoke.cancelWorkspace"
    getBuilds: "done.invoke.workspaceState.ready.timeline.gettingBuilds:invocation[0]"
    getApplicationsHost: "done.invoke.workspaceState.ready.applications.gettingApplicationsHost:invocation[0]"
  }
  missingImplementations: {
    actions: never
    services: never
    guards: never
    delays: never
  }
  eventsCausingActions: {
    closeEventSource: "GET_WORKSPACE" | "xstate.stop" | "EVENT_SOURCE_ERROR"
    assignWorkspace: "done.invoke.getWorkspace"
    clearGetWorkspaceError: "done.invoke.getWorkspace"
    assignGetWorkspaceError: "error.platform.getWorkspace"
    assignTemplate: "done.invoke.getTemplate"
    clearGetTemplateWarning: "done.invoke.getTemplate"
    assignGetTemplateWarning: "error.platform.getTemplate"
    displayGetTemplateWarning: "error.platform.getTemplate"
    assignPermissions: "done.invoke.checkPermissions"
    clearGetPermissionsError: "done.invoke.checkPermissions"
    assignGetPermissionsError: "error.platform.checkPermissions"
    refreshWorkspace: "REFRESH_WORKSPACE"
    assignBuild:
      | "done.invoke.workspaceState.ready.build.requestingUpdate:invocation[0]"
      | "done.invoke.startWorkspace"
      | "done.invoke.stopWorkspace"
      | "done.invoke.deleteWorkspace"
    assignMissingParameters: "error.platform.workspaceState.ready.build.requestingUpdate:invocation[0]"
    assignBuildError:
      | "error.platform.workspaceState.ready.build.requestingUpdate:invocation[0]"
      | "error.platform.startWorkspace"
      | "error.platform.stopWorkspace"
      | "error.platform.deleteWorkspace"
    assignCancellationMessage: "done.invoke.cancelWorkspace"
    displayCancellationMessage: "done.invoke.cancelWorkspace"
    assignCancellationError: "error.platform.cancelWorkspace"
    assignBuilds: "done.invoke.workspaceState.ready.timeline.gettingBuilds:invocation[0]"
    clearGetBuildsError: "done.invoke.workspaceState.ready.timeline.gettingBuilds:invocation[0]"
    assignGetBuildsError: "error.platform.workspaceState.ready.timeline.gettingBuilds:invocation[0]"
    assignApplicationsHost: "done.invoke.workspaceState.ready.applications.gettingApplicationsHost:invocation[0]"
    displayApplicationsHostError: "error.platform.workspaceState.ready.applications.gettingApplicationsHost:invocation[0]"
    clearContext: "GET_WORKSPACE"
    initializeEventSource:
      | "done.invoke.checkPermissions"
      | "xstate.after(2000)#workspaceState.ready.listening.error"
    logWatchWorkspaceWarning: "EVENT_SOURCE_ERROR"
    clearBuildError: "UPDATE" | "START" | "STOP" | "DELETE"
    updateStatusToPending: "START" | "STOP" | "DELETE" | "CANCEL"
    clearCancellationMessage: "CANCEL"
    clearCancellationError: "CANCEL"
  }
  eventsCausingServices: {
    getWorkspace: "GET_WORKSPACE"
    getTemplate: "done.invoke.getWorkspace"
    checkPermissions: "done.invoke.getTemplate"
    listening:
      | "done.invoke.checkPermissions"
      | "xstate.after(2000)#workspaceState.ready.listening.error"
    updateWorkspace: "UPDATE"
    startWorkspace: "START"
    stopWorkspace: "STOP"
    deleteWorkspace: "DELETE"
    cancelWorkspace: "CANCEL"
    getBuilds: "done.invoke.checkPermissions" | "REFRESH_TIMELINE"
    getApplicationsHost: "done.invoke.checkPermissions"
  }
  eventsCausingGuards: {
    isMissingBuildParameterError: "error.platform.workspaceState.ready.build.requestingUpdate:invocation[0]"
    moreBuildsAvailable: "REFRESH_TIMELINE"
  }
  eventsCausingDelays: {}
  matchesStates:
    | "idle"
    | "gettingWorkspace"
    | "gettingTemplate"
    | "gettingPermissions"
    | "ready"
    | "ready.listening"
    | "ready.listening.gettingEvents"
    | "ready.listening.error"
    | "ready.build"
    | "ready.build.idle"
    | "ready.build.askingDelete"
    | "ready.build.requestingUpdate"
    | "ready.build.askingForMissedBuildParameters"
    | "ready.build.requestingStart"
    | "ready.build.requestingStop"
    | "ready.build.requestingDelete"
    | "ready.build.requestingCancel"
    | "ready.timeline"
    | "ready.timeline.gettingBuilds"
    | "ready.timeline.loadedBuilds"
    | "ready.applications"
    | "ready.applications.gettingApplicationsHost"
    | "ready.applications.error"
    | "ready.applications.success"
    | "ready.schedule"
    | "error"
    | {
        ready?:
          | "listening"
          | "build"
          | "timeline"
          | "applications"
          | "schedule"
          | {
              listening?: "gettingEvents" | "error"
              build?:
                | "idle"
                | "askingDelete"
                | "requestingUpdate"
                | "askingForMissedBuildParameters"
                | "requestingStart"
                | "requestingStop"
                | "requestingDelete"
                | "requestingCancel"
              timeline?: "gettingBuilds" | "loadedBuilds"
              applications?: "gettingApplicationsHost" | "error" | "success"
            }
      }
  tags: "loading"
}
