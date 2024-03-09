"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col p-8">
      <h1 className="font-bold text-lg mb-5">Next JS Blog</h1>
      <div className="flex gap-5 ">
        <button
          onClick={() => router.push("/blog-list")}
          className="border border-gray-700 p-1 bg-gray-700 text-white "
        >
          Vissit All Blogs
        </button>
        <button
          onClick={() => router.push("/add-blog")}
          className="border border-gray-700 p-1 bg-gray-700 text-white "
        >
          Add new Blog
        </button>
      </div>
    </main>
  );
}
