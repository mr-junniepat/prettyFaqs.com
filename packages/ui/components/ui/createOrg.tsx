import { useEffect, useState } from "react";
import { Icons } from "./icons";
import { AlertCircle } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./alert-dialog";
import { Alert, AlertDescription, AlertTitle } from "./alert";
import { Input } from "./input";
import { Label } from "./label";
import { StateLoader } from "../../lib/formLoader";

export function CreateOrg({
  defaultOn,
  createOrgAction,
  state,
}: {
  defaultOn: boolean;
  createOrgAction: any;
  state: { message: string; success: boolean };
}) {
  const [pending, setPending] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(defaultOn);
  }, [defaultOn]);
  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Create organization</AlertDialogTitle>
          <AlertDialogDescription>
            Deploy a new organization to start in one-click.
          </AlertDialogDescription>
        </AlertDialogHeader>

        {!state?.success && state?.message && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{state?.message}</AlertDescription>
          </Alert>
        )}

        <form className="my-5" action={createOrgAction}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Name of your project"
                required
                name={"name"}
              />
            </div>
          </div>

          <AlertDialogFooter className=" mt-5">
            <AlertDialogAction type="submit">
              {pending && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Submit
            </AlertDialogAction>
          </AlertDialogFooter>
        </form>
        <StateLoader setPending={setPending} />
      </AlertDialogContent>
    </AlertDialog>
  );
}
