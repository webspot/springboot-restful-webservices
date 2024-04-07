import React, { useEffect, useState } from 'react'

function Listusers() {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
            fetch("http://localhost:8081/api/users")
            .then((response)=>response.json())
            .then((data)=>{
                console.log(data);
                setUsers(data);
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
    <div className="App">

        <table border="1">
            <thead>
                <th>#id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
            </thead>
            <tbody>
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