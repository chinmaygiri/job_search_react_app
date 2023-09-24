import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isloading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const axios = require('axios');

const options = {
  method: 'GET',
  url: `https://jsearch.p.rapidapi.com/search/${endpoint}`,
  headers: {
    'X-RapidAPI-Key': 'bfa059cdbdmsh4804ce7cd75defdp15048cjsn3cd6a040309f',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  },
  params: {...query},
  
};

    const fetchData = async () => {
        setLoading(true);

        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setLoading(false);
        } catch (error) {
            setError(error);
            alert('Something went wrong');
        } finally {
            setLoading(false);
        }
    }
    

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setLoading(true);
        fetchData();
    }

    return { data, isloading, error, refetch };
}

export default useFetch;
