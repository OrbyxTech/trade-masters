"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function SignUpBox() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="flex justify-center items-center gap-28 mt-44">
      <div className="flex flex-col gap-2">
        <h2 className="text-[#160637] font-semibold text-3xl">
          Your journey of success :
        </h2>
        <h3 className="text-[#FF521D] font-bold text-4xl">
          1{" "}
          <span className="text-[#160637] text-2xl font-semibold">
            Evaluation
          </span>
        </h3>
        <h3 className="text-[#FF521D] font-bold text-4xl">
          2{" "}
          <span className="text-[#160637] text-2xl font-semibold">
            Skill verification
          </span>
        </h3>
        <h3 className="text-[#FF521D] font-bold text-4xl">
          3{" "}
          <span className="text-[#160637] text-2xl font-semibold">
            Propiy Trader
          </span>
        </h3>
      </div>

      <div className="bg-[#F9F0FF] p-4 w-[400px] rounded-sm">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 bg-white w-full p-4 shadow-lg rounded-sm mt-[-5rem]"
          >
            <h2 className="text-center text-[#160637] text-2xl font-semibold">
              Sign Up
            </h2>

            <div className="p-2 text-white bg-[#FF521D] text-center rounded-sm">
              Start your free trial
            </div>

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Your primary email"
                      {...field}
                      type="email"
                      className="bg-white border-[#D9D9D9] text-black"
                    />
                  </FormControl>

                  <FormControl>
                    <Input
                      placeholder="Password"
                      {...field}
                      type="password"
                      className="bg-white border-[#D9D9D9] text-black"
                    />
                  </FormControl>

                  <FormControl>
                    <Input
                      placeholder="Re-type Password"
                      {...field}
                      type="password"
                      className="bg-white border-[#D9D9D9] text-black"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <Button type="submit">Submit</Button> */}
            <div className="flex flex-col !m-0">
              <div className="text-black font-semibold text-lg text-center w-full !m-0 p-2">
                OR
              </div>

              <div className="flex flex-col gap-2">
                <div className="w-full h-[1px] bg-[#8989A2] mx-auto"></div>
                <p className="text-[#8989A2] text-center text-sm">
                  Already have an account?{" "}
                  <span className="text-[#FF521D]">Login</span>{" "}
                </p>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
