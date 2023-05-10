
  // This file was automatically generated. Edits will be overwritten

  export interface Typegen0 {
        '@@xstate/typegen': true;
        internalEvents: {
          "done.invoke.createProject": { type: "done.invoke.createProject"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
"done.invoke.starterTemplate.loading:invocation[0]": { type: "done.invoke.starterTemplate.loading:invocation[0]"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
"error.platform.createProject": { type: "error.platform.createProject"; data: unknown };
"error.platform.starterTemplate.loading:invocation[0]": { type: "error.platform.starterTemplate.loading:invocation[0]"; data: unknown };
"xstate.init": { type: "xstate.init" };
        };
        invokeSrcNameMap: {
          "createProject": "done.invoke.createProject";
"gettingLanguageProgram": "done.invoke.starterTemplate.loading:invocation[0]";
        };
        missingImplementations: {
          actions: never;
          delays: never;
          guards: never;
          services: never;
        };
        eventsCausingActions: {
          "assignCreateProjectRequest": "CREATE_PROJECT";
"assignError": "error.platform.starterTemplate.loading:invocation[0]";
"assignLanguageProgram": "done.invoke.starterTemplate.loading:invocation[0]";
        };
        eventsCausingDelays: {
          
        };
        eventsCausingGuards: {
          
        };
        eventsCausingServices: {
          "createProject": "CREATE_PROJECT";
"gettingLanguageProgram": "xstate.init";
        };
        matchesStates: "creatingProject" | "fillingParams" | "idle" | "idle.error" | "idle.ok" | "loading" | { "idle"?: "error" | "ok"; };
        tags: never;
      }
  