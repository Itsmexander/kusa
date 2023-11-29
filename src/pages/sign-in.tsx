import { Button, Checkbox, Divider, Form, Input, Modal, Typography } from 'antd'
import { LockIcon, UserIcon } from 'lucide-react'
import { NextPage } from 'next'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

interface Props { }

const Signin: NextPage<Props> = () => {
    const [form] = Form.useForm()
    const { query } = useRouter();

    const onFinish = async (values: any) => {
        if (!form.getFieldValue("email") || !form.getFieldValue("password")) {
            Modal.error({
                title: 'Error',
                content: 'Please fill in all fields.',
            })
        }

        await signIn('credentials', {
            email: form.getFieldValue("email"),
            password: form.getFieldValue("password"),
            callbackUrl: query.callbackUrl as string
        })
    }

    return (
        <div className='min-h-screen flex justify-center items-center bg-gray-100'>
            <div className='flex flex-col max-w-sm w-full px-5'>
                <div className='text-xl font-bold'>Sign In KU<span>SA</span></div>
                <Divider />
                <Form form={form} onFinish={onFinish} initialValues={{ email: "test@ku.th", password: "123" }}>
                    <Form.Item name="email" required rules={[{ required: true }]}>
                        <Input prefix={<UserIcon size={20} />} size='large' placeholder='Email' />
                    </Form.Item>
                    <Form.Item name="password" required rules={[{ required: true }]}>
                        <Input prefix={<LockIcon size={18} />} size='large' placeholder='Password' />
                    </Form.Item>
                    {/* <Form.Item>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item> */}
                    <Form.Item>
                        <Button size='middle' type='primary' htmlType='submit'>
                            Sign In
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Signin