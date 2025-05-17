console.log("Task Scheduler");
console.log("https://leetcode.com/problems/task-scheduler/description/");

/**
 * @param {character[]} tasks - An array of tasks represented as characters.
 * @param {number} n - The minimum number of intervals between two tasks of the same type.
 * @return {number} - The minimum number of CPU intervals required to complete all tasks.
 */

export function leastInterval(tasks, n) {
  // Create a map to store the frequency of each task
  const freq = new Map();

  // Count the frequency of each task
  for (const task of tasks) {
    // If the task is already in the map, increment its frequency, otherwise, set it to 1
    freq.set(task, (freq.get(task) || 0) + 1);
  }

  // Sort the task frequencies in descending order (tasks with highest frequency come first)
  const sortedFreq = Array.from(freq.entries()).sort((a, b) => b[1] - a[1]);

  // Get the maximum frequency (most frequent task)
  const maxFreq = sortedFreq[0][1];

  // Remove the most frequent task from the sorted list (it's already handled separately)
  sortedFreq.shift();

  // Calculate the minimum number of idle time slots required to separate the most frequent tasks
  let idleTime = (maxFreq - 1) * n;

  // Try to distribute the remaining tasks to fill the idle time slots
  while (sortedFreq.length > 0 && idleTime > 0) {
    // Subtract the minimum of remaining idle slots or the frequency of the next task type
    idleTime -= Math.min(maxFreq - 1, sortedFreq[0][1]);
    // Remove the processed task from the sorted frequency list
    sortedFreq.shift();
  }

  // If there are remaining idle slots, set idleTime to 0 as no more tasks can fill them
  idleTime = Math.max(0, idleTime);

  // The total number of intervals is the sum of all tasks' counts plus the idle time
  return tasks.length + idleTime;
}
