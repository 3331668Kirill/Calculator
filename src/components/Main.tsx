import React from "react";
import {Button} from "./button";
import {InputField} from "./input";

type TypeMainProps = {
    countNumb: string
    firstNumber: number
    defineNumber: (n: string) => void
    actionNumber: (a: string) => void
    actionEqual: () => void
    clearAll: () => void
}

export const Main = (props: TypeMainProps) => {


    return (
        <>
            <div>
                <InputField countNumb={props.countNumb}/>
            </div>
            <div> {props.firstNumber !== 0 ? props.firstNumber : '___'} </div>
            <div>
                <Button name={'1'} callback={() => props.defineNumber('1')}/>
                <Button name={'2'} callback={() => props.defineNumber('2')}/>
                <Button name={'3'} callback={() => props.defineNumber('3')}/>
                <Button name={'-'} callback={() => props.actionNumber('-')}/>
            </div>
            <div>
                <Button name={'4'} callback={() => props.defineNumber('4')}/>
                <Button name={'5'} callback={() => props.defineNumber('5')}/>
                <Button name={'6'} callback={() => props.defineNumber('6')}/>
                <Button name={'/'} callback={() => props.actionNumber('/')}/>
            </div>
            <div>
                <Button name={'7'} callback={() => props.defineNumber('7')}/>
                <Button name={'8'} callback={() => props.defineNumber('8')}/>
                <Button name={'9'} callback={() => props.defineNumber('9')}/>
                <Button name={'*'} callback={() => props.actionNumber('*')}/>
            </div>
            <div>
                <Button name={'0'} callback={() => props.defineNumber('0')}/>
                <Button name={'.'} callback={() => props.defineNumber('.')}/>
                <Button name={'+'} callback={() => props.actionNumber('+')}/>
                <Button name={'='} callback={props.actionEqual}/>
            </div>
            <div>
                <Button name={'AC'} callback={props.clearAll}/>
            </div>
        </>
    )
}