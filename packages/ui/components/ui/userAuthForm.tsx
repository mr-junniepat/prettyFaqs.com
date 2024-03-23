"use client";

import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import { useFormStatus } from "react-dom";
import { cn } from "../../lib/utils";
import { Icons } from "./icons";
import { Button } from "./button";
import { Input, Password } from "./input";
import { Label } from "./label";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  createAccount?: any;
  pending?: boolean;
  isAuthType?: "LOGIN" | "REGISTER";
}

export function UserAuthForm({
  className,
  createAccount,
  isAuthType,
  ...props
}: UserAuthFormProps) {
  const [pending, setPending] = useState(false);
  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form action={createAccount}>
        <div className="grid gap-2 gap-y-5">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              name="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={pending}
              required
            />
          </div>

          <div className="grid gap-1 relative">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>

            <Password
              id="password"
              placeholder="password"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={pending}
              required
              name="password"
            />
          </div>

          <Button disabled={pending}>
            {pending && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
            {isAuthType === "LOGIN" ? "Sign in" : "Sign up"}
          </Button>

          <StateLoader setPending={setPending} />
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={pending}>
        <Icons.gitHub className="mr-2 h-4 w-4" />
        GitHub
      </Button>
    </div>
  );
}

const StateLoader = ({
  setPending,
}: {
  setPending: Dispatch<SetStateAction<boolean>>;
}) => {
  const { pending } = useFormStatus();
  useEffect(() => {
    setPending(pending);
  }, [pending]);
  return <div />;
};
