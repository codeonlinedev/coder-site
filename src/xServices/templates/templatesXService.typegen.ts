
  // This file was automatically generated. Edits will be overwritten

  export interface Typegen0 {
        '@@xstate/typegen': true;
        internalEvents: {
          "done.invoke.load": { type: "done.invoke.load"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
"error.platform.load": { type: "error.platform.load"; data: unknown };
"xstate.init": { type: "xstate.init" };
        };
        invokeSrcNameMap: {
          "load": "done.invoke.load";
        };
        missingImplementations: {
          actions: never;
          delays: never;
          guards: never;
          services: never;
        };
        eventsCausingActions: {
          "assignData": "done.invoke.load";
"assignError": "error.platform.load";
        };
        eventsCausingDelays: {
          
        };
        eventsCausingGuards: {
          
        };
        eventsCausingServices: {
          "load": "xstate.init";
        };
        matchesStates: "idle" | "loading";
        tags: never;
      }
  