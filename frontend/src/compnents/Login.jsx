import React, { useEffect, useState } from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom';




const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user')
        if (auth) {
            navigate('/feed')
        }
    }, [])

    const onLogin = async (e) => {
        //console.log(email,pass)
        e.preventDefault()

        let result = await fetch("http://localhost:5000/login", {
            method: 'post',
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json()
        console.log(result)

        if (result) {
            navigate('/feed')
        } else {
            alert("please check your submitted detail...")
        }
        localStorage.setItem('user', JSON.stringify(result));
        console.log(result.name)

    }

    return (
        <div className="login">
            <form className='login-min'>
                <div className="login-form">
                    <div>
                        <input placeholder='USERNAME' className='inputtag' type='text'
                            onChange={(e) => setUsername(e.target.value)} value={username}></input>
                    </div>

                    <div>
                        <input placeholder='PASSWORD' type='password'  className='inputtag'
                            onChange={(e) => setPassword(e.target.value)} value={password}></input>
                    </div>
                </div>

                <div className='loginButton'>
                    <span> <button className='buttonl' onClick={onLogin}>Login</button></span>  <span> <Link to={"/signup"} ><button className='buttonl'>Register</button></Link></span>
                </div>
            </form>


        </div>
    )
}

export default Login
