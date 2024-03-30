import React, { useState } from 'react'
import './feed.css'

import { Link, useNavigate } from 'react-router-dom';

const Feed = () => {
  // const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/signup');
  }

  const [post, setPost] = useState("")


  const onPost = async (e) => {
    e.preventDefault()
    setPost("")
    console.log(post)

    const auth = localStorage.getItem('user');
    const userrrr = JSON.parse(auth);
    console.log(userrrr)


    // console.log(auth)
    let userId = userrrr._id
    let username = userrrr.username

    console.log("UserName:", userrrr.username, "userId:", userrrr._id)


    let result = await fetch("http://localhost:5000/post", {
      method: 'post',
      body: JSON.stringify({ post, userId, username }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    result = await result.json();
    console.log('result', result)


  }


  return (
    <div className='feed'>
      <form className='mt-4 feed_form'>
        <input style={{width:200}} placeholder='ENTER YOUR POST' className='inputf'
          onChange={(e) => setPost(e.target.value)} value={post}></input>

        <div><button style={{width:200}} className='mt-3 buttonf'
         onClick={onPost}>Create Post</button></div>

      </form>

      <Link to={"/mypost"}><button className='mt-3 buttonf' style={{width:200}}>View My Post</button></Link>

      <div> <Link to={"/allpost"}><button className='mt-3 buttonf' style={{width:200}}   >View Other User Post</button></Link></div>

      <div><button className='mt-3 buttonf' style={{width:200}} onClick={logout}>Logout</button></div>

    </div>
  )
}

export default Feed








// import React, { useState } from 'react'
// import './feed.css'

// import { Link, useNavigate } from 'react-router-dom';

// const Feed = () => {
//   // const auth = localStorage.getItem('user');
//   const navigate = useNavigate();
//   const logout = () => {
//     localStorage.clear();
//     navigate('/signup');
//   }

//   const [post, setPost] = useState("")


//   const onPost = async (e) => {
//     e.preventDefault()
//     setPost("")
//     console.log(post)

//     const auth = localStorage.getItem('user');
//     const userrrr = JSON.parse(auth);
//     console.log(userrrr)


//     // console.log(auth)
//     let userId = userrrr._id
//     let username = userrrr.username

//     console.log("UserName:", userrrr.username, "userId:", userrrr._id)


//     let result = await fetch("http://localhost:5000/post", {
//       method: 'post',
//       body: JSON.stringify({ post, userId, username }),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });

//     result = await result.json();
//     console.log('result', result)


//   }


//   return (
//     <div className='feed'>
//       <form className='mt-4 feed_form'>
//         <input style={{width:183}} placeholder='ENTER YOUR POST'
//           onChange={(e) => setPost(e.target.value)} value={post}></input>

//         <div><button style={{width:183}} className='mt-3'
//          onClick={onPost}>create post</button></div>

//       </form>

//       <Link to={"/mypost"}><button className='mt-3' style={{width:183}}>view my post</button></Link>

//       <div> <Link to={"/allpost"}><button className='mt-3' style={{width:183}}   >view other user post</button></Link></div>

//       <div><button className='mt-3' style={{width:183}} onClick={logout}>logout</button></div>

//     </div>
//   )
// }

// export default Feed
