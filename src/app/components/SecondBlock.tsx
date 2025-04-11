import Image from 'next/image';
import { SecondBlockData } from '../data';

const SecondBlock = () => {
  return (
    <div>
      <h2 className='text-[40px] mb-[25px]'>Take action from insights</h2>
      <div className="grid grid-cols-4 grid-rows-5 gap-4">
        {SecondBlockData.map(el => 
        <div className={`${el.className} bg-[#171918] pl-[25px] relative content-end`} key={el.id}>
          
            <Image className='absolute top-[20px] left-[20px]' src={el.img} width={el.imgWidth} height={30} alt='block img'/>
            <div className='mt-[60px] mb-[20px]'>
            <p className='text-[25px] '>{el.header}</p>
            <p className='text-[15px]'>{el.text}</p> 
            </div>
            
           
        </div>
        )}
        
      </div>
    </div>
  );
};

export default SecondBlock;
