import React, { useState } from 'react'
import Card from './Component/Card'

function App() {
  const data = [
    {Name:"Arun",Profession:"Cricket", img:"https://plus.unsplash.com/premium_photo-1664533227571-cb18551cac82?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",btn:false},
    {Name:"John",Profession:"Coder", img:"https://images.unsplash.com/photo-1482961674540-0b0e8363a005?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",btn:false},
    {Name:"Alvina",Profession:"Developer", img:"https://plus.unsplash.com/premium_photo-1675129779582-d84b954f2397?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",btn:false},
    {Name:"Rahul",Profession:"Artist", img:"https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",btn:false},
  ]

  const[realData,setRealdata] = useState(data);
  const Handlebtn = (cardIndex)=>{
    return setRealdata((prev)=>{
        return prev.map((item,index)=>{
         if(cardIndex===index){
          return {...item, btn:!item.btn}
         }
         else{
          return item;
         }
        })
    })
  }


  return (
    <div className='w-full h-screen bg-zinc-300 flex justify-center items-center gap-5'>
      {realData.map((elem,index)=>{
        // return   <Card image={elem.img} Name={elem.Name} prof={elem.Profession}/> Not a good practice very lengthy process
        return <Card key={index} values={elem} index={index} HandleClick={Handlebtn}/>
      })}
    
    </div>
  )
}

export default App
