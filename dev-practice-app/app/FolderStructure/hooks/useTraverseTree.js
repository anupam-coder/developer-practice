const useTraverseTree = () => {
  function insertNode(tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder,
        items: [],
      });
      return tree;
    }

    let latestNode = [];
    latestNode = tree.items.map((ob) => {
      return insertNode(ob, folderId, item, isFolder);
    });
    return { ...tree, items: latestNode };
  }

  //deleteNode and UpdateNode remname
  const deleteNode = (tree, folderId) => {
    if (tree.id === folderId) {
      return false;
    }
    let updatedItems = tree.items
      .map((el) => {
        const updateNode = deleteNode(el, folderId);
        return updateNode !== false ? updateNode : null;
      })
      .filter(Boolean);
    //console.log(updatedItems, "updatedItems", { ...tree, items: updatedItems });
    return { ...tree, items: updatedItems };
  };
  const updateNode = () => {};

  return { insertNode, deleteNode, updateNode };
};

export default useTraverseTree;
