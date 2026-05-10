"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@/app/shared/schema";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/app/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      budget: "",
      message: "",
    },
  });

  const onSubmit = async (data: InsertContact) => {
    try {
      setIsSubmitting(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      toast({
        title: "Success!",
        description: result.message || "Message sent successfully!",
      });

      form.reset();
    } catch (error: any) {
      console.error("Error sending contact message:", error);
      toast({
        title: "Error",
        description:
          error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      aria-label="Hubungi BeMalo - Jasa Web Medan"
      className="bg-white py-32"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-3 font-semibold text-[#6E1C1C] md:text-lg"
          >
            Konsultasi Sekarang
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 font-bold text-black text-4xl md:text-5xl lg:text-[56px] tracking-tight"
          >
            Kami siap membantu Anda
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-gray-700 text-base md:text-lg"
          >
            Ceritakan kebutuhan Anda! kami siap membantu mewujudkan impian
            <br className="hidden md:block" /> digital Anda.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="gap-x-6 gap-y-4 grid md:grid-cols-2"
            >
              <div className="flex flex-col gap-4 col-span-2 md:col-span-1 h-full">
                <FormField
                  control={form.control}
                  name={"name" as never}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Masukkan nama Anda"
                          className="bg-white px-4 py-6 border border-gray-300 focus:border-gray-500 rounded-xl focus:ring-1 focus:ring-gray-500 w-full text-gray-900 transition-colors duration-200 placeholder-gray-500 text-base"
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
                          placeholder="Masukkan email Anda"
                          className="bg-white px-4 py-6 border border-gray-300 focus:border-gray-500 rounded-xl focus:ring-1 focus:ring-gray-500 w-full text-gray-900 transition-colors duration-200 placeholder-gray-500 text-base"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={"phone" as never}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          type="tel"
                          placeholder="Masukkan nomor telepon"
                          className="bg-white px-4 py-6 border border-gray-300 focus:border-gray-500 rounded-xl focus:ring-1 focus:ring-gray-500 w-full text-gray-900 transition-colors duration-200 placeholder-gray-500 text-base"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col gap-4 col-span-2 md:col-span-1 h-full">
                <FormField
                  control={form.control}
                  name={"budget" as never}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Masukkan budget Anda"
                          className="bg-white px-4 py-6 border border-gray-300 focus:border-gray-500 rounded-xl focus:ring-1 focus:ring-gray-500 w-full text-gray-900 transition-colors duration-200 placeholder-gray-500 text-base"
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
                    <FormItem className="flex-1 flex flex-col">
                      <FormControl className="flex-1">
                        <Textarea
                          {...field}
                          placeholder="Ceritakan tentang proyek website Anda"
                          className="bg-white px-4 py-6 border border-gray-300 focus:border-gray-500 rounded-xl focus:ring-1 focus:ring-gray-500 w-full h-full text-gray-900 transition-colors duration-200 resize-none placeholder-gray-500 text-base"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="col-span-2 mt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#333333] hover:bg-[#1a1a1a] rounded-xl px-8 py-4 w-full h-auto font-medium text-lg text-white transition-all duration-200 shadow-sm"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Kirim Pesan"
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
}
