import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-32">
        <div className="basis-1/2">
          <h1 className="text-[11rem] font-semibold leading-none tracking-tight">
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-4 ">
          <div className="basis-1/3 ">
            <h4 className="mb-10 text-zinc-500">Socials</h4>
            {["intagram", "linkedIn", "Twitter", "WhatsApp"].map(
              (item, index) => (
                <a className="block mt-2 capitalize text-zinc-500" href="#">
                  {item}
                </a>
              )
            )}
          </div>
          <div className="basis-1/3 ">
            <h4 className="mb-10 text-zinc-500">Socials</h4>
            {["intagram", "linkedIn", "Twitter", "WhatsApp"].map(
              (item, index) => (
                <a className="block mt-2 capitalize text-zinc-500" href="#">
                  {item}
                </a>
              )
            )}
          </div>
          <div className="basis-1/2 flex flex-col items-end">
            <p className="text-right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              aliquid.
            </p>
            <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg" className="w-32 mt-10"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
