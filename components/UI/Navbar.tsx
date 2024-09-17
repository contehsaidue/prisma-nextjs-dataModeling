'use client'
import Link from "next/link";
import Button  from "./Button";
import { useRouter } from "next/navigation";

export default function Navbar(){
    const router = useRouter()

    const navigate = (Event:React.MouseEvent<HTMLButtonElement>) => {
        event?.preventDefault()
        router.push('/post/add-post/')
    }

    return(
        <div className="w-full bg-black">
            <div className="container mx-auto py-4 text-white">
                <div className="flex justify-between">
                    <Link href={'/'} className="text-2xl font-mono">Blog</Link>
                    <Button handleClick={navigate}>Add Post</Button>
                </div>
            </div>
        </div>
    )
}