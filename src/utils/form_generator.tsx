import { Form, Input, Upload, message, Button } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';

type FormInputAttributes = {
    type: string;
    title: string;
    placeholder?: string;
    regex?: string;
    file_type?: string;
}

export default function FormGenerator(attributes: FormInputAttributes) {
    const FormInput = ({ type, title, placeholder, regex }: { type: string; title: string; placeholder?: string; regex?: string; }) => (
        <Form.Item className={`flex flex-col my-2 ${type === "number" ? "w-1/3" : ""}`}>
            <div>{title}</div>
            <Input placeholder={placeholder ? placeholder : title} type={type} pattern={regex ? regex : ""} />
        </Form.Item>
    )

    const FormDateInput = ({ type, title }: { type: string; title: string; }) => (
        <Form.Item className="flex flex-col my-2 w-1/4">
            <div>{title}</div>
            <Input type={type} />
        </Form.Item>
    )

    const FormImageUpload = ({ title, file_type }: { title: string; file_type: string }) => {
        const props: UploadProps = {
            beforeUpload: (file) => {
                const isValid = file.type === file_type;
                if (!isValid) {
                    message.error(`${file.name} is not a ${file_type} file`);
                }
                return isValid || Upload.LIST_IGNORE;
            },
            onChange: (info) => {
                console.log(info.fileList);
            },
            accept: file_type,
        };

        return (
            <Form.Item className="flex my-2 w-1/4">
                <div>{title}</div>
                <Upload {...props}>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
            </Form.Item>
        );
    };

    switch (attributes.type) {
        case "text":
        case "number":
            return <FormInput
                type={attributes.type}
                title={attributes.title}
                placeholder={attributes.placeholder}
                regex={attributes.regex}
            />
        case "date":
            return <FormDateInput
                type={attributes.type}
                title={attributes.title}
            />
        case "upload":
            return <FormImageUpload
                title={attributes.title}
                file_type={attributes.file_type!}
            />
    }
}