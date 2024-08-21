import { db } from "@/db"
import { projects } from "@/db/schema";
import { eq } from "drizzle-orm";

export const getProject = async (slug) => {
    const project = await db.query.projects.findFirst({
        where: eq(projects.slug, slug)
    });

    console.log("project found: ", project?.slug);

    return project;

}
