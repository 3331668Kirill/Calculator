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
            <div className={'buttons'}>
                <Button className={'btn one'} name={'1'} callback={() => props.defineNumber('1')}/>
                <Button className={'btn two'} name={'2'} callback={() => props.defineNumber('2')}/>
                <Button className={'btn three'} name={'3'} callback={() => props.defineNumber('3')}/>
                <Button className={'btn minus bg-orange'} name={'-'} callback={() => props.actionNumber('-')}/>
            </div>
            <div>
                <Button className={'btn four'} name={'4'} callback={() => props.defineNumber('4')}/>
                <Button className={'btn five'} name={'5'} callback={() => props.defineNumber('5')}/>
                <Button className={'btn six'} name={'6'} callback={() => props.defineNumber('6')}/>
                <Button className={'btn division bg-orange'} name={'/'} callback={() => props.actionNumber('/')}/>
            </div>
            <div>
                <Button className={'btn seven'} name={'7'} callback={() => props.defineNumber('7')}/>
                <Button className={'btn eight'} name={'8'} callback={() => props.defineNumber('8')}/>
                <Button className={'btn nine'} name={'9'} callback={() => props.defineNumber('9')}/>
                <Button className={'btn multiply bg-orange'} name={'*'} callback={() => props.actionNumber('*')}/>
            </div>
            <div>
                <Button className={'btn zero'} name={'0'} callback={() => props.defineNumber('0')}/>
                <Button className={'btn dot bg-grey'} name={'.'} callback={() => props.defineNumber('.')}/>
                <Button className={'btn plus bg-orange'} name={'+'} callback={() => props.actionNumber('+')}/>
                <Button className={'btn equal bg-orange'} name={'='} callback={props.actionEqual}/>
            </div>
            <div>
                <Button className={'btn ac bg-grey'} name={'AC'} callback={props.clearAll}/>
            </div>
        </>
    )
}