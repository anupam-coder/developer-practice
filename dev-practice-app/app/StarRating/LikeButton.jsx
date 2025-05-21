"use client";
import React, { useRef, useState } from "react";
import { HeartIcon, SpinnerIcon } from "./icons";

const LikeButton = () => {
  const [isliked, setIsLiked] = useState(false);
  const [liked, setLiked] = useState(false);
  const likesRef = useRef(0);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  const buttonClick = (e) => {
    setIsLiked((prev) => !prev);
    if (!e.target.classList.contains("liked")) {
      likesRef.current += 1;
    }
  };

  const handleLikeUnlike = async () => {
    setError(null);
    setIsFetching(true);

    try {
      const response = await fetch(
        "https://www.greatfrontend.com/api/questions/like-button",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: liked ? "unlike" : "like",
          }),
        }
      );

      if (response.status >= 200 && response.status < 300) {
        setLiked(!liked);
      } else {
        const res = await response.json();
        setError(res.message);
        return;
      }
    } catch (err) {
      console.error("Network or unexpected error:", err);
      setError("Sorry looks like the server is not behaving properly 😥");
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <div className="likeBtn-App">
      <h1 className="text-4xl font-bold text-center my-auto mb-2">
        Like Button
      </h1>
      <h2 className="text-l font-bold text-center my-auto mt-5">
        Like Button which will show no. of likes
      </h2>
      <div className="like-btn-container">
        <button
          className={`${isliked === true && "liked"}`}
          // style={{ backgroundColor: isliked ? "red" : "white" }}
          onClick={buttonClick}
        >
          Like ♥
        </button>
        <p>{`Dummy Like Count: ${likesRef.current}`}</p>
      </div>
      <h2 className="text-l font-bold text-center my-auto mb-2 mt-5">
        Like Button (connected to a server)
      </h2>
      <div className="likebtn-server">
        <button
          onClick={handleLikeUnlike}
          className={`likeBtn ${liked ? "liked" : ""}`}
        >
          {isFetching ? <SpinnerIcon /> : <HeartIcon />}
          {liked ? "Liked" : "Like"}
        </button>
        {error && (
          <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-sm">
            <strong className="font-semibold">Error:</strong> {error}
          </div>
        )}
      </div>
    </div>
  );
};

/*
//My implementation
const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const buttonClick = () => {
    setLikes((prev) => prev + 1);
    setLiked(!liked);
  };
  return (
    <div className="likeBtn-App">
      <h1 className="text-4xl font-bold text-center my-auto mb-4">
        Like Button
      </h1>
      <div className="like-btn-container">
        <button
          style={{ backgroundColor: liked ? "red" : "white" }}
          onClick={buttonClick}
        >
          Like ♥
        </button>
        <p>{`Like ${likes}`}</p>
      </div>
    </div>
  );
};

*/

export default LikeButton;
