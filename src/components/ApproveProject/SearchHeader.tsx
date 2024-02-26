import React, { useState } from 'react'

import { DatePicker } from 'antd'
import { IoMdSearch } from "react-icons/io";
import FormValues from '@/interfaces/FormValues';

type Props = {
    onSearchHandler : (formValue : FormValues)=> void,
}

export default function SearchHearder({onSearchHandler}: Props) {
    
    const [formValue,onSetForm] = useState({
      name : '', 
      date : '' 
    })


    return (
        <section  className='flex flex-row items-center w-full gap-x-[1.5vw] pr-[2vw] mb-[2vh] mt-[1vh]'>
            <span className="flex flex-row h-full w-8/12 items-center bg-white rounded-lg px-[1vw] gap-x-[1vw] shadow-sm text-gray-400 py-[0.5vh]">
                <IoMdSearch className='text-xl'/>
                <input
                    placeholder="ค้นหา"
                    className="w-full text-lg outline-none border-none bg-transparent"
                    onChange={(e : React.ChangeEvent<HTMLInputElement> )=>{
                        onSetForm({
                          ...formValue,
                          name : e.target.value
                        })
                        onSearchHandler({
                          ...formValue,
                          name :  e.target.value
                        })
                    }}           
                />
            </span>
            <span className='w-4/12 h-full'>
                <DatePicker
                    className='flex flex-row-reverse w-full text-gray-500 rounded-lg outline-none border-none active:border-none active:shadow-none focus:border-none focus:shadow-none focus:outline-none shadow-sm h-full'
                    placeholder='กรุณาเลือกวันที่'
                    onChange={(e : any)=>{
                        onSetForm({
                          ...formValue,
                          date : e ? e.$d : null
                        })
                        onSearchHandler({
                          ...formValue,
                          date : e ? e.$d : null
                        })  
                    }}
                    autoFocus={false}
                />
            </span>
            <span className='flex w-2/12 bg-white h-full items-center justify-center rounded-lg shadow-sm'>
                <p className='text-gray-400 text-base'>ทั้งหมด</p>

            </span>
        </section>
  )
} 