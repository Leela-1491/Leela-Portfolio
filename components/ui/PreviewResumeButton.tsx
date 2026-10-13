"use client";

import { Button } from "@/components/ui/common/Button";
import { FileTextIcon } from "./icons/FileTextIcon";
import React from "react";
import { useResumeModal } from "@/context/ResumeModalContext";

interface PreviewResumeButtonProps {
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
}

export function PreviewResumeButton({
  className = "",
  variant = "secondary",
  size = "lg",
  children,
}: PreviewResumeButtonProps) {
  const { openResumeModal } = useResumeModal();

  return (
    <Button
      variant={variant}
      size={size}
      onClick={openResumeModal}
      className={className}
    >
      <FileTextIcon size={18} className="text-cyan-400" />
      <span>{children || "Preview Resume"}</span>
    </Button>
  );
}
