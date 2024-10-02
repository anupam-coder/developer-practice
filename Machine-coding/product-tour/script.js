document.getElementById("start-tour").addEventListener("click", startTour);

const tourSteps = [
  {
    elementId: "feature1",
    text: "This is Feature 1. It helps you do XYZ.",
  },
  {
    elementId: "feature2",
    text: "This is Feature 2. It is useful for ABC.",
  },
  {
    elementId: "feature3",
    text: "This is Feature 3. Use it for DEF.",
  },
];

let currentStep = 0;

function startTour() {
  currentStep = 0;
  showOverlay();
  showStep();
}

function showOverlay() {
  const overlay = document.getElementById("tour-overlay");
  overlay.style.display = "flex";
}

function showStep() {
  const step = tourSteps[currentStep];
  const overlayText = document.getElementById("tour-text");

  overlayText.innerText = step.text;

  const featureElement = document.getElementById(step.elementId);
  featureElement.scrollIntoView({ behavior: "smooth", block: "center" });

  highlightElement(featureElement);
}

function highlightElement(element) {
  element.style.position = "relative";
  const highlight = document.createElement("div");
  highlight.style.position = "absolute";
  highlight.style.border = "2px solid yellow";
  highlight.style.pointerEvents = "none";
  highlight.style.top = "0";
  highlight.style.left = "0";
  highlight.style.width = "100%";
  highlight.style.height = "100%";
  element.appendChild(highlight);

  // Clean up highlight after tour step
  setTimeout(() => {
    element.removeChild(highlight);
  }, 2000);
}

document.getElementById("next-button").addEventListener("click", () => {
  if (currentStep < tourSteps.length - 1) {
    currentStep++;
    showStep();
  } else {
    endTour();
  }
});

function endTour() {
  document.getElementById("tour-overlay").style.display = "none";
}
