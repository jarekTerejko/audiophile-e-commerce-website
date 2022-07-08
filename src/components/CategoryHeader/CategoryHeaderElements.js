import styled from "styled-components";

export const CategoryHeaderWrapper = styled.header`
  background: var(--color-dark);
  padding: 83px 0 92px 0;
  margin-bottom: 160px;

  @media screen and (max-width: 768px) {
    margin-top: 94px;
  }

  @media screen and (max-width: 375px) {
    margin-top: 90px;
  }
`;

export const CategoryHeading = styled.h1`
  color: var(--color-dark-white);
  text-align: center;
  font-size: 42px;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;
