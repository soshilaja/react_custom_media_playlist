import {useState, useEffect } from 'react';

const useFetch = (url) => {

    const [playData, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);

    useEffect( () =>{
        fetch("http://localhost:3003/playData/")
        .then(res => res.json())
        .then((data) => {
          setData(data);
          setIsPending(false);
          // console.log(data);
        })
        .catch(err => {
          throw err
        });
        
      }, [url]);

      return { playData, isPending }
}

export default useFetch;