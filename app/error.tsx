'use client'
import Navbar from "@/components/UI/Navbar";

interface IError {
    error: Error
}

export default function ErrorPage({error}:IError){
    return(
        <>
        <Navbar/>
        <div className="container mx-auto mt-10">
            <div className="flex justify-center items-center">
                <h3>{error ? error ?.message: "Error within the application"}</h3>
            </div>
        </div>
        </>
    )
}