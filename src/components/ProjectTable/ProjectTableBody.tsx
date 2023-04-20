import Box from "@material-ui/core/Box"
import { makeStyles } from "@material-ui/core/styles"
import TableCell from "@material-ui/core/TableCell"
import TableRow from "@material-ui/core/TableRow"
import { ChooseOne, Cond } from "components/Conditionals/ChooseOne"
import { LastUsed } from "components/LastUsed/LastUsed"
import { Pill } from "components/Pill/Pill"
import { FC } from "react"
import { useTranslation } from "react-i18next"
import * as TypesGen from "../../api/typesGenerated"
import { combineClasses } from "../../util/combineClasses"
import { AvatarData } from "../AvatarData/AvatarData"
import { EmptyState } from "../EmptyState/EmptyState"
import { TableLoaderSkeleton } from "../TableLoader/TableLoader"
import { TableRowMenu } from "../TableRowMenu/TableRowMenu"
import { EditRolesButton } from "components/EditRolesButton/EditRolesButton"
import { Stack } from "components/Stack/Stack"
import LaunchIcon from '@material-ui/icons/Launch';

import { UsersJoined } from "../../api/typesGenerated"
import { Link, TableBody } from "@material-ui/core"
import { useMe } from "hooks/useMe"

interface ProjectsTableBodyProps {
  usersJoined?: UsersJoined[],
}

export const ProjectsTableBody: FC<
  React.PropsWithChildren<ProjectsTableBodyProps>
> = ({
  usersJoined,
}) => {
  const styles = useStyles()
  const { t } = useTranslation("usersPage")
  const me = useMe()
  console.log(usersJoined)
  return (
    <>
      {usersJoined && usersJoined.map((userJoined) => {
        let role
        if (userJoined.users.is_teacher) {
          role = "Teacher"
        } else {
          role = "Student"
        }
        return (
          <TableRow key={userJoined.users.id}>
            <TableCell>{userJoined.users.username}</TableCell>
            <TableCell>{userJoined.users.email}</TableCell>
            <TableCell>
              <Pill
                text={role}
                className={role === "Teacher" ? styles.teacher : styles.student}
              />
            </TableCell>
            <TableCell>
              <LastUsed lastUsedAt={userJoined.users.last_seen_at} />
            </TableCell>
            <TableCell><Link target="_blank" href={userJoined.code_path}><LaunchIcon color="primary"/></Link></TableCell>
          </TableRow>
        )
      })}
          <TableRow key={"test"}>
            <TableCell>a</TableCell>
            <TableCell>a</TableCell>
            <TableCell>
              <Pill
                text={"Teacher"}
                className={styles.teacher}
              />
            </TableCell>
            <TableCell>a</TableCell>
            <TableCell><Link target="_blank" href=""><LaunchIcon color="primary"/></Link></TableCell>
          </TableRow>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  status: {
    textTransform: "capitalize",
  },
  suspended: {
    color: theme.palette.text.secondary,
  },
  student: {
    backgroundColor: theme.palette.background.paperLight,
    borderColor: theme.palette.divider,
  },
  teacher: {
    backgroundColor: theme.palette.info.dark,
    borderColor: theme.palette.info.light,
  },
}))
