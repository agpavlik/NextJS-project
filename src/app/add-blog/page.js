"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const initialFormData = {
  title: "",
  description: "",
};

export default function AddBlog() {
  const [blog, setBlog] = useState(initialFormData);

  const router = useRouter();

  async function handleAddBlog() {
    const response = await fetch("/api/blog/add-new-blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    });
    const result = await response.json();
    console.log(result);
    if (result?.success) {
      setBlog(initialFormData);
      router.push("/blog-list");
    }
  }

  return (
    <div className="flex min-h-screen flex-col p-8">
      <h1 className="font-bold text-lg mb-3">Add a new blog</h1>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <label>Enter blog title</label>
          <input
            className="border border-gray-700 p-3 outline-none"
            name="title"
            placeholder="Enter blog title"
            value={blog.title}
            onChange={(e) => setBlog({ ...blog, title: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label>Enter blog description</label>
          <textarea
            rows={5}
            className="border border-gray-700 p-3 outline-none"
            name="title"
            placeholder="Enter blog description"
            value={blog.description}
            onChange={(e) => setBlog({ ...blog, description: e.target.value })}
          />
        </div>
        <div>
          <button
            onClick={handleAddBlog}
            className="border rounded-md radius-3 border-gray-700 p-3 bg-gray-700 text-white "
          >
            Add Blog
          </button>
        </div>
      </div>
    </div>
  );
}
