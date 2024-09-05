"use client"
import React, { useEffect, useState } from 'react'
import { Input } from './ui/input'
import { Cross, Search, X } from 'lucide-react'
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
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import axios from 'axios'
import SearchResults from './search-results'


const formSchema = z.object({
    searchText:z.string(),
    All: z.boolean().default(false).optional(),
    Active: z.boolean().default(false).optional(),
    Upcoming: z.boolean().default(false).optional(),
    Past: z.boolean().default(false).optional(),
    Easy: z.boolean().default(false).optional(),
    Medium: z.boolean().default(false).optional(),
    Hard: z.boolean().default(false).optional(),
})

export default function SearchBar() {

    const [filters,setFilters] = useState([])
    const [challenges, setChallenges] = useState([]);
    const [filteredChallenges, setFilteredChallenges] = useState([]);

    useEffect(()=>{
        const getChallenges = async () =>{
            const response = await axios.get("/api/getAllData")
            setChallenges(response.data)
            setFilteredChallenges(response.data);
        }
        getChallenges()
    },[])

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            searchText:"",
            All: true,
            Active: false,
            Upcoming: false,
            Past: false,
            Easy: false,
            Medium: false,
            Hard: false,
        },
    })

  // Filter logic
  function applyFilters(data: z.infer<typeof formSchema>) {
    const currentDate = new Date();
    const trueFilters = Object.entries(data)
        .filter(([key, value]) => value === true)
        .map(([key]) => key);

    //@ts-ignore
    setFilters(trueFilters);

    const searchTerm = data.searchText?.toLowerCase() || '';

    // Apply filters to the challenges array
    const filtered = challenges.filter((challenge) => {
        //@ts-ignore
        const startDate = new Date(challenge.startDate);
        //@ts-ignore
        const endDate = new Date(challenge.endDate);
        //@ts-ignore
        const challengeName = challenge.challengeName.toLowerCase();
        //@ts-ignore
        const challengeDescription = challenge.description.toLowerCase();

        // Filter by search term
        if (
            searchTerm &&
            !challengeName.includes(searchTerm) &&
            !challengeDescription.includes(searchTerm)
        ) {
            return false;
        }

        // Status Filters
        let statusMatch = true;
        if (data.Active && !(startDate <= currentDate && endDate >= currentDate)) {
            statusMatch = false;
        }
        if (data.Upcoming && !(startDate > currentDate)) {
            statusMatch = false;
        }
        if (data.Past && !(endDate < currentDate)) {
            statusMatch = false;
        }

        // Difficulty Filters
        let difficultyMatch = true;
        //@ts-ignore
        if (data.Easy && challenge.levelType!== "Easy") {
            difficultyMatch = false;
        }
        //@ts-ignore
        if (data.Medium && challenge.levelType!== "Medium") {
            difficultyMatch = false;
        }
        //@ts-ignore
        if (data.Hard && challenge.levelType!== "Hard") {
            difficultyMatch = false;
        }

        // Return true if both status and difficulty filters match
        return statusMatch && difficultyMatch;
    });

    setFilteredChallenges(filtered);
}


    function onSubmit(data: z.infer<typeof formSchema>) {
        applyFilters(data);
        console.log(filteredChallenges)
       
    }

     function removeFilter(tag: string) {
        const updatedFilters = filters.filter(f => f !== tag);
        form.setValue(tag as keyof z.infer<typeof formSchema>, false);
        setFilters(updatedFilters);


        // Reapply filters after removing one
        form.handleSubmit(onSubmit)();
    }

    return (
        <div className='w-full h-full'>
        <div className="w-full h-[180px] md:h-[200px] bg-[#002A3B]">
            <div className="h-full w-full flex flex-col justify-center items-center">
                <div className="text-xl md:text-3xl lg:text-5xl font-bold text-white mb-5 lg:mb-10">
                    Explore Challenges
                </div>
                <div className=''>
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
                                                        className="bg-white w-full md:w-[700px] pl-10"
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
                                                name="Easy"
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
                                                name="Medium"
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
                                                name="Hard"
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
                <div className='hidden md:flex justify-center w-full h-10 mt-3'>
                    <div className="w-[900px]  ">
                        <div className='flex md:flex-row justify-start w-full gap-x-6'>
                            {filters.map((filter) =>(
                                <div key={filter} className=''>
                                    <Badge className='text-white bg-[#7A8F9A] hover:bg-[#7A8F9A] cursor-pointer p-2 w-full rounded-3xl flex gap-x-1'>
                                        {filter}
                                        <Button 
                                            variant="link" size="icon" 
                                            className='h-full w-4 text-white hover:text-white'
                                            onClick={() => {
                                                removeFilter(filter)
                                            }}
                                        >
                                            <X className='h-4 font-bold' />
                                        </Button>
                                    </Badge>
                                </div>
                            ))}
                        </div>
                    </div>                          
                </div>
            </div>
        </div>
        <SearchResults
            filteredChallenges={filteredChallenges}
        />
        </div>
        
    )
}


