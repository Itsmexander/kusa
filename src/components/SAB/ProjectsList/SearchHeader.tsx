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
        <section  className='flex flex-row items-center w-full gap-x-[1.5vw] mb-[2vh]'>
            <span className="flex flex-row h-full w-full items-center bg-white rounded-lg px-[1vw] py-[0.5vh] gap-x-[1vw] shadow-sm text-gray-400">
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
            
        </section>
  )
} 