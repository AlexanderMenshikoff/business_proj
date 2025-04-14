import Image from 'next/image';
import { fourthBlockData } from '../data';

const FourthBlock = () => {
  return (
    <div className="mt-[100px] mb-[50px]">
      <p className="text-[12px] text-[#ffc44e] mb-[10px]">
        Actionable insights
      </p>
      <h2 className="text-[40px] mb-[50px] max-w-[400px] leading-11">
        Turn complex data into simple decisions
      </h2>
      <Image
        className="ml-auto mr-auto"
        src="/graph_pics/line_graph_pic.png"
        alt=""
        width={1200}
        height={500}
      />
      <div className="flex gap-[30px] justify-center">
        {fourthBlockData.map((el) => (
          <div className="relative" key={el.id}>
            <Image
              className="absolute top-[25px] left-0"
              src={el.img}
              width={el.imgWidth}
              height={30}
              alt="block img"
            />
            <div className="mt-[60px] mb-[20px] ml-[5px]">
              <p className="text-[15px] mb-[5px]">{el.header}</p>
              <p className="text-[11px] text-[#b6b6b6]">{el.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FourthBlock;
