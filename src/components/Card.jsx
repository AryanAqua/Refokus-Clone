import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ width, start, para, hover }) {
  return (
    <div className={`${width} hover:${hover} min-h-[30rem] flex flex-col justify-between  p-5 bg-zinc-800 rounded-xl`}>
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>One Heading</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-10">Wath Heading</h1>
      </div>
      <div className="down w-full ">
        {start && (
          <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none">
              Start the project
            </h1>
            <button className="rounded-full mt-3 py-2 px-3 border-[1px] border-zinc-50">
              Contact Us
            </button>
          </>
        )}
        {para && (
          <>
            <p className="text-sm text-zinc-500 font-medium">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Card;
