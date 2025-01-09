"use client";
import React, { useState } from "react";
import Comment from "./Comment";

const CommentApp = () => {
  const initialComments = [
    {
      _id: "comment1",
      message: "this is message 1",
      comments: [
        {
          _id: "comment1_1",
          message: "this is message 1 - 1",
        },
      ],
    },
    {
      _id: "comment2",
      message: "this is message 2",
      comments: [
        {
          _id: "comment2_1",
          message: "this is message 2 - 1",
        },
        {
          _id: "comment2_2",
          message: "this is message 2 - 2",
          comments: [
            {
              _id: "comment2_2_1",
              message: "this is message 2 - 2 -1",
            },
          ],
        },
      ],
    },
  ];
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");

  const handleReplySubmit = (parentId, newReply) => {
    // Recursive function to add a reply to the correct comment in the comments tree
    const addReplyToComments = (commentsList) => {
      // Iterate through the current level of comments
      return commentsList.map((comment) => {
        // Check if this comment matches the parent ID where the reply should be added
        if (comment._id === parentId) {
          // Construct a new reply object with a unique ID
          const updatedReplies = [
            ...(comment.comments || []), // Preserve existing replies or initialize an empty array
            {
              _id: `${parentId}_reply_${(comment.comments || []).length + 1}`, // Unique ID for the new reply
              message: newReply, // Message content for the new reply
            },
          ];
          // Return a new comment object with the updated replies array
          return { ...comment, comments: updatedReplies };
        }

        // If the comment has nested replies, recursively call the function to find the correct parent
        if (comment.comments) {
          return { ...comment, comments: addReplyToComments(comment.comments) };
        }

        // If no match and no nested replies, return the comment as is
        return comment;
      });
    };

    // Call the recursive function on the root-level comments
    const updatedComments = addReplyToComments(comments);

    // Update the state with the modified comments tree
    setComments(updatedComments);
  };

  const handleComment = (e) => {
    setNewComment(e.target.value);
  };

  const triggerReplySubmit = () => {
    const comment_id = `comment${initialComments.length + 1}`;
    const updatedComment = [
      ...comments,
      {
        _id: `${comment_id}`,
        message: newComment,
      },
    ];
    setComments(updatedComment);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-auto mb-4">
        Comment System
      </h1>
      <div className="text-xl text-left my-auto ml-20 mt-10  w-1/2">
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem earum
        perspiciatis harum nemo doloremque, soluta fugiat aspernatur! Suscipit,
        sequi. Dicta tenetur dignissimos excepturi magni itaque voluptas aliquid
        perspiciatis consequuntur praesentium.
        <textarea
          value={newComment}
          onChange={handleComment}
          placeholder="Write a reply..."
          className="w-full mt-5 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <button
          onClick={triggerReplySubmit}
          className="mt-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Submit Reply
        </button>
      </div>
      <div className="flex flex-col m-20 mt-5">
        {comments.map((comment) => (
          <Comment
            key={comment._id}
            comment={comment}
            onReplySubmit={handleReplySubmit}
          />
        ))}
      </div>
    </div>
  );
};
export default CommentApp;
