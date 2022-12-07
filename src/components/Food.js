import React, { useState } from "react";
import { data } from "../data/data";
const Food = () => {
  //   console.log(data);
  const [food, setFood] = useState(data);
  return (
    <div className="max-w-[1600px] w-full px-4 py-12">
      <h1 className="text-orange-600 text-center font-bold text-4xl">
        Top Rated Menu Items
      </h1>
      {/* filter row  */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* filter type  */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white">
              All
            </button>
            <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white">
              burger
            </button>
            <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white">
              pizza
            </button>
            <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white">
              salad
            </button>
            <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white">
              chicken
            </button>
          </div>
        </div>
        {/* filter price  */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between w-full max-w-[390px]">
            <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white">
              $
            </button>
            <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white">
              $$
            </button>
            <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white">
              $$$
            </button>
            <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white">
              $$$$
            </button>
          </div>
          {/* display food  */}
        </div>
      </div>
      {/* display food  */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {food.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg hover:scale-105 duration-300 rounded-lg"
          >
            <img
              src={item.image}
              alt=""
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white rounded-full p-1">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
