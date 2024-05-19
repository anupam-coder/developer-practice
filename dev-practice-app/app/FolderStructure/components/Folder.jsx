"use client"; // This is a client component 👈🏽
import React, { useState } from "react";

function Folder({ explorer, handleInsertNode }) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: !showInput.visible,
      isFolder: isFolder,
    });
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      //add logic
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span>📁{explorer.name}</span>
          <div>
            <button
              className="add-folder-btn"
              onClick={(e) => handleNewFolder(e, true)}
            >
              Folder +
            </button>
            <button
              className="add-file-btn"
              onClick={(e) => handleNewFolder(e, false)}
            >
              File +
            </button>
          </div>
        </div>
        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                className="inputcontainer_input"
                type="text"
                onKeyDown={onAddFolder}
                autoFocus
                onBlur={() => setShowInput({ ...showInput, visible: true })}
              />
            </div>
          )}
          {explorer.items.map((exp) => {
            return (
              <Folder
                handleInsertNode={handleInsertNode}
                explorer={exp}
                key={exp.id}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">📄 {explorer.name}</span>;
  }
}

export default Folder;
