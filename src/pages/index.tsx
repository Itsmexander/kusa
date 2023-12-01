
import { signIn, signOut, useSession } from "next-auth/react";
"use client";
import Head from "next/head";
import Link from "next/link";

import { api } from "@/utils/api";
import { Pie } from "react-chartjs-2";
import dynamic from "next/dynamic";
import { ArcElement, Chart } from "chart.js";
import { Card, Timeline } from "antd";

Chart.register(ArcElement);

const AntLayout = dynamic(() => import('@/layouts/AntLayout'), { ssr: false })

export default function Home() {
    const hello = api.example.hello.useQuery({ text: "from tRPC" });

    return (
        <AntLayout title="Dashboard">
            <div className="flex flex-col w-full">
                <div className="flex justify-around gap-3">
                    <Card title="จำนวน กนส." bordered={false} className="w-full flex flex-col">
                        <div className="flex flex-col">
                            <div>กนส. 1</div>
                            <div className="max-w-[6rem]">
                                <Pie
                                    options={{
                                        responsive: true,
                                        plugins: {
                                            legend: {
                                                position: 'top',
                                            },
                                            title: {
                                                display: true,
                                                text: 'Chart.js Pie Chart'
                                            }
                                        }
                                    }}
                                    data={{
                                        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                                        datasets: [
                                            {
                                                label: '# of Votes',
                                                data: [12, 19, 3, 5, 2, 3],
                                                backgroundColor: [
                                                    'rgba(255, 99, 132, 0.2)',
                                                    'rgba(54, 162, 235, 0.2)',
                                                    'rgba(255, 206, 86, 0.2)',
                                                    'rgba(75, 192, 192, 0.2)',
                                                    'rgba(153, 102, 255, 0.2)',
                                                    'rgba(255, 159, 64, 0.2)',
                                                ],
                                                borderColor: [
                                                    'rgba(255, 99, 132, 1)',
                                                    'rgba(54, 162, 235, 1)',
                                                    'rgba(255, 206, 86, 1)',
                                                    'rgba(75, 192, 192, 1)',
                                                    'rgba(153, 102, 255, 1)',
                                                    'rgba(255, 159, 64, 1)',
                                                ],
                                                borderWidth: 1,
                                            },
                                        ],
                                    }} />
                            </div>

                        </div>
                        <div className="flex flex-col">
                            <div>กนส. 1</div>
                            <div className="max-w-[6rem]">
                                <Pie
                                    data={{
                                        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                                        datasets: [
                                            {
                                                label: '# of Votes',
                                                data: [12, 19, 3, 5, 2, 3],
                                                backgroundColor: [
                                                    'rgba(255, 99, 132, 0.2)',
                                                    'rgba(54, 162, 235, 0.2)',
                                                    'rgba(255, 206, 86, 0.2)',
                                                    'rgba(75, 192, 192, 0.2)',
                                                    'rgba(153, 102, 255, 0.2)',
                                                    'rgba(255, 159, 64, 0.2)',
                                                ],
                                                borderColor: [
                                                    'rgba(255, 99, 132, 1)',
                                                    'rgba(54, 162, 235, 1)',
                                                    'rgba(255, 206, 86, 1)',
                                                    'rgba(75, 192, 192, 1)',
                                                    'rgba(153, 102, 255, 1)',
                                                    'rgba(255, 159, 64, 1)',
                                                ],
                                                borderWidth: 1,
                                            },
                                        ],
                                    }} />
                            </div>

                        </div>
                    </Card>
                    <Card title="Timeline" bordered={false} className="w-full flex flex-col">
                        <Timeline
                            items={[
                                {
                                    children: 'Create a services site 2015-09-01',
                                },
                                {
                                    children: 'Solve initial network problems 2015-09-01',
                                },
                                {
                                    children: 'Technical testing 2015-09-01',
                                },
                                {
                                    children: 'Network problems being solved 2015-09-01',
                                },
                            ]}
                        />
                    </Card>
                </div>
            </div>
        </AntLayout>
    );
}

interface CardItemProps {
    title: string
    description: string
    img: string
}

// const CardItem: React.FC<CardItemProps> = ({ title, description, img }) => {
//   return (
//     <>
//       <Card
//         hoverable
//         cover={<img alt="example" src={img} className="bg-[#3D8F8C] h-[15rem] xl:h-[20rem]" />}
//         className="shadow-xl"
//       >
//         <Meta title={title} description={description} />
//       </Card>
//     </>
//   )
// }

// const Hero = () => {
//   return (
//     <>
//       <div className="h-[60%] w-full flex justify-evenly items-center bg-gradient-to-r from-[#2a5d5b] to-[#8c9216]">
//         <div className="grid gird-cols-2 shadow-2xl p-4 pb-7 bg-[#3D8F8C] rounded-tr-2xl rounded-bl-2xl">
//           <h1 className="font-bold text-9xl text-[#006C67] pb-2 text-center">KU</h1>
//           <h1 className="text-white text-center text-sm font-mono">KASETSART UNIVERSITY</h1>
//         </div>
//       </div>
//     </>
//   )
// }
