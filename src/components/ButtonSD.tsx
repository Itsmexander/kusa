import React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';

interface Props {
    color?: "primary" | "secondary";
    borderRadius?: number;
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    to?: string;
}

const ButtonSD = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
    const {push} = useRouter()
    const color = props.color === "primary" ? "bg-primary hover:bg-primary/80" : "bg-secondary hover:bg-secondary/80" ?? "bg-primary hover:bg-primary/80";
    const onTo = () => {
        if(props.to){
            push(props.to)
        }
    }
    return (
        <button
            onClick={props.to ? onTo : props.onClick}
            className={clsx(color, "w-full text-white font-bold py-2 px-4 rounded", props.className)}
            style={{ border: props.borderRadius ?? 0 }}
            ref={ref}
        >
            {props.children}
        </button>
    );
});

ButtonSD.displayName = 'ButtonSD';

export default ButtonSD;