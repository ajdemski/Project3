// Business Logic
function generateRogobersAnswer(num) {
  const result = [];
  for (let i = 0; i <= num; i++) {
    let message = "";
    if (i.toString().includes("0")) {
      message += "Won't you be my neighbor?";
    } else {
      if (i.toString().includes("2")) {
        message += "boop";
      }
      if (i.toString().includes("4")) {
        message += "beep";
      }
    }
    if (message === "") {
      message = i.toString();
    }
    result.push(message);
  }
  return result;
}


// UI Logic
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("wordCounter");
  const rogobersAnswer = document.getElementById("rogobersAnswer");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const num = parseInt(document.getElementById("input").value);
    const result = generateRogobersAnswer(num);
    rogobersAnswer.textContent = result.join(" ");
  });
});
