import React from "react";

import arrow from "../../assets/arrowW.svg";
import book from "../../assets/book.png";

const Publish = () => {
  return (
    <div className="mt-40 mb-20 w-full mx-auto px-[1.5rem] md:px-[3rem] lg:px-[6rem] lg:max-w-[1500px]">
      <div className="flex flex-wrap !justify-between pb-12 pt-[70%] sm:pt-[65%] md:pt-[350px] lg:py-24 px-4 md:px-8 lg:px-12 bg-purp rounded-2xl leading-relaxed relative">
        <div className="w-[100%] lg:w-[40%] lg:ml-0 xl:mx-auto">
          <img
            src={book}
            alt=""
            className=" absolute top-[-20%] sm:top-[-25%] lg:top-auto lg:bottom-[35%] backdrop-blur-[13px] bg-white bg-opacity-[15%] rounded-2xl max-w-[80%] md:max-w-[60%] lg:max-w-[40%] xl:max-w-[60%] mx-auto left-0 right-0 lg:left-auto lg:right-auto lg:mx-0"
          />
        </div>
        <div className="text-white w-[264px] xs:w-full lg:w-[50%] xxl:max-w-[485px] mb-10 lg:mb-0 xl:mr-[56px] flex flex-col gap-2 lg:gap-6">
          <h3 className="font-prata text-[40px] md:text-[44px] lg:text-[48px] leading-[120%] lg:leading-[auto]">
            Publish a book NFT
          </h3>
          <p className="text-[#F6F6F6] font-thin font-open text-[20px] md:text-[22px] lg:text-[24px]">
            Duis non orci justo. Nulla lobortis, elit ac imperdiet mollis, nisi
            ante blandit ligula, vel elementum urna velit eu lorem
          </p>
          <button className=" text-white w-fit font-medium px-6 md:px-10 py-3 text-[16px] md:text-[20px] rounded-md hover:cursor-pointer hover:duration-500 bg-gradient-to-r from-blue to-pink hover:bg-gradient-to-tr">
            PUBLISH WORKS
            <img src={arrow} alt="" className="inline-block pl-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Publish;
