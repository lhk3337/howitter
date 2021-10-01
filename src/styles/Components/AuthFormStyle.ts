import styled from "styled-components";
import { CommonContainer } from "styles/Common/CommonStyle";
import { AuthFormSubmitStyleProps } from "types";
import theme from "styles/theme";

export const Form = styled.form`
  ${CommonContainer}
`;

export const Input = styled.input`
  max-width: 320px;
  width: 100%;
  padding: 10px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 1);
  margin-bottom: 10px;
  font-size: 12px;
  color: black;
`;

export const Submit = styled(Input)<AuthFormSubmitStyleProps>`
  text-align: center;
  background: ${(props) => (props.StateBackgroundColor ? `${theme.color.green}` : `${theme.color.skyblue}`)};
  color: white;
  font-weight: bold;
  margin-top: 10px;
  cursor: pointer;
`;

export const Error = styled.span`
  color: tomato;
  text-align: center;
  font-weight: 500;
  font-size: 12px;
`;

export const Switch = styled.span`
  color: #04aaff;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 50px;
  display: block;
  font-size: 12px;
  text-decoration: underline;
`;
