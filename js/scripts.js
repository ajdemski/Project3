document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("wordCounter");
  const rogobersAnswer = document.getElementById("rogobersAnswer");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const num = parseInt(document.getElementById("input").value);
    const result = [];

    for (let i = 0; i <= num; i++) {
      let message = "";
      if (i.toString().includes("1")) {
        message += "Won't you be my neighbor?";
      } else {
        if (i.toString().includes("2")) {
          message += "boop";
        }
        if (i.toString().includes("3")) {
          message += "beep";
        }
      }
      if (message === "") {
        message = i.toString();
      }
      result.push(message);
    }

    rogobersAnswer.textContent = result.join(" ");
  });
});
// Business Logic







// UI Logic