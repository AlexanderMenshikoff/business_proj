import Button from './Button';

const CallToActionSection = () => {
  return (
    <div className="relative flex items-center justify-center w-[100vw] h-[40vh] mt-[50px] mb-[20px]">
      <div className="absolute h-[60vh] w-[100vw] bg-cover bg-[url(/bg1.png)] max-h-[400px] grayscale brightness-50 contrast-90"></div>
      <div className="absolute z-1">
        <div className="max-w-[200px] sm:max-w-[350px] md:max-w-[350px] 2xl:max-w-[600px]">
          <h2 className="mb-[20px] text-[30px] leading-[30px] font-bold text-center sm:mb-[10px] sm:text-[50px] sm:leading-[50px] md:mb-[10px] md:text-[50px] md:leading-[50px] lg:text-[50px]">
            Ready to get started?
          </h2>
          <p className="mb-[30px] text-[13px] text-center md:text-[18px] lg:text-[20px] sm:mb-0">
            Take the first step to growing your business
          </p>
        </div>
        <div className="flex justify-center mt-[20px]">
          <Button
            className="cursor-pointer rounded-[5px] bg-[#ffc44e] py-[12px] px-[20px] text-[12px] font-bold text-black"
            text={'Get started'}
          />
        </div>
      </div>
      <div className="hidden 2xl:block z-0 w-[100vw] h-[60vh] bg-cover max-h-[400px] bg-[url(/bg1.png)] grayscale brightness-50 contrast-90 2xl:w-[60vw]"></div>
    </div>
  );
};

export default CallToActionSection;
