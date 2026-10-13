"use client";

import React, { createContext, useContext, useState } from "react";
import { ResumeModal } from "@/components/ui/ResumeModal";

interface ResumeModalContextType {
  isOpen: boolean;
  openResumeModal: () => void;
  closeResumeModal: () => void;
}

const ResumeModalContext = createContext<ResumeModalContextType | undefined>(
  undefined
);

export function ResumeModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ResumeModalContext.Provider
      value={{
        isOpen,
        openResumeModal: () => setIsOpen(true),
        closeResumeModal: () => setIsOpen(false),
      }}
    >
      {children}
      <ResumeModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </ResumeModalContext.Provider>
  );
}

export function useResumeModal() {
  const context = useContext(ResumeModalContext);
  if (!context) {
    throw new Error(
      "useResumeModal must be used within a ResumeModalProvider"
    );
  }
  return context;
}

