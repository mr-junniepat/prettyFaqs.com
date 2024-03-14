"use client";
import * as React from "react";
import {
  Home,
  Users,
  FilePieChart,
  Presentation,
  MessageSquareQuote,
  SquarePlus,
  LayoutDashboard,
  BellDot,
  ChevronDown,
} from "lucide-react";

import { cn } from "@repo/ui/lib/utils";
import { Separator } from "@repo/ui/components/ui/separator";

import { Nav } from "@repo/ui/components/ui/nav";
import { TooltipProvider } from "@repo/ui/components/ui/tooltip";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@repo/ui/components/ui/resizable";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { ModeToggle } from "./modeToggle";

interface LayoutProps {
  children: React.ReactNode;
  defaultLayout?: number[] | undefined;
  defaultCollapsed?: boolean;
  navCollapsedSize?: number;
}

function Layout({
  defaultLayout = [30, 960],
  defaultCollapsed = true,
  navCollapsedSize,
  children,
}: LayoutProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);

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
            collapsedSize={navCollapsedSize}
            collapsible={true}
            minSize={20}
            maxSize={20}
            onCollapse={(): any => {
              setIsCollapsed(true);
              document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
                true
              )}`;
            }}
            onExpand={(): any => {
              setIsCollapsed(false);
              document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
                false
              )}`;
            }}
            className={cn(
              isCollapsed &&
                "min-w-[50px] transition-all duration-300 ease-in-out"
            )}
          >
            <div className="py-32">
              <Nav
                isCollapsed={isCollapsed}
                links={[
                  {
                    title: "Home",
                    icon: Home,
                    variant: "default",
                    path: "/",
                  },
                  {
                    title: "Users",
                    icon: Users,
                    variant: "ghost",
                    path: "/users",
                  },
                  {
                    title: "Trends and Marketing",
                    label: "",
                    icon: Presentation,
                    variant: "ghost",
                    path: "/trends-&-marketing",
                  },
                  {
                    title: "Feedback",
                    label: "23",
                    icon: MessageSquareQuote,
                    variant: "ghost",
                    path: "/feedback",
                  },
                  {
                    title: "Add Faqs",
                    label: "",
                    icon: SquarePlus,
                    variant: "ghost",
                    path: "/create-faqs",
                  },
                  {
                    title: "Analytics and reports",
                    label: "",
                    icon: FilePieChart,
                    variant: "ghost",
                    path: "/report",
                  },

                  {
                    title: "Apps",
                    label: "",
                    icon: LayoutDashboard,
                    variant: "ghost",
                    path: "/app",
                  },
                ]}
              />
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={defaultLayout[1]} minSize={40}>
            <div className="flex items-center px-4  h-20 justify-end">
              {/* <h1 className="text-xl font-bold">home</h1> */}

              <div className="flex items-center gap-x-5 cursor-pointer">
                <BellDot />
                <div className="flex space-x-2 items-center">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <ChevronDown className="text-[#5250F9]" />
                </div>
                <ModeToggle />
              </div>
            </div>

            {children}
          </ResizablePanel>
        </ResizablePanelGroup>
      </TooltipProvider>
    </div>
  );
}
export default Layout;
