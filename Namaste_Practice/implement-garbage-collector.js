/*

You're given an object graph representing allocated objects in memory. Each object can reference other objects. The graph is represented as a JavaScript object where keys are object IDs, and values are arrays of IDs they reference.
You're also given a list of roots - objects that are considered accessible.
Your task is to simulate a garbage collector that removes any unreachable objects (not accessible from the root set) and returns the cleaned memory graph.
• Input:
graph: an object representing the memory (e.g., { A: ['B'], B: ['C'], D: [] })
roots: an array of root object IDs (e.g., ['A'])
• Output:
an object representing the cleaned graph containing only reachable objects.


Constraints & Edge Cases
• Each object ID is unique and used as a key in the input graph. • If a root points to a non-existent key, it should be ignored safely. • The graph can be cyclic, so cycles should not cause infinite loops.
• Empty roots → return an empty object.
• Empty graph → return an empty object.
*/

// Approach
// 1. Use Depth First Search (DFS) starting from each root.
// 2. Maintain a Set of visited object IDs.
// 3. Traverse each object's references recursively.
// 4. Once traversal is complete, filter the original graph to keep only visited nodes.
// Solution Code

function garbageCollector(graph, roots) {
  const reachable = new Set();
  function dfs(node) {
    if (!graph[node] || reachable.has(node)) return;
    reachable.add(node);
    for (const neighbor of graph[node]) {
      dfs(neighbor);
    }
  }
  for (const root of roots) {
    dfs(root);
  }
  const cleanedGraph = {};
  for (const node of reachable) {
    cleanedGraph[node] = graph[node];
  }
  return cleanedGraph;
}

/*
Explanation
• We simulate how a garbage collector would identify memory still in use: Start from known roots (e.g., global variables or stack references).
Traverse every reference recursively (like memory pointers).
Mark visited nodes (reachable objects).
Remove everything else (unreachable garbage).
*/
