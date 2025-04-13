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
    <div key={el.id} className="bg-[#171918] mb-[20px] rounded-[10px] w-[30vw]">
      <div className="py-[20px] px-[30px] flex-wrap mb-[10px]">
        <div className="flex justify-between mb-[20px]">
          <p className="text-[18px]">{el.question}</p>
          <Image
            src="/block_imgs/minus_img.png"
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
      <h2 className="text-center text-[40px]">FAQs</h2>
      <p className="text-center text-[15px] mb-[40px] mt-[10px]">
        Answers to questions you might have about Torch.
      </p>
      {FAQBlockData.map((el) =>
        answerId === el.id ? (
          visibleAnswerTemplate(el)
        ) : (
          <div
            key={el.id}
            className="bg-[#171918] mb-[20px] rounded-[10px] w-[30vw]"
          >
            <div className="flex justify-between py-[22px] px-[30px] flex-wrap ">
              <p className="text-[18px]">{el.question}</p>
              <Image
                src="/block_imgs/plus_img.png"
                alt=""
                width={25}
                height={20}
                className="cursor-pointer"
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
