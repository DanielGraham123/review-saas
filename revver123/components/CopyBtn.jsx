"use client";
import { Check, Copy } from "lucide-react";
import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const CopyBtn = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {copied ? (
            <button className="p-1 text-white absolute top-0 right-0 mr-3 mt-3">
              <Check size={16} />
            </button>
          ) : (
            <button
              onClick={copyToClipboard}
              className="p-1 text-white absolute top-0 right-0 mr-3 mt-3"
            >
              <Copy size={16} />
            </button>
          )}
        </TooltipTrigger>
        <TooltipContent>
          <p>Copy the code</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CopyBtn;
