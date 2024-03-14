"use client";
import React from "react";
import { TooltipProvider } from "@repo/ui/components/ui/tooltip";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@repo/ui/components/ui/resizable";
import { Switch } from "@repo/ui/components/ui/switch"
import { Button } from "@repo/ui/components/ui/button"
import { Input } from "@repo/ui/components/ui/input"
import { Label } from "@repo/ui/components/ui/label"
import { Separator } from "@repo/ui/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/ui/select"

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
              
              <div className="mt-2 mb-4">
                <div className="grid w-full mt-4 max-w-sm items-center gap-1.5">
                  <Label className="mb-2" htmlFor="picture">Upload a Source document</Label>
                  <Input id="picture" type="file" />
                </div>

                <div className="grid w-full mt-4 max-w-sm items-center gap-1.5">
                  <Label className="mb-2" htmlFor="picture">From a URL</Label>
                  <div className="flex w-full max-w-sm items-center space-x-2">
                    <Input type="url" placeholder="Url" />
                    <Button type="submit">Go</Button>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="grid w-full mt-4 mb-4 max-w-sm items-center gap-1.5">
                <Label className="mb-2" htmlFor="airplane-mode">Optimize content for SEO</Label>
                <Switch id="airplane-mode" />
              </div>

              <Separator />

              <div className="grid w-full mt-4 mb-4 max-w-sm items-center gap-1.5">
              <Label className="mb-2" htmlFor="airplane-mode">Supported Langauges</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Languages</SelectLabel>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="mandarin">Chinese</SelectItem>
                    <SelectItem value="hindi">Hindi</SelectItem>
                    <SelectItem value="spanish">Spanish</SelectItem>
                    <SelectItem value="french">French</SelectItem>
                    <SelectItem value="arabic">Arabic</SelectItem>
                    <SelectItem value="bengali">Bengali</SelectItem>
                    <SelectItem value="russian">Russian</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              </div>

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
