"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { NotepadText } from "lucide-react";
import React from "react";

const InstructionsLink = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <NotepadText size={16} />
        </TooltipTrigger>
        <TooltipContent>
          <p>Project Instructions</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default InstructionsLink;
