import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import { FC } from "react"
import * as TypesGen from "../../api/typesGenerated"
import { Stack } from "../Stack/Stack"
import { UserRoleHelpTooltip } from "../Tooltips"
import { ProjectsTableBody } from "./ProjectTableBody"
import { UsersJoined } from "../../api/typesGenerated"

export const Language = {
  usernameLabel: "Project Name",
  accessCode: "Access Code",
  owner: "Owner",
  ownerRole: "Role",
  codePath: "Last Seen",
}

export interface ProjectsTableProps {
  usersJoined?: UsersJoined[],
}

export const ProjectsTable: FC<React.PropsWithChildren<ProjectsTableProps>> = ({
  usersJoined
}) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell width="25%">User</TableCell>
            <TableCell width="30%">Email</TableCell>
            <TableCell width="15%">Role</TableCell>
            <TableCell width="20%">Last seen</TableCell>
            <TableCell width="10%"></TableCell>

            {/* 1% is a trick to make the table cell width fit the content */}
            {/* {canEditUsers && <TableCell width="1%" />} */}
          </TableRow>
        </TableHead>
        <TableBody>
          <ProjectsTableBody
            usersJoined={usersJoined}
          />
        </TableBody>
      </Table>
    </TableContainer>
  )
}
