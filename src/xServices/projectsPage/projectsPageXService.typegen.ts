
  // This file was automatically generated. Edits will be overwritten

  export interface Typegen0 {
        '@@xstate/typegen': true;
        internalEvents: {
          "done.invoke.starterTemplate.loading:invocation[0]": { type: "done.invoke.starterTemplate.loading:invocation[0]"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
"done.invoke.starterTemplate.onDeletingProject:invocation[0]": { type: "done.invoke.starterTemplate.onDeletingProject:invocation[0]"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
"done.invoke.starterTemplate.onJoinningProject:invocation[0]": { type: "done.invoke.starterTemplate.onJoinningProject:invocation[0]"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
"error.platform.starterTemplate.loading:invocation[0]": { type: "error.platform.starterTemplate.loading:invocation[0]"; data: unknown };
"xstate.init": { type: "xstate.init" };
        };
        invokeSrcNameMap: {
          "deleteProject": "done.invoke.starterTemplate.onDeletingProject:invocation[0]";
"joinProject": "done.invoke.starterTemplate.onJoinningProject:invocation[0]";
"loadUser": "done.invoke.starterTemplate.loading:invocation[0]";
        };
        missingImplementations: {
          actions: never;
          delays: never;
          guards: never;
          services: never;
        };
        eventsCausingActions: {
          "assignAccessCode": "JOINPROJECT";
"assignError": "error.platform.starterTemplate.loading:invocation[0]";
"assignProjectId": "DELETEPROJECT";
"assignProjectName": "done.invoke.starterTemplate.onJoinningProject:invocation[0]";
"assignUser": "done.invoke.starterTemplate.loading:invocation[0]";
        };
        eventsCausingDelays: {
          
        };
        eventsCausingGuards: {
          
        };
        eventsCausingServices: {
          "deleteProject": "DELETEPROJECT";
"joinProject": "JOINPROJECT";
"loadUser": "done.invoke.starterTemplate.onDeletingProject:invocation[0]" | "xstate.init";
        };
        matchesStates: "end" | "end.error" | "end.joined" | "end.ok" | "loading" | "onDeletingProject" | "onJoinningProject" | "waiting" | { "end"?: "error" | "joined" | "ok"; };
        tags: never;
      }
  