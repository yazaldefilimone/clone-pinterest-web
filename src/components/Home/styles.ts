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
`;

export const Element = styled.div`
  background-color: red;
  width: 235px;
  height: 350px;
  border-radius: 10px;
`;
