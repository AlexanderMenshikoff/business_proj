import Image from 'next/image';
import { dataVisualizationInsightsData } from '../data';

const DataVisualizationInsights = () => {
  return (
    <div className="mt-[40px] mb-[30px] ml-[20px] sm:mt-[100px] sm:mb-[50px] sm:ml-[40px] sm:mr-[40px] md:ml-[30px] md:mr-[30px] lg:ml-[50px] lg:mr-[50px] xl:ml-[80px] xl:mr-[90px] 2xl:ml-0 2xl:mr-0">
      <p className="mb-[10px] ml-[20px] text-[12px] text-[#ffc44e] sm:ml-0 ">
        Actionable insights
      </p>
      <h2 className="mb-[50px] ml-[20px] text-[25px] leading-6 max-w-[400px] sm:leading-11 sm:ml-0 sm:text-[40px] ">
        Turn complex data into simple decisions
      </h2>
      <Image
        className="ml-auto mr-auto"
        src="/graph_pics/line_graph_pic.png"
        alt=""
        width={1200}
        height={500}
      />
      <div className="block sm:flex sm:gap-[30px] sm:justify-center">
        {dataVisualizationInsightsData.map((el) => (
          <div className="relative max-w-[340px]" key={el.id}>
            <Image
              className="absolute top-[-35px] left-0 sm:top-[25px] sm:left-0"
              src={el.img}
              width={el.imgWidth}
              height={30}
              alt="block img"
            />
            <div className="mt-[60px] mb-[20px] ml-[5px]">
              <p className="mb-[5px] text-[15px]">{el.header}</p>
              <p className="text-[11px] text-[#b6b6b6]">{el.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataVisualizationInsights;
