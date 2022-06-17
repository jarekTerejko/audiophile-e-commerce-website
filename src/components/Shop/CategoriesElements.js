import { Link } from "react-router-dom";
import styled from "styled-components";

export const CategoriesWrapper = styled.article`
  margin-bottom: 16.8rem;
`;

export const CategoriesContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
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
`;

export const CategoriesName = styled.h3`
  font-size: 1.9rem;
  text-transform: uppercase;
  position: absolute;
  bottom: 63px;
  letter-spacing: 0.5px;
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
`;
