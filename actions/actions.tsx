'use server'

import prisma from "@/db/db"

export async function addPost(formData: FormData) {
    
    await prisma.post.create({
        data:{
            postTitle: formData.get('title') as string,
            postContent: formData.get('content') as string,
            
            user:{
                connect:{
                    id:1
                }
            }

        }
    })
}