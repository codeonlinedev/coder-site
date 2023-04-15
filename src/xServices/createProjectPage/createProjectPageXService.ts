import { getAllLanguagePrograms } from "api/api"
import { GetAllLanguageProgramsResponse } from "api/typesGenerated"
import { assign, createMachine } from "xstate"

export interface CreateProjectPageContext {
  languagePrograms?: GetAllLanguageProgramsResponse[] 
  error?: unknown
}

export const createProjectPageMachine = createMachine(
  {
    id: "starterTemplate",
    schema: {
      context: {} as CreateProjectPageContext,
      services: {} as {
        gettingLanguageProgram: {
          data: any
        }
      },
    },
    tsTypes: {} as import("./createProjectPageXService.typegen").Typegen0,
    initial: "loading",
    states: {
      loading: {
        invoke: {
          src: "gettingLanguageProgram",
          onDone: {
            actions: ["assignLanguageProgram"],
            target: "idle.ok",
          },
          onError: {
            actions: ["assignError"],
            target: "idle.error",
          },
        },
      },
      idle: {
        initial: "ok",
        states: {
          ok: { type: "final" },
          error: { type: "final" },
        },
      },
    },
  },
  {
    services: {
      gettingLanguageProgram: async () => {
        const languagePrograms = await getAllLanguagePrograms()
        return languagePrograms
      },
    },
    actions: {
      assignError: assign({
        error: (_, { data }) => data,
      }),
      assignLanguageProgram: assign({
        languagePrograms: (_, { data }) => data,
      }),
    },
  },
)
