const $id =document.querySelector(".id");
const $pw = document.querySelector(".pw");
const $login_btn = document.querySelector("#login_btn")
$login_btn.addEventListener("click",() => checklogin())
function checklogin(){
    const checkid = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    const checkpw = /^\S+$/;
    const id_val = $id.value;
    const pw_val = $pw.value;
    if(checkid.test(id_val)&&checkpw.test(pw_val))
        {window.location.href ="https://m.naver.com/"}
    else{
        alert("id나pw를 다시 입력하세요.");
        window.location.reload();
    }
}