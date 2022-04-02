import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const Column = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: 1s;
  &:nth-child(1) {
    margin-top: 0px;
    transition-delay: calc(var(--columns-transition-delay) * 0);
  }
  &:nth-child(2) {
    margin-top: 160px;
    transition-delay: calc(var(--columns-transition-delay) * 1);
  }
  &:nth-child(3) {
    margin-top: 320px;
    transition-delay: calc(var(--columns-transition-delay) * 2);
  }
  &:nth-child(4) {
    margin-top: 480px;
    transition-delay: calc(var(--columns-transition-delay) * 3);
  }
  &:nth-child(5) {
    margin-top: 320px;
    transition-delay: calc(var(--columns-transition-delay) * 4);
  }
  &:nth-child(6) {
    margin-top: 160px;
    transition-delay: calc(var(--columns-transition-delay) * 5);
  }
  &:nth-child(7) {
    margin-top: 0px;
    transition-delay: calc(var(--columns-transition-delay) * 6);
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
