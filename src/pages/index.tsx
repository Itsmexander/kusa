
import { signIn, signOut, useSession } from "next-auth/react";
"use client";
import Head from "next/head";
import Link from "next/link";

import { api } from "@/utils/api";
import { Pie } from "react-chartjs-2";
import dynamic from "next/dynamic";
import { ArcElement, Chart } from "chart.js";
import { Card, Timeline } from "antd";
import { AlertTriangleIcon, CompassIcon } from "lucide-react";

Chart.register(ArcElement);

const AntLayout = dynamic(() => import('@/layouts/AntLayout'), { ssr: false })

export default function Home() {
    const hello = api.example.hello.useQuery({ text: "from tRPC" });

    return (
        <AntLayout>
            <div className="flex flex-col gap-3">
                <div className="gap-5 grid grid-cols-3">
                    <div className="py-3 w-full bg-rose-50 justify-center rounded-2xl border border-rose-600 flex items-center gap-5" >
                        <AlertTriangleIcon className="text-rose-600" size={50} />
                        <div className="flex flex-col items-center justify-center">
                            <div className="text-4xl font-bold text-rose-600 leading-6">120</div>
                            <div className="leading-6">แก้ไข</div>
                        </div>
                    </div>
                    <div className="p-2 w-full bg-amber-50 justify-center rounded-2xl border border-amber-300 flex items-center gap-5" >
                        <CompassIcon className="text-amber-300" size={50} />
                        <div className="flex flex-col items-center justify-center">
                            <div className="text-4xl font-bold text-amber-300 leading-6">72</div>
                            <div className="leading-6">พิจารณา</div>
                        </div>
                    </div>
                    <div className="p-2 w-full bg-green-50 justify-center rounded-2xl border border-green-400 flex items-center gap-5" >
                        <AlertTriangleIcon className="text-green-400" size={50} />
                        <div className="flex flex-col items-center justify-center">
                            <div className="text-4xl font-bold text-green-400 leading-6">120</div>
                            <div className="leading-6">เสร็จสิ้น</div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-5">
                    <div className="flex flex-col gap-3">
                        <div className=" bg-white rounded-2xl border border-gray-200 px-5 py-3">
                            <div className="text-center text-teal-700 text-2xl font-bold font-['DB Ozone X'] leading-10">งบประมาณของฉัน</div>
                            <div className="flex flex-col">
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
                            <div className="flex flex-col">
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
                    </div>
                    <div className="col-span-2 bg-white rounded-2xl border border-gray-200 px-5 py-3">
                        <div className="text-center text-teal-700 text-2xl font-bold font-['DB Ozone X'] leading-10">งบประมาณของฉัน</div>
                        <div className="flex flex-col">
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

                </div>
            </div>

        </AntLayout>
    );
}