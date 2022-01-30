//PROGRESS CIRCLE

const circle = document.querySelector(".progress-circle");
const loading = document.querySelector(".loading");

const fakeUploadPercentage = [0, 10, 25, 40, 42, 60, 70, 75, 90, 100];
let i = 0;

const circumference = circle.getTotalLength();

const interval = setInterval(() => {
  circle.style.strokeDashoffset =
    circumference - (fakeUploadPercentage[i] / 100) * circumference;
  loading.innerHTML = fakeUploadPercentage[i] + "%";
  i++;
  console.log(i);
  if (i == fakeUploadPercentage.length) {
    clearInterval(interval);
    loading.innerHTML = "100%";
  }
}, 1000);
