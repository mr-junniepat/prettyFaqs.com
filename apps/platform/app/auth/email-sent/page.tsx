import React from "react";
import { MailCheck, Send } from "lucide-react";
import { cn } from "@repo/ui/lib/utils";
import { Button } from "@repo/ui/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";

function EmailSent() {
  return (
    <section className="min-h-screen flex justify-center  items-center">
      <Card className={cn("w-[450px]")}>
        <CardHeader>
          <CardTitle>Email sent</CardTitle>
          <CardDescription>
            We just sent you a confirmation email, please check your email.
          </CardDescription>
        </CardHeader>

        <CardFooter>
          <Button className="w-full cursor-pointer">
            <Send className="mr-2 h-4 w-4" /> Resend email
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}

export default EmailSent;
