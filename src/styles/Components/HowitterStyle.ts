import styled, { css } from "styled-components";
import { CommonFormInput, CommonContainer, CommonFormBtn, CommonCancelBtn } from "styles/Common/CommonStyle";
const share = css`
  cursor: pointer;
  margin-top: 15px;
  margin-bottom: 5px;
`;

export const Container = styled.div`
  margin-bottom: 20px;
  background-color: white;
  width: 100%;
  max-width: 320px;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  color: rgba(0, 0, 0, 0.8);
`;

export const FormSubmit = styled.form`
  ${CommonContainer}
`;

export const FormInput = styled.input`
  ${CommonFormInput}
  ${share}
`;

export const SubmitInput = styled.input`
  ${share}
  margin-bottom: 10px;
`;

export const CancelBtn = styled.span`
  ${CommonFormBtn}
  ${CommonCancelBtn}
`;

export const Message = styled.h4`
  font-size: 14px;
`;

export const ProfileImg = styled.img`
  right: -66px;
  top: -8px;
  position: absolute;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-top: 10px;
`;

export const HowitterAction = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  & > span {
    cursor: pointer;
  }
  & > span:first-child {
    margin-right: 10px;
  }
`;
