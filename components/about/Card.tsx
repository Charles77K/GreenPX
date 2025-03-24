import React from 'react'

interface IProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const Card:React.FC<IProps> = ({icon, title, description})=>{
    return(
        <div className={"bg-white w-full md:w-fit p-4 rounded-2xl flex flex-col items-start gap-2"}>
            <div>{icon}</div>
            <p className={"text-base md:text-2xl 2xl:text-4xl font-bold text-black w-full md:max-w-[15rem]"}>{title}</p>
            <p className={"text-sm md:text-base 2xl:text-lg w-full md:max-w-[13rem] text-brandGray"}>{description}</p>
        </div>
    )
}

export default Card;