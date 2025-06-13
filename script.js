const container = document.getElementById("bars-container");
let arr = [50, 20, 80, 10, 30, 60];
let bars = [];

// Create bars
function createBars() {
  container.innerHTML = "";
  bars = [];

  arr.forEach(value => {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value * 3}px`; // scale height
    container.appendChild(bar);
    bars.push(bar);
  });
}

createBars();

async function startSort() {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      // Highlight bars
      bars[j].classList.add("active");
      bars[j + 1].classList.add("active");

      await sleep(300); // Wait for animation

      if (arr[j] > arr[j + 1]) {
        // Swap values
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        updateBars();
      }

      // Remove highlight
      bars[j].classList.remove("active");
      bars[j + 1].classList.remove("active");
    }
  }
}

function updateBars() {
  arr.forEach((value, index) => {
    bars[index].style.height = `${value * 3}px`;
  });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
