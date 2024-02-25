import React from 'react'

import ProjectDetails from '@/interfaces/ProjectDetails'

type Props = {
    details : ProjectDetails
}

export default function ProductDetail({details}: Props) {
  return (
    <div>
        <div className='p-0 m-0 gap-0'>
            <span className='flex flex-row items-center'>
                <h1 className='text-2xl font-semibold mr-[1vw] m-0'>
                    {details.name}
                </h1>
                <p className='text-lg text-gray-500'>
                    {details.useBudget ? "ใช้งบประมาณ" : "ไม่ใช้งบประมาณ"}
                </p>                      
            </span>
            <h2 className='text-xl font-medium m-0 p-0'>
                {details.organization}
            </h2>
            <p className='text-base text-gray-400'>
                ส่งเมื่อ : {details.submitDate}
            </p>
        </div>
        <div>
            
        </div>
    </div>
  )
}