import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main>
      <h1>Blog Page</h1>
      <p>
        <Link href="/blogs/blog-1">blog1</Link>
      </p>
      <p>
        <Link href="/blogs/blog-2">blog2</Link>
      </p>
    </main>
  );
};

export default page;
