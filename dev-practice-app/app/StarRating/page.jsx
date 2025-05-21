import React from "react";
import "./StarRating.css";
import StarRating from "./StarRating";
import LikeButton from "./LikeButton";

const StarRatingApp = () => {
  return (
    <div className="flex flex-col m-10 p-6 gap-10">
      <StarRating />
      <LikeButton />
    </div>
  );
};

export default StarRatingApp;
