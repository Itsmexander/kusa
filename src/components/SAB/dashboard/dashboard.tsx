import React from 'react'

import { Select } from 'antd'
import dynamic from 'next/dynamic'


type Props = {}

const Chart = dynamic(() => import('@/components/Chart'), { ssr: false })


export default function BudgetBoard({}: Props) {
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    }

    return (
        <section className='flex flex-col w-full gap-y-[2vh] h-full'>
            <Select
                defaultValue="Kutech"
                onChange={handleChange}
                options={[
                    { value: 'kutech', label: 'Kutech' },
                    { value: 'lucy', label: 'Lucy' },
                    { value: 'Some Organization', label: 'Some Organization' },
                ]}
                className='w-full '
            />

            <div className=" bg-white rounded-2xl border border-gray-200 py-[2vh]">
                            <div className="flex flex-col">
                                <div className="text-center text-teal-700 text-2xl font-bold font-['DB Ozone X'] leading-10">งบประมาณของฉัน</div>

                            </div>
                            <div className="flex justify-center mb-2">
                                <div className="w-6 h-0.5 bg-secondary" />
                            </div>
                            <div className="flex flex-col mx-[2vw] ">
                                <div className="flex justify-between">
                                    <div>ทั้งหมด</div>
                                    <div>7,500,000.00 บาท</div>
                                </div>
                                <div className="flex justify-between">
                                    <div>เบิกไปแล้ว</div>
                                    <div>4,300,000.24 บาท</div>
                                </div>
                                <div className="flex justify-between">
                                    <div>คงเหลือ</div>
                                    <div>3,000,000.29 บาท</div>
                                </div>
                            </div>
            </div>
                <div className=" bg-white rounded-2xl border border-gray-200 px-5 py-3">
                    <div className="text-center text-teal-700 text-2xl font-bold font-['DB Ozone X'] leading-10">สถิติงบประมาณ</div>
                    <div className="flex justify-center mb-2">
                        <div className="w-6 h-0.5 bg-secondary" />
                    </div>
                    <div className="flex flex-col gap-5">
                        <Select defaultValue={"option1"}>
                            <Select.Option value="option1">งบประมาณทั้งหมด</Select.Option>
                        </Select>
                        <Chart />
                    </div>
                </div>
        </section>
  )
}