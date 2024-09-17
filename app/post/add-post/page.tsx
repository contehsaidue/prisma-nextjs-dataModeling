'use client'
import Button from "@/components/UI/Button";
import Navbar from "@/components/UI/Navbar";
import { addPost } from "@/actions/actions"
import { useRef } from "react";

export default function AddPost(){
    const formRef = useRef<HTMLFormElement>(null)

    return(
        <>
        <Navbar/>
        <div className="container mx-auto mt-10">
            <div className="rounded shadow shadow-neutral-400">
                <form ref={formRef} 
                action={async(formData) =>{ 
                    await addPost(formData)
                formRef.current?.reset()}}
                    className="p-4">
                    <div>
                        <p>
                            <input  type="text" name="title" className="border rounded focus:outline-none w-full p-2" placeholder="Enter post title"/>
                        </p>
                    </div>
                    <div className="mt-4">
                        <p>
                            <textarea name="content" className="border rounded focus:outline-none w-full p-2" placeholder="Enter your content here"/>
                        </p>
                    </div>
                    <div className="mt-4">
                        <Button>Submit</Button>
                        </div>
                </form>
            </div>

        </div>
        </>
    )
}