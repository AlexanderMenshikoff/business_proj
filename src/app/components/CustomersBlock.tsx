import Image from 'next/image';
import { customersBlockData } from '../data';

const CustomersBlock = () => {
  return (
    <div className="mt-[50px] md:ml-[30px] md:mr-[30px] md:mb-[25px] lg:ml-[50px] lg:mr-[50px] lg:mb-[100px] xl:ml-[80px] xl:mr-[90px] 2xl:ml-0 2xl:mr-0">
      <h2 className="mb-[25px] ml-[40px] text-[25px] sm:ml-[40px] sm:text-[40px] md:ml-0 2xl:ml-0">
        Kind words from customers
      </h2>
      <div className="block md:flex gap-[10px]">
        {customersBlockData.map((el) => {
          return (
            <div
              key={el.id}
              className="mr-[30px] ml-[30px] mb-[20px] bg-[#171918] rounded-[15px] flex flex-wrap sm:ml-[40px] sm:mr-[40px] sm:mb-[20px] md:ml-0 md:mr-0 md:w-[30vw] md:h-[65vh] md:text-[12px] lg:w-[28vw] lg:h-auto 2xl:ml-0 2xl:mr-[15px] 2xl:min-w-[320px] 2xl:w-auto "
            >
              <Image
                className="pl-[30px] mb-[20px] mt-[30px]"
                src={el.companyLogo}
                alt="company logo"
                width={el.companyLogoWidth}
                height={30}
              />
              <p className="pl-[30px] mb-[20px] pr-[25px] text-[15px]">
                {el.customerReview}
              </p>
              <div className="flex gap-[10px] items-center mb-[20px]">
                <Image
                  className="pl-[30px] md:w-[10vw] lg:w-auto"
                  src={el.customerPic}
                  alt="person pic"
                  width={100}
                  height={100}
                />
                <div>
                  <p className="text-[12px] md:text-[12px] lg:text-[14px]">
                    {el.customerName}
                  </p>
                  <p className="text-[10px] md:text-[10px] lg:text-[11px] text-[#b6b6b6]">
                    {el.customerCompany}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomersBlock;
