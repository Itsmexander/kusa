import { api } from "@/utils/api";
import dynamic from "next/dynamic";
import { Input, Select, Table, Tag } from "antd";
import { AlertTriangleIcon, CheckIcon, CompassIcon, InfoIcon, PencilIcon } from "lucide-react";
import AntLayout from "@/layouts/AntLayout";
import { useState } from "react";
import CLUBLayout from "@/layouts/CLUBLayout";

enum Status {
    Success = "สำเร็จ",
    Edit = "แก้ไข",
}
const data = [
    {
        key: "1",
        name: " โครงการเคยู แฮกกาฮอน ครั้งที่ 1",
        status: Status.Edit,
        date: "2024-01-27T07:52:35.736Z",
        last_update: {
            date: "2024-01-27T07:52:35.736Z",
            updater: "laddawan.s@ku.th"
        },
    },
    {
        key: "1",
        name: " โครงการเคยู แฮกกาฮอน ครั้งที่ 1",
        status: Status.Success,
        date: "2024-01-27T07:52:35.736Z",
        last_update: {
            date: "2024-01-27T07:52:35.736Z",
            updater: "laddawan.s@ku.th"
        },
    },

]


// const AntLayout = dynamic(() => import('@/layouts/AntLayout'), { ssr: false })
const Chart = dynamic(() => import('@/components/Chart'), { ssr: false })

export default function Dashboard() {
    const [dataSource, setDataSource] = useState(data);
    const [value, setValue] = useState('');

    // const FilterByNameInput = (
    //     <Input
    //       placeholder="Search Name"
    //       value={value}
    //       onChange={e => {
    //         const currValue = e.target.value;
    //         setValue(currValue);
    //         const filteredData = data.filter(entry =>
    //           entry.name.includes(currValue)
    //         );
    //         setDataSource(filteredData);
    //       }}
    //     />
    //   );

    return (
        <>
            <div className="flex flex-col gap-3">
                <div className="gap-5 grid grid-cols-3">
                    <div className="py-5 w-full bg-rose-50 justify-center rounded-2xl border border-rose-600 flex items-center gap-5" >
                        <AlertTriangleIcon className="text-rose-600" size={50} />
                        <div className="flex flex-col items-center justify-center">
                            <div className="text-5xl font-bold text-rose-600 leading-7">120</div>
                            <div className="text-2xl">แก้ไข</div>
                        </div>
                    </div>
                    <div className="py-5 w-full bg-amber-50 justify-center rounded-2xl border border-amber-300 flex items-center gap-5" >
                        <CompassIcon className="text-amber-300" size={50} />
                        <div className="flex flex-col items-center justify-center">
                            <div className="text-5xl font-bold text-amber-300 leading-7">72</div>
                            <div className="text-2xl">พิจารณา</div>
                        </div>
                    </div>
                    <div className="py-5 w-full bg-green-50 justify-center rounded-2xl border border-green-400 flex items-center gap-5" >
                        <CheckIcon className="text-green-400" size={50} />
                        <div className="flex flex-col items-center justify-center">
                            <div className="text-5xl font-bold text-green-400 leading-7">120</div>
                            <div className="text-2xl">เสร็จสิ้น</div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-5">
                    <div className="flex flex-col gap-3">
                        <div className=" bg-white rounded-2xl border border-gray-200 px-5 py-3">
                            <div className="flex flex-col">
                                <div className="text-center text-teal-700 text-2xl font-bold font-['DB Ozone X'] leading-10">งบประมาณของฉัน</div>

                            </div>
                            <div className="flex justify-center mb-2">
                                <div className="w-6 h-0.5 bg-secondary" />
                            </div>
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
                            <div className="flex justify-center mb-2">
                                <div className="w-6 h-0.5 bg-secondary" />
                            </div>
                            <div className="flex flex-col gap-5">
                                <Select defaultValue={"option1"}>
                                    <Select.Option value="option1">งบประมาณทั้งหมด</Select.Option>
                                </Select>
                                <Chart />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 bg-white rounded-2xl border border-gray-200 px-5 py-3">
                        <div className="text-center text-teal-700 text-2xl font-bold font-['DB Ozone X'] leading-10">โครงการของฉัน</div>
                        <div className="flex justify-center mb-2">
                            <div className="w-6 h-0.5 bg-secondary" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <Input
                                placeholder="ค้นหาโครงการ..."
                                style={{
                                    fontFamily: "DB Ozone X",
                                    fontSize: "1.3rem"
                                }}
                                value={value}
                                onChange={e => {
                                    const currValue = e.target.value;
                                    setValue(currValue);
                                    const filteredData = data.filter(entry =>
                                        entry.name.includes(currValue)
                                    );
                                    setDataSource(filteredData);
                                }}
                            />
                            <Table
                                pagination={{ defaultPageSize: 3, showSizeChanger: true, pageSizeOptions: ['10', '20', '30'] }}
                                size="large"
                                style={{
                                    fontSize: "20rem"
                                }}
                                columns={
                                    [
                                        {
                                            title: "ลำดับที่",
                                            dataIndex: "key",
                                            key: "key"
                                        },
                                        {
                                            title: "ชื่อโครงการ",
                                            dataIndex: "name",
                                            key: "name"
                                        },
                                        {
                                            title: "สถานะ",
                                            dataIndex: "status",
                                            render: (value) => value === Status.Success ? <Tag
                                                style={{
                                                    fontFamily: "DB Ozone X",
                                                    fontSize: "1rem"
                                                }}
                                                color="green"
                                            >{value}</Tag> : <Tag style={{
                                                fontFamily: "DB Ozone X",
                                                fontSize: "1rem"
                                            }} color="error">{value}</Tag>
                                        },
                                        {
                                            title: "วันที่ส่ง",
                                            dataIndex: "date",
                                            render: (value) => <div>{new Date(value).toLocaleString("th-TH")}</div>
                                        },
                                        {
                                            title: "อัปเดตล่าสุด",
                                            dataIndex: "last_update",
                                            render: (value) => (
                                                <div>
                                                    <div>{new Date(value.date).toLocaleString("th-TH")}</div>
                                                    <div>{value.updater}</div>
                                                </div>
                                            )
                                        },
                                        {
                                            title: "ดำเนินการ",
                                            dataIndex: "action",
                                            render: () => <div className="flex gap-2">
                                                <button className="bg-sky-500 p-1 rounded-lg">
                                                    <InfoIcon size={20} className="text-white" />
                                                </button>
                                                <button className="bg-amber-300 p-1 rounded-lg">
                                                    <PencilIcon size={20} className="text-white" />
                                                </button>
                                            </div>
                                        }
                                    ]
                                }
                                dataSource={dataSource}
                            />
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}