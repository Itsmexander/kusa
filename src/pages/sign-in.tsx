import { Button, Checkbox, Divider, Form, Input, Modal, Typography } from 'antd'
import { LockIcon, UserIcon } from 'lucide-react'
import { NextPage } from 'next'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

interface Props { }

const Signin: NextPage<Props> = () => {
    // const [form] = Form.useForm()
    const { query } = useRouter();

    const onFinish = async (values: any) => {
        // if (!form.getFieldValue("email") || !form.getFieldValue("password")) {
        //     Modal.error({
        //         title: 'Error',
        //         content: 'Please fill in all fields.',
        //     })
        // }

        // await signIn('credentials', {
        //     email: form.getFieldValue("email"),
        //     password: form.getFieldValue("password"),
        //     callbackUrl: query.callbackUrl as string
        // })
        await signIn('credentials', {
            email: "test@ku.th",
            password: "123",
            callbackUrl: query.callbackUrl as string
        })
    }

    return (
        <div className='min-h-screen flex justify-center items-center '>
            <div className="px-16 flex gap-10 flex-col py-10 bg-white bg-opacity-70 rounded-2xl border border-neutral-400 backdrop-blur-sm">
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
                    <button onClick={async () => {
                        await signIn('credentials', {
                            email: "test@ku.th",
                            password: "123",
                            callbackUrl: query.callbackUrl as string
                        })
                    }} className="px-3.5 py-1 bg-primary rounded-lg shadow gap-2 inline-flex items-center justify-center">
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
                    <div className="px-3.5 py-1 bg-secondary rounded-lg shadow gap-2 inline-flex items-center justify-center">
                        <div className="items-center text-white text-xl gap-2 font-bold font-['DB Ozone X'] leading-snug flex">
                            <div className='p-1 h-fit bg-white rounded-full'>
                                <img className="w-4 h-4 " src="/assets/google_logo.svg" />
                            </div>
                            <div>
                                เข้าสู่ระบบด้วย Google @ku.th
                            </div>
                        </div>
                    </div>
                    {/* <div className="px-3.5 py-1 bg-secondary rounded-lg shadow justify-center items-center gap-2 inline-flex">
                        <div className="text-center text-white text-xl font-bold font-['DB Ozone X'] leading-snug">เข้าสู่ระบบด้วย Google @ku.th</div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Signin