import React from "react";

function Card() {
  return (
    <div className="bg-black flex justify-center p-6">
      <div className="bg-[#1A1A1A]  w-3/12 flex flex-col p-8 rounded-2xl">
        <div className="flex justify-center ">
          <h1 className="text-white text-2xl font-bold">Product Name</h1>
        </div>
        <div className="mt-12 flex justify-left">
          <h2 className="text-white text-2xl">Price: </h2>
        </div>
        <div className="mt-12 flex justify-left">
          <h2 className="text-white text-2xl">Ratings: </h2>
        </div>
        <div className="mt-12 flex justify-left">
          <h2 className="text-white text-2xl">Discount: </h2>
        </div>
        <div className="mt-12 flex justify-left">
          <h2 className="text-white text-2xl">Availability: </h2>
        </div>
      </div>
    </div>
  );
}

export default Card;
