
  // This file was automatically generated. Edits will be overwritten

import { User_2 } from "api/typesGenerated";

  export interface Typegen0 {
        '@@xstate/typegen': true;
        internalEvents: {
          "done.invoke.starterTemplate.loading:invocation[0]": { type: "done.invoke.starterTemplate.loading:invocation[0]"; data: User_2; __tip: "See the XState TS docs to learn how to strongly type this." };
"error.platform.starterTemplate.loading:invocation[0]": { type: "error.platform.starterTemplate.loading:invocation[0]"; data: unknown };
"xstate.init": { type: "xstate.init" };
        };
        invokeSrcNameMap: {
          "loadUser": "done.invoke.starterTemplate.loading:invocation[0]";
        };
        missingImplementations: {
          actions: never;
          delays: never;
          guards: never;
          services: never;
        };
        eventsCausingActions: {
          "assignError": "error.platform.starterTemplate.loading:invocation[0]";
"assignUser": "done.invoke.starterTemplate.loading:invocation[0]";
        };
        eventsCausingDelays: {
          
        };
        eventsCausingGuards: {
          
        };
        eventsCausingServices: {
          "loadUser": "xstate.init";
        };
        matchesStates: "idle" | "idle.error" | "idle.ok" | "loading" | { "idle"?: "error" | "ok"; };
        tags: never;
      }
  