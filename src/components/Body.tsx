import React from "react";

function Body() {
  return (
      <div className="flex flex-row justify-center">
        <div className="flex flex-col gap-4">
          <p className="flex color-customGreen text-[64px] font-black">
            SAD BEARS
          </p>
          <p className="flex text-[96px] font-bold">Sad Bears</p>
          <p className="flex text-[40px] font-medium">
            Shorting Solana since $3
          </p>
        </div>
        <div>
          <img
            src="img/bear.png"
            style={{ height: "782px", width: "671px" }}
            alt="bear-cry"
          />
        </div>
      </div>
  );
}

export default Body;
