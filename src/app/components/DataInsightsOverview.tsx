import { companiesLogosData, dataInsightsOverviewData } from '../data';
import Button from './Button';
import Image from 'next/image';

const { mainHeader, text } = dataInsightsOverviewData;

const DataInsightsOverview = () => {
  return (
    <div className=" mt-[50px] sm:mt-[100px] gap-[50px]  mb-[70px] w-[100vw] sm:block md:ml-[30px] md:mr-[30px] md:flex lg:ml-[50px] lg:mr-[50px] xl:justify-around 2xl:justify-between 2xl:ml-0 2xl:mr-0">
      <div className=" w-[80vw] ml-auto mr-auto sm:ml-0 lg:w-[40vw] xl:w-[30vw] xl:ml-0 xl:mr-0 ">
        <h1 className="leading-10 text-[35px] max-w-[400px] mb-[30px] sm:ml-[40px] sm:text-[60px] sm:leading-13 md:text-[40px] md:leading-10 lg:ml-0 lg:text-[50px] lg:leading-13 ">
          {mainHeader}
        </h1>
        <p className="text-[12px] mb-[25px] sm:text-[15px] sm:ml-[40px] sm:max-w-[460px] md:max-w-[300px] lg:ml-0 lg:max-w-[465px] lg:text-[15px]  ">
          {text}
        </p>
        <div className="sm:flex sm:gap-[10px] sm:mb-[40px] sm:ml-[40px] md:mb-[20px] lg:ml-0 lg:mb-[40px]  ">
          <Button
            className={
              'w-[80vw] py-[12px] px-[20px] rounded-[5px] bg-[#ffc44e] cursor-pointer text-black  font-bold sm:w-auto sm:px-[15px] sm:py-[10px] sm:text-[12px] md:px-[15px] md:py-[10px] md:text-[10px] lg:py-[12px] lg:px-[20px] lg:text-[12px] '
            }
            text={'Get started'}
          />
          <Button
            className={
              'rounded-[5px] bg-[#232524] cursor-pointer font-bold w-[80vw] py-[12px] px-[20px] sm:w-auto sm:px-[15px] sm:py-[10px] sm:text-[12px] md:px-[15px] md:py-[10px] md:text-[10px] lg:py-[12px] lg:px-[20px] lg:text-[12px] '
            }
            text={'Learn more'}
          />
        </div>
        <div className="mt-[20px] mb-[20px] flex-wrap justify-center flex gap-[10px] items-center sm:mt-0 sm:justify-normal sm:flex-nowrap sm:mb-[40px] sm:ml-[40px] lg:ml-0 ">
        {companiesLogosData.map((logo) => (
                <Image
                    key={logo.id}
                    src={logo.src}
                    alt={logo.alt}
                    height={logo.height}
                    width={logo.width}
                    className={`md:w-[60px] 2xl:w-[80px] ${logo.className}`}
                />
            ))}
        </div>
      </div>

      <Image
        className="w-[80vw] ml-auto mr-auto rounded-[10px] sm:ml-auto sm:mr-auto md:w-[350px] md:h-[350px] xl:ml-0 xl:mr-0 lg:w-[35vw] xl:w-[30vw] 2xl:w-[30vw] 2xl:h-[500px]"
        src="/graph_pics/main_graphic_logo.png"
        alt="Main graphic logo"
        height={400}
        width={500}
      />
    </div>
  );
};

export default DataInsightsOverview;
