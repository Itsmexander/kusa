import React from 'react'

export default function Footer() {
    return (
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
    )
}
