import Image from 'next/image';
import { customersBlockData } from '../data';

const CustomerBlock = () => {
  return (
    <div className="mt-[50px] mb-[100px]">
      <h2 className="text-[40px] mb-[25px]">Kind words from customers</h2>
      <div className="flex gap-[20px]">
        {customersBlockData.map((el) => {
          return (
            <div
              key={el.id}
              className="bg-[#171918] min-w-[350px] rounded-[15px] flex flex-wrap"
            >
              <Image
                className="pl-[30px] mb-[20px] mt-[30px]"
                src={el.companyLogo}
                alt="company logo"
                width={el.companyLogoWidth}
                height={30}
              />
              <p className="pl-[30px] mb-[20px] pr-[25px]">
                {el.customerReview}
              </p>
              <div className="flex gap-[10px] items-center mb-[20px]">
                <Image
                  className="pl-[30px]"
                  src={el.customerPic}
                  alt="person pic"
                  width={100}
                  height={100}
                />
                <div>
                  <p className="text-[14px]">{el.customerName}</p>
                  <p className="text-[11px] text-[#b6b6b6]">
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

export default CustomerBlock;
