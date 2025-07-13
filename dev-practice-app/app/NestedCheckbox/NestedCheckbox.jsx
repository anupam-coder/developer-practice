"use client";
import React, { useState } from "react";
import "./style.css";

const checkboxesData = [
  {
    id: 1,
    name: "Fruits",
    children: [
      {
        id: 2,
        name: "Citrus",
        children: [
          {
            id: 3,
            name: "Orange",
          },
          {
            id: 4,
            name: "Lemon",
          },
        ],
      },
      {
        id: 5,
        name: "Berries",
        children: [
          {
            id: 6,
            name: "Strawberry",
          },
          {
            id: 7,
            name: "Blueberry",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    name: "Tropical",
    children: [
      {
        id: 9,
        name: "Mango",
      },
      {
        id: 10,
        name: "Banana",
      },
    ],
  },
  {
    id: 11,
    name: "Apple",
  },
];

const Checkboxes = ({ data, checked, setChecked }) => {
  const handleChange = (isChecked, node) => {
    setChecked((prev) => {
      const newState = { ...prev, [node.id]: isChecked };

      // if children are present check them all i.e add all of them to new state

      const updateChildren = (node) => {
        node?.children.forEach((child) => {
          newState[child.id] = isChecked;
          child.children && updateChildren(child);
        });
      };

      node.children && updateChildren(node);

      // if all children are checked, mark the parent as checked

      const verifyChecked = (node) => {
        if (!node.children) return newState[node.id] || false;

        const allChildrenChecked = node?.children.every((child) =>
          verifyChecked(child)
        );

        newState[node.id] = allChildrenChecked;
        return allChildrenChecked;
      };

      checkboxesData.forEach((node) => verifyChecked(node));

      return newState;
    });
  };

  //   console.log(checked, "State");

  return (
    <div>
      {data.map((node) => (
        <div className="parent" key={node.id}>
          <input
            type="checkbox"
            checked={checked[node?.id] || false}
            onChange={(e) => handleChange(e.target.checked, node)}
          />
          <span>{node.name}</span>
          {node.children && (
            <Checkboxes
              data={node.children}
              checked={checked}
              setChecked={setChecked}
              onChange={(e) => handleChange(e.target.checked, node)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

const NestedCheckbox = () => {
  // Storing state here so that it will be a central state
  const [checked, setChecked] = useState({});
  return (
    <div className="max-w-md mx-auto mt-10 p-4">
      <h1 className="text-2xl font-semibold text-center mb-4">
        Nested CheckBox
      </h1>
      <Checkboxes
        data={checkboxesData}
        checked={checked}
        setChecked={setChecked}
      />
    </div>
  );
};

export default NestedCheckbox;
