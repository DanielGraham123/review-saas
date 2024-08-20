import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const projects = pgTable('projects', {
    id: serial('id').primaryKey(),
    title: text('title'),
    url: text('url'),
    description: text('description'),
    userId: varchar('user_id'),
});