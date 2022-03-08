const inputEmail = document.querySelector(".login__email");
const inputPassWord = document.querySelector(".login__pw");
const btn = document.querySelector(".login__btn");

//로그인 기능 활성화
function handleLogin() {
  switch (!(inputEmail.value && inputPassWord.value)) {
    case true:
      btn.disable = true;
      btn.style.backgroundColor = "#c4e1fb";
      btn.style.cursor = "default";
      break;
    case false:
      btn.disable = false;
      btn.style.backgroundColor = "#0595f6";
      btn.style.cursor = "pointer";
      break;
  }
}

inputEmail.addEventListener("keydown", handleLogin);
inputPassWord.addEventListener("keydown", handleLogin);

function handleBtn() {
  console.log("hi");
}

btn.addEventListener("click", handleBtn);
