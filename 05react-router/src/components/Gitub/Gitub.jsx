import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Gitub() {
  // const [data, setData] = useState([])

  // useEffect(() => {
  //   fetch('https://api.github.com/users/hiteshchoudhary')
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data)
  //       setData(data)
  //     })

  // }, [])

  const data = useLoaderData();

  return (
    <div className='text-center text-3xl font-bold py-4'>
      Gitub follower:{data.followers}
      <img className='w-32 h-32 rounded-full mx-auto' src={data.avatar_url} alt="profile" />
    </div>
  )
}

export default Gitub

export const gitInfoLoader = async ()=>{
  const res = await fetch('https://api.github.com/users/jitendragorchiya')
  return res.json()
  console.log(res)
}