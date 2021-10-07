import { css } from "styled-components";
export const CommonContainer = css`
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export const CommonFormInput = css`
  width: 100%;
  padding: 10px 20px;
  border-radius: 20px;
  border: 1px solid black;
  text-align: center;
  background-color: white;
  color: black;
`;

export const CommonFormBtn = css`
  cursor: pointer;
  width: 100%;
  padding: 7px 20px;
  text-align: center;
  color: white;
  border-radius: 20px;
  background-color: #04aaff;
  cursor: pointer;
`;

export const CommonCancelBtn = css`
  cursor: pointer;
  background-color: tomato;
`;
