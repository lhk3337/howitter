import styled from "styled-components";
import { CommonContainer, CommonFormInput, CommonFormBtn } from "styles/Common/CommonStyle";
export const Container = styled.div`
  ${CommonContainer}
`;
export const Form = styled.form`
  border-bottom: 1px solid rgba(255, 255, 255, 0.9);
  padding-bottom: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  ${CommonFormInput}
`;

export const Submit = styled.input`
  ${CommonFormBtn}
  margin-top: 10px;
`;
