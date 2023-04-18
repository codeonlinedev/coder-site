import { getUser } from "api/api"
import { User_2 } from "api/typesGenerated"
import { assign, createMachine } from "xstate"

export interface ProjectsPageContext {
  user_data: User_2
  user_id: string
  error?: unknown
}

export const projectsPageMachine = createMachine(
  {
    id: "starterTemplate",
    schema: {
      context: {} as ProjectsPageContext,
      services: {} as {
        loadStarterTemplate: {
          data: any
        }
      },
    },
    tsTypes: {} as import("./projectsPageXService.typegen").Typegen0,
    initial: "loading",
    states: {
      loading: {
        invoke: {
          src: "loadUser",
          onDone: {
            actions: ["assignUser"],
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
      loadUser: async ({user_id}) => {
        const user = await getUser(user_id)
        return user
      },
    },
    actions: {
      assignError: assign({
        error: (_, { data }) => data,
      }),
      assignUser: assign({
        user_data: (_, event) => event.data,
      }),
    },
  },
)
