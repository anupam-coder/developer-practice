const dom = {
  type: "section",
  props: {
    id: "section-1",
    class: "main-section",
    style: `
            background-color: lightblue; 
            padding: 20px;
            border-radius: 5px;
        `,
  },
  children: [
    {
      type: "header",
      children: "Welcome to Soni Frontend Doc",
      props: {
        style: "font-size: 24px; color: darkblue; text-align: center;",
      },
    },
    {
      type: "article",
      children: [
        {
          type: "h2",
          children: "Render DOM",
          props: { style: "color: darkgreen;" },
        },
        {
          type: "p",
          children: "Try yourself first then look for a solution",
          props: { style: "font-size: 16px; color: grey;" },
        },
      ],
    },
    {
      type: "footer",
      children: "Thank you :)",
      props: {
        style: "text-align: center; font-size: 14px; color: black;",
      },
    },
  ],
};

const rootEl = document.getElementById("root");
const renderDom = ({ type, props, children }) => {
  if (!type) {
    return null;
  }
  const ele = document.createElement(type);
  //props
  if (props) {
    Object.entries(props).forEach(([key, value]) => {
      if (key === "style") {
        ele.style.cssText = value;
      } else {
        ele.setAttribute(key, value);
      }
    });
  }

  //children
  if (Array.isArray(children)) {
  } else if (typeof children === "string") {
    ele.textContent = children;
  }

  return ele;
};

if (rootEl) {
  rootEl.appendChild(renderDom(dom));
}
