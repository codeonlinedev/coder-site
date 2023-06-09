// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true
  internalEvents: {
    "done.invoke.getWorkspace": {
      type: "done.invoke.getWorkspace"
      data: unknown
      __tip: "See the XState TS docs to learn how to strongly type this."
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
    "error.platform.startWorkspace": {
      type: "error.platform.startWorkspace"
      data: unknown
    }
    "done.invoke.startWorkspace": {
      type: "done.invoke.startWorkspace"
      data: unknown
      __tip: "See the XState TS docs to learn how to strongly type this."
    }
    "xstate.after(5000)#workspaceItemMachine.updateVersion.waitingToBeUpdated": {
      type: "xstate.after(5000)#workspaceItemMachine.updateVersion.waitingToBeUpdated"
    }
    "xstate.init": { type: "xstate.init" }
    "error.platform.getWorkspace": {
      type: "error.platform.getWorkspace"
      data: unknown
    }
  }
  invokeSrcNameMap: {
    getTemplate: "done.invoke.getTemplate"
    startWorkspace: "done.invoke.startWorkspace"
    getWorkspace: "done.invoke.getWorkspace"
  }
  missingImplementations: {
    actions: never
    services: never
    guards: never
    delays: never
  }
  eventsCausingActions: {
    assignPendingStatus: "UPDATE_VERSION"
    displayUpdatingVersionMessage: "UPDATE_VERSION"
    assignUpdatedData: "UPDATE_DATA" | "done.invoke.getWorkspace"
    assignUpdatedTemplate: "done.invoke.getTemplate"
    displayUpdateVersionError:
      | "error.platform.getTemplate"
      | "error.platform.startWorkspace"
    assignLatestBuild: "done.invoke.startWorkspace"
    displayUpdatedSuccessMessage: "done.invoke.getWorkspace"
  }
  eventsCausingServices: {
    getTemplate: "UPDATE_VERSION"
    startWorkspace: "done.invoke.getTemplate"
    getWorkspace: "xstate.after(5000)#workspaceItemMachine.updateVersion.waitingToBeUpdated"
  }
  eventsCausingGuards: {
    isOutdated: "done.invoke.getWorkspace"
  }
  eventsCausingDelays: {}
  matchesStates:
    | "updateVersion"
    | "updateVersion.idle"
    | "updateVersion.gettingUpdatedTemplate"
    | "updateVersion.restartingWorkspace"
    | "updateVersion.waitingToBeUpdated"
    | "updateVersion.gettingUpdatedWorkspaceData"
    | {
        updateVersion?:
          | "idle"
          | "gettingUpdatedTemplate"
          | "restartingWorkspace"
          | "waitingToBeUpdated"
          | "gettingUpdatedWorkspaceData"
      }
  tags: never
}
export interface Typegen1 {
  "@@xstate/typegen": true
  internalEvents: {
    "done.invoke.getWorkspaces": {
      type: "done.invoke.getWorkspaces"
      data: unknown
      __tip: "See the XState TS docs to learn how to strongly type this."
    }
    "error.platform.getWorkspaces": {
      type: "error.platform.getWorkspaces"
      data: unknown
    }
    "done.invoke.updateWorkspaceRefs": {
      type: "done.invoke.updateWorkspaceRefs"
      data: unknown
      __tip: "See the XState TS docs to learn how to strongly type this."
    }
    "xstate.after(5000)#workspacesState.waitToRefreshWorkspaces": {
      type: "xstate.after(5000)#workspacesState.waitToRefreshWorkspaces"
    }
    "xstate.init": { type: "xstate.init" }
    "": { type: "" }
    "error.platform.updateWorkspaceRefs": {
      type: "error.platform.updateWorkspaceRefs"
      data: unknown
    }
  }
  invokeSrcNameMap: {
    getWorkspaces: "done.invoke.getWorkspaces"
    updateWorkspaceRefs: "done.invoke.updateWorkspaceRefs"
  }
  missingImplementations: {
    actions: "updateURL"
    services: never
    guards: never
    delays: never
  }
  eventsCausingActions: {
    triggerUpdateVersion: "UPDATE_VERSION"
    updateURL: "UPDATE_PAGE"
    assignFilter: "UPDATE_FILTER"
    sendResetPage: "UPDATE_FILTER"
    assignWorkspaceRefs: "done.invoke.getWorkspaces"
    assignCount: "done.invoke.getWorkspaces"
    assignGetWorkspacesError: "error.platform.getWorkspaces"
    assignUpdatedWorkspaceRefs: "done.invoke.updateWorkspaceRefs"
    assignPaginationRef: "UPDATE_PAGE" | "xstate.init"
    clearGetWorkspacesError:
      | "UPDATE_PAGE"
      | ""
      | "xstate.after(5000)#workspacesState.waitToRefreshWorkspaces"
  }
  eventsCausingServices: {
    getWorkspaces:
      | "UPDATE_PAGE"
      | ""
      | "xstate.after(5000)#workspacesState.waitToRefreshWorkspaces"
    updateWorkspaceRefs: "done.invoke.getWorkspaces"
  }
  eventsCausingGuards: {
    isEmpty: "done.invoke.getWorkspaces"
  }
  eventsCausingDelays: {}
  matchesStates:
    | "startingPagination"
    | "gettingWorkspaces"
    | "updatingWorkspaceRefs"
    | "waitToRefreshWorkspaces"
  tags: never
}
