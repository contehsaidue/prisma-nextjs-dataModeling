import Card from "@/components/UI/Card";
import Navbar from "@/components/UI/Navbar";
import prisma from "@/db/db";

export default async function Home() {

  const posts = await prisma.post.findMany()

  return (
    <>
    <Navbar />
    <div className="container mx-auto mt-10">
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post, index) => (
           <Card key={index} title={post.postTitle} content={post.postContent}  id={post.id}/>
        ))}
      </div>
    </div>
  
    </>
  );
}
