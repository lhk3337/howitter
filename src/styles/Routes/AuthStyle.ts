import styled, { css } from "styled-components";
import { container } from "styles/Common/CommonStyle";
import theme from "styles/theme";
interface SubmitProps {
  StateBackgroundColor?: boolean;
}
const commonInput = css`
  max-width: 320px;
  width: 100%;
  padding: 10px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 1);
  margin-bottom: 10px;
  font-size: 12px;
  color: black;
`;

export const Container = styled.form`
  ${container}
`;

export const Input = styled.input`
  ${commonInput}
`;

export const Submit = styled.input<SubmitProps>`
  ${commonInput}
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
