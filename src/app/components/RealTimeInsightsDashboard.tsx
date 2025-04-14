import Image from 'next/image';
import { realTimeInsightsDashboard } from '../data';

const RealTimeInsightsDashboard = () => {
  return (
    <div className="mt-[20px] ml-[20px] mr-[20px] mb-[20px] sm:ml-[40px] sm:mr-[40px] md:ml-[30px] md:mr-[30px] lg:ml-[50px] lg:mr-[50px] xl:ml-[80px] xl:mr-[90px] 2xl:ml-0 2xl:mr-0 sm:mt-[100px] sm:mb-[50px] ">
      <p className="ml-[20px]  text-[12px] text-[#ffc44e] mb-[10px] sm:ml-0">
        Data at your fingertips
      </p>
      <h2 className="text-[25px] leading-6 ml-[20px] sm:leading-11 sm:ml-0 sm:text-[40px] mb-[50px] max-w-[400px] ">
        Real-time insights for faster decisions
      </h2>
      <Image
        className="w-[100vw] ml-auto mr-auto"
        src="/graph_pics/bar_graph_pic.png"
        alt=""
        width={1200}
        height={500}
      />
      <div className="block sm:flex sm:gap-[30px] sm:justify-center">
        {realTimeInsightsDashboard.map((el) => (
          <div className=" relative max-w-[340px]" key={el.id}>
            <Image
              className=" top-[-35px] left-0 absolute sm:top-[25px] sm:left-0"
              src={el.img}
              width={el.imgWidth}
              height={30}
              alt="block img"
            />
            <div className="mt-[60px] mb-[20px] ml-[5px]">
              <p className="text-[17px] mb-[5px]">{el.header}</p>
              <p className="text-[12px] text-[#b6b6b6]">{el.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RealTimeInsightsDashboard;
