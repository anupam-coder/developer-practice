"use client"; // This is a client component 👈🏽
import React, { useState } from "react";

export const Star = ({ id, fill = `#ffffff`, onMouseEnter }) => {
  return (
    <svg
      className="cursor-pointer"
      height="100px"
      width="100px"
      version="1.1"
      id={id}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512.00 512.00"
      xmlSpace="preserve"
      fill="#000000"
      stroke="#000000"
      strokeWidth="0.00512"
      onMouseEnter={onMouseEnter}
    >
      <g id={id} strokeWidth="0"></g>
      <g id={id} strokeLinecap="round" strokeLinejoin="round"></g>
      <g id={id}>
        <polygon
          id={id}
          style={{ fill }}
          points="493.427,204.588 374.685,320.221 402.787,483.65 255.942,406.484 109.213,483.65 137.315,320.221 18.573,204.588 182.578,180.747 255.942,32.06 329.422,180.747 "
        ></polygon>
        <path d="M97.732,499.448l30.299-176.21L0,198.56l176.84-25.706l79.097-160.301l79.219,160.301L512,198.56L383.969,323.237 l30.298,176.203l-158.324-83.197L97.732,499.448z M255.941,396.726l135.365,71.134l-25.905-150.656l109.453-106.587l-151.167-21.975 L255.947,51.569l-67.634,137.073L37.144,210.617l109.453,106.587l-25.903,150.649L255.941,396.726z"></path>
      </g>
    </svg>
  );
};

function StarRating() {
  const defaultStars = [
    { id: 0, onHover: false, onActive: false },
    { id: 1, onHover: false, onActive: false },
    { id: 2, onHover: false, onActive: false },
    { id: 3, onHover: false, onActive: false },
    { id: 4, onHover: false, onActive: false },
  ];

  const [stars, setStars] = useState([
    { id: 0, onHover: false, onActive: false },
    { id: 1, onHover: false, onActive: false },
    { id: 2, onHover: false, onActive: false },
    { id: 3, onHover: false, onActive: false },
    { id: 4, onHover: false, onActive: false },
  ]);

  const [rating, setRating] = useState(false);

  const onHover = (el) => {
    let activeStar = Number(el.target.id);
    setStars(
      stars.map((star) => {
        return {
          ...star,
          onActive: star.id <= activeStar ? true : false,
        };
      })
    );
    setRating(false);
  };

  const onClick = (el) => {
    let activeStar = Number(el.target.id);
    setStars(
      stars.map((star) => {
        return {
          ...star,
          onActive: star.id <= activeStar ? true : false,
        };
      })
    );
    setRating(true);
  };

  const onMouseLeave = (el) => {
    if (!rating) {
      setStars(
        stars.map((star) => {
          return {
            ...star,
            onActive: star.onHover,
          };
        })
      );
    }
  };

  const onReset = () => {
    setStars(defaultStars);
  };

  return (
    <div className="flex flex-col m-10">
      <h1 className="text-4xl font-bold text-center my-auto mb-4">
        Star Rating
      </h1>
      <div
        className="flex flex-row absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
        onClick={onClick}
        onMouseLeave={onMouseLeave}
      >
        {stars.map((el, index) => {
          return (
            <Star
              id={el.id}
              key={index}
              fill={el.onActive ? `#FFE732` : `#ffffff`}
              onMouseEnter={onHover}
            />
          );
        })}
      </div>
      <div className="absolute mt-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <button
          onClick={onReset}
          className="border-solid rounded-lg border-2 border-indigo-600 w-16"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default StarRating;
