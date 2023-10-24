document.addEventListener("DOMContentLoaded", function () {
  const buttons1 = document.querySelectorAll(".button-dimensions-1");
  const buttons2 = document.querySelectorAll(".button-dimensions-2");
  const buttonVisibility = document.querySelectorAll(".button-visibility");
  //makes the image and the buttons visible pushed
  buttons1.forEach((button) => {
    button.addEventListener("click", function () {
      const target = button.getAttribute("data-target");
      const image = document.querySelector(`.${target}`);
      const buttonIndex = target.charCodeAt(6) - 97;

      if (image) {
        image.style.visibility = "visible";

        buttonVisibility[buttonIndex].style.visibility = "visible";
      }
    });
  });
  //hides the image and button once pushed
  buttons2.forEach((button) => {
    button.addEventListener("click", function () {
      const target = button.id.replace("button-hide-", "");
      const image = document.querySelector(`.image-${target}`);
      const buttonIndex = target.charCodeAt(0) - 97;

      if (image) {
        image.style.visibility = "hidden";

        buttonVisibility[buttonIndex].style.visibility = "hidden";
      }
    });
  });
});
