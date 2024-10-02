"use client"; // This is a client component 👈🏽
import { useState } from "react";

const TodoList = function () {
  // Initial tasks array with some starting tasks
  const [tasks, setTasks] = useState([
    { name: "Playing" },
    { name: "Reading" },
    { name: "Writing" },
    { name: "Exercise" },
    { name: "Cooking" },
  ]);
  const [value, setValue] = useState("");

  const getTask = (e) => {
    let inputVal = e.target.value;
    setValue(inputVal);
  };

  const addTask = () => {
    let newtask = { name: value };
    setTasks((prev) => [...prev, newtask]);
    setValue("");
  };

  const deleteTask = (e) => {
    let deletedId = e.target.id;
    setTasks((prevtasks, id) => {
      return prevtasks.filter((el, id) => {
        return Number(deletedId) !== id;
      });
    });
  };

  return (
    <div className="absolute top-1/4 left-1/3">
      <h1 className="text-4xl font-bold text-center mb-10">Todo List</h1>
      <div>
        <div className="flex gap-5 w-64">
          <input
            onChange={getTask}
            className="border border-gray-300 rounded-md p-2 w-full"
            type="text"
            value={value}
          />
          <div>
            <button
              onClick={addTask}
              className="bg-blue-500 text-white border border-blue-500 rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Add
            </button>
          </div>
        </div>
        <div>
          {tasks.map((e, index) => {
            return (
              <div className="flex items-center mb-4 mt-5" key={index}>
                <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                <p>{e.name}</p>
                <button id={index} onClick={deleteTask} className="ml-10">
                  ❌
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
