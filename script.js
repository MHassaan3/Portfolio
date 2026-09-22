// Scroll buttons to sections
document
  .querySelectorAll(".viewbtn, .touchbtn, .hirebtn")
  .forEach(function (btn) {
    btn.addEventListener("click", function () {
      const target = document.querySelector("#contact");
      if (btn.classList.contains("viewbtn")) {
        document
          .querySelector("#projects")
          .scrollIntoView({ behavior: "smooth" });
      } else {
        document
          .querySelector("#contact")
          .scrollIntoView({ behavior: "smooth" });
      }
    });
  });

// Contact form
const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert(
      "This feature is under development. Please contact me directly at itstore2003@gmail.com",
    );
    form.reset();
  });
}
