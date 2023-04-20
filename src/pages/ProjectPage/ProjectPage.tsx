import { FC } from "react";
import { projectPageMachine } from "xServices/projectPage/projectPageXService"
import { useMachine } from "@xstate/react"
import { Helmet } from "react-helmet-async";
import { pageTitle } from "util/page";
import { ProjectPageView } from "./ProjectPageView";


export const ProjectPage: FC = () => {
    const project_id = window.localStorage.getItem("project-id") ?? ''
    const [projectPageState] = useMachine(projectPageMachine, {
        context: {
            project_id,
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