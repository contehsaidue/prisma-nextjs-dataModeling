import Navbar from "@/components/UI/Navbar";
import prisma from "@/db/db";

export default async function GetSinglePost({params}:{params:{id:string}}){
    const post = await prisma.post.findUnique({
        where:{
            id: params.id
        }
    })

    if(!post){
        throw new Error(`The post with ${params.id} does not exist`)
    }

    return(
        <>
        <Navbar/>
        <div className="container mx-auto mt-10">
            <h3 className="text-2xl font-mono">{post && post.postTitle}</h3>
            <p className="text-lg mt-2">{post && post.postContent}</p>
        </div>
        </>
    )
}