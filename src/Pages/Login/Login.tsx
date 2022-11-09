import React, { useState } from 'react'
import { redirect, useNavigate } from 'react-router-dom';
import { login } from '../../Redux/actions';

const users = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];  

export default function Login() {

    const [message, setMessage] = useState("")
    const navigate = useNavigate();

    const handleSubmit = (event: any) => {
        event.preventDefault();

        const userName = event.target[0].value
        const pass = event.target[1].value        

        // Find user login info
        const userData = users.find((user) => user.username === userName);        

        if (userData) {
            if (userData.password !== pass) {
            setMessage("invalid password")
            
            } else {
                setMessage("ok")
                navigate('/employees')
            }
        } else {
            setMessage("invalid user")
        }
      };

      const handleCopyPaste = (event: any) => {
        event.preventDefault()
        return false
      } 

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <div className='input-container'>
                    <label>User</label>
                    <input type="text" required
                        onPaste={handleCopyPaste}
                        onCopy={handleCopyPaste} />
                </div>
                <div className='input-container'>
                    <label>Password</label>
                    <input type="password" required
                        onPaste={handleCopyPaste}
                        onCopy={handleCopyPaste} />
                </div>
                <input   type="submit"/>
                <p>{message}</p>
            </form>
        </div>
     );
}
