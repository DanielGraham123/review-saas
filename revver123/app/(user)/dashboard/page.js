import { allProjects } from "@/actions/allProjects";
import AddProject from "@/components/AddProject";
import ProjectList from "./project-list";

export default async function Page() {
    const projects = await allProjects();

    return (
        <div className="py-5">
            <div className="flex justify-between align-middle">
                <h1 className="text-3xl font-bold">Your Projects</h1>
                <AddProject />
            </div>

            <ProjectList projects={projects} />
        </div>
    );
}