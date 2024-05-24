const logOutBtn = document.querySelector(".logOut");
logOutBtn.addEventListener("click", () => storageReset());
function storageReset() {
  // 현재 저장된 모든 스토리지 초기화
  localStorage.clear();
  sessionStorage.clear();
  //쿠키 초기화도..?해야할까..
  window.location.href = "/FrontEnd24-1/topnav/topnav.html";
}
