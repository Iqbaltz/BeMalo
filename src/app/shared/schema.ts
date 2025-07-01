import { z } from "zod";

export const insertContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(20, "Please provide more details in your message"),
});

export type InsertContact = z.infer<typeof insertContactSchema>;
