# Westagram project

> React를 이용해서 다시 Westagram 구현

## :: 최근 작업 주제 (하나 이상의 주제를 선택해주세요.)

- [x] 기능 추가
- [ ] 리뷰 반영
- [ ] 리팩토링
- [ ] 버그 수정
- [ ] 컨벤션 수정

<br />

## :: 구현 목표 (해당 브랜치에서 구현하고자 하는 하나의 목표를 설정합니다.)

- [x] Mission 1) Login | 사용자 입력 데이터 저장
- [x] Mission 2) Login | 로그인 버튼 활성화(Validation)
- [x] Mission 3) Main | 댓글기능 구현
- [x] Mission 4) Main | 댓글 컴포넌트화 + props로 데이터 전달
- [x] Mission 5) Main | map 함수 적용시 key props를 부여하는 이유

<br />

## :: 구현 사항 설명 (작업한 내용을 상세하게 기록합니다.)

**1. Login 사용자 입력데이터 저장**

- useState를 이용해서 id와 pw를 데이터 타입 객체 형태로 저장
- `handleIdInput`, `handlePwInput` function을 만들고 `e.target.value`를 inputs에 담아줌

  - setinputs({기존 inputs를 복사, 복사한 객체 id에 `e.target.value`를 담기})
  - handlePwInput 동일하게 구현

- handleIdinput과 handlePwInput 모두 onChange가 발생했을 때 실행 됨.

<br>

**2. Login 로그인 버튼 활성화(Validation)**

- `let [isActive, isActiveChange] = useState(false)`
  - state를 하나 만들어주고, boolean type으로 지정해줌
- `const checkValid = e → {inputs.id.includes('@') && inputs.pw.length >= 5}`

  - 삼항연산자를 이용해서 조건이 true일 경우 → isActive가 true
  - 삼항연산자를 이용해서 조건이 false일 경우 → isActive가 false

- onkeyup 이벤트 사용 → id, pw 검증

- `className={isActive ? 'active' : null}`
  - button의 기존 className을 지우고, 삼항연산자 조건 활용  
    (기존 className은 scss Nesting형태로 변경)
  - `.active` 클래스 새롭게 만든 후 `isActive`가 true일 경우 활성화 버튼 색으로 변경

<br>

**3. Main 댓글기능 구현**

- `let [comment, setComment] = useState([''])`
  - state로 comment 빈 배열 만듦
- `handleCommentInput`
  - 댓글 input창에 글자가 입력 될 때마다 event 발생 및 comment에 담아줌
- `handleCommentSubmit = e → { }`
  - Submit event가 발생하면 `e.preventDefault()`로 새로고침 막아줌
  - `setCommentArray(commentValue → [...commentValue, comment])`
    - setCommentArray에 callback함수를 넣어줌.
    - callback 인자 commentValue는 기존의 값을 그대로 복사한 상태에서 새로운 comment가 작성됐을 시 이를 추가해줌
    - 만약 순서를 반대로 작성하게 된다면, 댓글을 작성할 때 아래가 아닌 위로 쌓이는 형태로 댓글이 달림  
      `[comment, ...commentValue]` → 위로 쌓이는 형태

<br />

**4.댓글 컴포넌트화 + props로 데이터 전달**

- `function commnet() { return ( )}`
  - 컴포넌트 만들어주고 export 해주기
  - component는 팀원과 대화를 통해 해당 폴더 아래 각자 이름폴더를 만들고 작성하기로 함.
- Mission.3과 동일하게 하되, `commentArray.map()`를 사용할 때 `Comment` 컴포넌트를 넣어줌.

<br>

## :: 성장 포인트 (해당 기능을 구현하며 고민했던 사항이나 새로 알게된 부분, 어려웠던 점 등을 작성합니다.)

1. React 불변성

- React는 필요한 값을 변경해서 사용하고 싶다면 어떤 값을 사본으로 만들어서 변경 후 다시 setState를 이용해서 원본을 변경해야한다는 사실
  - 이것은 React를 관통하는 핵심 키워드인 불변성 때문이라는 것에 대해서 알게 됨.

```javascript
let copy = [...person];
copy.push(newValue);
setPerson(copy);
```

로 구현했으나, 다음과 같은 방법을 알게 됨

```Javascript
setPerson({...person, 변경할 key : newValue})
// 기존 형태를 복사한 후 수정할 것
```

2. Mission.3 댓글 기능 구현 시, input창에 댓글을 작성한 후, 엔터를 누르면 댓글이 올라가긴 하지만 input창에 댓글이 지워지지 않음.

- input창에 댓글이 올라간 후, 빈 문자열로 변경시켜줬지만 여전히 이전에 작성한 댓글이 남아있었음
  - form에 submit으로 작성하지 않고, input과 button만 조정해주고 있었음.
  - form을 submit으로 변경하고, value에 comment를 지정해줌으로써 해결할 수 있었음.

3. Mission.3 댓글기능 구현 시, useState(['']) 배열을 만들지 않고 useState('')로 작성했었고, typeError이 발생함.

- Array를 분명히 만들었는데 객체형태라고 Error가 떠서 많이 헤맸음.
- 구글에서도 대부분의 사람들이 object를 사용해서 방식을 구현했다가 Error를 만났다는 글이 대부분,
- 하지만 다시 코드를 살펴본 결과, 애초에 Array로 만들지 않았었음.  
  → 에러 경고문을 보고 무작정 구글링 하기보단, 내가 작성한 코드에 Error 요소가 있는지, 오타가 있는지 꼭 확인해 볼 것.

4. Mission.4에서 `import from <경로>`만 작성했었고, `Comment`라는 작명을 하지 않아서 에러가 발생했었음.  
   → 꼭 작명 해줄 것!!!

<br />

## :: 기타 질문 및 특이 사항

> 다음과 같은 기능을 더 추가하고 싶었으나, 하지못했음

**Login 로그인 버튼 활성화(Validation)**

- [ ] disabled 활성화 비활성화 기능 추가

**Main 댓글 기능**

- [ ] 배열이 아니라 객체형태로 key값(Id, 좋아요, 삭제 등)을 지정한 후 댓글기능 구현해보기
- [ ] 재렌더링 되는 요소들 컨트롤해보기

- 재렌더링시 엄청 계산이 복잡한 함수가 있다고 가정하고 이 함수를 재렌더링 최소화 할 수 있는 코드 고민해보기
