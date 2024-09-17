'use client'
import { useRouter } from "next/navigation";
import Button from "./Button";

interface IPost {
    id: string; 
    title: string;
    content: string;
}

export default function Card({ title, content, id }: IPost) {
    const router = useRouter();

    // Check if router is defined
    const handleReadMore = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (router) {
            router.push(`/post/${id}`);
        } else {
            console.error("Router is not available.");
        }
    };

    return (
        <div className="rounded-lg shadow shadow-neutral-300 p-4">
            <h3 className="text-xl font-mono truncate">{title}</h3>
            <p className="text-sm mt-2 truncate">{content}</p>
            <div className="mt-2">
                <Button handleClick={handleReadMore}> Read More</Button>
            </div>
        </div>
    );
}
