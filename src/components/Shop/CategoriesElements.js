import { Link } from "react-router-dom";
import styled from "styled-components";

export const CategoriesWrapper = styled.article`
  margin-bottom: 16.8rem;

  @media screen and (max-width: 768px) {
    margin-bottom: 96px;
  }
`;

export const CategoriesContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;

  @media screen and (max-width: 768px) {
    column-gap: 10px;
  }
  
  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
    row-gap: 100px;
  }
`;

export const CategoriesCol = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 20.4rem;
  min-height: 20.4rem;
  background: var(--color-light-grey);
  border-radius: 0.5rem;

  @media screen and (max-width: 768px) {
    height: 165px;
    min-height: 165px;
  }
`;

export const CategoriesName = styled.h3`
  font-size: 1.9rem;
  text-transform: uppercase;
  position: absolute;
  bottom: 63px;
  letter-spacing: 0.5px;

  @media screen and (max-width: 768px) {
    bottom: 56px;
    font-size: 16px;
  }
`;

export const CategoriesLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 5rem;
  width: 59px;
  justify-content: space-between;
  position: absolute;
  bottom: 30px;
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--color-dark-grey);
  letter-spacing: 1px;

  @media screen and (max-width: 768px) {
    bottom: 22px;
  }
`;
