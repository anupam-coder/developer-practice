/*
Problem Statement:
Build a UI where users can draw circles at the exact position of each mouse click on the screen. Additionally, implement Undo and Redo functionalities to let users remove or re-add circles in the correct sequence.

What interviewers may evaluate:
Handling mouse events accurately
Managing application state (like the list of circles, undo/redo stacks)
Efficiently updating the DOM without unnecessary re-renders
Clean and modular code structure
Providing a smooth user experience (e.g., instant visual feedback)
Optional: Adding keyboard shortcuts for undo (Ctrl+Z) and redo (Ctrl+Y)

Bonus points if you:

Implement multiple undo/redo steps (not just the last action)
Make the UI responsive and visually appealing
Handle edge cases (e.g., redo after new actions)

*/
import React from "react";
import UndoRedo from "./undoRedo";

const App = () => {
  return <UndoRedo />;
};

export default App;
