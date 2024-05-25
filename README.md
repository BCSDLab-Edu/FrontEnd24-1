# FrontEnd24-1
BCSDLAB의 FrontEnd 트랙 24년 상반기 교육생들을 위한 레포지토리입니다.

<h1><strong>실습1</strong></h1>
<h3>『css 실습』</h3>

![image](https://github.com/BCSDLab-Edu/FrontEnd24-1/assets/156052023/c84b49fd-edb1-4d10-bcb2-d1e1268d73b9)

⇒ css를 활용한 로그인 페이지 

![image](https://github.com/BCSDLab-Edu/FrontEnd24-1/assets/156052023/02129967-c167-453b-b1aa-bbfccc7829fa)

⇒ css를 활용한 회원가입 페이지







<h1><strong>실습2</strong></h1>
<h3>『JS 실습 ( javascript를 활용해 동적인 웹 만들기 )』</h3>

비번체크 이런거

1. 정규식을 통한 id가 이메일 구조인지 확인
![image](https://github.com/BCSDLab-Edu/FrontEnd24-1/assets/156052023/194084c1-68d0-44f9-b504-575a233c0175)

⇒ 올바르지 않다면 알림창 나오고 올바르면 그대로

2. pw를 안보이게 처리 & pw체크 
![image](https://github.com/BCSDLab-Edu/FrontEnd24-1/assets/156052023/bb5d3818-a620-4a0a-935b-e754edebce2e)

⇒ type="password"을 사용해서 비밀번호를 가리고 change이벤트를 사용해서 비밀번호가 맞는지 틀린지 체크한다.

3. 학번 10자리 제한 & 학번에 맞게 학과 변경
![image](https://github.com/BCSDLab-Edu/FrontEnd24-1/assets/156052023/dbb40dbb-413d-417e-9a0e-2008bbee3c1b)

⇒ substr()을 이용해서 학번을 10자리로 제한하고 change이벤트를 사용해서 입력을 끝내면 학번에 맞게 전공이 입력됨

4. 전화번호 양식으로 자동 변환
![image](https://github.com/BCSDLab-Edu/FrontEnd24-1/assets/156052023/01d00d22-6bed-4b60-8d20-7b1f3864f8b3)

⇒정규표현식으로 11자리 숫자를 받고 split,splice,join함수로 -를 넣어 전화번호를 다시 반환한다.

5. 회원가입 취소(로그인 페이지로 이동)

⇒click 이벤트를 사용해서 취소 버튼을 누르면 window.location.href을 이용해 로그인 페이지로 가게 만들었다

6. 특정 id, pw값이 들어오면 로그인 실행

![image](https://github.com/BCSDLab-Edu/FrontEnd24-1/assets/156052023/c00c0933-038b-49db-bc24-d130134cd47d)

⇒ 로그인 양식에 맞았으므로 로그인이 된다.

![image](https://github.com/BCSDLab-Edu/FrontEnd24-1/assets/156052023/323b80d9-8019-41f6-94fd-234d24ee362b)

⇒ 로그인 양식이 맞지 않으면 다시 입력해야한다.


7. topnav 


⇒ (나중에 추가 예정)





<h1><strong>실습3</strong></h1>
<h3>『axios 실습』</h3>

![image](https://github.com/BCSDLab-Edu/FrontEnd24-1/assets/156052023/7f61854a-4c8e-483c-8e69-295fec1313bd)

⇒ fetch()를 사용해서 api받고 response를 josn으로 파싱한 데이터를 사용하여 회원가입 할 때 귀여운 고양이가 나타나게 함.


<h1><strong>실습4</strong></h1>
<h3>『Web Storage 실습』</h3>

![image](https://github.com/BCSDLab-Edu/FrontEnd24-1/assets/156052023/40c1d225-bedf-4179-92de-62438f12bac9)

⇒ 1이 숫자로 시작하는 것이 사용자1을 의미,lastkey는 사용자의 1,2,3을 늘리는 용도,count는 5회를 세는 용도,nologin은 5회 이상 틀리면 로그인 막는 용도

![image](https://github.com/BCSDLab-Edu/FrontEnd24-1/assets/156052023/926c6047-309c-4964-a00c-e4454b467401)


⇒ 5회 초과시 다음 로그인부턴 alert창 띄움, nologin의 벨류값 true로 전환 ,nologin빼고 쿠키 전부 삭제,로컬이랑 세션스토리지도 로그인 잠기면 다 삭제. 

![image](https://github.com/BCSDLab-Edu/FrontEnd24-1/assets/156052023/baab9874-82d3-4f2d-b2ba-ddda61278f15)


⇒ 로컬 스토리지 데이터 쌓이는 모습, 세션스토리지도 똑같음

![image](https://github.com/BCSDLab-Edu/FrontEnd24-1/assets/156052023/e27f6344-ecfc-466f-bfe7-6ff4eb16ddf1)


⇒ 로그아웃 누르면 쿠키,세션,로컬스토리지가 모두 삭제됨. 콘솔창 배열은 삭제되는 과정에서의 쿠키 배열을 콘솔로 보여줌.




복잡한 코드 -- >알고리즘 설명
생소한 개념 -- > 개념 짧게 설명




