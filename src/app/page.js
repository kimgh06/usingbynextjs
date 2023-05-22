"use client";

import Header from "@/app/Header";
import Link from "next/link";
import { use } from "react";
import { useEffect, useState } from "react";
const apikey = "5035c021fc6a2236a7950c34e421ac51";
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/w500";

export default function Home() {
  const movies = use(getData()).results;
  return <>
    <div className="container">
      <Header title={"index"} />
      {movies?.map(i => {
        return <div className="movie" key={i?.id}>
          <Link href={`/movies/${i?.id}`}>
            <img src={`${imgUrl}/${i?.poster_path}`} />
          </Link>
          <h4>{i?.original_title}</h4>
        </div>
      })}
    </div>
  </>;
}

export async function getData() {
  const movies = await (await fetch(`http://localhost:3000/api/movies`)).json();
  return movies;
}