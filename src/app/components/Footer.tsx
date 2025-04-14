import Logo from './Logo';
import { FooterLinksData } from '../data';

const Footer = () => {
  return (
    <div className="w-[100vw] mb-[100px] mt-[20px]">
      <div className="flex justify-between mt-[70px] flex-wrap mb-[60px]">
        {FooterLinksData.map((el) => (
          <div key={el.id} className="">
            <p className="mb-[15px] text-[#b6b6b6] text-[12px]">
              {el.columnName}
            </p>
            <div className="">
              {el.columnText.map((link) => (
                <a
                  key={el.id}
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
