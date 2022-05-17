import React from "react";
import Link from "next/link";

export default function index() {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/product/1">
        <a>product 1 </a>
      </Link>

      <Link href="/product/2">
        <a>product 2 </a>
      </Link>

      <Link href="/product/3">
        <a>product 3 </a>
      </Link>
    </div>
  );
}
