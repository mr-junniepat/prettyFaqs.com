"use client";
import React from "react";
import { TooltipProvider } from "@repo/ui/components/ui/tooltip";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@repo/ui/components/ui/resizable";
import { Separator } from "@repo/ui/components/ui/separator";
import { BookOpenText } from "lucide-react";
interface LayoutProps {
  children: React.ReactNode;
  defaultLayout?: number[] | undefined;
  defaultCollapsed?: boolean;
  navCollapsedSize?: number;
}

function CreateFaq({}: LayoutProps) {
  const defaultLayout = [8, 40, 3];
  return (
    <div className="h-screen  w-full items-stretch">
      <TooltipProvider delayDuration={0}>
        <ResizablePanelGroup
          direction="horizontal"
          onLayout={(sizes: number[]) => {
            document.cookie = `react-resizable-panels:layout=${JSON.stringify(
              sizes
            )}`;
          }}
        >
          <ResizablePanel
            defaultSize={defaultLayout[0]}
            minSize={8}
            maxSize={8}
          >
            <Separator />
            <div className="px-3">
              <div className="py-4">
                <h1 className="font-bold">Faq Management</h1>
              </div>
              <Separator />
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel
            defaultSize={defaultLayout[1]}
            minSize={40}
            maxSize={40}
          >
            <div className="p-3 px-5 flex justify-end font-semibold gap-x-8">
              <span>Preview</span>
              <span>Intelligence Settings</span>
              <span>Look and Feel</span>
            </div>
            <Separator />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel
            defaultSize={defaultLayout[2]}
            minSize={3}
            maxSize={3}
          >
            <Separator />
            <div className="flex justify-center py-12">
              <BookOpenText />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </TooltipProvider>
    </div>
  );
}

export default CreateFaq;
