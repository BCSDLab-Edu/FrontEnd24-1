// 저장된 사용자 데이터를 가져오는 함수
function getUserData() {
    return JSON.parse(localStorage.getItem('userData')) || {};
  }
  
  // 회원가입 처리
  function handleSignup(event) {
    event.preventDefault();
    const id = document.getElementById('id').value;
    const pw = document.getElementById('pw').value;
    const pwCheck = document.getElementById('pw-check').value;
  
    if (pw !== pwCheck) {
      alert('Passwords do not match.');
      return;
    }
  
    const userData = {
      id: id,
      pw: pw,
      studentNumber: document.getElementById('student-number').value,
      major: document.getElementById('major').value,
      phoneNumber: document.getElementById('phone-number').value
    };
  
    localStorage.setItem('userData', JSON.stringify(userData));
    alert('Signup successful!');
    window.location.href = 'login.html';
  }
  
  // 로그인 처리
  function handleLogin(event) {
    event.preventDefault();
    const id = document.getElementById('id').value;
    const pw = document.getElementById('pw').value;
    const userData = getUserData();
  
    if (id === userData.id && pw === userData.pw) {
      alert('Login successful!');
    } else {
      alert('Invalid ID or password.');
    }
  }
  
  // 페이지별 이벤트 리스너 설정
  if (window.location.pathname.endsWith('signup.html')) {
    document.getElementById('signupForm').addEventListener('submit', handleSignup);
  } else if (window.location.pathname.endsWith('login.html')) {
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
  }
  