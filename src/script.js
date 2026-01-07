const signUpCard = document.getElementById("signUpCard");
const successMsg = document.getElementById("successMsg");
const emailForm = document.getElementById("emailForm");
const emailInput = document.getElementById("emailInput");
const errMsg = document.getElementById("errMsg");
const successEmail = document.getElementById("successEmail");
const dismissBtn = document.getElementById("dismissBtn");

emailForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!isValidEmail) {
    emailInput.setAttribute("aria-invalid", "true");
    emailInput.classList.add("err-input", "animate-shake");
    errMsg.innerText = "valid email required";
    emailInput.addEventListener(
      "animationend",
      () => {
        emailInput.classList.remove("animate-shake");
      },
      { once: true }
    );
    return;
  } else {
    emailInput.setAttribute("aria-invalid", "false");
    emailInput.classList.remove("err-input");
    errMsg.innerText = "";
  }
  successEmail.textContent = email;

  signUpCard.classList.add("animate-fade-out");
  setTimeout(() => {
    signUpCard.classList.remove("animate-fade-out");
    signUpCard.style.display = "none";
    successMsg.style.display = "flex";
  }, 300);
});

dismissBtn.addEventListener("click", function () {
  signUpCard.style.display = "flex";
  successMsg.style.display = "none";
  emailInput.value = "";
});
