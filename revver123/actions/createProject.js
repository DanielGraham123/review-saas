"use server";
import { db } from "@/db";
import { projects } from "@/db/schema";
import { generateRandomString, slugify } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server"

export const createProject = async (formData) => {
    const { userId } = auth();

    const slug = `${slugify(formData.get("title"))}-${generateRandomString()}`;

    const project = {
        title: formData.get("title"),
        slug,
        url: formData.get("url"),
        description: formData.get("description"),
        userId
    }

    const [newProject] = await db.insert(projects).values(project).returning();

    console.log("project created: ", newProject);
    return newProject;
}