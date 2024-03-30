import { z } from "zod";

export const createOrgSchema = z.object({
    name: z.string(),
  
  });