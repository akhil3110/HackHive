"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { UploadDropzone } from "@/lib/uploadthing";
import axios from "axios";
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"



const formSchema = z.object({
    challengeName: z.string({
        required_error: "Challenge name is required"
    }),
    startDate: z.date({
        required_error: "A date of birth is required.",
    }),
    endDate: z.date({
        required_error: "A date of birth is required.",
    }),
    description: z.string().min(10,{
        message: "You must describe about the hackathon in detail"
    }),
    imageUrl: z.string().optional(),
    levelType: z.string({
        required_error: "Level type is required"
    })
    }).refine(
        (data) => data.endDate >= data.startDate,
        {
            path: ["endDate"],
            message: "End date cannot be earlier than start date"
        }
    )

const CreatePage = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    const router = useRouter();

    const startDate = form.watch("startDate")
    const imageUrl = form.watch("imageUrl")

    const onSubmit =async (data: z.infer<typeof formSchema>) =>{
        try {
            const response = await axios.post('/api/challenge', data)
            form.reset()
            toast.success("Challenge Created")
            router.refresh()
            router.push(`/challenge/${response.data.id}`)
        } catch (error: any) {
            console.log(error.message)
        }
    }
    

    return ( 
        <div className=" h-screen w-full">
            <div className="flex items-center w-full h-[100px] text-2xl bg-[#F8F9Fd] font-bold">
                <div className="ml-9">
                    Challenge Details
                </div>
            </div>
            <div  className= "w-full h-full mt-5">
                <div className="p-5 md:p-0  md:ml-9">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" >
                            <FormField
                                control={form.control}
                                name="challengeName"
                                render={({field}) =>(
                                    <FormItem>
                                        <FormLabel>Challenge Name</FormLabel>
                                        <FormControl>
                                            <Input {...field} className="w-full md:w-[450px]" placeholder="challange Name" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />   
                            <FormField
                                control={form.control}
                                name="startDate"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel>Start Date</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={"outline"}
                                                            className={cn(
                                                                "w-full md:w-[450px] pl-3 text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                    >
                                                        {field.value ? (
                                                            format(field.value, "PPP")
                                                            ) : (
                                                                <span>Pick a date</span>
                                                        )}
                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                        selected={field.value}
                                                        onSelect={field.onChange}
                                                        disabled={(date) =>
                                                            date < new Date()
                                                        }
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="endDate"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel>End Date</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={"outline"}
                                                            className={cn(
                                                                "w-full md:w-[450px] pl-3 text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                    >
                                                        {field.value ? (
                                                            format(field.value, "PPP")
                                                            ) : (
                                                                <span>Pick a date</span>
                                                        )}
                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    disabled={(date) =>
                                                        startDate ? date < startDate : date < new Date()
                                                    }
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            /> 
                            <FormField 
                                control={form.control}
                                name="description"
                                render={({field}) =>(
                                    <FormItem className="flex flex-col">
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <Textarea 
                                                className="w-full md:w-[450px] h-[150px]" 
                                                placeholder="Metion deatails about hackathon"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                             <FormField
                                control={form.control}
                                name="imageUrl"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Upload Image</FormLabel>
                                        {imageUrl ? (
                                            <div className="bg-[#F8F9FD] w-full md:w-[400px] p-5 md:p-8">
                                            <div>
                                                <img src={imageUrl} className="w-[350px] h-[350ox] rounded-xl" />
                                            </div>
                                            <div
                                                onClick={() =>{
                                                    form.setValue("imageUrl","")
                                                }} 
                                                className="group mt-1 text-[#44924c] flex gap-x-1 cursor-pointer text-xs md:text-base"
                                            >
                                                <img src="/bi_image-fill.svg" className="w-3 h-3 md:w-4 md:h-4 mt-0 md:mt-1" />
                                                <span className="group-hover:underline" >Change image</span>-&gt;
                                            </div>
                                        </div>
                                        ) : (
                                            <div>
                                                <FormControl>
                                                    <UploadDropzone
                                                        className="w-full md:w-[450px] h-[200px]"
                                                        endpoint="hackathonImage"
                                                        onClientUploadComplete={(res) => {
                                                            if (res?.[0].url) {
                                                                field.onChange(res[0].url);
                                                            }
                                                        }}
                                                        onUploadError={(err: Error) => {
                                                            console.error("Upload error:", err);
                                                        }}
                                                    />
                                                </FormControl>
                                            </div>
                                        )}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="levelType"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Level Type</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="w-52">
                                                <SelectValue placeholder={field.value ? field.value : "select Level Type" } />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="Easy">Easy</SelectItem>
                                                <SelectItem value="Medium">Medium</SelectItem>
                                                <SelectItem value="Hard">Hard</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className=" pb-5">
                                <Button className="bg-[#44924C] hover:bg-[#28562c]" type="submit" size="lg"> Create Challanges</Button>  
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
     );
}
 
export default CreatePage;