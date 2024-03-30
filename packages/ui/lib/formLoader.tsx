import { useEffect, Dispatch, SetStateAction } from "react";
import { useFormStatus } from "react-dom";

export const StateLoader = ({
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
