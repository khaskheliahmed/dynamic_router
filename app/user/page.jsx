import Link from 'next/link';
import React from 'react'

const Users = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users' , {
      next:{
        revalidate:50
      }
    })
    const responce = await data.json();
    console.log(responce);

  return (
    <>
    
    <h1 className='text-center text-2xl '>users</h1>
    <h1>{new Date().toLocaleTimeString()}</h1>
    <div className='flex flex-col gap-5 max-[10rem] mt-5'>
        {responce.map(item=>{
            return <div key={item.id} className='border border-white  rounded p-5 ' >
                <h1>{item.name}</h1>
                <Link href={'/user/${item.id}'}>
                <button className="btn btn-primary">Show More ... </button>
                </Link>
            </div>
        })}
    </div>
    </>
  )
}

export default Users