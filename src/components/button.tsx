import React from "react";

type TypeButtonProps = {
    name: string
    callback: () => void
    className?:string
}
export const Button = (props: TypeButtonProps) => {
    const onClickHandler = () => {
        props.callback()
    }
    return (
        <button className={props.className} onClick={onClickHandler}>{props.name}</button>
    )
}
