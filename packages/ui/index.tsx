import type { ReactNode } from "react";
import { Toaster } from "./primitives/sonner";
import { TooltipProvider } from "./primitives/tooltip";

interface UiProviderProperties {
  children: ReactNode;
}

export const UiProvider = ({ children }: UiProviderProperties) => (
  <>
    <TooltipProvider>{children}</TooltipProvider>
    <Toaster richColors />
  </>
);
