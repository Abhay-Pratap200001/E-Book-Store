// Cards component receives `item` prop (book data)
function Cards({ item }) {
  return (
    <div className="mt-10 my-5">
      {/* Card container with fixed height and width, shadow, hover effect */}
      <div className="cursor-pointer w-full max-w-[260px] h-[420px] mx-auto shadow-xl p-1 bg-black hover:scale-105 duration-300 rounded-mb flex flex-col justify-between">

        {/* Book image section with fixed height */}
        <figure className="h-[330px] w-full overflow-hidden flex justify-center items-center">
          <img
            className="rounded-md object-cover h-40 w-full"
            src={item.image}
            alt={item.name}
          />
        </figure>

        {/* Card content */}
        <div className="card-body text-white flex flex-col justify-between  p-6 h-full">
          <h2 className="card-title text-base font-bold line-clamp-1">
            {item.name}
            <div className="badge badge-secondary ml-2 my-1">{item.category}</div>
          </h2>

          {/* Book description/title */}
          <p className="text-sm line-clamp-2">{item.title}</p>

          {/* Price and Buy Now button */}
          <div className="card-actions justify-between items-center mb-9">
            <div className="badge badge-outline text-white">$ {item.price}</div>
            <button className="cursor-pointer px-2 py-1 rounded-full border-2 border-white hover:bg-amber-50 hover:text-black duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
