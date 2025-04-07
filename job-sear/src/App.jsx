import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [jobData, setJobData] = useState([{
    "title":"urgent requirement",
    "image":"	https://media.instahyre.com/images/profile/base/employer/5276/ac28355824/0_38.webp",
    "description": "djcdj  cdjcbdjc cdhjbcvdhvb ",
    "email":"kejenejfn",
      "keyword":["html", "css", "js"]
  },
  {
    "title":"urgent requirement",
    "image":"	https://media.instahyre.com/images/profile/base/employer/5276/ac28355824/0_38.webp",
    "description": "djcdj  cdjcbdjc cdhjbcvdhvb ",
    "email":"kejenejfn",
      "keyword":["html", "css", "js"]
  }
])

  return (
    <>
      <div className='text-2xl '>
        Job Openings
      </div>
    <div className='flex flex-col gap-2'>
    
    {jobData.map((some, index)=>{
      return(
        <div className='bg-red-50 rounded-md h-[150px] w-[350px] '>
        <div className='flex flex-row gap-4 p-6 '>
          <img height={40} width={40} src='	https://media.instahyre.com/images/profile/base/employer/5276/ac28355824/0_38.webp' className='h-[40px] w-[40px]'/>
          <div className='text-left'>
          <div className='text-black text-[20px]'>
            {jobData[0]?.title}
          </div>
          <span>{jobData[0]?.email}</span>
          <div className='flex gap-1 pt-[10px]'>
            {jobData[0].keyword?.map((some, index)=>{
              return(<span className='bg-yellow-200 rounded-md p-1 text-[12px]'>{some}</span>)
            })}
          </div>
          </div>
         
  
        </div>
  
    </div>
      )
    })}
 </div>
    </>
  )
}

export default App
