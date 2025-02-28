import React from 'react';
import { Layout } from 'antd';
import { NextPage } from 'next';
import { AreaChartIcon, CalendarDaysIcon, HomeIcon, ListChecksIcon, MegaphoneIcon, SendIcon, UserIcon } from 'lucide-react';
import { useRouter } from 'next/router';
import HeaderComponent from '@/components/HeaderComponent';
import Footer from '@/components/Footer';

interface Props {
    children: React.ReactNode;
}

const prefix = "/SD"

const SDLayout: NextPage<Props> = ({ children }) => {
    const { push, pathname } = useRouter()

    const items: MenuInterface[] = [
        {
            key: prefix,
            icon: <HomeIcon size={15} />,
            label: 'หน้าแรก',
            onClick: () => push(prefix),
        },
        {
            key: prefix + '/calendar',
            icon: <CalendarDaysIcon size={15} />,
            label: 'ปฏิทิน',
            onClick: () => push(prefix + '/calendar'),
        },
        {
            key: prefix + '/approve-project',
            icon: <ListChecksIcon size={15} />,
            label: 'อนุมัติโครงการ',
            onClick: () => push(prefix + '/approve-project'),
        },
        {
            key: prefix + '/profile',
            icon: <UserIcon size={15} />,
            label: 'หน้าโปรไฟล์',
            onClick: () => push(prefix + '/profile'),
        },
        {
            key: prefix + '/announce',
            icon: <MegaphoneIcon size={15} />,
            label: 'ประกาศ',
            onClick: () => push(prefix + '/announce'),
        }
    ]

    const itemSelected = items.find((item) => item.key === pathname) ?? { label: pathname }
    const isCurrentPage = (key: string) => pathname === key

    return (
        <Layout className='min-h-screen w-screen relative flex flex-row bg-bg-base'>
            <div className='flex flex-col gap-3 bg-white w-[15rem] px-3 pt-5 fixed top-0 bottom-0 z-20'>
                <div>
                    <img src="/assets/logo.svg" alt="" />
                    <div className='bg-primary text-white px-2 w-fit rounded-xl'>สำหรับ กองพัฒนานิสิต</div>
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
                                item.onClick()
                            }}
                            className='bg-white border-primary text-2xl hover:text-primary border border-inn text-primary rounded-lg flex justify-start items-center px-2 gap-2'>
                            {item.icon}
                            <div>{item.label}</div>
                        </a>)}
                </div>
            </div>
            <HeaderComponent itemSelected={itemSelected as MenuInterface} />
            <div className='flex flex-col w-full ml-[15rem] mt-[4.5rem] overflow-hidden'>
                <div className='p-3 text-2xl h-full'>
                    {children}
                </div>
                <Footer />
            </div>
        </Layout>
    );
}

export default SDLayout;