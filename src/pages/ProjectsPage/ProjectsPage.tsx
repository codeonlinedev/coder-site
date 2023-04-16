import { useFilter } from "hooks/useFilter"
import { usePagination } from "hooks/usePagination"
import { FC } from "react"
import { Helmet } from "react-helmet-async"
import { workspaceFilterQuery } from "util/filters"
import { pageTitle } from "util/page"
import { useWorkspacesData, useWorkspaceUpdate } from "./data"
import { WorkspacesPageView } from "./ProjectsPageView"
import { workspacePageMachine } from "xServices/workspacePage/workspacePageXService"
import { useMachine } from "@xstate/react"
import { useMe } from "hooks/useMe"

const WorkspacesPage: FC = () => {
  const filter = useFilter(workspaceFilterQuery.me)
  const pagination = usePagination()
  const { data, error, queryKey } = useWorkspacesData({
    ...pagination,
    ...filter,
  })
  const updateWorkspace = useWorkspaceUpdate(queryKey)
  const user_id = useMe().id
  const [workspacePageState] = useMachine(workspacePageMachine, {
    context: {
      user_id,
    },
  })

  const {
    joinWorkspaces,
  } = workspacePageState.context

  return (
    <>
      <Helmet>
        <title>{pageTitle("Workspaces")}</title>
      </Helmet>

      <WorkspacesPageView
        joinWorkspaces={joinWorkspaces}
        workspaces={data?.workspaces}
        error={error}
        filter={filter.query}
        onFilter={filter.setFilter}
        count={data?.count}
        page={pagination.page}
        limit={pagination.limit}
        onPageChange={pagination.goToPage}
        onUpdateWorkspace={(workspace) => {
          updateWorkspace.mutate(workspace)
        }}
      />
    </>
  )
}

export default WorkspacesPage
