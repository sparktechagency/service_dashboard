import { z } from "zod";


export const bannerSchema = z.object({
  name: z
    .string({
      invalid_type_error: "Title must be string",
      required_error: "Title is required",
    })
    .min(1, "Title is required"),
  url: z
    .string({
      required_error: "Please enter an valid URL"
    })
    .trim()
    .or(z.literal("")) // allow empty string
    .refine((val) => val === "" || z.string().url().safeParse(val).success, {
      message: "Please enter an valid URL",
    }),
  icon: z
    .string({
      invalid_type_error: "Image must be File",
      required_error: "Image is required",
    })
    .min(1, "Image is required")
    .trim(),
});



