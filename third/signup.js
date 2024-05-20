const button = document.getElementById("addbutton"); //버튼


function signUpCheck(){
    let id = document.getElementById("id").value
    let name = document.getElementById("name").value
    let pw = document.getElementById("pw").value
    let pw-check = document.getElementById("pw-check").value
    let std-num = document.getElementById("student-number").value
    
    let check = true;

    // 1. id가 이메일 구조인지 확인
    if(id.includes('@')){
        let emailId = id.split('@')[0]
        let emailServer = id.split('@')[1]
        if(emailId === "" || emailServer === ""){
        document.getElementById("emailError").innerHTML="올바른 이메일 형식이 아닙니다."
        check = false
        }
        else{
        document.getElementById("emailError").innerHTML=""
        }
    }else{
        document.getElementById("emailError").innerHTML="올바른 이메일 형식이 아닙니다."
        check = false
    }


    // 이름확인
    if(name===""){
        document.getElementById("nameError").innerHTML="이름이 올바르지 않습니다."
        check = false
    }else{
        document.getElementById("nameError").innerHTML=""
    }


    // 비밀번호 확인
    if(pw !== pw-check){
        document.getElementById("passwordError").innerHTML=""
        document.getElementById("passwordCheckError").innerHTML="비밀번호를 다시 확인해주세요."
        check = false
    }else{
        document.getElementById("passwordError").innerHTML=""
        document.getElementById("passwordCheckError").innerHTML=""
    }

    if(pw===""){
        document.getElementById("passwordError").innerHTML="비밀번호를 입력해주세요."
        check = false
    }
    else{
        //document.getElementById("passwordError").innerHTML=""
    }
    if (pw-check==="") {
        document.getElementById("passwordCheckError").innerHTML="비밀번호를 다시 입력해주세요."
        check = false
    }
    else{
        //document.getElementById("passwordCheckError").innerHTML=""
    }


    // 학번 확인
    if(std-num === ""){
        document.getElementById("stdnumError").innerHTML="학번을 입력해주세요."
        check = false
    }else{
        document.getElementById("std-numError").innerHTML=""
    }

    
    
    if(check){
        document.getElementById("emailError").innerHTML=""
        document.getElementById("nameError").innerHTML=""
        document.getElementById("passwordError").innerHTML=""
        document.getElementById("passwordCheckError").innerHTML=""
        document.getElementById("areaError").innerHTML=""
        document.getElementById("genderError").innerHTML=""
        
        //비동기 처리이벤트
        setTimeout(function() {
        alert("가입이 완료되었습니다.")
    },0);
    }

  
}