import { FC } from "react";
import { projectPageMachine } from "xServices/projectPage/projectPageXService"
import { useMachine } from "@xstate/react"
import { Helmet } from "react-helmet-async";
import { pageTitle } from "util/page";
import { ProjectPageView } from "./ProjectPageView";
import { useParams } from "react-router-dom"


export const ProjectPage: FC = () => {
    const { project: projectQueryParam } = useParams()
    const project_name = projectQueryParam
    const [projectPageState] = useMachine(projectPageMachine, {
        context: {
            project_name,
        },
    })
    const {
        project_data,
    } = projectPageState.context
    console.log(project_data)
    return (
        <>
            <Helmet>
                <title>{pageTitle("Project")}</title>
            </Helmet>

            <ProjectPageView
                project_data={project_data}
            />
        </>
    )
}