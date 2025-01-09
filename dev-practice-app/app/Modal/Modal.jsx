"use client";
import React, { useState } from "react";

function Modal({ isVisible, hide }) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4">Modal Title</h2>
        <p className="text-gray-700 mb-6">This is a modal.</p>
        <div className="flex justify-end">
          <button
            onClick={hide}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

// Custom hook example here "useVisibility" is custom hook
function useVisibility(initialVisibility) {
  const [isVisible, setIsVisible] = useState(initialVisibility);

  const show = () => {
    setIsVisible(true);
  };

  const hide = () => {
    setIsVisible(false);
  };

  const toggle = () => {
    setIsVisible((state) => !state);
  };

  return {
    isVisible,
    show,
    hide,
    toggle,
  };
}

function MyModal() {
  const { isVisible, show, hide, toggle } = useVisibility(false);

  return (
    <div className="flex flex-col m-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">
        Custom Hook Example
      </h1>
      <div className="flex justify-center items-center space-x-4 z-[100]">
        <button
          onClick={show}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none"
        >
          Show Modal
        </button>
        <button
          onClick={toggle}
          className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none"
        >
          Toggle Modal
        </button>
      </div>
      <Modal isVisible={isVisible} hide={hide} />
    </div>
  );
}

export default MyModal;
