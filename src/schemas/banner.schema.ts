import { z } from "zod";


export const bannerSchema = z.object({
  name: z
    .string({
      invalid_type_error: "Title must be string",
      required_error: "Title is required",
    })
    .min(1, "Title is required"),
  icon: z
    .string({
      invalid_type_error: "Image must be File",
      required_error: "Icon is required",
    })
    .min(1, "Icon is required")
    .trim(),
});



