const progressBarEle = document.getElementById("progress-bar");
const clickBtn = document.getElementById("btn");
const resetBtn = document.getElementById("reset-btn");
// progressbar.style.background = "white";
// progressbar.style.width = "0%";
// let interval;
// clickBtn.addEventListener("click", () => {
//   progressbar.style.background = "red";
//   let progress = 0;
//   interval = setInterval(() => {
//     if (progress >= 100) {
//       clearInterval(interval); // Stop the interval once the progress reaches 100%
//     } else {
//       progress++; // Increment progress by 1% each time
//       progressbar.style.width = `${progress}%`; // Update the width of the progress bar
//     }
//   }, 20);
// });

// resetBtn.addEventListener("click", () => {
//   progressbar.style.background = "white";
//   progressbar.style.width = "0%";
//   if (interval) {
//     clearInterval(interval);
//   }
// });

//createProgressBarElement
function createProgressBarElement() {
  const wrapper = document.createElement("div");
  Object.assign(wrapper.style, {
    height: "20px",
    width: "300px",
    border: "2px solid black",
    marginBottom: "5px",
  });

  const progress = document.createElement("div");
  Object.assign(progress.style, {
    width: "0%",
    height: "20px",
    background: "pink",
  });

  wrapper.appendChild(progress);
  progressBarEle.appendChild(wrapper);

  return progress;
}

//ProgressBarManager
function ProgressBarManager(maxConcurrent) {
  let activeCount = 0;
  const queue = [];
  let currentIndex = 0;

  function animateProgressBar(element) {
    activeCount++;
    let progress = 0;
    const intervalId = setInterval(() => {
      if (progress >= 100) {
        clearInterval(intervalId);
        activeCount--;
        runNextProgressBar();
      } else {
        progress++;
        element.style.width = `${progress}%`;
      }
    }, 10);
  }

  function runNextProgressBar() {
    if (currentIndex < queue.length && activeCount < maxConcurrent) {
      const element = queue[currentIndex++];
      animateProgressBar(element);
    }
  }

  function addProgressBar() {
    const progressBarElement = createProgressBarElement();
    queue.push(progressBarElement);
    runNextProgressBar();
  }

  function resetProgressBars() {
    queue.length = 0;
    currentIndex = 0;
    activeCount = 0;
    progressBarEle.innerHTML = "";
  }

  return { addProgressBar, resetProgressBars };
}

const progressBarManager = ProgressBarManager(3);

clickBtn.addEventListener("click", () => {
  progressBarManager.addProgressBar();
});

resetBtn.addEventListener("click", () => {
  progressBarManager.resetProgressBars();
});
