const $info_id = document.querySelector(".info_id");
let $id_Element = document.querySelector(".id");
const $button = document.createElement("button");
$button.innerText = "확인";
$info_id.appendChild($button);
let email =/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
$button.addEventListener('click',() =>check());
function check() {
    let $id = $id_Element.value;
    if(email.test($id))
        alert("올바른 형식입니다.");
    else
        alert("잘못된 이메일 형식입니다.");
}
//////////////////////////////////////////////////////////
const $info_pw = document.querySelector(".info1");
let $pw_Element = document.querySelector(".pw");
let $pw_check_Element = document.querySelector(".pw_check");
const $button1 = document.createElement("button");
$button1.innerText = "확인";
$info_pw.appendChild($button1);
$button1.addEventListener('click',() =>check1());
function check1(){
    let $pw = $pw_Element.value;
    let $pw_check = $pw_check_Element.value;
        if ($pw == $pw_check)
            alert("일치합니다.");
        else
            alert("일치하지 않습니다.");
}
//////////////////////////////////////////////////////////
const $info2 = document.querySelector(".info2");
const $std_Num_Element = document.querySelector(".student_number");
const $std_num = $std_Num_Element.value;
function maxnum(input,max){
    if(input.value.length > max)
        input.value = input.value.substr(0,10);
}
/////////////////////////////////////////////////////
const $info3 = document.querySelector(".info3");
const $std_Num_major = document.querySelector(".student_number");
const $major_Element = document.querySelector(".major");
const prevDeptList = [
    { name: '건축공학과', dept_nums: ['72'] },
    { name: '기계공학부', dept_nums: ['20'] },
    { name: '디자인공학과', dept_nums: ['51'] },
    { name: '메카트로닉스공학부', dept_nums: ['40'] },
    { name: '산업경영학부', dept_nums: ['80'] },
    { name: '에너지신소재화학공학부', dept_nums: ['74'] },
    { name: '전기ㆍ전자ㆍ통신공학부', dept_nums: ['61'] },
    { name: '컴퓨터공학부', dept_nums: ['36'] },
    { name: '고용서비스정책학과', dept_nums: ['85'] },
];
$std_Num_major.addEventListener("change",() => {
    const major = $std_Num_major.value;
    let major_num = major.substr(5,2);
    prevDeptList.map((num) => {
        const major_sel = $major_Element.value;
        if(major_num == num.dept_nums[0]){
            $major_Element.value = num.name;
        }
    })
});
function checknum(){      
  const major = $std_Num_major.value;
  let major_num = major.substr(5,2);
  return major_num;
}
/////////////////////////////////////////////////////////////
const $info4 = document.querySelector(".info4");
const $ph_num_Ele = document.querySelector(".phone_number");
$ph_num_Ele.addEventListener("change",() => check2())
function check2(){
    const ph_num = $ph_num_Ele.value;
    let checkform = /\d{11}/;
    if(checkform.test(ph_num)){
        let a;
        a = ph_num.split("");
        a.splice(3,0,"-");
        a.splice(8,0,"-");

        let b = a.join("");

        $ph_num_Ele.value = b; //다시 할당해주기
        console.log(b)
    }
    else
        alert("다시 입력하세요.");
}
///////////////////////////////////////////////////////////
const $button3 = document.querySelector(".btn2");
$button3.addEventListener("click", function(){
    window.location.href = "3Wlogin.html";
  });

const $button4 = document.querySelector(".btn3");
$button4.addEventListener("click", function(){
    window.location.href = "3Wlogin.html";
  });
//////////////////////////////////////////////////////////
fetch('https://api.thecatapi.com/v1/images/search?size=full')
    .then(response => response.json())
    .then(data => {
        const imageUrl = data[0].url;
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imgElement.style.width = "300px";
        imgElement.style.height = "300px";

        const container = document.querySelector('.cat');
        container.appendChild(imgElement);
    })
    .catch(error => {
        console.error('Error', error);
    });

