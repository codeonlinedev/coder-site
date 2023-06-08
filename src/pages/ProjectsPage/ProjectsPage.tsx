import { useFilter } from "hooks/useFilter"
import { usePagination } from "hooks/usePagination"
import { FC } from "react"
import { Helmet } from "react-helmet-async"
import { workspaceFilterQuery } from "util/filters"
import { pageTitle } from "util/page"
import { ProjectsPageView } from "./ProjectsPageView"
import { projectsPageMachine } from "xServices/projectsPage/projectsPageXService"
import { useMachine } from "@xstate/react"
import { useMe } from "hooks/useMe"

const ProjectsPage: FC = () => {
  const pagination = usePagination()
  const user_id = useMe().id
  const [projectsPageState, send] = useMachine(projectsPageMachine, {
    context: {
      user_id,
    },
  })

  const {
    user_data,
  } = projectsPageState.context

  return (
    <>
      <Helmet>
        <title>{pageTitle("Projects")}</title>
      </Helmet>

      <ProjectsPageView
        user_data={user_data}
        page={pagination.page}
        limit={pagination.limit}
        onPageChange={pagination.goToPage}
        onDeleteProject={
          (project_id) => {
            send({
              type: "DELETEPROJECT",
              project_id,
            })
          }
        }
        onJoinProject={(access_code) => {
          send({
            type: "JOINPROJECT",
            access_code,
          })
        } }
      />
    </>
  )
}

export default ProjectsPage
