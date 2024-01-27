import AntLayout from "@/layouts/AntLayout";
import ProfileCard from "./ProfileCard";

import { Menu } from 'antd';
import React from 'react';
import { Items } from "./InfoCard";

export default function userInfo() {
    return (
        <AntLayout>
            <div className="overflow-x-hidden p-10 w-[100%] h-[100vh]">
                <div className="w-full h-4/6 flex flex-col items-center">
                    <div className="w-3/6 mb-6 text-bold text-xl border-0 py-1 border-b-4 border-[#3D8F8C] text-[#3D8F8C]">User Information</div>
                    <div className="grid gap-4 xl:grid-cols-2 w-3/6 ">
                        <ProfileCard />
                        <div className="bg-white">
                                <Menu
                                    mode="inline"
                                    items={Items}
                                />
                        </div>
                    </div>
                </div>
            </div>
        </AntLayout>
    )
}