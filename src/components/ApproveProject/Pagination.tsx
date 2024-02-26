import React, { useState } from 'react'

import { Pagination } from 'antd'

type Props = {
  onPageChangeHandler : (page : number)=> void , 
  currentPage : number , 
  totalPage : number 
}

export default function PageSelecter({onPageChangeHandler , currentPage , totalPage}: Props) { 

  // const [pageStatus,onSetPage] = useState({
  //   currentPage : 1 ,
  // })

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
        />
    </section>
  )
} 