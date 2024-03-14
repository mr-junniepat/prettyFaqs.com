"use client";
import React from "react";
interface LayoutProps {
  children: React.ReactNode;
  defaultLayout?: number[] | undefined;
  defaultCollapsed?: boolean;
  navCollapsedSize?: number;
}
import { ChevronDown } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@repo/ui/components/ui/avatar";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@repo/ui/components/ui/select"  
import { Button } from "@repo/ui/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@repo/ui/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@repo/ui/components/ui/popover";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@repo/ui/components/ui/dialog";
import { Input } from "@repo/ui/components/ui/input";
import { Label } from "@repo/ui/components/ui/label";

function Members({}: LayoutProps) {
  const defaultLayout = [8, 40, 3];

  const members = [
    {
        firstName: "Sofia",
        lastName: "Chibueze",
        name: "Sofia Chibueze",
        email: "sofia@example.com",
        role: "admin",
        avatar: "/avatars/01.png"
    },
    {
        "firstName": "James",
        "lastName": "Okeke",
        "name": "James Okeke",
        "email": "james@example.com",
        "role": "user",
        "avatar": "/avatars/02.png"
    },
    {
        "firstName": "Amara",
        "lastName": "Nkwo",
        "name": "Amara Nkwo",
        "email": "amara@example.com",
        "role": "editor",
        "avatar": "/avatars/03.png"
    },
    {
        "firstName": "Chidi",
        "lastName": "Okonkwo",
        "name": "Chidi Okonkwo",
        "email": "chidi@example.com",
        "role": "moderator",
        "avatar": "/avatars/04.png"
    },
    {
        "firstName": "Ngozi",
        "lastName": "Adichie",
        "name": "Ngozi Adichie",
        "email": "ngozi@example.com",
        "role": "contributor",
        "avatar": "/avatars/05.png"
    }
  ]
  return (
    <>
      <div className="w-10/12 m-auto">
        <Card>
          <CardHeader>
            <div className="flex justify-between pb-4 border-0 border-b dark:border-stone-700">
              <div>
                <CardTitle>Team Members</CardTitle>
                <CardDescription>
                  Invite your team members to collaborate.
                </CardDescription>
              </div>
              <div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Add Member</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Add Member</DialogTitle>
                      <DialogDescription>
                        Send requests to your colleagues to join in.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex items-center space-x-2">
                      <div className="grid flex-1 gap-2">
                        <Label htmlFor="email" className="sr-only">
                          Email
                        </Label>
                        <Input id="email" className="w-[150px]" />
                      </div>
                      <div className="grid flex-1 gap-2">
                        <Select>
                          <SelectTrigger className="w-[130px]">
                            <SelectValue placeholder="Choose Role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="member">Member</SelectItem>
                              <SelectItem value="admin">Admin</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                      <Button type="submit" size="sm" className="px-3">
                        <span className="sr-only">Add</span>
                        Send request
                      </Button>
                    </div>
                    <DialogFooter className="sm:justify-start">
                      <DialogClose asChild>
                        <Button type="button" variant="secondary">
                          Close
                        </Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </CardHeader>
          <CardContent className="grid gap-6">
            {members && members.map((user: any, index: number) => (
     <div className={`flex items-center pb-4 ${index !== members.length - 1 ? 'border-0 border-b dark:border-stone-700' : ''} justify-between space-x-4`}>
     <div className="flex items-center space-x-4">
       <Avatar>
         <AvatarImage src="/avatars/01.png" />
         <AvatarFallback>{user.firstName.substring(0,1)}{user.lastName.substring(0,1)}</AvatarFallback>
       </Avatar>
       <div>
         <p className="text-sm font-medium leading-none">
           {user.name}
         </p>
         <p className="text-sm text-muted-foreground">{user.email}</p>
       </div>
     </div>
     <Popover>
       <PopoverTrigger asChild>
         <Button variant="outline" className="ml-auto">
           {user.role}{" "}
           <ChevronDown className="ml-2 h-4 w-4 text-muted-foreground" />
         </Button>
       </PopoverTrigger>
       <PopoverContent className="p-0" align="end">
         <Command>
           <CommandList>
             <CommandEmpty>No roles found.</CommandEmpty>
             <CommandGroup>
               <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                 <p>Viewer</p>
                 <p className="text-sm text-muted-foreground">
                   Can view and comment.
                 </p>
               </CommandItem>
               <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                 <p>Developer</p>
                 <p className="text-sm text-muted-foreground">
                   Can view, comment and edit.
                 </p>
               </CommandItem>
               <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                 <p>Billing</p>
                 <p className="text-sm text-muted-foreground">
                   Can view, comment and manage billing.
                 </p>
               </CommandItem>
               <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                 <p>Owner</p>
                 <p className="text-sm text-muted-foreground">
                   Admin-level access to all resources.
                 </p>
               </CommandItem>
             </CommandGroup>
           </CommandList>
         </Command>
       </PopoverContent>
     </Popover>
   </div>

            ))}
       

          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default Members;
