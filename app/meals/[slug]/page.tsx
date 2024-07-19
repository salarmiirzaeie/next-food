import React from "react";

const page = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      <p>{params.slug}</p>
    </div>
  );
};

export default page;
