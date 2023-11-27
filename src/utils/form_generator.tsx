import {Form, Input} from "antd";

type FormInputAttributes = {
    type: string;
    title: string;
    placeholder?: string;
    regex?: string;
}

export default function FormGenerator(attributes: FormInputAttributes) {
    const FormInput = ({ type, title, placeholder, regex }: { type: string; title: string; placeholder?: string; regex?: string; }) => (
        <Form.Item className={`flex flex-col my-2 ${type === "number" ? "w-1/3" : ""}`}>
            <div>{title}</div>
            <Input placeholder={placeholder ? placeholder : title} type={type} pattern={regex ? regex : ""} />
        </Form.Item>
    );

    const FormDateInput = ({ title }: { title: string; }) => (
        <Form.Item className="flex flex-col my-2 w-1/4">
            <div>{title}</div>
            <Input type="date" />
        </Form.Item>
    );

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
                title={attributes.title}
            />
    }
}