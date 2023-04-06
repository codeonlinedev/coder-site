
  // This file was automatically generated. Edits will be overwritten

  export interface Typegen0 {
        '@@xstate/typegen': true;
        internalEvents: {
          "done.invoke.canStart": { type: "done.invoke.canStart"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
"done.invoke.cancelWorkspace": { type: "done.invoke.cancelWorkspace"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
"done.invoke.checkPermissions": { type: "done.invoke.checkPermissions"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
"done.invoke.deleteWorkspace": { type: "done.invoke.deleteWorkspace"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
"done.invoke.getTemplate": { type: "done.invoke.getTemplate"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
"done.invoke.getWorkspace": { type: "done.invoke.getWorkspace"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
"done.invoke.listening": { type: "done.invoke.listening"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
"done.invoke.startWorkspace": { type: "done.invoke.startWorkspace"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
"done.invoke.stopWorkspace": { type: "done.invoke.stopWorkspace"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
"done.invoke.workspaceState.ready.applications.gettingApplicationsHost:invocation[0]": { type: "done.invoke.workspaceState.ready.applications.gettingApplicationsHost:invocation[0]"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
"done.invoke.workspaceState.ready.build.requestingUpdate:invocation[0]": { type: "done.invoke.workspaceState.ready.build.requestingUpdate:invocation[0]"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
"done.invoke.workspaceState.ready.timeline.gettingBuilds:invocation[0]": { type: "done.invoke.workspaceState.ready.timeline.gettingBuilds:invocation[0]"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
"error.platform.canStart": { type: "error.platform.canStart"; data: unknown };
"error.platform.cancelWorkspace": { type: "error.platform.cancelWorkspace"; data: unknown };
"error.platform.checkPermissions": { type: "error.platform.checkPermissions"; data: unknown };
"error.platform.deleteWorkspace": { type: "error.platform.deleteWorkspace"; data: unknown };
"error.platform.getTemplate": { type: "error.platform.getTemplate"; data: unknown };
"error.platform.getWorkspace": { type: "error.platform.getWorkspace"; data: unknown };
"error.platform.listening": { type: "error.platform.listening"; data: unknown };
"error.platform.startWorkspace": { type: "error.platform.startWorkspace"; data: unknown };
"error.platform.stopWorkspace": { type: "error.platform.stopWorkspace"; data: unknown };
"error.platform.workspaceState.ready.applications.gettingApplicationsHost:invocation[0]": { type: "error.platform.workspaceState.ready.applications.gettingApplicationsHost:invocation[0]"; data: unknown };
"error.platform.workspaceState.ready.build.requestingUpdate:invocation[0]": { type: "error.platform.workspaceState.ready.build.requestingUpdate:invocation[0]"; data: unknown };
"error.platform.workspaceState.ready.timeline.gettingBuilds:invocation[0]": { type: "error.platform.workspaceState.ready.timeline.gettingBuilds:invocation[0]"; data: unknown };
"xstate.after(2000)#workspaceState.ready.listening.error": { type: "xstate.after(2000)#workspaceState.ready.listening.error" };
"xstate.init": { type: "xstate.init" };
"xstate.stop": { type: "xstate.stop" };
        };
        invokeSrcNameMap: {
          "canStart": "done.invoke.canStart";
"cancelWorkspace": "done.invoke.cancelWorkspace";
"checkPermissions": "done.invoke.checkPermissions";
"deleteWorkspace": "done.invoke.deleteWorkspace";
"getApplicationsHost": "done.invoke.workspaceState.ready.applications.gettingApplicationsHost:invocation[0]";
"getBuilds": "done.invoke.workspaceState.ready.timeline.gettingBuilds:invocation[0]";
"getTemplate": "done.invoke.getTemplate";
"getWorkspace": "done.invoke.getWorkspace";
"listening": "done.invoke.listening";
"startWorkspace": "done.invoke.startWorkspace";
"stopWorkspace": "done.invoke.stopWorkspace";
"updateWorkspace": "done.invoke.workspaceState.ready.build.requestingUpdate:invocation[0]";
        };
        missingImplementations: {
          actions: never;
          delays: never;
          guards: never;
          services: "scheduleBannerMachine";
        };
        eventsCausingActions: {
          "assignApplicationsHost": "done.invoke.workspaceState.ready.applications.gettingApplicationsHost:invocation[0]";
"assignBuild": "done.invoke.deleteWorkspace" | "done.invoke.startWorkspace" | "done.invoke.stopWorkspace" | "done.invoke.workspaceState.ready.build.requestingUpdate:invocation[0]";
"assignBuildError": "error.platform.deleteWorkspace" | "error.platform.startWorkspace" | "error.platform.stopWorkspace" | "error.platform.workspaceState.ready.build.requestingUpdate:invocation[0]";
"assignBuilds": "done.invoke.workspaceState.ready.timeline.gettingBuilds:invocation[0]";
"assignCancellationError": "error.platform.cancelWorkspace";
"assignCancellationMessage": "done.invoke.cancelWorkspace";
"assignGetBuildsError": "error.platform.workspaceState.ready.timeline.gettingBuilds:invocation[0]";
"assignGetPermissionsError": "error.platform.checkPermissions";
"assignGetTemplateWarning": "error.platform.getTemplate";
"assignGetWorkspaceError": "error.platform.getWorkspace";
"assignMissingParameters": "error.platform.workspaceState.ready.build.requestingUpdate:invocation[0]";
"assignPermissions": "done.invoke.checkPermissions";
"assignTemplate": "done.invoke.getTemplate";
"assignWorkspace": "done.invoke.getWorkspace";
"clearBuildError": "DELETE" | "START" | "STOP" | "UPDATE" | "done.invoke.canStart";
"clearCancellationError": "CANCEL";
"clearCancellationMessage": "CANCEL";
"clearContext": "GET_WORKSPACE";
"clearGetBuildsError": "done.invoke.workspaceState.ready.timeline.gettingBuilds:invocation[0]";
"clearGetPermissionsError": "done.invoke.checkPermissions";
"clearGetTemplateWarning": "done.invoke.getTemplate";
"clearGetWorkspaceError": "done.invoke.getWorkspace";
"closeEventSource": "EVENT_SOURCE_ERROR" | "GET_WORKSPACE" | "xstate.stop";
"displayApplicationsHostError": "error.platform.workspaceState.ready.applications.gettingApplicationsHost:invocation[0]";
"displayCancellationMessage": "done.invoke.cancelWorkspace";
"displayGetTemplateWarning": "error.platform.getTemplate";
"initializeEventSource": "done.invoke.canStart" | "done.invoke.startWorkspace" | "error.platform.startWorkspace" | "xstate.after(2000)#workspaceState.ready.listening.error";
"logWatchWorkspaceWarning": "EVENT_SOURCE_ERROR";
"refreshWorkspace": "REFRESH_WORKSPACE";
"updateStatusToPending": "CANCEL" | "DELETE" | "START" | "STOP" | "done.invoke.canStart";
        };
        eventsCausingDelays: {
          
        };
        eventsCausingGuards: {
          "canStart": "done.invoke.canStart";
"isMissingBuildParameterError": "error.platform.workspaceState.ready.build.requestingUpdate:invocation[0]";
"moreBuildsAvailable": "REFRESH_TIMELINE";
        };
        eventsCausingServices: {
          "canStart": "done.invoke.checkPermissions";
"cancelWorkspace": "CANCEL";
"checkPermissions": "done.invoke.getTemplate";
"deleteWorkspace": "DELETE";
"getApplicationsHost": "done.invoke.canStart" | "done.invoke.startWorkspace" | "error.platform.startWorkspace";
"getBuilds": "REFRESH_TIMELINE" | "done.invoke.canStart" | "done.invoke.startWorkspace" | "error.platform.startWorkspace";
"getTemplate": "done.invoke.getWorkspace";
"getWorkspace": "GET_WORKSPACE";
"listening": "done.invoke.canStart" | "done.invoke.startWorkspace" | "error.platform.startWorkspace" | "xstate.after(2000)#workspaceState.ready.listening.error";
"scheduleBannerMachine": "done.invoke.canStart" | "done.invoke.startWorkspace" | "error.platform.startWorkspace";
"startWorkspace": "START" | "done.invoke.canStart";
"stopWorkspace": "STOP";
"updateWorkspace": "UPDATE";
        };
        matchesStates: "canStart" | "error" | "gettingPermissions" | "gettingTemplate" | "gettingWorkspace" | "idle" | "ready" | "ready.applications" | "ready.applications.error" | "ready.applications.gettingApplicationsHost" | "ready.applications.success" | "ready.build" | "ready.build.askingDelete" | "ready.build.askingForMissedBuildParameters" | "ready.build.idle" | "ready.build.requestingCancel" | "ready.build.requestingDelete" | "ready.build.requestingStart" | "ready.build.requestingStop" | "ready.build.requestingUpdate" | "ready.listening" | "ready.listening.error" | "ready.listening.gettingEvents" | "ready.schedule" | "ready.timeline" | "ready.timeline.gettingBuilds" | "ready.timeline.loadedBuilds" | "requestingStart" | { "ready"?: "applications" | "build" | "listening" | "schedule" | "timeline" | { "applications"?: "error" | "gettingApplicationsHost" | "success";
"build"?: "askingDelete" | "askingForMissedBuildParameters" | "idle" | "requestingCancel" | "requestingDelete" | "requestingStart" | "requestingStop" | "requestingUpdate";
"listening"?: "error" | "gettingEvents";
"timeline"?: "gettingBuilds" | "loadedBuilds"; }; };
        tags: "loading";
      }
  