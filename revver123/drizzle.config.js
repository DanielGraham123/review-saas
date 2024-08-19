import { config } from "dotenv";

config({ path: ".env.local" });

export default {
    schema: "./db/schema.js",
    dialect: 'postgresql',
    migrations: {
        prefix: 'supabase'
    },
    dbCredentials: {
        url: process.env.DATABASE_URL,
    },
}