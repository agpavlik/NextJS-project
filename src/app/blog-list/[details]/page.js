import BlogDetailsComponent from "@/components/blog/details";

async function fetchBlogItemDetails(getCurrentBlogID) {
  const response = await fetch(
    `http://localhost:3000/api/blog/blog-datails?id=${getCurrentBlogID}`,
    { method: "GET", cache: "no-store" }
  );

  const result = await response.json();

  if (result?.success) return result.data;
}

export default async function BlogDetails({ params }) {
  console.log("params:", params);

  const { details } = params;

  const blogDetails = await fetchBlogItemDetails(details);

  console.log(blogDetails);
  return (
    <div>
      <BlogDetailsComponent blogDetails={blogDetails} />
    </div>
  );
}
