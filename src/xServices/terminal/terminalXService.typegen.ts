
  // This file was automatically generated. Edits will be overwritten

  export interface Typegen0 {
        '@@xstate/typegen': true;
        internalEvents: {
          "done.invoke.connect": { type: "done.invoke.connect"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
"done.invoke.getApplicationsHost": { type: "done.invoke.getApplicationsHost"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
"done.invoke.getWorkspace": { type: "done.invoke.getWorkspace"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
"done.invoke.getWorkspaceAgent": { type: "done.invoke.getWorkspaceAgent"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
"error.platform.connect": { type: "error.platform.connect"; data: unknown };
"error.platform.getApplicationsHost": { type: "error.platform.getApplicationsHost"; data: unknown };
"error.platform.getWorkspace": { type: "error.platform.getWorkspace"; data: unknown };
"error.platform.getWorkspaceAgent": { type: "error.platform.getWorkspaceAgent"; data: unknown };
"xstate.init": { type: "xstate.init" };
        };
        invokeSrcNameMap: {
          "connect": "done.invoke.connect";
"getApplicationsHost": "done.invoke.getApplicationsHost";
"getWorkspace": "done.invoke.getWorkspace";
"getWorkspaceAgent": "done.invoke.getWorkspaceAgent";
        };
        missingImplementations: {
          actions: "readMessage";
          delays: never;
          guards: never;
          services: never;
        };
        eventsCausingActions: {
          "assignApplicationsHost": "done.invoke.getApplicationsHost";
"assignConnection": "CONNECT";
"assignWebsocket": "done.invoke.connect";
"assignWebsocketError": "error.platform.connect";
"assignWorkspace": "done.invoke.getWorkspace";
"assignWorkspaceAgent": "done.invoke.getWorkspaceAgent";
"assignWorkspaceAgentError": "error.platform.getWorkspaceAgent";
"assignWorkspaceError": "error.platform.getWorkspace";
"clearApplicationsHostError": "done.invoke.getApplicationsHost";
"clearWebsocketError": "done.invoke.connect";
"clearWorkspaceAgentError": "done.invoke.getWorkspaceAgent";
"clearWorkspaceError": "done.invoke.getWorkspace";
"disconnect": "DISCONNECT";
"readMessage": "READ";
"sendMessage": "WRITE";
        };
        eventsCausingDelays: {
          
        };
        eventsCausingGuards: {
          
        };
        eventsCausingServices: {
          "connect": "done.invoke.getWorkspaceAgent";
"getApplicationsHost": "xstate.init";
"getWorkspace": "xstate.init";
"getWorkspaceAgent": "CONNECT" | "done.state.terminalState.setup";
        };
        matchesStates: "connected" | "connecting" | "disconnected" | "gettingWorkspaceAgent" | "setup" | "setup.getApplicationsHost" | "setup.getApplicationsHost.gettingApplicationsHost" | "setup.getApplicationsHost.success" | "setup.getWorkspace" | "setup.getWorkspace.gettingWorkspace" | "setup.getWorkspace.success" | { "setup"?: "getApplicationsHost" | "getWorkspace" | { "getApplicationsHost"?: "gettingApplicationsHost" | "success";
"getWorkspace"?: "gettingWorkspace" | "success"; }; };
        tags: never;
      }
  