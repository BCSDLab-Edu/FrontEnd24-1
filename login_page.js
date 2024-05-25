const $id =document.querySelector(".id");
const $pw = document.querySelector(".pw");
const $login_btn = document.querySelector("#login_btn");
const $delete_btn = document.querySelector('#delete_btn');
$delete_btn.addEventListener('click',deletething);
let k;
function checklogin(){
    const checkid = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    const checkpw = /^\S+$/;
    const id_val = $id.value;
    const pw_val = $pw.value;
    const key = /^lastkey$/;
    if(checkid.test(id_val)&&checkpw.test(pw_val))
        alert("로그인 성공!");
        //아이디 비번이 맞다면 로그인 성공(현재는 양식만)
    else
    {
        alert("id나pw를 다시 입력하세요.");
        window.location.reload();
    }
}

function login(){
    let count;
    const matche = document.cookie.match(/(?:^|; )count=([^;]*)/);
    if($id.value !== 'id' || $pw.value !== 'pw')
    {
        if (!matche) {
            count = 0;
        } else {
            count = parseInt(matche[1]);
        }
        if (count >= 4) {
            deletething();
            newcookie('nologin', 'true');
        } else {
            const newcount = count + 1;
            newcookie('count', newcount);
            newcookie('nologin', 'false');
        }
    }else{
        deletething();
    }  

    function newcookie(key,value){
        const date = new Date();
        date.setTime(date.getTime()+ 60**2*1000)
        const expires = "expires= "+date.toUTCString();
        document.cookie = `${key}=${value}; ${expires}; path=/`;
    }
}


function deletething(){
    const cookies = document.cookie.split(';');
    console.log(cookies)
    cookies.forEach((cookie) => {
        const [name] =cookie.split('=');
        document.cookie =`${name}=value; max-age=-1; path=/`;
    })
    k = true;
    localStorage.clear();
    sessionStorage.clear();
}

function addthing(key,value) {
    let lastkey;
    const newvalue = $id.value;
    const matches = document.cookie.match(/(?:^|; )lastkey=([^;]*)/);
    if(!matches)
        lastkey = 0;
    else
        lastkey = parseInt(matches[1]);

    const newkey = lastkey + 1;
    const date = new Date();
    const deadline = 3*24*60**2*1000;
    date.setTime(date.getTime() + deadline);
    const expires = "expires= "+date.toUTCString();
    document.cookie = `lastkey=${newkey}; ${expires};path=/`;
    document.cookie = `${newkey}=${newvalue}; ${expires}; path=/`;

    if(k){
        document.cookie = 'lastkey=; max-age= -1; path=/';
        document.cookie = '1=; max-age= -1; path=/';
    }

    let lastkey1;
    const match = localStorage.getItem('lastkey1');
    if(match === null)
        lastkey1 = 0;
    else
        lastkey1 = parseInt(match);

    const newkey1 = lastkey1 + 1;

    localStorage.setItem('lastkey1',newkey1);
    localStorage.setItem(newkey1,newvalue);
    if(k){
        localStorage.clear();
    }
    let lastkey2;
    const match1 = sessionStorage.getItem('lastkey2');
    if(match1 === null)
        lastkey2 = 0;
    else
        lastkey2 = parseInt(match1);

    const newkey2 = lastkey2 +1;

    sessionStorage.setItem('lastkey2',newkey2);
    sessionStorage.setItem(newkey2,newvalue);
    if(k){
        sessionStorage.clear();
    }
}

function totallogin(){
    const match = document.cookie.match(/(?:^|; )nologin=([^;]*)/);
    if(match!==null&&match[1]==='true')
        alert("1시간 후에 다시 시도하세요");
    else{
        checklogin();
        login();
        addthing();
    }
}

$login_btn.addEventListener('click',totallogin);