import React from 'react'

import ProjectDetails from '@/interfaces/ProjectDetails'


import { HiDocument } from "react-icons/hi2";
import { RxDotFilled } from "react-icons/rx";

type Props = {
    details : ProjectDetails
}

export default function ProductDetail({details}: Props) {
    const onDownload = (e : any)=>{
        e.preventDefault()
        console.log("export",details)
    }
  return (
    <div className='flex bg-secondary rounded-lg shadow-sm'>
        <div className='flex flex-row w-full justify-between items-center ml-[0.4vw] bg-white rounded-r-lg'>
            <div className='flex flex-col justify-between gap-y-[1vh] ml-[1.5vw] py-[0.5vh]'>
                <div >
                    <span className='flex flex-row items-center'>
                        <h1 className='text-3xl font-semibold mr-[0.5vw] m-0'>
                            {details.name}
                        </h1>
                        <p className={`flex flex-row items-center font-light text-2xl ${details.useBudget ? 'text-secondary' : 'text-gray-500'}   `}>
                            <RxDotFilled/>
                            {details.useBudget ? "ใช้งบประมาณ" : "ไม่ใช้งบประมาณ"}
                        </p>                    
                    </span>
                    <h2 className='text-2xl font-medium'>
                        {details.organization}
                    </h2>
                    <p className='text-lg text-gray-400'>
                        ส่งเมื่อ : {details.submitDate}
                    </p>
                </div>
                <div>
                    <p className='text-lg text-gray-400 '>
                        อัปเดตเมื่อ : {details.lastedUpdated}
                    </p>
                    <p className='text-lg text-gray-400'>
                        โดย : {details.director}
                    </p>
                </div>
                
            </div>

            <div className='pr-[2vw]'>
                <button
                    className='flex flex-col items-center py-[0.75vh] px-[0.75vw] bg-gray-200 rounded-lg  hover:opacity-90'
                    onClick={onDownload}
                >
                    <HiDocument className="text-blue-600 text-4xl"/>
                    <p className='text-base text-blue-500'>เอกสาร</p>
                </button>
            </div>
        </div>
    </div>
  )
}