'use client'
import React, { useEffect, useState } from 'react'

import AntLayout from '@/layouts/AntLayout'
import ProjectDetails from '@/interfaces/ProjectDetails'
import formValues from '@/interfaces/FormValues'

import ProjectList from '@/components/SAB/ProjectsList/ProjectList'
import SearchHearder from '@/components/SAB/ProjectsList/SearchHeader'
import PageSelecter from '@/components/SAB/ProjectsList/Pagination'
import BudgetBoard from '@/components/SAB/dashboard/dashboard'

export default function index() {

  const [currentData,onSetData] = useState({
    data : [
      {
          name: "Ku Hackathon",
          useBudget: true,
          organization: "Kutech",
          submitDate: "6 สิงหาคม 2566 เลา 09:10 น.",
          lastedUpdated: "10 สิงหาคม 2566 เลา 09:10 น.", // Example: 4 days later
          director: "นาย เคยู เคจัย"
      },
      {
          name: "การประชุมวิชาการ",
          useBudget: true,
          organization: "ภาควิชาวิศวกรรมดนตรี",
          submitDate: "6 สิงหาคม 2566 เวลา 09:10 น.",
          lastedUpdated: "14 สิงหาคม 2566 เวลา 09:10 น.", // Example: 8 days later
          director: "ดร. สมชาย ใจดี"
      },
      {
          name: "การประชุมวิทยาศาสตร์และนวัตกรรม",
          useBudget: false,
          organization: "ภาควิชาวิทยาศาสตร์",
          submitDate: "12 สิงหาคม 2565, เวลา 10:30 น.",
          lastedUpdated: "16 สิงหาคม 2565, เวลา 10:30 น.", // Example: 4 days later
          director: "ศศิธร พรหมสุข"
      },
      {
          name: "การแสดงเทคโนโลยีดนตรี",
          useBudget: true,
          organization: "วิทยาลัยเทคโนโลยีดนตรี",
          submitDate: "6 สิงหาคม 2566, เวลา 09:10 น.",
          lastedUpdated: "13 สิงหาคม 2566, เวลา 09:10 น.", // Example: 7 days later
          director: "ดร. ธีระ อินทรโมทิต"
      },
      ],
    currentPage : 1 , 
    totalPage : 1 ,
  })

  const [formVal,onSetForm] = useState({
    name : "",
    date : ""
  })

  //handler call to server expected data at page one back also restate page to 1 
  const onSearchHandler = (formValue : formValues)=>{
    onSearchtoServer(formValue)
  }
  const onSearchtoServer = async (formValue : formValues)=>{
    // console.log(formValue.date)
    // console.log(formValue.name)
    //set state for page change same props
    onSetForm({
      name : formValue.name,
      date : formValue.date
    }) 

    // two case handler fetch process wite date or just value 
    // api expect have parameters {formValue.name} and {formValue.date} return list of data 4 pieces seem better ui ****
    // const response  = await fetch('part with value requirement')

    // if (!response){
    //   throw new Error('Error')
    //   // get error page with status handler 
    // }
    // const result = await response.json()
    // // console.log(result)

    // console.log('set data here')
  const exampledata: ProjectDetails[] = [
      {
          name: "Innovation Conference",
          useBudget: false,
          organization: "School of Innovation, University of Technology",
          submitDate: "10 มกราคม 2567 เช้า 10:00 น.",
          lastedUpdated: "14 มกราคม 2567 เช้า 10:00 น.",
          director: "Prof. สมชาย สร้างสรรค์"
      },
      {
          name: "Music Engineering Symposium",
          useBudget: true,
          organization: "Department of Music Engineering, University of Arts",
          submitDate: "12 มีนาคม 2567 เย็น 16:30 น.",
          lastedUpdated: "18 มีนาคม 2567 เย็น 16:30 น.",
          director: "Dr. ณัฐ สุขสบาย"
      },
      {
          name: "Science and Innovation Expo",
          useBudget: true,
          organization: "Faculty of Science, University of Technology",
          submitDate: "5 เมษายน 2566 เช้า 09:00 น.",
          lastedUpdated: "10 เมษายน 2566 เช้า 09:00 น.",
          director: "Assoc. Prof. พรทิพย์ วิจิตรสมบูรณ์"
      },
      {
          name: "Technology Showcase",
          useBudget: false,
          organization: "College of Technology, University XYZ",
          submitDate: "20 กรกฎาคม 2566 เย็น 18:00 น.",
          lastedUpdated: "25 กรกฎาคม 2566 เย็น 18:00 น.",
          director: "Asst. Prof. สมศักดิ์ อินทรโมทิต"
      }
  ]
    onSetData({
      ...currentData,
      currentPage : 1,
      data : exampledata

    })
  }

  //handler interact with pagination
  const onPageChangeHandler = (targetPage : number )=>{
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrolls to the top of the page smoothly
    onPageChangeToServer(targetPage)
  }

  const onPageChangeToServer = async ( targetPage : number ) => {
    // fetch to target page per page have max 5 pieces
    // console.log(targetPage , formVal.name , formVal.date)
    // api expect have parameters {formValue.name} , {formValue.date} and {currentPage} return list of data 4 pieces starting at currentPage seem better ui ****

    // const response  = await fetch('')
    // if (!response){
    //   throw new Error('Error')
    //   // get error page with status handler 
    // }
    // const result = await response.json()
    // // console.log(result)
    const exampledata: ProjectDetails[] = [
      {
        name: "Robotics Competition",
        useBudget: true,
        organization: "Department of Robotics, University of Engineering",
        submitDate: "3 พฤศจิกายน 2567 เช้า 09:30 น.",
        lastedUpdated: "8 พฤศจิกายน 2567 เช้า 09:30 น.",
        director: "Prof. วิชุดา โรบอทส์"
      },
      {
        name: "Artificial Intelligence Seminar",
        useBudget: false,
        organization: "Center for AI Studies, Institute of Technology",
        submitDate: "15 ธันวาคม 2568 เย็น 17:00 น.",
        lastedUpdated: "20 ธันวาคม 2568 เย็น 17:00 น.",
        director: "Dr. ณรงค์ สร้างสรรค์"
      },
      {
        name: "Data Science Workshop",
        useBudget: true,
        organization: "Data Science Institute, University of Computer Science",
        submitDate: "27 มีนาคม 2568 เช้า 08:30 น.",
        lastedUpdated: "2 เมษายน 2568 เช้า 08:30 น.",
        director: "Assoc. Prof. ธนวรรธน์ ข้อมูล"
      },
      {
        name: "Software Engineering Hackathon",
        useBudget: true,
        organization: "Department of Software Engineering, Institute of Technology",
        submitDate: "10 สิงหาคม 2567 เย็น 19:00 น.",
        lastedUpdated: "15 สิงหาคม 2567 เย็น 19:00 น.",
        director: "Asst. Prof. สุรเชษฐ์ โค้ดสร้าง"
      }
    ];

    onSetData({
      ...currentData,
      currentPage : targetPage,
      data : exampledata
    })
  }
  // initial handler to see default all data on database 
  useEffect(()=>{
    //initial set total page to max pagination handler 
    // call to server to check how many data set we have when device and ceil by 5
    // api return in age amount
    onSetData({
      ...currentData , 
      totalPage : 7
    })
  },[])

  return (
    <AntLayout>
      <main className='flex flex-row h-[95%]  justify-between gap-x-[2vw] mr-[3vw] ml-[2vw]'>
        <section  className='w-4/12'>
          <BudgetBoard/>
        </section>
        <section className='flex flex-col items-center w-8/12'>
          <SearchHearder onSearchHandler={onSearchHandler} />
          <ProjectList data={currentData.data}/> 
          <footer className='flex items-center justify-center'>
            <PageSelecter onPageChangeHandler={onPageChangeHandler} currentPage={currentData.currentPage} totalPage={currentData.totalPage}/>        
          </footer>                
        </section>
    
      </main>
     
    </AntLayout>
  )
}
