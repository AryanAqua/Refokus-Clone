import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className="max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-700">
      <div className="nleft flex items-center ">
      <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"></img>
      <div className="Links flex gap-14 ml-20">
        {["Home", "Work", "About", "", "News"].map((elem, index) => (
          (elem.length) === 0 ? (<span className="w-[1px] h-7 bg-zinc-500"></span>) : <a className="text-sm text-white flex item-center gap-1">
            {index === 1 && (
              <span style={{boxShadow: '0 0 0.25em #00FF19'}} className="inline-block w-[0.3em] h-[0.3em] pt-1 rounded-full bg-green-500"></span>
            )}
            {elem}
          </a>
        ))}
      </div>
      </div>
      <Button/>
    </div>
  );
}

export default Navbar;
