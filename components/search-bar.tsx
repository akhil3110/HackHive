"use client"
import React from 'react'
import { Input } from './ui/input'
import { Search } from 'lucide-react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from './ui/checkbox'

const formSchema = z.object({
    searchText:z.string(),
    All: z.boolean().default(false).optional(),
    Active: z.boolean().default(false).optional(),
    Upcoming: z.boolean().default(false).optional(),
    Past: z.boolean().default(false).optional(),
    easy: z.boolean().default(false).optional(),
    medium: z.boolean().default(false).optional(),
    hard: z.boolean().default(false).optional(),
})

export default function SearchBar() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            searchText:"",
            All: true,
            Active: false,
            Upcoming: false,
            Past: false,
            easy: false,
            medium: false,
            hard: false,
        },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        // console.log(data)
    }

    return (
        <div className="w-full h-[180px] md:h-[250px] bg-[#002A3B]">
            <div className="h-full w-full flex flex-col justify-center items-center">
                <div className="text-xl md:text-3xl lg:text-5xl font-bold text-white mb-5 lg:mb-10">
                    Explore Challenges
                </div>
                
                    <Form {...form}>
                        <form
                            className="space-y-6"
                            onSubmit={form.handleSubmit(onSubmit)}
                        >
                        <div className=' flex gap-x-2'>
                            <div>
                                <FormField
                                    control={form.control}
                                    name="searchText"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                            <FormControl>
                                                <div>
                                                    <Search className="absolute w-8 h-8" />
                                                    <Input
                                                        className="bg-white  md:w-[700px] pl-10"
                                                        placeholder="search"
                                                        value={field.value}
                                                        onChange={(e) =>{
                                                            field.onChange(e.target.value)
                                                            form.handleSubmit(onSubmit)()
                                                        }}
                                                    />
                                                </div>
                                            </FormControl>  
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div>
                                <Select>
                                    <SelectTrigger className="w-[100px] md:w-[200px] bg-white">
                                        <SelectValue placeholder="Filter" className=' font-bold' />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <div className='rounded-md border'>
                                            <div className='mb-2 font-semibold'>
                                                Status
                                            </div>
                                            <FormField
                                                control={form.control}
                                                name="All"
                                                render={({ field }) => (
                                                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                                        <FormControl>
                                                            <div className='w-full flex justify-start gap-x-2'>
                                                                <Checkbox
                                                                    checked={field.value}
                                                                    onCheckedChange={(checked) => {
                                                                    field.onChange(checked)
                                                                    form.handleSubmit(onSubmit)()
                                                                    }}
                                                                />
                                                                All
                                                            </div>
                                                        </FormControl>  
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="Active"
                                                render={({ field }) => (
                                                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 ">
                                                        <FormControl>
                                                            <div className='w-full flex justify-start gap-x-2'>
                                                                <Checkbox
                                                                    checked={field.value}
                                                                    onCheckedChange={(checked) => {
                                                                    field.onChange(checked)
                                                                    form.handleSubmit(onSubmit)()
                                                                    }}
                                                                />
                                                                Active
                                                            </div>
                                                        </FormControl>
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="Upcoming"
                                                render={({ field }) => (
                                                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                                        <FormControl>
                                                            <div className='w-full flex justify-start gap-x-2'>
                                                                <Checkbox
                                                                    checked={field.value}
                                                                    onCheckedChange={(checked) => {
                                                                    field.onChange(checked)
                                                                    form.handleSubmit(onSubmit)()
                                                                    }}
                                                                />
                                                                Upcoming
                                                            </div>
                                                        </FormControl>
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="Past"
                                                render={({ field }) => (
                                                    <FormItem className="flex flex-row items-start space-x-3 space-y-0  ">
                                                        <FormControl>
                                                            <div className='w-full flex justify-start gap-x-2'>
                                                                <Checkbox
                                                                    checked={field.value}
                                                                    onCheckedChange={(checked) => {
                                                                    field.onChange(checked)
                                                                    form.handleSubmit(onSubmit)()
                                                                    }}
                                                                />
                                                                Past
                                                            </div>
                                                        </FormControl>
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className='rounded-md border'>
                                            <div className='mb-2 font-semibold'>
                                                Level
                                            </div>
                                            <FormField
                                                control={form.control}
                                                name="easy"
                                                render={({ field }) => (
                                                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                                        <FormControl>
                                                            <div className='w-full flex justify-start gap-x-2'>
                                                                <Checkbox
                                                                    checked={field.value}
                                                                    onCheckedChange={(checked) => {
                                                                    field.onChange(checked)
                                                                    form.handleSubmit(onSubmit)()
                                                                    }}
                                                                />
                                                                Easy
                                                            </div>
                                                        </FormControl>  
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="medium"
                                                render={({ field }) => (
                                                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 ">
                                                        <FormControl>
                                                            <div className='w-full flex justify-start gap-x-2'>
                                                                <Checkbox
                                                                    checked={field.value}
                                                                    onCheckedChange={(checked) => {
                                                                    field.onChange(checked)
                                                                    form.handleSubmit(onSubmit)()
                                                                    }}
                                                                />
                                                                Medium
                                                            </div>
                                                        </FormControl>
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="hard"
                                                render={({ field }) => (
                                                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                                        <FormControl>
                                                            <div className='w-full flex justify-start gap-x-2'>
                                                                <Checkbox
                                                                    checked={field.value}
                                                                    onCheckedChange={(checked) => {
                                                                    field.onChange(checked)
                                                                    form.handleSubmit(onSubmit)()
                                                                    }}
                                                                />
                                                                Hard
                                                            </div>
                                                        </FormControl>
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        </form>
                    </Form>
                </div>
            </div>
        
    )
}
