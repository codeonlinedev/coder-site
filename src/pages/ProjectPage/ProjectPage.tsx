import { FC } from "react";
import { projectPageMachine } from "xServices/projectPage/projectPageXService"
import { useMachine } from "@xstate/react"
import { Helmet } from "react-helmet-async";
import { pageTitle } from "util/page";
import { ProjectPageView } from "./ProjectPageView";
import { useParams } from "react-router-dom"
import { useMe } from "hooks/useMe"
import { useProjectData } from "./data"


export const ProjectPage: FC = () => {
    const { project: projectQueryParam } = useParams()
    const user_id = useMe().id
    const project_name = projectQueryParam
    const { data, error, queryKey } = useProjectData(project_name ?? "") 
    const [projectPageState, send] = useMachine(projectPageMachine, {
        context: {
            project_name,
        },
    })
    const {
        project_data,
    } = projectPageState.context
    return (
        <>
            <Helmet>
                <title>{pageTitle("Project")}</title>
            </Helmet>

            <ProjectPageView
                project_data={data}
                changePermission={(is_public) => {
                    send({
                        type: "CHANGEPERMISSION",
                        is_public,
                    })
                }}
            />
        </>
    )
}