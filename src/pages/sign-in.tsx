import { Button, Checkbox, Divider, Form, Input, Typography } from 'antd'
import { LockIcon, UserIcon } from 'lucide-react'
import { NextPage } from 'next'

interface Props { }

const Signin: NextPage<Props> = () => {
    return (
        <div className='min-h-screen flex justify-center items-center bg-gray-100'>
            <div className='flex flex-col max-w-sm w-full px-5'>
                <div className='text-xl font-bold'>Sign In KU<span>SA</span></div>
                <Divider />
                <Form>
                    <Form.Item>
                        <Input prefix={<UserIcon size={20} />} size='large' placeholder='Email' />
                    </Form.Item>
                    <Form.Item>
                        <Input prefix={<LockIcon size={18} />} size='large' placeholder='Password' />
                    </Form.Item>
                    <Form.Item>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
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