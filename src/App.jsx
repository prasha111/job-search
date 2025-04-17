import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Data } from './data'
//import {CopyToClipboard} from "r"
import copy from "copy-to-clipboard";
function App() {
  const [count, setCount] = useState(0)
  const [jobData, setJobData] = useState(Data)

  const handle = (e)=>{
    console.log(e.target.name, e.target.value)
    copy(e.target.name)
  }
  return (
    <>
      <div className='text-2xl '>
        Job Openings
      </div>
    <div className='flex flex-col gap-2'>
   {jobData.map((some, index) => (
  <div
    key={index}
    className="bg-white rounded-xl h-[250px] w-[500px] shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:bg-red-100"
  >
    <div className="flex flex-row gap-4 p-6">
      <img
        height={40}
        width={40}
        src="https://media.instahyre.com/images/profile/base/employer/5276/ac28355824/0_38.webp"
        className="h-[40px] w-[40px] rounded-full border border-gray-300"
        alt="company-logo"
      />

      <div className="text-left flex flex-col justify-between w-full">
        <div className="text-black text-[20px] font-semibold mb-1">
          {some?.title}
        </div>

        <div className="text-black text-[14px] line-clamp-5 opacity-90">
          {some?.description}
        </div>

        <div className="mt-2">
          {some.emails.map((email, i) => (
            <div
            key={i}
            className="flex items-center justify-between bg-gray-100 px-3 py-2 rounded-md text-sm text-blue-800"
          >
            <span>{email}</span>
            <button
              name={email}
              onClick={handle}
              className="bg-red-400 hover:bg-red-200 text-white px-3 py-1 rounded-md text-xs transition-all"
            >
              Copy
            </button>
          </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 pt-3">
          {some.keyword?.map((word, i) => (
            <span
              key={i}
              className="bg-yellow-200 hover:bg-yellow-300 transition-colors duration-200 rounded-md px-2 py-1 text-[12px] text-gray-800 font-medium"
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
))}
 </div>
    </>
  )
}

export default App
