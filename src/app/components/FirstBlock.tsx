import {firstBlockData} from "../data"
import Button from "./Button"
import Image from 'next/image';

const {mainHeader, text} = firstBlockData

const FirstBlock = () => {
    return(
        <div className="flex mt-[100px] justify-between w-[100vw]">
            <div>
                <h1 className="text-[60px] max-w-[400px] leading-13 mb-[30px]">{mainHeader}</h1>
                <p className="max-w-[490px] mb-[25px]">{text}</p>
                <div className="flex gap-[10px] mb-[40px]">
                <Button className={"rounded-[5px] bg-[#ffc44e] py-[10px] px-[25px] cursor-pointer text-black"} text={"Get started"}/>
                <Button className={"rounded-[5px] bg-[#232524] py-[10px] px-[25px] cursor-pointer"} text={"Learn more"}/>
                </div>
                <div className="flex gap-[10px] items-center">
                    <Image src="/someday_logo.png" alt= "Someday logo" height={100} width={100}/>
                    <Image src="/accent_logo.png" alt= "Accent logo" height={100} width={100}/>
                    <Image className="mt-[5px]" src="/irene_logo.png" alt= "Irene logo" height={90} width={90}/>
                    <Image src="/na_logo.png" alt= "Na logo" height={70} width={70}/>
                </div>
            </div>
            
            <Image className="rounded-[10px]"src="/main_graphic_logo.png" alt="Main graphic logo" height={500} width={600}/>
        </div>
    )
}

export default FirstBlock