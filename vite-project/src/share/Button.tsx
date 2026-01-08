import type { ButtonHTMLAttributes, FC } from "react";


type TButton = "default"|"border"|"dark"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    mode?:TButton
}
export const Button:FC<Props> = function Button(props){
    const {mode = "default",...rest}=props

    let bgButton = "bg-blue-400"
    let textColor = "text-white"
    if(mode == "dark"){
        bgButton = "bg-gray-800"
    }else if(mode == "border"){
        bgButton = "border bg-white border-gray-400"
        textColor = "text-gray-800"
    }

    return <button
    {...rest}
    className = {`rounded pb-2 pt-2 w-60 h-40 m-11  ${bgButton} ${rest.className}`}
    >
        <p className={`font-semibold ${textColor}`}>Тап тап</p>
    </button>
}