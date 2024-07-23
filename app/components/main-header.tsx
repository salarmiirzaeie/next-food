"use client";
import Link from "next/link";
import React from "react";
import logoImg from "@/assets/images/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import Slider from "./slider";
import { usePathname } from "next/navigation";
const MainHeader = () => {
  const path = usePathname();
  return (
    <header className={classes.header}>
      <Link href="/">
        <Image className={classes.logo} priority src={logoImg} alt="logo" />
      </Link>
      <Slider />
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link
              className={path.startsWith("/meals") ? classes.active : undefined}
              href="/meals"
            >
              Meals
            </Link>
          </li>
          <li>
            <Link
              className={path.startsWith("/blogs") ? classes.active : undefined}
              href="/blogs"
            >
              Blogs
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
