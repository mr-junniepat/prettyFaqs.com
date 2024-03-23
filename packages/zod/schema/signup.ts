import { z } from "zod";

export const signupSchema = z.object({
    email: z.string(),
    password: z.string()
  });