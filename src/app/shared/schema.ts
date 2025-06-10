/* eslint-disable */

import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  project: text("project").notNull(),
  budget: text("budget"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactSchema: any = createInsertSchema(contacts)
  .omit({
    id: true,
    createdAt: true,
  })
  .extend({
    name: z.string().min(2, "Name must be at least 2 characters") as any,
    email: z.string().email("Please enter a valid email address") as any,
    project: z
      .string()
      .min(10, "Please provide more details about your project") as any,
    budget: z.string().optional() as any,
    message: z
      .string()
      .min(20, "Please provide more details in your message") as any,
  });

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;
