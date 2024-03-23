import { z } from "zod";

export const VerifyTokenSchema = z.object({
    token: z.string(),
  });