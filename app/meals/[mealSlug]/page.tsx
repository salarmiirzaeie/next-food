import React from "react";

const page = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      <header>
        <h1>{params.slug}</h1>
      </header>
      <main>
        <p>{params.slug}</p>
      </main>
      <p>{params.slug}</p>
    </div>
  );
};

export default page;
