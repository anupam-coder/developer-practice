"use client"; // This is a client component 👈🏽
import { useState } from "react";
import explorer from "./data/folderData";
import Folder from "./components/Folder";
import "./FolderApp.css";
import useTraverseTree from "./hooks/useTraverseTree";

function FolderApp() {
  const [explorerData, setExplorerData] = useState(explorer);

  const { insertNode, deleteNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);

    setExplorerData(finalTree);
  };

  const handleDeleteNode = (folderId) => {
    const updatedTree = deleteNode(explorerData, folderId);
    console.log(updatedTree, "updatedtree");
    setExplorerData(updatedTree);
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-center my-auto mb-4">
        Folder Structure
      </h1>
      <div className="folder-app">
        <Folder
          handleInsertNode={handleInsertNode}
          handleDeleteNode={handleDeleteNode}
          explorer={explorerData}
        />
      </div>
    </>
  );
}

export default FolderApp;
