"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { SearchIcon } from "lucide-react"
import { useForm } from "react-hook-form"

import { jobFormSchema, type JobFormValues } from "@/lib/validations/job"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

function JobForm() {
  const form = useForm<JobFormValues>({
    resolver: zodResolver(jobFormSchema),
    defaultValues: {
      search: "",
    },
  })

  function onSubmit(values: JobFormValues) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex items-center gap-x-4 rounded-md border border-gray-7 p-1 dark:border-dark-gray-7">
          <FormField
            control={form.control}
            name="search"
            render={({ field }) => (
              <FormItem className="flex-1 space-y-0">
                <FormLabel className="sr-only">
                  Enter a job title, keyword or company
                </FormLabel>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                    <SearchIcon
                      className="h-6 w-6 text-blue-9 dark:text-dark-blue-9"
                      aria-hidden="true"
                    />
                  </div>
                  <FormControl>
                    <Input
                      placeholder="Job title, keyword, company"
                      title="Enter a job title, keyword or company"
                      autoComplete="off"
                      className="border-none bg-transparent pl-10 focus-visible:ring-0 dark:bg-transparent"
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Find Job</Button>
        </div>
      </form>
    </Form>
  )
}

export { JobForm }
