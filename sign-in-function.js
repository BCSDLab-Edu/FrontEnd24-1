const loginBtn = document.querySelector(".login");
const id = document.querySelector(".id");
const pw = document.querySelector(".pw");
loginBtn.addEventListener("click", () => move());
function move() {
  if (id.value == 0 || pw.value == 0) {
    alert("id, pw를 입력해주세요");
  }
}
