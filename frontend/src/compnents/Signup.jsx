import React, { useEffect, useState } from 'react'
import './signup.css';
import { Link, useNavigate } from 'react-router-dom';
const Signup = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [role, setRole] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/feed')
        }
    }, [])

    const collectdata = async (e) => {
        e.preventDefault();
        setEmail("")
        setUsername("")
        setPassword("")
        setPhone("")
        console.log(username, email, password, role, phone)


        let result = await fetch("http://localhost:5000/signup", {
            method: 'post',
            body: JSON.stringify({ username, email, password, role, phone }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        result = await result.json();
        console.log('result', result)

        //to redirect product page i used below code
        if (result) {
            navigate('/feed')
        };

        //to store data into the local storage ,it happens when u push sign up button
        localStorage.setItem("user", JSON.stringify(result));

    }


    return (
        <div className="signup">
            <form className='signup_min'>
                <div className="signup-form">
                    <div>
                        <input placeholder='USERNAME' className='inputtag'
                            value={username} onChange={(e) => setUsername(e.target.value)}></input>
                    </div>

                    <div>
                        <input placeholder='PASSWORD' type='password' className='inputtag'
                            value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </div>

                    <div>
                        <input placeholder='EMAIL ID' className='inputtag'
                            value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </div>

                    <div >
                        <input placeholder='PHONE NO.' className='inputtag' type='number'
                            value={phone} onChange={(e) => setPhone(e.target.value)}></input>
                    </div>

                    <div >
                        {/* <input placeholder='ROLE' className='inputtag'
                            value={role} onChange={(e) => setRole(e.target.value)}></input> */}
                        <select name="Roles" className='inputtag'
                        value={role} onChange={(e) => setRole(e.target.value)} >
                            <option value="" disabled selected>ROLES</option>
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                        </select>
                    </div>

                </div>

                <div className='signupButton'>
                    <span> <button className='buttonS' onClick={collectdata}>Login</button></span>  <span><Link to={"/login"} ><button className='buttonS' >Register</button></Link></span>
                </div>



            </form>



        </div>
    )
}

export default Signup;




// import React, { useEffect, useState } from 'react'
// import './signup.css';
// import { Link, useNavigate } from 'react-router-dom';
// const Signup = () => {

//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [phone, setPhone] = useState("");
//     const [role, setRole] = useState("");

//     const navigate = useNavigate();

//     useEffect(() => {
//         const auth = localStorage.getItem('user');
//         if (auth) {
//             navigate('/feed')
//         }
//     }, [])

//     const collectdata = async (e) => {
//         e.preventDefault();
//         setEmail("")
//         setUsername("")
//         setPassword("")
//         setPhone("")
//         console.log(username, email, password, role, phone)


//         let result = await fetch("http://localhost:5000/signup", {
//             method: 'post',
//             body: JSON.stringify({ username, email, password, role, phone }),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });

//         result = await result.json();
//         console.log('result', result)

//         //to redirect product page i used below code
//         if (result) {
//             navigate('/feed')
//         };

//         //to store data into the local storage ,it happens when u push sign up button
//         localStorage.setItem("user", JSON.stringify(result));

//     }


//     return (
//         <div className="signup">
//             <form >
//                 <div className="signup-form">
//                     <div>
//                         <input placeholder='username'
//                             value={username} onChange={(e) => setUsername(e.target.value)}></input>
//                     </div>

//                     <div>
//                         <input placeholder='password' type='password'
//                             value={password} onChange={(e) => setPassword(e.target.value)}></input>
//                     </div>

//                     <div>
//                         <input placeholder='email'
//                             value={email} onChange={(e) => setEmail(e.target.value)}></input>
//                     </div>

//                     <div >
//                         <input placeholder='phone'
//                             value={phone} onChange={(e) => setPhone(e.target.value)}></input>
//                     </div>

//                     <div >
//                         <input placeholder='role'
//                             value={role} onChange={(e) => setRole(e.target.value)}></input>
//                     </div>

//                 </div>

//                 <div className='signupButton'>
//                       <span> <button onClick={collectdata}>Login</button></span>  <span><Link to={"/login"} ><button className='pe-3 spant' >Register</button></Link></span>
//                 </div>



//             </form>



//         </div>
//     )
// }

// export default Signup

