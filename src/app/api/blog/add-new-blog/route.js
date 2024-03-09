import connectDB from "@/database";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB(); // connect to db
    const { title, description } = await req.json(); //extract data

    const newBlog = await Blog.create({ title, description }); //create new blog in db
    if (newBlog) {
      return NextResponse.json({
        success: true,
        message: "Blog added successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to add new blog! Try again!",
      });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      success: false,
      message: "Something went wrong",
    });
  }
}
