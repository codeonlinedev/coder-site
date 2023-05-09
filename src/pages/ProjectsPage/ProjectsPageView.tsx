import Link from "@material-ui/core/Link"
import { JoinWorkspaceResponse, User_2, Workspace } from "api/typesGenerated"
import { AlertBanner } from "components/AlertBanner/AlertBanner"
import { Maybe } from "components/Conditionals/Maybe"
import { PaginationWidgetBase } from "components/PaginationWidget/PaginationWidgetBase"
import { FC } from "react"
import { Link as RouterLink } from "react-router-dom"
import { Margins } from "../../components/Margins/Margins"
import {
  PageHeader,
  PageHeaderSubtitle,
  PageHeaderTitle,
} from "../../components/PageHeader/PageHeader"
import { SearchBarWithFilter } from "../../components/SearchBarWithFilter/SearchBarWithFilter"
import { Stack } from "../../components/Stack/Stack"
import { WorkspaceHelpTooltip } from "../../components/Tooltips"
import { WorkspacesTable } from "../../components/WorkspacesTable/WorkspacesTable"
import { workspaceFilterQuery } from "../../util/filters"

import { HorizontalForm, FormFields} from "../../components/Form/Form"
import Button from "@material-ui/core/Button"
import AddIcon from "@material-ui/icons/AddOutlined"
import { IconButton, InputAdornment, TextField, makeStyles } from "@material-ui/core"
import { useFormik } from "formik"
import { BorderAll } from "@material-ui/icons"
import { borderRadius } from "theme/constants"
import axios from "axios"
import { values } from "lodash"
import { useMe } from "hooks/useMe"
import { joinProject, getUser } from "api/api"
import { WorkspaceCard } from "../../components/WorkspaceCard/WorkspaceCard"
import { AddProjectCard, ProjectCard } from "components/ProjectCard/ProjectCard"

export const Language = {
  pageTitle: "Projects",
  yourProjectsButton: "Your projects",
  allProjectsButton: "All projects",
  runningProjectsButton: "Running projects",
  createANewWorkspace: `Create a new project from a `,
  template: "Template",
}

export interface ProjectsPageViewProps {
  user_data: User_2
  page: number
  limit: number
  onPageChange: (page: number) => void
}

export const ProjectsPageView: FC<
  React.PropsWithChildren<ProjectsPageViewProps>
> = ({
  user_data,
  page,
  limit,
  onPageChange,
}) => {
  const styles = useStyles()
  const me = useMe()

  const joinProjects = user_data?.joins
  console.log(joinProjects)
  const form = useFormik({
    initialValues: {
      access_code: '',
    },
    onSubmit: async (data) => {
      joinProject(data.access_code, me.id)
      window.location.reload(); 
    },
  })

  return (
    <Margins>
      <PageHeader
        actions={
          <HorizontalForm onSubmit={form.handleSubmit}>
            <div> 
              <TextField
                id="access_code"
                name="access_code"
                label="Access code"
                variant="outlined"
                onChange={form.handleChange}
                required
              />
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <Button type="submit" variant="contained" style={{marginTop: "8px"}} >Join Project</Button>
            </div>   
          </HorizontalForm>
          // <Button startIcon={<AddIcon />} component={RouterLink} to="create-project">Create Project</Button>

        }
      >
        <PageHeaderTitle>
          <Stack direction="row" spacing={1} alignItems="center">
            <span>{Language.pageTitle}</span>

          </Stack>
        </PageHeaderTitle>

        <PageHeaderSubtitle>
          Select a project you have joined.
        </PageHeaderSubtitle>
      </PageHeader>

      {/* <Stack>
        <Maybe condition={Boolean(error)}>
          <AlertBanner
            error={error}
            severity={
              projects !== undefined && projects.length > 0
                ? "warning"
                : "error"
            }
          />
        </Maybe>

      </Stack> */}
      
      <Stack direction="row" spacing={4}>

        <div className={styles.templates}>
          {joinProjects && joinProjects.map((project) => (
            <ProjectCard
              icon = {project.projects.languages?.icon}
              project_name= {project.projects.desc}
              owner= {project.projects.users?.username}
              project_id= {project.projects.id}
              key={project.projects.id}
            />
          ))}
          <AddProjectCard link={"create-project"} />
        </div>
      </Stack>

      {/* {count !== undefined && (
        <PaginationWidgetBase
          count={count}
          limit={limit}
          onChange={onPageChange}
          page={page}
        />
      )} */}
    </Margins>
  )
}
const useStyles = makeStyles((theme) => ({
  filter: {
    width: theme.spacing(26),
    flexShrink: 0,
  },

  filterCaption: {
    textTransform: "uppercase",
    fontWeight: 600,
    fontSize: 12,
    color: theme.palette.text.secondary,
    letterSpacing: "0.1em",
  },

  tagLink: {
    color: theme.palette.text.secondary,
    textDecoration: "none",
    fontSize: 14,
    textTransform: "capitalize",

    "&:hover": {
      color: theme.palette.text.primary,
    },
  },

  tagLinkActive: {
    color: theme.palette.text.primary,
    fontWeight: 600,
  },

  templates: {
    flex: "1",
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: theme.spacing(2),
    gridAutoRows: "min-content",
  },
}))