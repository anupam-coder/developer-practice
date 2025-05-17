var insert = function (intervals, newInterval) {
  let res = []; // Result array to store merged intervals
  let i = 0;

  // Sort intervals based on the starting time to ensure correct merge behavior
  intervals.sort((a, b) => a[0] - b[0]);

  // Step 1: Add all intervals that end before the new interval starts
  while (i < intervals.length && intervals[i][1] <= newInterval[0]) {
    res.push(intervals[i]); // No overlap, safe to add
    i++;
  }

  // Step 2: Merge all overlapping intervals with the new interval
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    // Update the newInterval to cover the union of overlapping intervals
    newInterval = [
      Math.min(intervals[i][0], newInterval[0]), // New start is the smallest start
      Math.max(intervals[i][1], newInterval[1]), // New end is the largest end
    ];
    i++;
  }

  // Step 3: Add the merged new interval
  res.push(newInterval);

  // Step 4: Add all the remaining intervals (those that start after newInterval ends)
  while (i < intervals.length) {
    res.push(intervals[i]);
    i++;
  }

  return res; // Return the final list of intervals
};
