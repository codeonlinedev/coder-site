import Link from "@material-ui/core/Link"
import { FC, useState } from "react"
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
import { Pill } from "components/Pill/Pill"
import { makeStyles } from "@material-ui/core"
import LaunchIcon from '@material-ui/icons/Launch';

export const Language = {
  pageTitle: "Project",
}

export interface ProjectPageViewProps {
  project_data: Project,
  changePermission: (is_public: boolean) => void 
}

export const ProjectPageView: FC<
  React.PropsWithChildren<ProjectPageViewProps>
> = ({
  project_data,
  changePermission,
}) => {
  const styles = useStyles()
  const is_public = project_data.me ? project_data.me.is_public : project_data.owner.is_public
  const countMenber = project_data.joins?.length

  return (
    <Margins>
      <PageHeader
      >
        <PageHeaderTitle>
          <Stack direction="row" spacing={1} alignItems="center">
            <span>{project_data.desc}</span>
          </Stack>
          
          <Link
            onClick={() => {
              changePermission(!is_public)}
            }
            href="#"
          >
            <Pill
              text={is_public ? "Public" : "Private"}
              className={is_public ? styles.public : styles.private}
            />
          </Link>

        </PageHeaderTitle>
        <PageHeaderSubtitle>
          Access code: {project_data?.access_code}
        </PageHeaderSubtitle>
      </PageHeader>
      <h2 style={{marginBottom: "0px", marginTop: "0px"}}>Your Code:&nbsp;&nbsp;  
        <Link target="_blank" href={"https://codeonline.dev" + project_data.me?.code_path}>
          <LaunchIcon color="primary"/>
        </Link>
      </h2>
      <br/>
      <h2 style={{marginBottom: "0px"}}>Members {" (" + countMenber + ")"}</h2>
      <br/>
      <ProjectsTable
        usersJoined={project_data?.joins}
      />

    </Margins>
  )
}

const useStyles = makeStyles((theme) => ({
  public: {
    // backgroundColor: theme.palette.background.paperLight,
    // borderColor: theme.palette.divider,
    // marginLeft: "20px",
    backgroundColor: "#0C9A00",
    borderColor: theme.palette.info.dark,
    marginLeft: "20px",
  },
  private: {
    backgroundColor: "#CA0000",
    borderColor: theme.palette.info.dark,
    marginLeft: "20px",
  },
}))