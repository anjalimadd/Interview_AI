"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
// import LottieComponent from "@components/LottieComponent"
import animationData from "@/public/animations/animation.json";
import Lottie from "lottie-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Form,
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
  FormField,
} from "@/components/ui/form";
import Image from "next/image";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

type GenerationFormProps = {
  userName: string;
  userId: string;
};

const generateFormSchema = () => {
  return z.object({
    role: z.string().min(2, "Role is required"),
    type: z.enum(["technical", "behavioral", "mixed"]),
    level: z.enum(["entry", "junior", "mid", "senior"]),
    techstack: z.string().min(2, "Tech stack is required"),
    amount: z
      .number({
        required_error: "Amount is required",
        invalid_type_error: "Amount must be a number",
      })
      .min(1, "At least 1 question")
      .max(20, "Maximum 20 questions"),
  });
};
const GenerationForm = ({ userId, userName }: GenerationFormProps) => {
  const formSchema = generateFormSchema();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: "technical",
      level: "entry",
    },
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (formData: z.infer<typeof formSchema>) => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/vapi/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, userid: userId }),
      });
      //console.log(res);

      if (res.ok) {
        router.push("/home");
        toast.success("Interview Generated Successfully")
      } else {
        toast.error("Failed to generate interview")

      }
    } catch (err) {
      alert("Something went wrongg.");
      //console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex">
      <div className="w-1/2 flex items-center justify-center p-8 border-gray-500 border-1 border-solid rounded-2xl">
        <div className="relative w-full max-w-lg">
          {loading && (
            <div className="absolute inset-0 z-10 flex items-center justify-center backdrop-blur-sm">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-blue-600 border-solid" />
            </div>
          )}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className={`w-full form space-y-10  ${
                loading ? "blur-sm pointer-events-none select-none" : ""
              }`}
            >
              <h2 className="text-xl font-semibold">Hello, {userName}!</h2>

              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <FormControl>
                      <input
                        type="text"
                        placeholder="like Backend, Full-Stack"
                        {...field}
                        className="border px-3 py-2 rounded w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Interview Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a verified email to display" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="technical">Technical</SelectItem>
                        <SelectItem value="behavioral">Behavioral</SelectItem>
                        <SelectItem value="mixed">Mixed</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="level"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Level</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a verified email to display" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="entry">Entry</SelectItem>
                        <SelectItem value="junior">Junior</SelectItem>
                        <SelectItem value="mid">Mid</SelectItem>
                        <SelectItem value="senior">Senior</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="techstack"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tech Stack</FormLabel>
                    <FormControl>
                      <input
                        type="text"
                        placeholder="Enter tech stack"
                        {...field}
                        className="border px-3 py-2 rounded w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Questions</FormLabel>
                    <FormControl>
                      <input
                        type="number"
                        min={1}
                        max={20}
                        placeholder="Enter no. of questions"
                        value={field.value ?? ""}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                        className="border px-3 py-2 rounded w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button className="btn" type="submit">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <div className="w-1/2 h-full">
        {/* <Image
          src="/robot.png"
          alt="profile-image"
          width={65}
          height={54}
          className="object-cover"
        /> */}
            <div className="mt-20">
        <Lottie animationData={animationData} loop={true} />
        </div>


      </div>
    </div>
  );
};

export default GenerationForm;
