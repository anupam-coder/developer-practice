"use client";
import React, { useEffect, useState, useRef } from "react";

const Carousal = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const timer = useRef();
  const [images, setImages] = useState([
    {
      id: 1,
      imageUrl:
        "https://images.pexels.com/photos/1403653/pexels-photo-1403653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Item 1",
      description: "Description of item 1",
    },
    {
      id: 2,
      imageUrl:
        "https://images.pexels.com/photos/1721747/pexels-photo-1721747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Item 2",
      description: "Description of item 2",
    },
    {
      id: 3,
      imageUrl:
        "https://images.pexels.com/photos/2382783/pexels-photo-2382783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Item 3",
      description: "Description of item 3",
    },
    {
      id: 4,
      imageUrl:
        "https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Item 4",
      description: "Description of item 4",
    },
  ]);

  const setPrevious = () => {
    setActiveImageIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    );
  };

  const setNext = () => {
    setActiveImageIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1
    );
  };

  useEffect(() => {
    timer.current = setInterval(() => {
      setNext();
    }, 5000);

    return () => {
      clearInterval(timer.current);
    };
  }, []);

  return (
    <div className="flex flex-col m-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Carousel</h1>

      <div className="relative">
        <img
          src={images[activeImageIndex].imageUrl}
          alt=""
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />

        <div className="flex flex-row">
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full hover:bg-opacity-75 transition"
            onClick={setPrevious}
          >
            Prev
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full hover:bg-opacity-75 transition"
            onClick={setNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousal;
