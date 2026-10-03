import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);
    setData([]);
    const fetchUsers = async () => {
      try {
        const res = await fetch(url, { signal: controller.signal });
        if (res.status === 200) {
          const data = await res.json();
          setData(data);
        } else {
          setError("there is a problem!");
        }
      } catch (err) {
        setError(err.message);
      }
    };
    fetchUsers();
    return () => controller.abort();
  }, []);
  return { data, loading, error };
}

export default useFetch;
