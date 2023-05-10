import { getProjectbyName, putProject } from "api/api"
import { Project } from "api/typesGenerated"
import { actions, assign, createMachine } from "xstate"

export interface ProjectPageContext {
  project_data: Project
  project_name: string
  error?: unknown
  is_public: boolean
}

export const projectPageMachine = createMachine(
  {
    id: "starterProject",
    schema: {
      context: {} as ProjectPageContext,
      events: {} as
      | { type: "CHANGEPERMISSION", is_public: boolean },
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
            target: "waiting",
          },
          onError: {
            actions: ["assignError"],
            target: "idle.error",
          },
        },
      },
      waiting: {
        on: {
          CHANGEPERMISSION: {
            target: "changingPermission",
            actions: ["assignIsPublic"]
          },
        },
      },
      changingPermission: {
        invoke: {
          src: "changePermission",
          onDone: {
            target: "loading",
          },
        }
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
      loadProject: async ({project_name}) => {
        const user = await getProjectbyName(project_name)
        return user
      },
      changePermission: async ({project_data, is_public}) => {
        const response = await putProject(project_data.id, is_public)
        console.log(project_data, is_public)
        return response
      },
    },
    actions: {
      assignError: assign({
        error: (_, { data }) => data,
      }),
      assignProject: assign({
        project_data: (_, event) => event.data,
      }),
      assignIsPublic: assign({
        is_public: (_, event) => event.is_public,
      }),
    },
  },
)
