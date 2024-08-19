"use client";
import AddProject from "@/components/AddProject";

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">
                Welcome to your dashboard!
            </h1>
            <p className="my-4 text-lg">
                You are now logged in.
            </p>

            <AddProject />
        </div>
    );
}