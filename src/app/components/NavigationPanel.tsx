import Image from 'next/image'

const NavigationPanel = () => {
  return (
    <nav className="flex w-[100vw] justify-between items-center mt-[10px]">
        
      <div className="flex gap-15">

           <Image src="/logo.png" height={50} width={100} alt='Logo'/> 

        <ul className="flex gap-9 items-center">
          <li>Features</li>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="flex gap-9">
        <button className="rounded-[5px] bg-[#232524] py-[10px] px-[25px] cursor-pointer">Sign in</button>
        <button className="rounded-[5px] bg-[#ffc44e] py-[10px] px-[25px] cursor-pointer text-black">Get started</button>
      </div>
    </nav>
  );
};

export default NavigationPanel;
