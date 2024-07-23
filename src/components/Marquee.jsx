import React from "react";

function Marquee({ imgUrl }) {
  return (
    <div className="w-full flex py-8 gap-20 whitespace-nowarp overflow-hidden">
      {imgUrl.map((url, index) => (
        <img src={url} className="flex-shrink-0 w-[7vw]" />
      ))}
      {imgUrl.map((url, index) => (
        <img src={url} className="flex-shrink-0 w-[7vw]" />
      ))}
    </div>
  );
}

export default Marquee;
