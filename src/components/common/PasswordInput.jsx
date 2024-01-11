import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "./Input";

const PasswordInputWrapper = styled.div`
  display: flex;
  ~div {
    margin: 8px;
  }
`;

const PasswordInputStyled = styled(Input).attrs(() => ({
  type: "password",
  placeholder: "Enter your Password",
}))`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const ToggleButton = styled.div`
  display: flex;
  height: 40px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 0.9em;
  padding: 8px;
  border-left: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background: white;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  color: black;
`;

const PasswordInput = (props) => {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <>
      <PasswordInputWrapper>
        <PasswordInputStyled {...props} />
        <ToggleButton onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "Hide" : "Show"}
        </ToggleButton>
      </PasswordInputWrapper>
      <div>{showPassword ? props.value : ""}</div>
    </>
  );
};

export default PasswordInput;
