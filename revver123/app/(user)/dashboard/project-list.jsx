import EditLink from "@/components/EditLink";
import InstructionsLink from "@/components/InstructionsLink";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";

const ProjectList = ({ projects }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 gap-4">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="w-full flex flex-col h-full border-[1.2px] border-slate-800"
          >
            <CardHeader className="flex-1">
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between">
              <Link href={`/projects/${project.slug}`}>
                <Button>View</Button>
              </Link>

              <div className="flex align-middle gap-2">
                <Link href={`/projects/${project.slug}/instructions`}>
                  <InstructionsLink />
                </Link>
                <Link href={`/projects/${project.slug}/edit`}>
                  <EditLink />
                </Link>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ProjectList;
