import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  > span {
    font-size: 60px;
    font-weight: 600;
  }
`;
export const SubContainer = styled.div`
  position: relative;
`;
export const WrapperContent = styled.div`
  position: absolute;
  /* &:not(:first-child) {
    display: none;
  } */
  left: 0px;
  /* right: 0px; */
  transition-delay: var(--fade-duration);
  top: 0px;
  transform: translateX(-50%);
`;
export const Title = styled.h2`
  font-size: 60px;
  /* &:not(:first-child) {
    display: none;
  } */

  transition: 0.3s;
  font-weight: 600;
  color: var(--primary-color);
  white-space: nowrap;
  transition-delay: var(--fade-duration);
`;
