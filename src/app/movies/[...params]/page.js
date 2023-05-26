"use client";
import Header from '@/app/Header';
import Link from 'next/link';

export default async function home({ params }) {
  const [title, id] = params.params || [];
  const data = await getData(id);
  return <div className='detail'>
    <Header title={title} />
    <h1>
      {title.replace(/%20/g, " ")}
    </h1>
    <p>{data?.runtime} min</p>
    <div className='main'>
      <Link href={data?.homepage}>
        <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={`a poster of ${title}`} />
      </Link>
      <div>
        {data?.overview}
        <h3>Genres</h3>
        {data?.genres.map((i, n) => <span key={n}>{i?.name}&nbsp;</span>)}
      </div>
    </div>
  </div>;
}


async function getData(id) {
  const movies = await (await fetch(`http://localhost:3000/api/movies/${id}`, { next: { revalidate: 1 } })).json();
  console.log(movies);
  return movies;
}