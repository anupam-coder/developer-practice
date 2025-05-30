/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  if (intervals.length === 0) return [newInterval];
  if (newInterval[1] < intervals[0][0]) {
    return [newInterval, ...intervals];
  }
  if (newInterval[0] > intervals[intervals.length - 1][1]) {
    return [...intervals, newInterval];
  }

  const result = [];
  let i = 0;

  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  if (intervals[i][0] > newInterval[1]) {
    result.push(newInterval);
    return [...result, ...intervals.slice(i)];
  }

  let start = Math.min(newInterval[0], intervals[i][0]);
  let end = Math.max(newInterval[1], intervals[i][1]);

  i++;

  while (i < intervals.length && intervals[i][0] <= end) {
    start = Math.min(start, intervals[i][0]);
    end = Math.max(end, intervals[i][1]);
    i++;
  }

  result.push([start, end]);

  while (i < intervals.length) {
    result.push(intervals[i]);
    i++;
  }

  return result;
};
