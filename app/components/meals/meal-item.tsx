import Image from "next/image";
import Link from "next/link";
import React from "react";
import classes from "./meal-item.module.css";
interface Props {
  title: string;
  id: string;
  image: string;
}
const MealsItem: React.FC<Props> = ({ title, id, image }) => {
  return (
    <article className={classes.article}>
      <header>
        <h2>{title}</h2>
        <Image src={image} alt={title} width={200} height={200} />
        <Link href={`/meals/${id}`}>View Details</Link>
      </header>
    </article>
  );
};

export default MealsItem;
