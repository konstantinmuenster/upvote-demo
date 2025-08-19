"use client";

import { Button } from "@repo/ui/primitives/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@repo/ui/primitives/drawer";
import { FeatureChecklist } from "./feature-checklist";
import { ListTodoIcon } from "@repo/ui/icons";

export function InstructionsDrawer() {
  return (
    <>
      <div className="fixed bottom-0 right-0 size-40 bg-primary rounded-tl-full ring-2 ring-offset-2 ring-offset-background ring-primary/20 z-50" />

      <Drawer>
        <DrawerTrigger asChild>
          <Button
            size="icon"
            variant="outline"
            className="rounded-full fixed bottom-8 right-8 z-50"
          >
            <ListTodoIcon className="size-4" />
            <span className="sr-only">Show Specs</span>
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-2xl h-full flex flex-col gap-6 pt-6">
            <DrawerHeader className="!gap-4">
              <DrawerTitle className="sr-only">Your Task</DrawerTitle>
              <InstructionsHeading>What is upvote?</InstructionsHeading>
              <DrawerDescription className="text-foreground text-base">
                upvote is a simple tool to collect feedback and publicly share
                it with the world. Any user can submit a feedback card and
                upvote as many cards as they want.
              </DrawerDescription>
            </DrawerHeader>

            <div className="px-4 space-y-4">
              <InstructionsHeading>Feature Requirements</InstructionsHeading>
              <FeatureChecklist />
            </div>

            <DrawerFooter className="pt-12 pb-8">
              <DrawerClose asChild>
                <Button variant="outline">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function InstructionsHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-sm uppercase tracking-wide text-muted-foreground font-semibold">
      {children}
    </h2>
  );
}

export function Instructions() {
  return (
    <div className="flex flex-col gap-4 max-w-md mx-auto items-center justify-center h-screen">
      <span className="text-2xl tracking-tighter font-bold opacity-20 hover:opacity-50 transition-opacity duration-1000 ease-in-out">
        upvote
      </span>

      <p className="text-muted-foreground text-center">
        Your task is to implement the feature requirements. Besides the existing
        packages (database & UI), you can use any approach or library that you
        feel is appropriate.
      </p>

      <p className="text-muted-foreground text-center">
        If you have any questions, please contact me at{" "}
        <a
          href="mailto:konstantin@cobuild.digital"
          className="text-primary font-medium hover:underline"
        >
          konstantin@cobuild.digital
        </a>
      </p>
    </div>
  );
}
