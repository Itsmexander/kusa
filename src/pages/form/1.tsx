import AntLayout from '@/layouts/AntLayout'
import { NextPage } from 'next'
import { Form } from "antd";
import FormGenerator from "@/utils/form_generator";

interface Props { }

const _1: NextPage<Props> = () => {
    return (
        <AntLayout>
            <Form className="m-5 grid">
                <FormGenerator type={"text"} title={"ชื่อองค์กรกิจกรรมนิสิต"} />
                <FormGenerator type={"text"} title={"โครงการ"} />
                <FormGenerator type={"text"} title={"สถานที่จัดโครงการ"} />
                <FormGenerator type={"date"} title={"วัน เดือน ปี"} />
                <FormGenerator type={"number"} title={"งบประมาณ"} placeholder={"จำนวนเงิน (บาท)"} />
                <FormGenerator type={"number"} title={"จำนวนเงินเหลือเพื่อส่งคืน"} placeholder={"จำนวนเงิน (บาท)"} />
                <FormGenerator type={"text"} title={"ปัญหาและอุปสรรค"} />
                <FormGenerator type={"text"} title={"ข้อเสนอแนะ"} />
                <FormGenerator type={"text"} title={"ผู้ยืมเงิน"} placeholder={"ประธานโครงการ"} />
                <FormGenerator type={"text"} title={"ประธานองค์กร"} />
                <FormGenerator type={"text"} title={"อาจารย์ที่ปรึกษาองค์กร"} />
            </Form>
        </AntLayout>
    )
}

export default _1