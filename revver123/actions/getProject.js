import { db } from "@/db"
import { projects } from "@/db/schema";
import { eq } from "drizzle-orm";

export const getProject = async (slug) => {
    const project = await db.query.projects.findFirst({
        where: eq(projects.slug, slug),
        with: { feedbacks: true }
    });

    console.log("project found: ", project);

    return project;

}
