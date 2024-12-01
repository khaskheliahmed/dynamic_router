import Link from 'next/link'
import React from 'react'


const Home = () => {
  return (
    <>
    <h1 className='text-center'>Home</h1> 
    <br />
    <div className='flex justify-center gap-5'>
      <Link  href="/about" ><button className='btn btn-primary '>About</button></Link>
      <Link  href="/user" ><button className='btn btn-primary '>Users</button></Link>
      <Link  href="/content" ><button className='btn btn-primary '>Contact</button></Link>
    </div>
      
    </>
  )
}

export default Home
