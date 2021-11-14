import React, {ChangeEvent, KeyboardEvent} from "react";

type InputPropsType = {
    countNumb: string
    changeTitle?: (event: ChangeEvent<HTMLInputElement>) => void
    onKeyPressAddTask?: (event: KeyboardEvent<HTMLInputElement>) => void


}

export const InputField = ({countNumb, changeTitle, onKeyPressAddTask, ...props}: InputPropsType) => {
    // const inp: any = useRef(null)
    // const onChange = () => {
    //     console.log(inp.current.value)
    //     inp.current.style.color = 'red'
    //
    // }
    return (
        <input
            //ref={inp}
            style={{width: '200px'}}
            value={countNumb}
            //onChange={onChange}
            //onKeyPress={onKeyPressAddTask}
        />

    )

}

// export function TextInputWithFocusButton() {
//     let ee: string | undefined =''
//     const inputEl:RefObject<HTMLInputElement>= useRef(null);
//     const onButtonClick = () => {
//         // `current` указывает на смонтированный элемент `input`
//         ee = inputEl.current?.value;
//         console.log(ee)
//         return ee
//     };
//     return (
//         <>
//             <input ref={inputEl} type="text" onChange={onButtonClick}/>
//             <div>{ee}</div>
//             <button onClick={onButtonClick}>поле ввода</button>
//         </>
//     );
// }