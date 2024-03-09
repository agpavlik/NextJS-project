"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function BlogListComponent({ getAllBlogs }) {
  const router = useRouter();

  useEffect(() => {
    router.refresh;
  }, []);

  async function handleDeleteBlog(getCurrentBlogId) {
    const response = await fetch(
      `/api/blog/delete-blog?id=${getCurrentBlogId}`,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();

    console.log(data);

    if (data?.success) router.refresh(); // refresh page to get updated data
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {getAllBlogs && getAllBlogs.length > 0 ? (
        getAllBlogs.map((b) => (
          <div
            className="p-4 border flex flex-col gap-4 border-gray-600"
            key={b._id}
          >
            <p>{b.title}</p>
            <p>{b.description}</p>
            <button
              onClick={() => handleDeleteBlog(b._id)}
              className="border border-gray-700 p-1 bg-gray-700 text-white "
            >
              Delete Blog
            </button>
            <button
              onClick={() => router.push(`/blog-list/${b._id}`)}
              className="border border-gray-700 p-1 bg-gray-700 text-white "
            >
              View Blog Details
            </button>
          </div>
        ))
      ) : (
        <h1>No blogs available</h1>
      )}
    </div>
  );
}
