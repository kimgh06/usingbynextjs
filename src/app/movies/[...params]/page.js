"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

export default function home() {
  const router = useRouter();
  console.log(router);
  return <>
    hello
  </>;
}