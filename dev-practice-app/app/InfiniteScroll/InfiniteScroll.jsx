"use client";
import React, { useEffect, useRef, useState } from "react";

const fetchImages = async (page, signal) => {
  const response = await fetch(
    `https://picsum.photos/v2/list?page=${page}&limit=5`,
    { signal }
  );
  const data = await response.json();
  return data;
};

const InfiniteScroll = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(3);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef(null);
  const lastImageRef = useRef(null);
  const abortControllerRef = useRef(null);

  useEffect(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current?.abort();
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;

    const loadImages = async () => {
      setLoading(true);
      const newImages = await fetchImages(page, controller?.signal);
      console.log(newImages);
      setImages((prev) => [...prev, ...newImages]);
      setLoading(false);
    };
    loadImages();

    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [page]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1.0 }
    );

    if (lastImageRef.current) {
      observerRef.current.observe(lastImageRef.current);
    }
    return () => observerRef.current && observerRef.current.disconnect();
  }, [loading]);

  return (
    <div className="App">
      <h1 className="text-4xl font-bold text-center my-auto mt-10 mb-4">
        Infinite Scroll
      </h1>
      <h2 className="text-2xl text-center font-bold mb-4">
        📸 Infinite Image Gallery
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-8">
        {images.map((img, index) => {
          return (
            <img
              key={index}
              src={img.download_url}
              width={300}
              height={200}
              alt={img.alt_description || "Unsplash Image"}
              className="w-full h-48 object-cover rounded-lg shadow-lg"
              ref={index === images.length - 1 ? lastImageRef : null}
            />
          );
        })}
      </div>
      {loading && <p className="mt-4 text-center">🔄 Loading more...</p>}
    </div>
  );
};

export default InfiniteScroll;

/*
1. IntersectionObserver
The IntersectionObserver API is a powerful browser feature used to monitor when an element enters or exits the viewport (or a defined parent element's visible area). This is particularly useful for implementing features like infinite scrolling, lazy loading, or triggering animations when elements come into view.

How it Works:
You create an IntersectionObserver instance and pass it a callback function that will be triggered when the target element enters or exits the viewport.

The observer can be configured with various options, such as the threshold at which the callback is triggered.
2. AbortController
The AbortController is used to abort one or more fetch requests that were initiated using the fetch() API. This can be useful when you no longer need the results of a request (e.g., the component is unmounting or a new request is being made before the previous one completes).

How it Works:
An AbortController creates an abort signal that can be attached to a fetch() request.

If the signal is aborted (via abort()), the fetch request is canceled.
Signal: The signal property of the AbortController is passed into the fetch() request. This allows the request to be canceled if the abort() method is called on the controller.

Abort: If the page changes or the component is about to unmount, controller.abort() is called to cancel any ongoing fetch requests. This ensures that the request doesn't continue unnecessarily or result in inconsistent data.

3. Signal
The signal in this context refers to the AbortSignal that is passed to the fetch() function to allow it to be aborted.

signal is part of the AbortController API, and it controls whether a fetch request is aborted.

If a request is still pending and you call controller.abort(), the fetch request will be immediately canceled, and the fetch() will throw an error (specifically an AbortError).

In your code, controller?.signal is passed as an option in the fetch request to ensure that it can be canceled when needed.
*/
