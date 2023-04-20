import { getProject } from "api/api"
import { Project } from "api/typesGenerated"
import { assign, createMachine } from "xstate"

export interface ProjectPageContext {
  project_data: Project
  project_id: string
  error?: unknown
}

export const projectPageMachine = createMachine(
  {
    id: "starterProject",
    schema: {
      context: {} as ProjectPageContext,
      services: {} as {
        loadStarterTemplate: {
          data: any
        }
      },
    },
    tsTypes: {} as import("./projectPageXService.typegen").Typegen0,
    initial: "loading",
    states: {
      loading: {
        invoke: {
          src: "loadProject",
          onDone: {
            actions: ["assignProject"],
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
      loadProject: async ({project_id}) => {
        const user = await getProject(project_id)
        return user
      },
    },
    actions: {
      assignError: assign({
        error: (_, { data }) => data,
      }),
      assignProject: assign({
        project_data: (_, event) => event.data,
      }),
    },
  },
)
