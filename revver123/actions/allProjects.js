import { db } from "@/db"
import { projects } from "@/db/schema"

export const allProjects = async () => {
    const projects_ = await db.select().from(projects);

    return projects_;
}