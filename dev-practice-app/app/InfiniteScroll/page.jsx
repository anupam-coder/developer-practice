import React from "react";

/*
Problem 

Design an infinite scrolling image gallery. You should be able to call API and whenever you reach the end of the page, you should call the API again to fetch more images. 

Followup - 1 
Make images and their container responsive. 

Followup - 2 
Handle fetching more images when the user reaches the end of the page. 

Followup - 3 
Handle multiple API calls triggered by rapid scrolling. 

This problem tests your understanding of CSS responsiveness, refs, Intersection Observer API, AbortController, and signals for API handling. 
*/

import InfiniteScroll from "./InfiniteScroll";

const App = () => {
  return <InfiniteScroll />;
};

export default App;
