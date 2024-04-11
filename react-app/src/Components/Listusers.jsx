import React, { useEffect, useState } from 'react'

function Listusers(props) {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        setIsLoading(true);
        fetch("http://localhost:8081/api/users")
        .then((response)=>response.json())
        .then((data)=>{
            //console.log(data);
            setUsers(data);
            setIsLoading(false);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[]);
    
    // let showUsers = async (e) => {
        
    //     let res = await fetch("http://localhost:8081/api/users")
    //         .then((response)=>response.json())
    //         .then((data)=>{
    //             console.log(data);
    //             setUsers(data);
    //         })
    //         .catch((err)=>{
    //             console.log(err);
    //         });
    // };

  return (
    <div>
        <h1><u><i>Data List</i></u></h1>
        <table border="1" cellPadding={5} width={500}>
            <thead>
                <tr>
                    <th>#id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colSpan={4}>{isLoading ? <p>Loading...</p> : null}</td>
                </tr>
                {
                    users.map((item)=>{
                        return <tr>
                                    <td>{item.id}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.email}</td>
                                </tr>
                    })
                }
            </tbody>
        </table>
    </div>
    
  )
}

export default Listusers