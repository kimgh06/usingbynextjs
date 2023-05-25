"use client";
import Header from '@/app/Header';

export default async function home({ params }) {
  const [title, id] = params.params || [];
  const data = await getData(id);
  return <>
    <Header title={title} />
    <h2>
      {title.replace(/%20/g, " ")}
    </h2>
    {data?.overview}
  </>;
}


async function getData(id) {
  const movies = await (await fetch(`http://localhost:3000/api/movies/${id}`, { cache: 'force-cache' })).json();
  console.log(movies);
  return movies;
}