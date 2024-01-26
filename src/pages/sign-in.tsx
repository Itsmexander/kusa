import { NextPage } from 'next'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

interface Props { }

const Signin: NextPage<Props> = () => {
    // const [form] = Form.useForm()
    const { query } = useRouter();


    const onSignIn = async () => {
        await signIn('credentials', {
            email: "test@ku.th",
            password: "123",
            callbackUrl: query.callbackUrl as string
        })
    }

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="md:px-16 flex gap-10 flex-col py-10 bg-white bg-opacity-70 z-10 rounded-2xl border border-neutral-400 backdrop-blur-sm">
                <div className='flex gap-4 items-center justify-center'>
                    <div className='flex-1'>
                        <img className="w-16 h-16" src="/assets/KULogo.svg" />
                    </div>
                    <div className='flex flex-col justify-around'>
                        <div className="flex gap-3">
                            <span className="text-primary text-7xl font-bold leading-10">SD </span>
                            <span className="text-black text-7xl font-bold leading-10">Online</span>
                        </div>
                        <div className="flex text-neutral-700 font-medium">
                            ระบบอนุมัติโครงการออนไลน์
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <button onClick={onSignIn} className="px-3.5 py-1 bg-primary hover:bg-primary/90 rounded-lg shadow gap-2 inline-flex items-center justify-center">
                        <div className="items-center text-white text-xl gap-2 font-bold font-['DB Ozone X'] leading-snug flex">
                            <div className='p-1 h-fit bg-white rounded-full'>
                                <img className="w-4 h-4 " src="/assets/KULogo.svg" />
                            </div>
                            <div>
                                เข้าสู่ระบบด้วย KU All Login
                            </div>
                        </div>
                    </button>
                    <div className="w-full flex items-center gap-5">
                        <div className="w-full h-[1px] bg-black"></div>
                        <div className='flex-1'>
                            <div className='h-10 w-10 flex items-center justify-center rounded-full bg-neutral-500 text-white'>
                                OR
                            </div>
                        </div>
                        <div className="w-full h-[1px] bg-black"></div>
                    </div>
                    <div className="px-3.5 py-1 bg-secondary hover:bg-secondary/90 cursor-pointer rounded-lg shadow gap-2 inline-flex items-center justify-center">
                        <div className="items-center text-white text-xl gap-2 font-bold font-['DB Ozone X'] leading-snug flex">
                            <div className='p-1 h-fit bg-white rounded-full'>
                                <img className="w-4 h-4 " src="/assets/google_logo.svg" />
                            </div>
                            <div>
                                เข้าสู่ระบบด้วย Google @ku.th
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='absolute text-white bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-10'>
                <div className='flex gap-2'>
                    <div>นโยบายคุ้มครองข้อมูล</div>
                    <div>●</div>
                    <div>เว็บไซต์</div>
                    <div>●</div>
                    <div>ติดต่อเรา</div>
                </div>
                <div className='text-sm'>สงวนลิขสิทธิ์ © 2023 กองพัฒนานิสิต มหาวิทยาลัยเกษตรศาสตร์</div>
            </div>
            <div className='fixed bottom-0 z-0 right-0 left-0'>
                <img src="/assets/green_wave.svg" className='w-full' alt="" />
            </div>
            <div className='fixed top-[4rem] z-0 flex justify-center'>
                <img src="/assets/sign_in_element.svg" className='w-[60rem]' alt="" />
            </div>
            <div className="w-9 h-9 p-2.5 bg-white rounded-full shadow justify-center items-center gap-2.5 inline-flex fixed z-20 bottom-7 right-7">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.9373 3.38955C10.7185 2.91143 10.4076 2.48174 10.0107 2.11455C9.20444 1.36611 8.13413 0.953613 6.99976 0.953613C5.86538 0.953613 4.79507 1.36611 3.98882 2.11299C3.59194 2.48174 3.28101 2.90986 3.06226 3.38955C2.83413 3.88955 2.71851 4.41924 2.71851 4.96611V5.38799C2.71851 5.48486 2.79663 5.56299 2.89351 5.56299H3.73726C3.83413 5.56299 3.91226 5.48486 3.91226 5.38799V4.96611C3.91226 3.41143 5.29663 2.14736 6.99976 2.14736C8.70288 2.14736 10.0873 3.41143 10.0873 4.96611C10.0873 5.60361 9.86069 6.20361 9.43101 6.70361C9.00601 7.19893 8.40601 7.55361 7.74194 7.70361C7.36226 7.78955 7.02007 8.00361 6.77788 8.30986C6.53654 8.61507 6.40499 8.99264 6.40444 9.38174V9.87236C6.40444 9.96924 6.48257 10.0474 6.57944 10.0474H7.42319C7.52007 10.0474 7.59819 9.96924 7.59819 9.87236V9.38174C7.59819 9.13643 7.76851 8.9208 8.00444 8.86768C8.91694 8.66143 9.74507 8.16924 10.3373 7.48174C10.6357 7.1333 10.8685 6.7458 11.0294 6.32549C11.1966 5.88955 11.281 5.43174 11.281 4.96611C11.281 4.41924 11.1654 3.88799 10.9373 3.38955V3.38955ZM6.99976 11.2974C6.51694 11.2974 6.12476 11.6896 6.12476 12.1724C6.12476 12.6552 6.51694 13.0474 6.99976 13.0474C7.48257 13.0474 7.87476 12.6552 7.87476 12.1724C7.87476 11.6896 7.48257 11.2974 6.99976 11.2974Z" fill="black" fill-opacity="0.85" />
                </svg>

            </div>
        </div>
    )
}

export default Signin