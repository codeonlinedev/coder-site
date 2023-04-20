import Link from "@material-ui/core/Link"
import { FC } from "react"
import { Link as RouterLink } from "react-router-dom"
import { Margins } from "../../components/Margins/Margins"
import {
  PageHeader,
  PageHeaderSubtitle,
  PageHeaderTitle,
} from "../../components/PageHeader/PageHeader"
import { Stack } from "../../components/Stack/Stack"
import { WorkspaceHelpTooltip } from "../../components/Tooltips"
import Button from "@material-ui/core/Button"
import AddIcon from "@material-ui/icons/AddOutlined"
import { ProjectsTable } from "components/ProjectTable/ProjectTable"
import { Project, UsersJoined } from "api/typesGenerated"

export const Language = {
  pageTitle: "Project",
}

export interface ProjectPageViewProps {
  project_data?: Project,
}

export const ProjectPageView: FC<
  React.PropsWithChildren<ProjectPageViewProps>
> = ({
  project_data,
}) => {

  return (
    <Margins>
      <PageHeader
      >
        <PageHeaderTitle>
          <Stack direction="row" spacing={1} alignItems="center">
            <span>{project_data?.desc}</span>
          </Stack>
        </PageHeaderTitle>
        <PageHeaderSubtitle>
          Access code: {project_data?.access_code}
        </PageHeaderSubtitle>
      </PageHeader>
      <h2>Members</h2>
      <br/>
      <ProjectsTable
        usersJoined={project_data?.joins}
      />

    </Margins>
  )
}
