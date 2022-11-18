import { useState, useEffect } from 'react';
import axios from 'axios';

const useApi = (url) => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = () => {
      axios(url).then((res) => setData(res.data));
    };

    fetchData()
  }, []);

  return data ;
};

export default useApi;
