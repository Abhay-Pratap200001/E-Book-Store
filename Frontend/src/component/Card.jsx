import React from "react";
// Cards component receives `item` prop (book data)
function Cards({ item }) {
  return (
    <>
      <div className="mt-5 my-5 p-3">
        {/* Card container with black background and shadow */}
        <div className="card w-100 shadow-xl p-3 bg-black">
          {/* Book image */}

          <figure>
            <img className="rounded-md" src={item.image} alt="Shoes" />
          </figure>
          {/* Card content */}

          <div className="card-body ">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            {/* Book description/title */}

            <p>{item.title}</p>
            {/* Price and Buy Now button */}

            <div className="card-actions justify-between">
              <div className="badge badge-outline">$ {item.price}</div>
              <div className="cursor-pointer px-2 py-2 rounded-full border-[2px] hover:bg-amber-50 hover:text-gray-800 duration-300 md:transform -translate-x-9 ">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
