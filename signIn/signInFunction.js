const loginBtn = document.querySelector(".login");
const id = document.querySelector(".id");
const pw = document.querySelector(".pw");
loginBtn.addEventListener("click", () => move());
let count = 0;
function move() {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user_input = { id: id.value, pw: pw.value };
  let check = false;
  if (id.value == "" || pw.value == "") {
    alert("id, pw를 입력해주세요");
  }
  for (i = 0; i < users.length; i++) {
    if (users[i].id === user_input.id || users[i].pw === user_input.pw) {
      check = true;
      //일치하는 유저 찾으면 루프를 종료해야함!!
      break;
    }
  }
  if (!check) {
    alert("id 또는 PW가 일치하지 않습니다.");
    count++;
    // 잘못된 id/pw를 5회 이상 입력한 경우
    if (count == 5) {
      //cookie에 로그인금지 flag 생성 후 로그인 해당 값을 이용해 로그인 막기. 단, expiretime은 1시간으로 한다.
      document.cookie = "loginBan=true; path=/; max-age=3600;";
      alert("로그인이 5회 이상 실패하여 1시간 동안 로그인할 수 없습니다.");
    }
  } else {
    // 로그인 버튼 클릭 시 로그인을 시도한 ID를 모든 스토리지(cookie, session storage, local storage)에 저장
    // cookie의 expiretime은 72시간으로 한다.
    sessionStorage.setItem("users", JSON.stringify(users));
    document.cookie =
      "users = " + JSON.stringify(users) + "; path=/; max-age=259200;";
    window.location.href = "/FrontEnd24-1/mainPage/mainPage.html";
  }
}

// 개발자도구 > Application 의 각 스토리지 스크린샷 캡쳐
