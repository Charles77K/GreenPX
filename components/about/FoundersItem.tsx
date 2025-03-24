import React from 'react'
import Image from "next/image";

export interface IFoundersItemProps {
    imageUrl: string;
    name: string;
    role: string;
    description: string;
}

const FoundersItem: React.FC<IFoundersItemProps> = ({imageUrl, name, role, description}) => {
    return (
        <div className={"flex flex-col items-start gap-3"}>
            <Image src={imageUrl}  alt={name} width={100} height={100}/>
            <div>
            <h2 className={"text-xl md:text-2xl 2xl:text-3xl font-bold text-black"}>{name}</h2>
            <p className={"text-brandGreen text-sm md:text-base 2xl:text-lg"}>{role}</p>
            </div>
            <p className={"text-sm font-medium text-brandGray 2xl:text-base max-w-md leading-loose"}>{description}</p>
        </div>
    )
}

export default FoundersItem