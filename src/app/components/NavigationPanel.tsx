import Image from 'next/image';
import Button from './Button';

const NavigationPanel = () => {
  return (
    <nav className="flex w-[100vw] justify-between items-center mt-[10px]">
      <div className="flex gap-10">
        <Image src="/logo.png" height={50} width={100} alt="Logo" />
        <ul className="flex gap-8 items-center">
          <li className="text-[12px]">
            <a>Features</a>
          </li>
          <li className="text-[12px]">
            <a>Pricing</a>
          </li>
          <li className="text-[12px]">
            <a>About</a>
          </li>
          <li className="text-[12px]">
            <a>Contact</a>
          </li>
        </ul>
      </div>

      <div className="flex gap-3">
        <Button
          className={
            'rounded-[5px] bg-[#232524] py-[8px] px-[15px] cursor-pointer text-[12px] font-bold'
          }
          text={'Sign in'}
        />
        <Button
          className={
            'rounded-[5px] bg-[#ffc44e] py-[8px] px-[15px] cursor-pointer text-black text-[12px] font-bold'
          }
          text={'Get started'}
        />
      </div>
    </nav>
  );
};

export default NavigationPanel;
