import Button from './Button';

const AlmostEndBlock = () => {
  return (
    <div className="w-[100vw] flex justify-center h-[40vh] items-center relative mt-[50px] mb-[20px] ">
      <div className="w-[100vw] bg-[url(/bg1.png))] h-[40vh] absolute bg-cover max-h-[400px] grayscale brightness-50 contrast-90"></div>
      <div className="absolute z-1">
        <div className="">
          <h2 className="text-[50px] text-center font-bold">
            Ready to get started?
          </h2>
          <p className="text-[20px] text-center">
            Take the first step to growing your business
          </p>
        </div>
        <div className="flex justify-center mt-[20px]">
          <Button
            className={
              'rounded-[5px] bg-[#ffc44e] py-[12px] px-[20px] text-[12px] cursor-pointer font-bold text-black'
            }
            text={'Get started'}
          />
        </div>
      </div>

      <div className="bg-[url(/bg1.png))] z-0 h-[40vh] w-[60vw] bg-cover max-h-[400px] grayscale brightness-50 contrast-90"></div>
    </div>
  );
};

export default AlmostEndBlock;
