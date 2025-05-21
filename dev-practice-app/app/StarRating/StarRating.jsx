"use client"; // This is a client component 👈🏽
import React, { useEffect, useRef, useState } from "react";

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
    { id: 0, onActive: false },
    { id: 1, onActive: false },
    { id: 2, onActive: false },
    { id: 3, onActive: false },
    { id: 4, onActive: false },
  ];

  const reaction = [
    { count: 1, emoji: "😞" },
    { count: 2, emoji: "🙁" },
    { count: 3, emoji: "🤐" },
    { count: 4, emoji: "😀" },
    { count: 5, emoji: "😊" },
  ];

  const [stars, setStars] = useState(defaultStars);

  const [rating, setRating] = useState(false);

  const [emoji, setEmoji] = useState("");

  const onMouseEnter = (el) => {
    let activeStar = Number(el.target.id);
    setStars(
      stars.map((star) => {
        return {
          ...star,
          onActive: star.id <= activeStar ? true : false,
        };
      })
    );
    triggerEmoji(activeStar);
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
      onReset();
    }
  };

  const triggerEmoji = (star) => {
    for (let react of reaction) {
      if (react.count === star + 1) {
        setEmoji(react.emoji);
      }
    }
  };

  const onReset = () => {
    setStars(defaultStars);
    setEmoji("");
  };

  return (
    <div className="flex flex-col m-10">
      <h1 className="text-4xl font-bold text-center my-auto mb-4">
        Star Rating
      </h1>
      <div
        className="flex flex-row justify-center items-center cursor-pointer"
        onClick={onClick}
        onMouseLeave={onMouseLeave}
      >
        {stars.map((el, index) => {
          return (
            <Star
              id={el.id}
              key={index}
              fill={el.onActive ? `#FFE732` : `#ffffff`}
              onMouseEnter={onMouseEnter}
            />
          );
        })}
      </div>
      <div className="flex flex-col justify-center mt-10 items-center gap-5">
        <div className="text-4xl">{emoji}</div>
        <button
          onClick={onReset}
          className="cursor-pointer border-solid rounded-lg border-2 border-indigo-600 w-16"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default StarRating;
