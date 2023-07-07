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
import { CircularProgress, makeStyles } from "@material-ui/core"
import LaunchIcon from '@material-ui/icons/Launch';
import { Loader } from "components/Loader/Loader"

export const Language = {
  pageTitle: "Project",
}

export interface ProjectPageViewProps {
  project_data: Project,
  isChangingPermission: boolean
  is_public: boolean
  changePermission: (is_public: boolean) => void 
}

export const ProjectPageView: FC<
  React.PropsWithChildren<ProjectPageViewProps>
> = ({
  project_data,
  isChangingPermission,
  is_public,
  changePermission,
}) => {
  const styles = useStyles()
  const countMenber = project_data.joins?.length
  let permissionDisplay = ""
  if (isChangingPermission === true || is_public === undefined) {
    permissionDisplay = ""
  } else if (is_public === true) {
    permissionDisplay = "Public"
  } else {
    permissionDisplay= "Private"
  }
  console.log(project_data)

  return (
    <Margins>
      <PageHeader>
        <PageHeaderTitle>
          <Stack direction="row" spacing={1} alignItems="center">
            <span>{project_data.desc}</span>
          </Stack>
          
          <Link
            underline="none" 
            onClick={() => {
              changePermission(!is_public)}
            }
            href="#"
            style={{display: "flex"}}
          >
            <Pill
              text={permissionDisplay}
              icon={isChangingPermission === true ? (<CircularProgress style={{color: "white"}} size={13}/>) : ""}
              className={is_public ? styles.public : styles.private}
            />

          </Link>
          <Link 
              target="_blank" 
              underline="none" 
              style={{marginLeft: "15px", display: "flex"}}
              href={"https://test.codeonline.dev" + (project_data.me ? project_data.me?.code_path : project_data.owner.code_path)}
            >
            <LaunchIcon color="primary"/>
          </Link>

        </PageHeaderTitle>
        <PageHeaderSubtitle>
          Access code: {project_data?.access_code}
        </PageHeaderSubtitle>
      </PageHeader>
      <br/>
      <p style={{margin: "0px", fontSize: "18px"}}>Members {" (" + countMenber + ")"}</p>
      <br/>
      <ProjectsTable
        usersJoined={project_data?.joins}
      />

    </Margins>
  )
}

const useStyles = makeStyles((theme) => ({
  public: {
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