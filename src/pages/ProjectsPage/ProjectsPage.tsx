import { useFilter } from "hooks/useFilter"
import { usePagination } from "hooks/usePagination"
import { FC } from "react"
import { Helmet } from "react-helmet-async"
import { workspaceFilterQuery } from "util/filters"
import { pageTitle } from "util/page"
import { useWorkspacesData, useWorkspaceUpdate } from "./data"
import { ProjectsPageView } from "./ProjectsPageView"
import { projectsPageMachine } from "xServices/projectsPage/projectsPageXService"
import { useMachine } from "@xstate/react"
import { useMe } from "hooks/useMe"

const ProjectsPage: FC = () => {
  const pagination = usePagination()
  const user_id = useMe().id
  const [projectsPageState] = useMachine(projectsPageMachine, {
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
      />
    </>
  )
}

export default ProjectsPage
