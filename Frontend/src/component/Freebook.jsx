import React from "react";
// Import slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Import the slider component from react-slick
import Slider from "react-slick";
import list from "./list.json";
import Cards from "./Card";

function Freebook() {
   // Filter the books that are categorized as "Free"  which is imported from list.json
  const filterData = list.filter((data) => data.category === "Free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,  // For screens below 1024px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600, // For screens below 600px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,// For screens below 480px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* Page container with spacing */}
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-6">
        <div>
             {/* Heading and description */}
          <h1 className="font-semibold text-xl pb-2">Grab Now Free Books</h1>
          <p>
            Explore our Free Books section and dive into a collection of
            handpicked reads available at no cost. Perfect for curious minds,
            lifelong learners, and book lovers on a budget!
          </p>
        </div>
        
        {/* Slider component showing free book cards */}
        <div>
          <Slider {...settings}>
              {/* {/* Loop through filtered data and render a Card for each * /} */}
            {filterData.map((item) => (
              // sending data partent to child compoent 
            <Cards item={item} key={item.id} /> 
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
