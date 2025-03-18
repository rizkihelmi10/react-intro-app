import { useEffect, useState } from "react";

import useFetch from '../hooks/UseFetch';

function UserList(){
    // const [users, SetUsers] = useState([])
    const {data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/users")    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchUser = async () => {
    //         try{
    //             setLoading(true)
    //             const response = await fetch ("https://jsonplaceholder.typicode.com/users")

    //             if(!response.ok){
    //                 throw new Error("Failed")
    //             }
    //             const data = await response.json()
    //             SetUsers(data)
    //         }catch(err){
    //             setError(err.message)
    //         }finally{
    //             setLoading(false)
    //         }
        
        
            
    //     };
    //     fetchUser();
    // },[])

    if(loading) return <p>Loading.........</p>
    if(error) return <p> Error: {error}</p>
    return (
        <div>
            <h1>User List</h1>
            <ul>
                {data.map((datas) => (
                    <li key={datas.id}>{datas.name} - {datas.email}</li>
                ))}
            </ul>
        </div>
    )
}
export default UserList;