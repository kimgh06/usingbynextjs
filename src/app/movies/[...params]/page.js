"use client";
import axios from 'axios';
import { use, useEffect, useState } from 'react';

export default function home({ params }) {
  const [data, setData] = useState();
  const [title, id] = params.params;
  const asdf = async e => {
    await axios.get(`http://localhost:3000/api/movies/${id}`).then(e => {
      console.log(e.data);
    })
  }
  useEffect(e => {
    asdf();
  }, []);
  return <>
    {title.replace(/%20/g, " ")}{id}
  </>;
}
