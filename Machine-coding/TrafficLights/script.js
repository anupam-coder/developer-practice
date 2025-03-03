let index = 0;
let interval;
const config = [
  {
    color: "red",
    time: 500,
  },
  {
    color: "yellow",
    time: 300,
  },
  {
    color: "green",
    time: 600,
  },
];
const runTrafficLights = () => {
  clearTimeout(interval);
  interval = setTimeout(() => {
    const trafficLights = document.querySelectorAll(".box > div");
    trafficLights[index].style.backgroundColor = "white";
    index++;
    index = index % 3;
    trafficLights[index].style.backgroundColor = config[index].color;
    runTrafficLights();
  }, config[index].time);
};

runTrafficLights();
