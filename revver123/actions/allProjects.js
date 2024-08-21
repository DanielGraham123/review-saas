import { db } from "@/db"
import { projects } from "@/db/schema"
import { eq } from "drizzle-orm";
import { auth } from "@clerk/nextjs/server";

export const allProjects = async () => {
    const { userId } = auth();

    const projects_ = await db.select().from(projects).where(eq(projects.userId, userId));

    return projects_;
}