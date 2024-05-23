"use client"; // This is a client component 👈🏽
import { useState } from "react";
import explorer from "./data/folderData";
import Folder from "./components/Folder";
import "./FolderApp.css";
import useTraverseTree from "./hooks/useTraverseTree";

function FolderApp() {
  const [explorerData, setExplorerData] = useState(explorer);

  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);

    setExplorerData(finalTree);
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-center my-auto mb-4">
        Folder Structure
      </h1>
      <div className="folder-app">
        <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
      </div>
    </>
  );
}

export default FolderApp;
