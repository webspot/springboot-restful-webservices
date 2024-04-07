import "./App.css";
import { useState } from "react";

function AppAfnan() {

  const [formData, setFormData] = useState({});

  const handelChange = (e)=>{
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    
    fetch("http://127.0.0.1:8081/api/users/add", {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-type' : 'application/json'
      }
    })
    .then((Response)=>{
      Response.json();
    })
    .then((data)=>{
      console.log(data);
    })
    .catch((err)=>{
      console.error(err);
    });

    //console.log(formData);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={formData.firstName || ""}
          name="firstName"
          placeholder="First Name"
          onChange={handelChange}
        />
        <input
          type="text"
          value={formData.lastName || ""}
          name="lastName"
          placeholder="Last Name"
          onChange={handelChange}
        />
        <input
          type="text"
          value={formData.email || ""}
          name="email"
          placeholder="Email"
          onChange={handelChange}
        />
       
        <button type="submit">Create</button>

        
      </form>
    </div>
  );
}

export default AppAfnan;