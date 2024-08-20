// "use client";
import React from "react";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { createProject } from "@/actions/createProject";
import SubmitButton from "./SubmitButton";

const AddProject = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4 mr-1" />
          Create Project
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rounded-md">
        <DialogHeader>
          <DialogTitle>New Project</DialogTitle>
          <DialogDescription>
            Create a new project to get reviews from users.
          </DialogDescription>
        </DialogHeader>
        <form className="flex flex-col gap-4" action={createProject}>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2 items-start">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input id="title" name="title" placeholder="Project title" />
            </div>
            <div className="flex flex-col gap-2 items-start">
              <Label htmlFor="url" className="text-right">
                Project URL
              </Label>
              <Input id="url" placeholder="https://example.com" name="url" />
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea
              id="description"
              placeholder="Project description"
              name="description"
            />
          </div>

          <DialogFooter>
            <SubmitButton text="Creating..." btnText={"Create Project"} />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddProject;
