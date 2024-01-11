import styled, { css } from "styled-components";

const largeStyles = ({ large }) => {
  if (large) {
    return css`
      padding: 10px;
      border-radius: 5px;
      font-size: 1.5em;
    `;
  } else {
    return css`
      padding: 8px;
      border-radius: 4px;
      font-size: 1em;
    `;
  }
};

export const Button = styled.button`
  display: block;
  background-color: ${(p) =>
    p.secondary ? p.theme.secondaryColor : p.theme.primaryColor};
  font-weight: bold;
  ${largeStyles}
  color: white;
  width: 100%;
  border: none;
  white-space: none;
  font-size: 1em;
  border-radius: 4px;
  box-shadow: none;
  cursor: pointer;
  &:hover {
    background-color: red;
  }
  &:disabled {
    background-color: gray;
    color: black;
    cursor: default;
  }
`;
