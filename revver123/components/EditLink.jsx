"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { Edit2 } from "lucide-react";
import React from "react";

const EditLink = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Edit2 size={16} />
        </TooltipTrigger>
        <TooltipContent>
          <p>Edit Project</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default EditLink;
