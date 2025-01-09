"use client";
import React, { useState } from "react";

const Comment = ({ comment, level = 0, onReplySubmit }) => {
  const [showReplies, setShowReplies] = useState(true);
  const [newReply, setNewReply] = useState("");
  const [showTextbox, setShowTextbox] = useState(false);

  const toggleReplies = () => {
    setShowReplies(!showReplies);
  };

  const handleReplyChange = (e) => {
    setNewReply(e.target.value);
  };

  const handleReplySubmit = () => {
    if (newReply.trim() !== "") {
      onReplySubmit(comment._id, newReply);
      setNewReply("");
      setShowTextbox(false);
    }
  };

  return (
    <div className={`ml-${level * 10} mb-4`}>
      <div className="flex items-center space-x-2">
        <strong className="text-lg">Comment:</strong>
        <span className="text-gray-700">{comment.message}</span>
      </div>

      <div className="mt-2 space-x-4">
        {
          <button
            onClick={toggleReplies}
            className="text-sm text-blue-500 hover:underline focus:outline-none"
          >
            {showReplies ? "Hide Replies" : "Show Replies"}
          </button>
        }

        <button
          onClick={() => setShowTextbox(!showTextbox)}
          className="text-sm text-blue-500 hover:underline focus:outline-none"
        >
          {showTextbox ? "Cancel Reply" : "Reply"}
        </button>
      </div>

      {showTextbox && (
        <div className="mt-4">
          <textarea
            value={newReply}
            onChange={handleReplyChange}
            placeholder="Write a reply..."
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button
            onClick={handleReplySubmit}
            className="mt-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Submit Reply
          </button>
        </div>
      )}

      {showReplies && comment?.comments?.length > 0 && (
        <div className="mt-4 space-y-4">
          {comment.comments.map((reply) => (
            <Comment
              key={reply._id}
              comment={reply}
              level={level + 1}
              onReplySubmit={onReplySubmit}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
