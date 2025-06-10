"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactSchema, type InsertContact } from "@/app/shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  // FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

export default function ContactForm() {
  const { toast } = useToast();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      project: "",
      budget: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Success!",
        description: data.message,
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description:
          error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-bold text-gray-900 text-4xl md:text-5xl">
            Got a Plan?
          </h2>
          <p className="text-gray-600 text-xl">
            Share your vision and we&apos;ll make it come to life.
          </p>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="gap-6 grid md:grid-cols-2"
          >
            <div className="space-y-6">
              <FormField
                control={form.control}
                name={"name" as never}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter your name"
                        className="bg-gray-50 px-4 py-4 border border-gray-200 focus:border-transparent rounded-lg focus:ring-2 focus:ring-blue-500 w-full text-gray-900 transition-colors duration-200 placeholder-gray-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={"email" as never}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="Enter your email"
                        className="bg-gray-50 px-4 py-4 border border-gray-200 focus:border-transparent rounded-lg focus:ring-2 focus:ring-blue-500 w-full text-gray-900 transition-colors duration-200 placeholder-gray-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={"project" as never}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Tell us about your project"
                        className="bg-gray-50 px-4 py-4 border border-gray-200 focus:border-transparent rounded-lg focus:ring-2 focus:ring-blue-500 w-full text-gray-900 transition-colors duration-200 placeholder-gray-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-6">
              <FormField
                control={form.control}
                name={"budget" as never}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter your budget"
                        className="bg-gray-50 px-4 py-4 border border-gray-200 focus:border-transparent rounded-lg focus:ring-2 focus:ring-blue-500 w-full text-gray-900 transition-colors duration-200 placeholder-gray-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={"message" as never}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        {...field}
                        rows={4}
                        placeholder="Tell us about your project"
                        className="bg-gray-50 px-4 py-4 border border-gray-200 focus:border-transparent rounded-lg focus:ring-2 focus:ring-blue-500 w-full text-gray-900 transition-colors duration-200 resize-none placeholder-gray-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="hover:opacity-90 px-8 py-4 w-full h-auto font-semibold text-white hover:scale-105 transition-all duration-200 gradient-cta transform"
              >
                {contactMutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
}
