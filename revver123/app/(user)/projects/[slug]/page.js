import { getProject } from "@/actions/getProject";
import ProjectDetail from "./project-detail";

export default async function Page({ params }) {

    if (!params.slug)
        return (
            <div>
                Invalid project identifier
            </div>
        );

    const project = await getProject(params.slug);

    if (!project) {
        return (
            <div className="justify-center h-screen min-h-full flex py-96">
                Project not found
            </div>
        );
    }

    return (
        <div className="py-5">
            <ProjectDetail project={project} />
        </div>
    );
}