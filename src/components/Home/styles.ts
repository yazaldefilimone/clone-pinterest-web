import styled from 'styled-components';

export const Container: any = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition-delay: var(--fade-duration);
  visibility: hidden;
  max-height: 0px;
  pointer-events: none;
`;
export const SubContainer: any = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 250px);
  transition-delay: var(--fade-duration);
  visibility: hidden;
  max-height: 0px;
  pointer-events: none;
`;
