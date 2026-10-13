import React from "react";
import { IconProps } from "./types";

export function LayersIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0l8.57-3.908a1 1 0 0 0 0-1.832z" />
      <path d="m22 12.5-8.57 3.91a2 2 0 0 1-1.66 0L2 12.5" />
      <path d="m22 17.5-8.57 3.91a2 2 0 0 1-1.66 0L2 17.5" />
    </svg>
  );
}

