"use client";

import { toast as sonnerToast, Toaster } from "sonner";

export function useToast() {
  return {
    success: (message: string) => sonnerToast.success(message),
    error: (message: string) => sonnerToast.error(message),
    info: (message: string) => sonnerToast.info(message),
    warning: (message: string) => sonnerToast.warning(message),
  };
}

export { Toaster };
