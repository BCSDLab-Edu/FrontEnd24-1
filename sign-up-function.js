const id = document.querySelector(".id");
const pw = document.querySelector(".pw");
const passwordCheck = document.querySelector(".pw-check");
const stdNum = document.querySelector(".student-number");
const major = document.querySelector(".major");
const phNum = document.querySelector(".phone-number");
const signUpBtn = document.querySelector(".signup");
const cancleBtn = document.querySelector(".cancle");

function idCheck(id) {
  id_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  if (!id_regex.test(id.value)) {
    return false;
  } else {
    return true;
  }
}

function pwCheck(pw, passwordCheck) {
  if (pw.value != passwordCheck.value) {
    return false;
  } else {
    return true;
  }
}

function majorChange(stdNum) {
  console.log("a");
  const midStdNum = String(stdNum.value).substring(4, 7);
  if (midStdNum == "136") {
    return "컴퓨터공학부";
  } else if (midStdNum == "120") {
    return "기계공학부";
  } else if (midStdNum == "140") {
    return "메카트로닉스공학부";
  } else if (midStdNum == "161") {
    return "전기전자통신공학부";
  } else if (midStdNum == "151") {
    return "디자인공학과";
  } else if (midStdNum == "172") {
    return "건축공학과";
  } else if (midStdNum == "174") {
    return "에너지신소재화학공학부";
  } else if (midStdNum == "180") {
    return "산업경영학부";
  } else {
    return "";
  }
}
stdNum.addEventListener("change", () => {
  major.innerText = majorChange(stdNum);
});

function phNumChange(phNum) {
  const phNumChanged = phNum.value;
  const length = phNumChanged.length;
  if (length >= 9) {
    let numbers = phNumChanged
      .replace(/[^0-9]/g, "")
      .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
    phNum.value = numbers;
  }
}
phNum.addEventListener("input", () => phNumChange(phNum));

signUpBtn.addEventListener("click", () => signUp());
function signUp() {
  if (!idCheck(id)) {
    console.log("a");
    alert("유효하지 않은 이메일 주소입니다.");
  } else if (!pwCheck(pw, passwordCheck)) {
    alert("비밀번호를 다시 확인해주세요.");
  } else {
    alert("회원가입이 완료되었습니다!");
  }
}

cancleBtn.addEventListener("click", cancle);
function cancle() {
  window.location.href = "sign-in.html";
}
