import React, { useState } from 'react'

import { Pagination } from 'antd'
import type { PaginationProps } from 'antd';

import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";



type Props = {
  onPageChangeHandler : (page : number)=> void , 
  currentPage : number , 
  totalPage : number 
}

export default function PageSelecter({onPageChangeHandler , currentPage , totalPage}: Props) { 

  // const [pageStatus,onSetPage] = useState({
  //   currentPage : 1 ,
  // })

  const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
    if (type === 'prev') {
      return (
        <p className='flex justify-center bg-secondary h-full items-center rounded-full'><GrFormPrevious/></p>
      )
    }
    if (type === 'next') {
      return (
        <p className='flex justify-center bg-secondary h-full items-center rounded-full'><GrFormNext/></p>
      )
    }if (type === "page") {
      return (
        <p className='flex justify-center bg-gray-300 h-full items-center rounded-full hover:bg-gray-300 active:bg-gray-300 border-none '>{originalElement}</p>
      )
    }
    else {
      return originalElement
    }
  }

  return (
    <section className='mt-[2vh]'>
        <Pagination
          defaultCurrent={1}
          total={totalPage*10}
          onChange={(page)=>{
            onPageChangeHandler(page) 
          }}
          current={currentPage}
          showSizeChanger={false}
          className='text-xl text-black font-semibold'

          //custom other prev/next btn or number btn
          itemRender={itemRender}
        />
    </section>
  )
} 