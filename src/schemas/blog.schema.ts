import { z } from "zod";


export const blogSchema = z.object({
  title: z
    .string({ required_error: "Title is required" })
    .min(1, "Title is required"),
  category: z
    .string({
      invalid_type_error: "Category must be string",
      required_error: "Select a category",
    })
    .trim()
    .min(1, "Select a category"),
  descriptions: z
    .string({
      invalid_type_error: "Description must be string",
      required_error: "Description is required",
    })
    .trim()
    .min(1, "Description is required"),
});