"use server";
import { db } from "@/db";
import { projects } from "@/db/schema";
import { auth } from "@clerk/nextjs/server"

export const createProject = async (formData) => {
    const { userId } = auth();

    const project = {
        title: formData.get("title"),
        url: formData.get("url"),
        description: formData.get("description"),
        userId
    }

    const [newProject] = await db.insert(projects).values(project).returning();

    console.log("project created: ", newProject);
    return newProject;
}