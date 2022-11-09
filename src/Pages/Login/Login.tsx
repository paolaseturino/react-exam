import React from 'react'

export default function Login() {

    

    return ( 
        <div>
            <form>
                <div className='input-container'>
                    <label>User</label>
                    <input type="text" required ></input>
                </div>
                <div className='input-container'>
                    <label>Password</label>
                    <input type="password" required ></input>
                </div>
                <input type="submit"/>
            </form>
        </div>
     );
}
