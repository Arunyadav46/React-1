import React from 'react'

function Card({values, HandleClick,index}) {
    const{Name, Profession, img,btn} = values;
  return (
    <div className='w-72 h-72 bg-zinc-200 rounded-md overflow-hidden'>
        <div className='w-full h-40 bg-red-500  '>
            <img className='w-full h-full object-cover' src={img} alt="" />
        </div>
        <div className='p-2'>
            <h1 className='text-4xl font-bold mb-2'>{Name}</h1>
            <h3 className='text-xl mb-2'>{Profession}</h3>
            <button onClick={()=>HandleClick(index)} className={`px-2 py-1 ${btn===true?"bg-green-500":"bg-blue-500"} rounded-md`}>{btn===true?"Friends":"Add Friend"}</button>
        </div>
    </div>
  )
}

export default Card