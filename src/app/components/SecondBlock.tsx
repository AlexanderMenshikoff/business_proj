import Image from 'next/image';
import { secondBlockData } from '../data';

const SecondBlock = () => {
  return (
    <div className="mb-[100px] mt-[70px]">
      <h2 className="text-[40px] mb-[50px]">Take action from insights</h2>
      <div className="grid grid-cols-4 grid-rows-5 gap-4">
        {secondBlockData.map((el) => (
          <div
            className={`${el.className} bg-[#171918] pl-[25px] relative content-end rounded-[10px]`}
            key={el.id}
          >
            <Image
              className="absolute top-[20px] left-[20px]"
              src={el.img}
              width={el.imgWidth}
              height={30}
              alt="block img"
            />
            <div className="mt-[60px] mb-[20px] pr-[20px]">
              <p className="text-[23px] mb-[10px]">{el.header}</p>
              <p className="text-[12px] text-[#b6b6b6]">{el.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondBlock;
