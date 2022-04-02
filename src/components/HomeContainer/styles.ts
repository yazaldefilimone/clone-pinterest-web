import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition-delay: var(--fade-duration);
  visibility: hidden;
  max-height: 0px;
  pointer-events: none;
`;
export const SubContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 250px);
`;
