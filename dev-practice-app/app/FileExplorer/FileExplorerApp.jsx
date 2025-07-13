"use client"; // This is a client component 👈🏽
import React, { useState } from "react";
import "./style.css";
import json from "./data.json";

const List = ({ list, addNodeToList, deleteNodeFromList }) => {
  const [isExpanded, setIsExpanded] = useState({});
  return (
    <div className="container">
      {list.map((node) => (
        <div key={node.id}>
          {node.isFolder && (
            <span
              onClick={() =>
                setIsExpanded((prev) => ({
                  ...prev,
                  [node.name]: !prev[node.name],
                }))
              }
            >
              {isExpanded?.[node.name] ? "-" : "+"}
            </span>
          )}
          <span>{node.name}</span>
          {node.isFolder && (
            <span onClick={() => addNodeToList(node.id)}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFc4WJ3vyYfWXAvr1FFYqAgasBsBpKhPfIig&s"
                alt="add-icon"
                className="icon"
              />
            </span>
          )}
          <span onClick={() => deleteNodeFromList(node.id)}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"
              className="icon"
            />
          </span>
          {isExpanded?.[node.name] && node?.children && (
            <List
              list={node.children}
              addNodeToList={addNodeToList}
              deleteNodeFromList={deleteNodeFromList}
            />
          )}
        </div>
      ))}
    </div>
  );
};

const FileExplorerApp = () => {
  const [data, setData] = useState(json);

  const addNodeToList = (parentId) => {
    const name = prompt("Enter name");

    const updateTree = (list) => {
      //Adding node to a tree
      return list.map((node) => {
        if (node.id === parentId) {
          return {
            ...node,
            children: [
              ...node.children,
              {
                id: Date.now().toString(),
                name: name,
                isFolder: true,
                children: [],
              },
            ],
          };
        }
        if (node.children) {
          return { ...node, children: updateTree(node.children) };
        }
        return node;
      });
    };

    setData((prev) => updateTree(prev));
  };

  const deleteNodeFromList = (itemId) => {
    const updateTree = (list) => {
      return list
        .filter((node) => node.id !== itemId)
        .map((node) => {
          if (node.children) {
            return { ...node, children: updateTree(node.children) };
          }
          return node;
        });
    };

    setData((prev) => updateTree(prev));
  };

  return (
    <div className="App">
      <h1>File Explorer</h1>
      <List
        list={data}
        addNodeToList={addNodeToList}
        deleteNodeFromList={deleteNodeFromList}
      />
    </div>
  );
};

export default FileExplorerApp;
