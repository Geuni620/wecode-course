import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

function Login() {
  const navigate = useNavigate();

  //Main페이지 이동
  const gotomain = () => {
    navigate("/main");
  };

  //로그인 input 값 받기 -> 객체로 구현
  let [inputs, setInputs] = useState({
    id: "",
    pw: "",
  });

  let [isActive, isActiveChange] = useState(false);

  const handleIdInput = (e) => {
    setInputs({ ...inputs, id: e.target.value });
  };

  const handlePwInput = (e) => {
    setInputs({ ...inputs, pw: e.target.value });
  };
  console.log(inputs);

  //유효성 검토
  const checkValid = (e) => {
    inputs.id.includes("@") && inputs.pw.length >= 5
      ? isActiveChange(true)
      : isActiveChange(false);
  };

  //

  return (
    <div className="wrap">
      <div className="logo">westagram</div>
      <form className="login">
        <input
          className="login__email"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={handleIdInput}
          onKeyUp={checkValid}
        />
        <input
          className="login__pw"
          type="password"
          placeholder="비밀번호"
          onChange={handlePwInput}
          onKeyUp={checkValid}
        />
        <button
          className={isActive ? "active" : null}
          type="button"
          onClick={gotomain}
        >
          로그인
        </button>
      </form>

      <footer className="footer">
        <a>비밀번호를 잊으셨나요?</a>
      </footer>
    </div>
  );
}

export default Login;
