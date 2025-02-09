import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="mt-40">
      <p>
        <Link href="/awesome">Awesome</Link>
      </p>
      <p>
        <Link href="/meals">Meals</Link>
      </p>
      <p>
        <Link href="/blogs">Blogs</Link>
      </p>
    </div>
  );
};

export default page;
