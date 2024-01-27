import React from 'react';
import { Layout } from 'antd';
import { NextPage } from 'next';
import { HomeIcon, PaperclipIcon, PieChartIcon, SearchIcon } from 'lucide-react';
import { useRouter } from 'next/router';
import HeaderComponent from '@/components/HeaderComponent';

interface Props {
    children: React.ReactNode;
}

const AntLayout: NextPage<Props> = ({ children }) => {
    const { push, pathname } = useRouter()

    const items: MenuInterface[] = [
        {
            key: '/',
            icon: <HomeIcon size={15} />,
            label: 'หน้าแรก',
            onClick: () => push('/'),
        },
        {
            key: '/dashboard',
            icon: <PieChartIcon size={15} />,
            label: 'ภาพรวม',
            onClick: () => push('/dashboard'),
        },
        {
            key: '/approve',
            icon: <PaperclipIcon size={15} />,
            label: 'อนุมัติโครงการ',
            onClick: () => push('/approve'),
        },
        {
            key: '/budget',
            icon: <SearchIcon size={15} />,
            label: 'จัดสรรงบ',
            onClick: () => push('/budget'),
        }
    ]

    const itemSelected = items.find((item) => item.key === pathname) ?? { label: pathname }
    const isCurrentPage = (key: string) => pathname === key

    return (
        <Layout className='min-h-screen w-screen relative flex flex-row bg-bg-base'>
            <div className='flex flex-col gap-3 bg-white w-[13rem] px-3 pt-5 fixed top-0 bottom-0 z-20'>
                <div>
                    <img src="/assets/logo.svg" alt="" />
                </div>
                <div className='flex flex-col gap-2'>
                    {items.map((item, id) => isCurrentPage(item.key) ? (
                        <a key={id} className='bg-primary text-2xl hover:text-white text-white rounded-lg flex justify-start items-center px-2 gap-2'>
                            {item.icon}
                            <div>{item.label}</div>
                        </a>
                    ) :
                        <a key={id} href={item.key}
                            onClick={(e) => {
                                e.preventDefault()
                                push(item.key)
                            }}
                            className='bg-white border-primary text-2xl hover:text-primary border border-inn text-primary rounded-lg flex justify-start items-center px-2 gap-2'>
                            {item.icon}
                            <div>{item.label}</div>
                        </a>)}
                </div>
            </div>
            <HeaderComponent itemSelected={itemSelected as MenuInterface} />
            <div className='flex flex-col w-full ml-[13rem] mt-[3.5rem]'>
                <div className='p-3 text-2xl'>
                    {children}
                </div>
                <div className='p-3 text-lg flex justify-between text-zinc-400 items-center'>
                    <div className="font-normal">สงวนลิขสิทธิ์ © 2023 กองพัฒนานิสิต มหาวิทยาลัยเกษตรศาสตร์ </div>
                    <div className='flex gap-2'>
                        <div>นโยบายคุ้มครองข้อมูล</div>
                        <div>●</div>
                        <div>เว็บไซต์</div>
                        <div>●</div>
                        <div>ติดต่อเรา</div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default AntLayout;