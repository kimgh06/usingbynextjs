"use client";
import axios from 'axios';
import { use, useEffect, useState } from 'react';

export default function home({ params }) {
  const [data, setData] = useState();
  const asdf = async e => {
    await axios.get(`http://localhost:3000/api/movies/${params.params[0]}`).then(e => {
      console.log(e.data);
    })
  }
  useEffect(e => {
    asdf();
  }, []);
  return <>
    {params?.params[0]}
  </>;
}
