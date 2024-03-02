import AntLayout from '@/layouts/AntLayout'
import { NextPage } from 'next'
import { Form } from "antd";
import FormGenerator from "@/utils/form_generator";

interface Props { }

const _1: NextPage<Props> = () => {
    return (
        <>
            <Form className="m-5 grid">
                <FormGenerator type={"text"} title={"ชื่อองค์กรกิจกรรมนิสิต"} />
                <FormGenerator type={"text"} title={"ที่ออกหนังสือ"} />
                <FormGenerator type={"date"} title={"วัน เดือน ปี (ที่ออกหนังสือ)"} />
                <FormGenerator type={"text"} title={"โครงการ"} />
                <FormGenerator type={"date"} title={"วัน เดือน ปี (ที่จัดโครงการ)"} />
                <FormGenerator type={"text"} title={"สถานที่จัดโครงการ"} />
                <FormGenerator type={"number"} title={"จำนวนเงิน"} placeholder={"จำนวนเงิน (บาท)"} />
                <FormGenerator type={"text"} title={"เหรัญญิก องค์กร"} />
                <FormGenerator type={"text"} title={"ประธานองค์กร"} />
                <FormGenerator type={"text"} title={"อาจารย์ที่ปรึกษาองค์กร"} />
                <FormGenerator type={"text"} title={"ผู้ยืมเงิน"} />
                <FormGenerator type={"upload"} title={"Upload"} file_type={".pdf"} />
            </Form>
        </>
    )
}

export default _1