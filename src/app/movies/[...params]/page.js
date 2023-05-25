"use client";
import Header from '@/app/Header';

export default async function home({ params }) {
  const [title, id] = params.params || [];
  const data = await getData(id);
  return <div className='detail'>
    <Header title={title} />
    <h1>
      {title.replace(/%20/g, " ")}
    </h1>
    <div className='main'>
      <img src={`https://image.tmdb.org/t/p/w300${data.poster_path}`} alt={`a poster of ${title}`} />
      {data?.overview}
    </div>
  </div>;
}


async function getData(id) {
  const movies = await (await fetch(`http://localhost:3000/api/movies/${id}`, { next: { revalidate: 1 } })).json();
  console.log(movies);
  return movies;
}