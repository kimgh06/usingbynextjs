"use client";
import axios from 'axios';
import { use, useEffect, useState } from 'react';

export default function home({ params }) {
  const [data, setData] = useState();
  const asdf = async e => {
    const url = 'https://api.themoviedb.org/3/movie/385687?language=en-US';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer 5035c021fc6a2236a7950c34e421ac51'
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.error('error:' + err));
  }
  useEffect(e => {
    asdf();
  }, []);
  return <>
    {params?.params[0]}
  </>;
}
