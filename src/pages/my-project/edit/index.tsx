import { useState } from "react";
// import { projectForm } from "@/interfaces/inputFormProject";

import AntLayout from "@/layouts/AntLayout";
import { FiCalendar } from "react-icons/fi";


import { DatePicker, Input } from "antd";



export default function NextPage() {
    const [formData , setFormData] = useState<any>({
        name : "",
        bookNumber : "" , 
        bookDate : "" , 
        startProjectDate : "" ,
        endProjectDate : "" , 
        location : "" , 
        amount : null
    })

    const [isFormValid, setFormValid] = useState({
        name :false,
        bookNumber : false , 
        bookDate : false , 
        startProjectDate : false ,
        endProjectDate : false , 
        location : false , 
        amount : false
    })

    const onSubmitHandler = (e : React.FormEvent)=>{
        e.preventDefault()
        setFormData({
            name : "",
            bookNumber : "" , 
            bookDate : null , 
            startProjectDate : null ,
            endProjectDate : null , 
            location : "" , 
            amount : 0
        })
        console.log(formData)
    }

    return (
        <AntLayout>
            <div className="flex flex-col p-20 ">
                <div className="flex flex-col bg-white border-2 border-teal-700 shadow-lg rounded-xl py-5 px-20">
                    <div className="flex flex-row w-full items-center mb-5">
                        <button className="w-2/12 rounded-2xl border-2 border-teal-800">
                            <p className="text-teal-800 text-xl">{`<<ย้อนกลับ`}</p>
                        </button>
                        <header className="w-10/12 flex flex-col items-center">
                            <h1 className="text-2xl font-semibold text-teal-800 tracking-wide leading-relaxed">
                                สร้าง/แก้ไข โครงการ
                            </h1>
                        </header>
                    </div>
                    <form 
                        onSubmit={onSubmitHandler}
                        className="w-full h-full mb-[2vh]">
                        <ul className="gap-y-">
                            <li className="flex flex-row justify-between w-full items-center mb-5">
                                <h2 className="font-medium text-2xl">ชื่อโครงการ</h2>
                                <span className="w-7/12  bg-neutral-100 rounded-lg border-2 border-solid border-neutral-300">
                                    <input
                                        placeholder="กรุณากรอกชื่อโครงการ"
                                        className="bg-transparent w-full outline-none px-[1.5vw] text-xl font-normal"
                                        value={formData.name}
                                        onChange={(e)=>{
                                            setFormData(()=>({
                                                ...formData,
                                                name : e.target.value
                                            }))
                                        }}
                                    />
                                </span>
                            </li>
                            <li className="flex flex-row justify-between w-full items-center mb-5">
                                <h2 className="font-medium text-2xl">เลขที่ออกหนังสือ</h2>
                                <span className="w-7/12  bg-neutral-100 rounded-lg border-2 border-solid border-neutral-300">
                                    <input
                                        placeholder="กรุณากรอกเลขที่ออกหนังสือ"
                                        className="bg-transparent w-full outline-none px-[1.5vw] text-xl font-normal"
                                        value={formData.bookNumber}
                                        onChange={(e)=>{
                                            setFormData(()=>({
                                                ...formData,
                                                bookNumber : e.target.value
                                            }))
                                        }}
                                    />
                                </span>
                            </li>
                            <li className="flex flex-row justify-between w-full items-center mb-5">
                                <h2 className="font-medium text-2xl">วัน เดือน ปี (ออกหนังสือ)</h2>
                                <DatePicker
                                    className="w-7/12 font-medium text-xl text-teal-500 bg-neutral-100 border-solid border-2 border-neutral-300 pl-[1.5vw] hover:border-neutral-300 active:border-neutral-300 focus:border-neutral-300"
                                    placeholder="กรุณาเลือกวันเดือนปี"
                                    onChange={(e : any)=>{
                                        setFormData(()=>({
                                            ...formData,
                                            bookDate : e.$d
                                        }))                                    
                                    }}
                                    style={{ fontFamily: '', fontSize: '60px' }}
                                />
                    
                            </li>
                            <li className="flex flex-row justify-between w-full items-center mb-5">
                                <h2 className="font-medium text-2xl">วัน เดือน ปี (จัดโครงการ)</h2>
                                <div className="flex flex-row w-7/12 gap-x-[0.5vw]">
                                </div>
                            </li>     
                            <li className="flex flex-row justify-between w-full items-center mb-5">
                                <h2 className="font-medium text-2xl">สถานที่จัดโครงการ</h2>
                                <span className="w-7/12  bg-neutral-100 rounded-lg border-2 border-solid border-neutral-300">
                                    <input
                                        placeholder="กรุณาระบุสถานที่จัดโครงการ"
                                        className="bg-transparent w-full outline-none px-[1.5vw] text-xl font-normal"
                                        value={formData.location}
                                        onChange={(e)=>{
                                            setFormData(()=>({
                                                ...formData,
                                                location : e.target.value
                                            }))
                                        }}
                                    />
                                </span>
                            </li>
                            <li className="flex flex-row justify-between w-full items-center mb-7">
                                <h2 className="font-medium text-2xl">จำนวนเงิน</h2>
                                <span className="w-7/12  bg-neutral-100 rounded-lg border-2 border-solid border-neutral-300">
                                    <input
                                        placeholder="กรุณาระบุจำนวนเงิน"
                                        className="bg-transparent w-full outline-none px-[1.5vw] text-xl font-normal"
                                        type="number"
                                        value={formData.amount}
                                        onChange={(e)=>{
                                            setFormData(()=>({
                                                ...formData,
                                                amount : e.target.value
                                            }))
                                        }}
                                    />
                                </span>
                            </li>                                                                
                        </ul>
                        <div className="flex justify-center ">
                            <button 
                                className=" bg-teal-800 py-[0.25vh] px-[3vw] text-white text-xl rounded-lg"
                                type='submit'    
                            >
                                บันทึก
                            </button>                            
                        </div>

                    </form>
                </div>
            </div>
        </AntLayout>
    );
}