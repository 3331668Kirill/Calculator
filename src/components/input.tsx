import React, {ChangeEvent, KeyboardEvent} from "react";

type InputPropsType = {
    countNumb: string
    changeTitle?: (event: ChangeEvent<HTMLInputElement>) => void
    onKeyPressAddTask?: (event: KeyboardEvent<HTMLInputElement>) => void
}

export const InputField = ({countNumb, changeTitle, onKeyPressAddTask, ...props}: InputPropsType) => {

    return (
        <input
            style={{width: '80%', borderRadius:'20px',
                height:'50px', fontSize:'2rem',
                backgroundColor:'black',color:'white',
            textAlign:'right'}}
            value={countNumb}

        />

    )

}

