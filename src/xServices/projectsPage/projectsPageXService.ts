import { getUser, joinProject } from "api/api"
import { User_2 } from "api/typesGenerated"
import { assign, createMachine } from "xstate"

export interface ProjectsPageContext {
  user_data: User_2
  user_id: string
  error?: unknown
  access_code: string
}

export const projectsPageMachine = createMachine(
  {
    id: "starterTemplate",
    schema: {
      context: {} as ProjectsPageContext,
      events: {} as
          | { type: "JOINPROJECT", access_code: string },
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
            target: "waiting",
          },
          onError: {
            actions: ["assignError"],
            target: "end.error",
          },
        },
      },
      waiting: {
        on: {
          JOINPROJECT: {
            target: "onJoinningProject",
            actions: ["assignAccessCode"]
          },
        },
      },
      onJoinningProject: {
        invoke: {
          src: "joinProject",
          onDone: {
            target: "loading",
          },
        }
      },
      end: {
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
      joinProject: async ({access_code, user_id}) => {
        const response = await joinProject(access_code, user_id)
        return response
      }
    },
    actions: {
      assignError: assign({
        error: (_, { data }) => data,
      }),
      assignUser: assign({
        user_data: (_, event) => event.data,
      }),
      assignAccessCode: assign({
        access_code: (_, event) => event.access_code,
      }),
    },
  },
)
