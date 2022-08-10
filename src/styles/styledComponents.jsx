import styled from 'styled-components';

export const ShoppingCartStyled = styled.div`
  display: flex;
  color: blue;
  justify-content: center;
  & p {
    color: white;
    background-color: blue;
    padding: 4px 11px;
    border-radius: 16px;
    font-weight: 700;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-bottom: 8px;
  & * {
    padding-right: 40px;
  }
`;

export const CardContainerStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-gap: 10px;
  width: 1080px;
  margin: auto;
`;

export const CardStyled = styled.div`
  border: 1px solid #333;
  display: flex;
  flex-direction: column;
  position: relative;
  & h2 {
    font-size: 20px;
  }
  & p {
    font-size: 14px;
    text-align: left;
    padding-left: 2px;
  }
  & img {
    order: -1;
  }
  & * {
    padding: 0;
    margin: 0;
  }
  & h3 {
    color: blue;
  }
  & span {
    font-weight: 700;
  }
  & button {
    position: absolute;
    top: 30%;
    left: 50%;
    padding: 12px 16px;
    background: rgba(255, 0, 0, 0.8);
    border: none;
    color: white;
    transform: translate(-60%, -50%);
    opacity: 0;
  }
  &:hover img {
    opacity: 0.7;
  }
  &:hover button {
    opacity: 1;
  }
`;

export const LayoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1080px;
  margin: auto;
  & a {
    font-size: 20px;
    text-decoration: none;
    padding: 20px;
  }
`;