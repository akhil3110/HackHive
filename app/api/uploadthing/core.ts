import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
 
const f = createUploadthing();
 

const HandleAuth =() =>{
    // const {userId} = auth()

    return {id: true};
}
 
// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
    hackathonImage: f({image : {  maxFileCount: 1 }})
    .middleware(()=> HandleAuth())
    .onUploadComplete(() =>{})
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;