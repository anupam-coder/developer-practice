"use client";
import React, { useState } from "react";
import Checkbox from "./Checkbox";

const NestedCheckbox = () => {
  const checklistData = {
    label: "Root",
    value: null,
    children: [
      {
        label: "Child 1 of Root",
        value: null,
        children: [
          {
            label: "Nested Child 1-1",
            value: true,
            children: [
              {
                label: "Nested Child 1-1-1",
                value: true,
                children: [
                  {
                    label: "Deeply Nested Child 1-1-1-1",
                    value: true,
                  },
                  {
                    label: "Deeply Nested Child 1-1-1-2",
                    value: true,
                  },
                ],
              },
              {
                label: "Nested Child 1-1-2",
                value: false,
              },
            ],
          },
          {
            label: "Nested Child 1-2",
            value: true,
          },
        ],
      },
      {
        label: "Child 2 of Root",
        value: true,
        children: [
          {
            label: "Nested Child 2-1-1",
            value: false,
          },
        ],
      },
      {
        label: "Child 3 of Root",
        value: false,
      },
      {
        label: "Child 4 of Root",
        value: false,
      },
    ],
  };

  const [checklist, setCheckList] = useState(checklistData);

  const handleChange = (checked, updatedData) => {
    const updatedChecklist = { ...checklist };

    const updateData = () => {
      if (checklist.label === updatedData.label) {
        checklist.value = checked;
      } else if (data.children) {
        data.children.forEach(updateData);
      }
    };

    updateData(updatedChecklist);
    setCheckList(updatedChecklist);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4">
      <h1 className="text-2xl font-semibold text-center mb-4">
        Nested CheckBox
      </h1>
      <Checkbox data={checklistData} onChange={handleChange} />
    </div>
  );
};

export default NestedCheckbox;
