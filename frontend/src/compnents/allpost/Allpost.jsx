import React, { useEffect, useState } from 'react';
import './allpost.css'

const Allpost = () => {
    const [data, setData] = useState([]); // Initialize data as an array
    console.log(data)
    


    const auth = localStorage.getItem('user');
    const userData = JSON.parse(auth);
    const user = userData.role
    console.log("is Admin", user)


    useEffect(() => {
        const fetchData = async () => {
            try {
                // const auth = localStorage.getItem('user');
                // let id = auth.slice(8, 32)
                let result = await fetch(`http://localhost:5000/posts`, {
                    method: 'get',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                result = await result.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, [])

    if (data.length === 0) {
        return <div>Loading...</div>;
    }

    function refreshPage() {
        window.location.reload();
    }
    const deletePost = async (id) => {
        var result = await fetch(`http://localhost:5000/posts/${id}`, {
            method: "Delete"
        }, refreshPage());
        result = await result.json();
        console.log("hhhh")
        window.location.reload();
        if (result) {
            alert("product deleted....")
        }

    }

    



    return (
        <div className='allPost_container'>
            {data.map((item, index) => (
                <div className='allpost' key={item._id}>
                    <div className='allpost_min'>
                        <div style={{ fontSize: 17 }}>{item.post}</div>
                        <div style={{ fontSize: 13 }} className='mt-3 mb-1'>Date : {(item.updatedAt).slice(0, 10)}</div>
                        <div style={{ fontSize: 13 }}>Created : {item.username}</div>

                        {user === "admin" ? <div><button className='mt-2 mb-2 buttonap' style={{ width: 208 }} onClick={() => deletePost(item._id)}>Delete</button>
                            <br />
                            <button className='mt-2 mb-2 buttonap' style={{ width: 208 }}>Approve</button></div> : null}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Allpost





//
// import React, { useEffect, useState } from 'react';
// import './allpost.css'

// const Allpost = () => {
//     const [data, setData] = useState([]); // Initialize data as an array
//     console.log(data)


//     const auth = localStorage.getItem('user');
//     const userData = JSON.parse(auth);
//     const user=userData.role
//     console.log("is Admin",user)


//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 // const auth = localStorage.getItem('user');
//                 // let id = auth.slice(8, 32)
//                 let result = await fetch(`http://localhost:5000/posts`, {
//                     method: 'get',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     }
//                 })
//                 result = await result.json();
//                 setData(result);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         }
//         fetchData();
//     }, [])

//     if (data.length === 0) {
//         return <div>Loading...</div>;
//     }


//   return (
//     <div>
//             {data.map((item, index) => (
//                 <div className='allpost' key={item._id}>
//                     <p>{item.post}</p>
//                     <p>Date:{item.updatedAt}</p>
//                     <p>Created:{item.username}</p>

//                    {user==="admin"? <div><button>delete</button><br/><button>Approve</button></div> :""}
//                 </div>
//             ))}
//         </div>
//   )
// }

// export default Allpost

