import { UseFormReturn, useFieldArray } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

import { Textarea } from "@/components/ui/textarea";
import { MultiSlideSchema, SlideSchema } from "@/lib/validation/slide-schema";

export function SlidesForm({
  form,
}: {
  form: UseFormReturn<z.infer<typeof MultiSlideSchema>, any, undefined>;
}) {
  const { control } = form;
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "slides", // unique name for your Field Array
    }
  );

  return (
    <Form {...form}>
      <form>
        {fields.map((field, index) => (
          <div className="space-y-6 w-full" key={field.id}>
            <FormField
              control={form.control}
              name={`slides.${index}.title`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your super cool title"
                      className=""
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={`slides.${index}.subtitle`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subtitle</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Subtitle for more clarity"
                      className=""
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={`slides.${index}.description`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us a little bit about yourself"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        ))}
      </form>
    </Form>
  );
}
