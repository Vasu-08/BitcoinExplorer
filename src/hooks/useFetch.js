import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = (url, postData) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(url, postData);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, postData]);

  return {data, loading, error};
};

export default useFetch;
