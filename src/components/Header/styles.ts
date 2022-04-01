import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
`;

export const SubContainer = styled.div`
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.a`
  font-weight: bold;
  font-size: 2rem;
  color: var(--primary-color);
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid var(--primary-color);
  }
`;
export const HeaderList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  gap: 2rem;
  a {
    &:hover {
      color: var(--primary-color);
      bor
    }
  }
`;
export const HeaderButton = styled.div`
  > button {
    margin-left: 2rem;
    font-weight: bold;
    cursor: pointer;
    padding: 10px 20px;
    border: none;
    border-radius: 0.5rem;
    &:first-child {
      background: var(--primary-color);
      color: var(--white-color);
    }
  }
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
`;
