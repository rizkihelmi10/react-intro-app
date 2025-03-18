import { use, useEffect, useState } from "react";

function useFetch(url){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect (() => {
        const fetchData = async () => {
            try{
                setLoading(true);
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error(response.statusText);
                }
                const data = await response.json();
                setData(data);
                
            }catch(error){
                setError(error);
                setLoading(false);
            }finally{
                setLoading(false);
            }
        }
        fetchData(url);
    }, [url]);
    return {data, loading, error};
}

export default useFetch;