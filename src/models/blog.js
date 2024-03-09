import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
  },
  { timestamps: true }
);

const Blog = mongoose.models.Blogs || mongoose.model("Blogs", BlogSchema);

export default Blog;
