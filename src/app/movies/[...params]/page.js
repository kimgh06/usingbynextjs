"use client";

export default function home({ params }) {
  console.log(params.params[0]);
  return <>
    {params?.params[0]}
  </>;
}