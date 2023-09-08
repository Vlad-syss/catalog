//========================================================================================================================================================================
//========================================================================================================================================================================
const burger = document.querySelector(".header__burger");
const header = document.querySelector(".header");

burger.addEventListener("click", () => {
  header.classList.toggle("active");
  burger.classList.toggle("active");
  document.body.classList.toggle("lock");
});

//========================================================================================================================================================================
//========================================================================================================================================================================
function smoothScroll(target) {
  const element = document.querySelector(target);
  const headerHeight = document.querySelector(".header__row").offsetHeight;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition - headerHeight;

  window.scrollBy({
    top: offsetPosition,
    behavior: "smooth",
  });
}

document
  .querySelectorAll(".navigation__list_home .navigation__link")
  .forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      smoothScroll(item.getAttribute("href"));
      document.querySelector(".header__row").classList.remove("active");
      document.body.classList.remove("lock");
      document.querySelector(".header__burger").classList.remove("active");
    });
  });

//========================================================================================================================================================================
//========================================================================================================================================================================

const slider = document.getElementById("slider");

if (slider) {
  noUiSlider.create(slider, {
    start: [0, 2000],
    connect: true,
    range: {
      min: 0,
      max: 5000,
    },
  });

  const input0 = document.getElementById("input-0");
  const input1 = document.getElementById("input-1");
  const inputs = [input0, input1];

  slider.noUiSlider.on("update", function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);
  });
}
