import Logo from './Logo';
import { footerLinksData } from '../data';

const Footer = () => {
  return (
    <div className="mb-[100px] mt-[20px] w-[100vw] sm:ml-[40px] sm:mr-[40px] md:ml-[30px] md:mr-[30px] lg:ml-[50px] lg:mr-[50px] xl:ml-[80px] xl:mr-[90px] 2xl:ml-0 2xl:mr-0">
      <div className="justify-center gap-[50px] flex mt-[70px] flex-wrap mb-[60px] sm:justify-center sm:gap-[50px] md:gap-[80px] md:justify-center lg:justify-between ">
        {footerLinksData.map((el) => (
          <div key={el.id} className="">
            <p className="mb-[15px] text-[#b6b6b6] text-[12px]">
              {el.columnName}
            </p>
            <div className="">
              {el.columnText.map((link,index) => (
                <a
                  key={`${el.id}-${index}`}
                  className="block cursor-pointer mb-[15px] text-[12px]"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div>
        <div className="border-[1px] border-[#1b1b1b] mb-[20px] "></div>
        <div className="flex justify-between items-center">
          <Logo/>
          <p className="text-[12px] text-[#b6b6b6]">© Torch 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
