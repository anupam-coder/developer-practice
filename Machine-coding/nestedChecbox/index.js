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

const container = document.getElementById("app");
const CheckboxState = {
  UNCHECKED: "UNCHECKED",
  CHECKED: "CHECKED",
  INDETERMINATE: "INDETERMINATE",
};
const { UNCHECKED, CHECKED, INDETERMINATE } = CheckboxState;

//create checkbox function
const createCheckbox = (listItem, label, node) => {
  const checkbox = document.createElement("input");
  const labelText = document.createElement("label");
  checkbox.type = "checkbox";
  checkbox.onchange = handleCheckboxChange.bind(null, node);
  listItem.appendChild(checkbox);
  listItem.appendChild(labelText);
  labelText.innerHTML = label;
  return checkbox;
};

// Create a checklist item for each node(i.e the checklistData)
const createCheckListItem = (node) => {
  const { label, children } = node;
  const listItem = document.createElement("li");
  const checkbox = createCheckbox(listItem, label, node);
  const currentState = getStateForNode(node);

  if (currentState === INDETERMINATE) {
    checkbox.indeterminate = true;
  } else if (currentState === CHECKED) {
    checkbox.checked = true;
  }

  if (children) {
    const sublist = document.createElement("ul");
    children.forEach((child) => {
      const [, item] = createCheckListItem(child);
      sublist.appendChild(item);
    });
    listItem.appendChild(sublist);
  }

  return [currentState, listItem];
};

// Recursively update child checkboxes when a parent checkbox is clicked
const updateChildren = (children = [], newValue) => {
  for (let child of children) {
    child.value = newValue;
    if (child.children) {
      updateChildren(child.children, newValue);
    }
  }
};

const handleCheckboxChange = (node, event) => {
  const newValue = event.target.checked;
  node.value = newValue;
  updateChildren(node.children, newValue);
  buildCheckbox();
};

const getStateForNode = (node) => {
  if (!node.children || node.children.length === 0) {
    return node.value ? CHECKED : UNCHECKED;
  }

  let isChecked = false;
  let isUnchecked = false;
  let isIndeterminate = false;

  // Iterate thorugh the children to determine the state
  for (const child of node.children) {
    const childState = getStateForNode(child);

    if (childState === INDETERMINATE) {
      isIndeterminate = true;
    } else if (childState === CHECKED) {
      isChecked = true;
    } else if (childState === UNCHECKED) {
      isUnchecked = true;
    }
  }

  if (isIndeterminate || (isChecked && isUnchecked)) {
    return INDETERMINATE;
  } else if (isChecked) {
    return CHECKED;
  }

  return UNCHECKED;
};

const buildCheckbox = () => {
  container.innerHTML = "";
  const checkList = document.createElement("ul");
  const [_, rootListItem] = createCheckListItem(checklistData);
  checkList.appendChild(rootListItem);
  container.append(checkList);
};

function init() {
  buildCheckbox();
}

init();
