import { Separator } from "@repo/ui/components/ui/separator";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@repo/ui/components/ui/dropdown-menu";

import { Badge } from "@repo/ui/components/ui/badge";

import { SearchCheck, Plus, MoreHorizontal } from "lucide-react";
import { Button } from "@repo/ui/components/ui/button";

function Home() {
  return (
    <div className="space-y-4 p-8 pt-6">
      <h1 className="text-3xl font-bold tracking-tight">
        Welcome to Pretty FAQs
      </h1>
      <p>Let's satisfy your customers' curiosity faster and better together!</p>

      <div className="grid grid-cols-4 py-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Monthly active queries
            </CardTitle>
            <SearchCheck />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">Last 30 days</p>
          </CardContent>
        </Card>
      </div>
      <Separator />
      <div className="flex justify-between">
        <h2 className="text-xl font-bold tracking-tight">Your FAQs</h2>
        <Button>
          <Plus className="h-[1rem] w-[1rem] mr-2" />
          Create new FAQs
        </Button>
      </div>
      <div className="my-5 grid grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div>
              <CardTitle className="font-semibold">My first FAQs</CardTitle>
              <Badge variant="default" className="mt-2">
                Published
              </Badge>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <MoreHorizontal />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Un-publish</DropdownMenuItem>
                <DropdownMenuItem className="text-rose-600">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              <span className="text-sm text-neutral-600">
                www.lindastore.com
              </span>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline">View details</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Home;
