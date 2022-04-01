import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SubContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 250px);
`;
export const Column = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &:nth-child(1) {
    margin-top: 0px;
  }
  &:nth-child(2) {
    margin-top: 160px;
  }
  &:nth-child(3) {
    margin-top: 320px;
  }
  &:nth-child(4) {
    margin-top: 480px;
  }
  &:nth-child(5) {
    margin-top: 320px;
  }
  &:nth-child(6) {
    margin-top: 160px;
  }
  &:nth-child(7) {
    margin-top: 0px;
  }
`;

export const Element = styled.div`
  background-color: red;
  width: 236px;
  height: 350px;
  border-radius: 15px;
  &:not(:first-child) {
    margin-top: 16px;
  }
`;
