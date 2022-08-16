import React from 'react';
import img from "../../imge/img.png";

const Adds = () => {
    return (
        <div className="products_title pt-10 mb-5 borderd">
            <div className="md:px-32">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div>
              <img className="h-80" src={img} alt="cover photos" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-purple-500 mb-4">
                Get 35% exclusive discount
              </h1>
              <button className="btn ">Get start</button>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Adds;