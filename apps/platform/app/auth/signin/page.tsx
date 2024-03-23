"use client";
import Link from "next/link";
import { useFormState } from "react-dom";
import { AlertCircle } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@repo/ui/components/ui/alert";
import { UserAuthForm } from "@repo/ui/components/ui/userAuthForm";
import { login } from "../../actions/signin";

const initialState = {
  message: "",
  success: false,
  twoFAEnabled: false,
};

export default function AuthenticationPage() {
  const [state, formAction] = useFormState(login, initialState);

  return (
    <>
      <header className="w-full absolute left-0 right-0">
        <div className="p-8">Logo</div>
      </header>

      <div className="container relative  min-h-screen flex items-center justify-center  lg:px-0">
        <div className="lg:p-8">
          {!state.success && state.message && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{state.message}</AlertDescription>
            </Alert>
          )}
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Sign-in into your account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <UserAuthForm createAccount={formAction} isAuthType={"LOGIN"} />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
