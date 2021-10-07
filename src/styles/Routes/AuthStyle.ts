import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
export const Btns = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 320px;
`;

export const Btn = styled.button`
  cursor: pointer;
  border-radius: 20px;
  border: none;
  padding: 10px 0px;
  font-size: 12px;
  text-align: center;
  width: 150px;
  background: white;
  cursor: pointer;
`;
