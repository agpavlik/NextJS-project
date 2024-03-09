"use client";

export default function BlogDetailsComponent({ blogDetails }) {
  return (
    <div className="p-4 border flex lex-call gap-4">
      <p>{blogDetails?.title}</p>
      <p>{blogDetails?.description}</p>
    </div>
  );
}
