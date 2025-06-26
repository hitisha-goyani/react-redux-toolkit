import React, { useEffect, useState } from 'react';

const useHook = (url) => {
    const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null);
   const [data, setData] = useState([])

    useEffect(()=>{
      
   const fetchApi = async () => {
      try {
        const res = await fetch(url);
        const result = await res.json();
        setData(result);
        setError(null);
      } 
      catch (err) {
        setError('Failed to fetch data');
        setData([]);
      }
      setLoading(false);
    };

    fetchApi();
  }, [url]);


  return {loading, error, data}
}

export default useHook;
