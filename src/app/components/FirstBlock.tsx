import { firstBlockData } from '../data';
import Button from './Button';
import Image from 'next/image';

const { mainHeader, text } = firstBlockData;

const FirstBlock = () => {
  return (
    <div className="flex mt-[100px] justify-between w-[100vw] mb-[70px]">
      <div>
        <h1 className="text-[50px] max-w-[400px] leading-13 mb-[30px] ">
          {mainHeader}
        </h1>
        <p className="max-w-[465px] mb-[25px] text-[15px]">{text}</p>
        <div className="flex gap-[10px] mb-[40px]">
          <Button
            className={
              'rounded-[5px] bg-[#ffc44e] py-[12px] px-[20px] cursor-pointer text-black text-[12px] font-bold'
            }
            text={'Get started'}
          />
          <Button
            className={
              'rounded-[5px] bg-[#232524] py-[12px] px-[20px] cursor-pointer  text-[12px] font-bold'
            }
            text={'Learn more'}
          />
        </div>
        <div className="flex gap-[10px] items-center">
          <Image
            src="/companies_logos/someday_logo.png"
            alt="Someday logo"
            height={100}
            width={90}
          />
          <Image
            src="/companies_logos/accent_logo.png"
            alt="Accent logo"
            height={100}
            width={90}
          />
          <Image
            className="mt-[5px]"
            src="/companies_logos/irene_logo.png"
            alt="Irene logo"
            height={90}
            width={90}
          />
          <Image
            src="/companies_logos/na_logo.png"
            alt="Na logo"
            height={70}
            width={60}
          />
        </div>
      </div>

      <Image
        className="rounded-[10px]"
        src="/graph_pics/main_graphic_logo.png"
        alt="Main graphic logo"
        height={400}
        width={500}
      />
    </div>
  );
};

export default FirstBlock;
