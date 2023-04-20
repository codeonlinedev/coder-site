
  // This file was automatically generated. Edits will be overwritten

  export interface Typegen0 {
        '@@xstate/typegen': true;
        internalEvents: {
          "done.invoke.starterProject.loading:invocation[0]": { type: "done.invoke.starterProject.loading:invocation[0]"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
"error.platform.starterProject.loading:invocation[0]": { type: "error.platform.starterProject.loading:invocation[0]"; data: unknown };
"xstate.init": { type: "xstate.init" };
        };
        invokeSrcNameMap: {
          "loadProject": "done.invoke.starterProject.loading:invocation[0]";
        };
        missingImplementations: {
          actions: never;
          delays: never;
          guards: never;
          services: never;
        };
        eventsCausingActions: {
          "assignError": "error.platform.starterProject.loading:invocation[0]";
"assignProject": "done.invoke.starterProject.loading:invocation[0]";
        };
        eventsCausingDelays: {
          
        };
        eventsCausingGuards: {
          
        };
        eventsCausingServices: {
          "loadProject": "xstate.init";
        };
        matchesStates: "idle" | "idle.error" | "idle.ok" | "loading" | { "idle"?: "error" | "ok"; };
        tags: never;
      }
  