import { BlogPosts } from "app/components/posts";
import Image from "next/image";

export default function Page() {
  return (
    <section>
      <div className="flex items-center gap-4 mb-8">
        <Image
          src="https://avatars.githubusercontent.com/u/12870266?v=4"
          alt="Anish Dalal"
          width={80}
          height={80}
          className="rounded-full"
        />
        <h1 className="text-2xl font-semibold tracking-tighter">Anish Dalal</h1>
      </div>
      <p className="mb-4">
        {`I currently work at and co-founded `}
        <a href="https://www.docdraft.ai/" className="text-blue-500 hover:underline">
          DocDraft
        </a>
        {`, an AI product that simplifies drafting custom legal documents.`}
      </p>
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  );
}
