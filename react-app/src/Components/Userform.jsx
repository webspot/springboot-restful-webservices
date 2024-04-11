import React, { useState } from 'react'
import Listusers from './Listusers';


function Userform() {

  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  //const [mobileNumber, setMobileNumber] = useState("");
  

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (firstName !== '' && lastName !== '' && email !== ''){

          let res = await fetch("http://127.0.0.1:8081/api/users/add", {      
          method: "POST",
          body: JSON.stringify({
            firstName : firstName,
            lastName : lastName,
            email : email    
          }),
          headers: {
              'Content-type' : 'application/json'
          }
        });
        
        //console.log(res);

        if (res.status === 201) {
          setFirstName("");
          setLastName("");
          setEmail("");
          setMessage("User created successfully");
          //setShow(false);
          
        } else {
          setMessage("Something went wrong");
        }
      }else{
        setMessage("All fields are required");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getData = () => {
    setShow(false);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Add User</h1>
        <input
          type="text"
          value={firstName}
          name="firstName"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          value={lastName}
          name="lastName"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          value={email}
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* <input
          type="text"
          value={lastName}
          placeholder="Mobile Number"
          onChange={(e) => setMobileNumber(e.target.value)}
        /> */}

        <button type="submit">Create</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
<hr />
      <button onClick={() => setShow(true)}>
        Show List ...
      </button>
      <button onClick={getData}>
        Hide List ...
      </button>
      <hr />
      {show && <Listusers />}

    </div>
    
  )
}

export default Userform