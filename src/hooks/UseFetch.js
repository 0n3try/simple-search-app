import { useState, useCallback, useEffect } from "react";

export const useFetch = (url) => {
  const [load, setLoad] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const getData = useCallback(async () => {
    setLoad(true);
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Error Fetching data");
      }
      const data = await res.json();
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoad(false);
    }
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { data, load, error };
};
