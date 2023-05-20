"use client";

import Header from "@/components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
const apikey = "5035c021fc6a2236a7950c34e421ac51";
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/w500";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const fetching = async e => {
    await axios.get(`${url}/movie/popular?api_key=${apikey}`).then(e => {
      console.log(e.data.results);
      setMovies(e.data.results);
    });
  }
  useEffect(e => {
    fetching();
  }, []);
  return (
    <div className="container">
      <Header title={"index"} />
      {movies?.length > 0 ? movies.map(i => {
        return <div className="movie" key={i?.id}>
          <img src={`${imgUrl}/${i?.poster_path}`} />
          <h4>{i?.original_title}</h4>
        </div>
      }) : <h4>Loading</h4>}
    </div>
  )
}
