import styled from "styled-components";
import { Link } from "react-router-dom";
import { CommonFormBtn, CommonCancelBtn } from "styles/Common/CommonStyle";
export const MenuList = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
export const LinkHome = styled(Link)`
  margin-right: 10px;
`;
export const LinkProfile = styled(Link)`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
`;

export const UserName = styled.span`
  margin-top: 10px;
`;

export const LogOutBtn = styled.div`
  ${CommonFormBtn}
  ${CommonCancelBtn}
  margin-left:30px;
  padding: 10px;
  margin-top: 5px;
`;
