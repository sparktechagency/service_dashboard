import { z } from "zod";
export const fullNameRegex = /^[A-Za-z\s'.-]+$/; //only contain letters, spaces, apostrophes, hyphens, and dots


export const categorySchema = z.object({
  category: z
    .string({
      invalid_type_error: "Title must be string",
      required_error: "Title is required",
    })
    .min(1, "Title is required")
    .regex(
      fullNameRegex,
      "Title must contain only letters and spaces"
    )
    .trim(),
  icon: z
    .string({
      invalid_type_error: "Image must be File",
      required_error: "Icon is required",
    })
    .min(1, "Icon is required")
    .trim(),
});
