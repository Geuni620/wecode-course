# Westagram project

## 1. 구현 목표

---

<br>

[X] 로그인 페이지 레이아웃  
[X] ID, PW 입력 시 로그인 버튼 활성화  
[X] 메인 페이지 레이아웃  
[X] 댓글 내용 입력 후 Enter press, 혹은 게시 버튼 클릭 시 댓글 추가 가능  
[X] ID, PW 유효성 검사  
[X] 댓글 좋아요 / 삭제 기능
[ ] 아이디 검색 기능  
[X] nav 프로필 사진 클릭 시 메뉴 박스 생성  
[X] 반응형 구현

<br>

## 2. 구현 사항 설명

---

### ☛ 로그인 페이지

- ID와 PW 입력시 아이디에는 `@`가 포함되어야하며, 비밀번호 길이는 `5자 이상`이어야 로그인 버튼 활성화

  - button type중 `disabled = false`를 이용해 버튼이 활성화 되었을 때 로그인버튼을 누르고 지정된 html로 이동가능하도록 구현
    - button type를 `submit`으로 설정하지 않고 `button`으로 설정해놓아서 input에 `action`을 통해 html파일 경로를 설정해 놓았음에도 불구하고, 창 이동이 구현되지 못했음
    - button type 중 `disabled`를 `disable`로 작성해 놓고 안되는 이유에 대해서 몇 시간을 고민했음 → **오타에 신경쓸 것.**
  - 처음 switch문으로 입력이 일어났을 시, 버튼이 활성화되도록 구현했으나, 추후 조건이 추가됨에 따라 `ifelse문`으로 구현하였음.
    - 추후 새롭게 구현해야할 상황이 생긴다면 코드의 간결화를 위해 `삼항연산자`를 이용해 구현해볼 것

<br>

### ☛ 메인 페이지

- input창에 댓글 내용입력 후 Enter 클릭 시 댓글 기입 가능
- 댓글 입력 후 좋아요 및 삭제 기능 구현
  - 좋아요 기능 구현시, `classList.contains`와 `add`, `remove`로 구현했다가 직관적으로 코드를 알아보기 위해 `classList.replace`로 변경하였음
- nav 프로필 사진 클릭 시 메뉴 박스 생성
  - 닫을 시 전역 어디를 클릭해도 메뉴박스 닫기 가능
- 화면이 1400px보다 작아질 시, 반응형 웹페이지 구현
- 스토리창 스크롤바 구현 및 스크롤바 숨기기
  - `overflow-y`를 통해서 `height`를 고정시키고 scroll bar를 생성함
  - `-webkit-scrollbar`로 scroll bar를 숨겨줌
- 검색창 focus시 아이콘 위치이동
  - JavaScript로 input창 클릭시 아이콘 위치를 이동시키게 구현을 했으나, placeholder와 JavaScript의 속도차이가 발생
    - placeholder 단어가 먼저 사라지고 아이콘이 옮겨지는 시간차
  - 그래서 CSS를 통해서 input창에 클릭시, `focus`와 `focus-within`으로 아이콘과 placeholder를 적정위치로 옮겨줌

<br>

## 3. 보완할 점

---

### ☛ 리팩토링

[X] console.log() 지우기
[ ] id, class명, 함수명

- 유추하도록 만들지 말고, 읽기 쉽게, 직관적으로 표현
- 변수명은 명사형으로 짓기
- JavaScript는 들여쓰기 2칸

[ ] Semantic Tag의 사용

- div → ul 또는 li를 사용
- img tag에 alt 속성 부여할 것
- self Closing Tag 적용 되는 것들은 다 적용

[X] CSS 권장하는 속성 순서

1. Layout Properties (position, float, clear, display)
2. Box Model Properties (width, height, margin, padding)
3. Visual Properties (color, background, border, box-shadow)
4. Typography Properties (font-size, font-family, text-align, text-transform)
5. Misc Properties (cursor, overflow, z-index)

[ ] 불필요한 style 속성 작성은 지양  
[ ] bottom-up 방식으로 레이아웃 잡기

<br>

### ☛ 개선사항

**댓글 좋아요 / 삭제 기능 중**  
[ ] 리셋해도 사라지지 않게 local storage로 구현해보기  
[ ] 공백을 설정한 후, 댓글 남겨지는 현상 막기
[ ] 댓글 `createElement` 간소화 고민해보기

<br>

**아이디 검색 기능 중**  
[ ] 검색 버튼 클릭 후 타이핑 했을 때 원하는 검색결과 출력  
[ ] 검색 버튼 클릭 후 타이핑 했다가 지웠을 때 결과값 없어지게 만들기  
[ ] 클래스 만들어서 클래스로 데이터를 생성하고 그 데이터 불러오기
