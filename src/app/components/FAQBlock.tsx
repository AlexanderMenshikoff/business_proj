'use client';

import Image from 'next/image';
import { FAQBlockData, IFAQBlockData } from '../data';
import { useState } from 'react';

const FAQBlock = () => {
  const [answerId, setAnswerId] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setAnswerId((prevId) => (prevId === id ? null : id));
  };

  const visibleAnswerTemplate = (el: IFAQBlockData) => (
    <div
      key={el.id}
      className="mb-[20px] rounded-[10px] bg-[#171918] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[60vw] 2xl:w-[30vw]"
    >
      <div className="py-[20px] px-[30px] flex-wrap mb-[10px]">
        <div className="flex justify-between mb-[20px]">
          <p className="text-[18px]">{el.question}</p>
          <Image
            src="/blocks_imgs/minus_img.png"
            alt=""
            width={25}
            height={25}
            className="cursor-pointer"
            onClick={() => handleClick(el.id)}
          />
        </div>
        <p>{el.answer}</p>
      </div>
    </div>
  );

  return (
    <div className="mt-[100px] mb-[40px]">
      <h2 className="text-center text-[30px] sm:text-[40px]">FAQs</h2>
      <p className="mb-[40px] mt-[10px] ml-[20px] mr-[20px] text-center text-[15px] sm:text-[15px]">
        Answers to questions you might have about Torch.
      </p>
      {FAQBlockData.map((el) =>
        answerId === el.id ? (
          visibleAnswerTemplate(el)
        ) : (
          <div
            key={el.id}
            className="mb-[20px] rounded-[10px] bg-[#171918] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[60vw] 2xl:w-[30vw]"
          >
            <div className="flex justify-between items-center py-[22px] px-[30px] flex-wrap">
              <p className="max-w-[200px] text-[16px] sm:max-w-max sm:text-[18px]">
                {el.question}
              </p>
              <Image
                src="/blocks_imgs/plus_img.png"
                alt=""
                width={25}
                height={20}
                className="cursor-pointer w-[20px] h-[20px]"
                onClick={() => handleClick(el.id)}
              />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default FAQBlock;
