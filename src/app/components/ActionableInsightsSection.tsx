import Image from 'next/image';
import { actionableInsightsSectionData } from '../data';

const ActionableInsightsSection = () => {
  return (
    <div className="mb-[40px] mt-[10px] ml-[40px] mr-[40px] sm:mb-[100px] sm:mt-[70px] sm:ml-[40px] sm:mr-[40px] md:ml-[30px] md:mr-[30px] lg:ml-[50px] lg:mr-[50px] xl:ml-[80px] xl:mr-[90px] 2xl:ml-0 2xl:mr-0">
      <h2 className="mb-[50px] text-[30px] sm:text-[40px]">
        Take action from insights
      </h2>
      <div className="block sm:grid sm:grid-cols-4 sm:grid-rows-5 sm:gap-4">
        {actionableInsightsSectionData.map((el) => (
          <div
            className={`${el.className} mb-[20px] w-[80vw] bg-[#171918] pl-[25px] relative content-end rounded-[10px]`}
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
              <p className="mb-[10px] text-[23px]">{el.header}</p>
              <p className="text-[#b6b6b6] text-[12px]">{el.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActionableInsightsSection;
