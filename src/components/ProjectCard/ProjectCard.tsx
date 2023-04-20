import { makeStyles } from "@material-ui/core/styles"
import { FC } from "react"
import { Link } from "react-router-dom"
import { combineClasses } from "util/combineClasses"
import AddIcon from "@material-ui/icons/AddOutlined"

export interface ProjectCardProps {
  icon?: string
  project_name: string
  project_id: string
  owner?: string
  className?: string
}

export interface AddProjectCardProps {
  link: string
  className?: string
}

export const AddProjectCard: FC<AddProjectCardProps> = ({
  link,
  className,
}) => {
  const styles = useStyles()
  return (
    <Link
      to={link}
      className={combineClasses([styles.template, className])}
    >
      <div className={styles.templateIcon}>
        <AddIcon />
      </div>
      <div className={styles.templateInfo}>
        <span className={styles.templateName}>Create New Project</span>
      </div>
      
    </Link>
  )
}

export const ProjectCard: FC<ProjectCardProps> = ({
  icon,
  project_name,
  owner,
  project_id,
  className,
}) => {
  const styles = useStyles()
  const random = Math.floor(Math.random() * 899998) + 100001;
  const projectPageLink = `/@${owner}/${project_name}-${random}`
  return (
    <Link
      to={projectPageLink}
      className={combineClasses([styles.template, className])}
      key={project_id}
      onClick={() => window.localStorage.setItem('project-id', project_id)}
    >
      <div className={styles.templateIcon}>
        <img src={icon} alt="" />
      </div>
      <div className={styles.templateInfo}>
        <span className={styles.templateName}>{project_name}</span>
        <span className={styles.templateDescription}>
          Owner: {owner}
        </span>
      </div>
    </Link>
  )
}

const useStyles = makeStyles((theme) => ({
  template: {
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    background: theme.palette.background.paper,
    textDecoration: "none",
    textAlign: "left",
    color: "inherit",
    display: "flex",
    alignItems: "center",
    height: "fit-content",

    "&:hover": {
      backgroundColor: theme.palette.background.paperLight,
    },
  },

  templateIcon: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,

    "& img": {
      height: theme.spacing(4),
    },
  },

  templateInfo: {
    padding: theme.spacing(2, 2, 2, 0),
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(0.5),
    overflow: "hidden",
  },

  templateName: {
    fontSize: theme.spacing(2),
    textOverflow: "ellipsis",
    width: "100%",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },

  templateDescription: {
    fontSize: theme.spacing(1.75),
    color: theme.palette.text.secondary,
    textOverflow: "ellipsis",
    width: "100%",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
}))
