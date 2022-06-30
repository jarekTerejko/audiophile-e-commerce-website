import styled from "styled-components";

export const StoreDescriptionWrapper = styled.section`
  margin-bottom: 20rem;

  @media screen and (max-width: 768px) {
    margin-bottom: 96px;
  }
`;

export const StoreDescriptionContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 30px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const StoreDescriptionContentColLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 768px) {
    grid-row: 2/3;
    align-items: center;
    text-align: center;
    margin-top: 63px;
  }
`;

export const StoreDescriptionContentColRight = styled.div`
  @media screen and (max-width: 768px) {
    grid-row: 1/2;
  }
`;

export const StoreDescriptionHeading = styled.h2`
  font-size: 4rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  word-spacing: 3px;
  max-width: 40rem;
  line-height: 44px;
  margin-bottom: 3.2rem;

  @media screen and (max-width: 768px) {
    max-width: 52rem;
  }
`;

export const StoreDescriptionImgDesktop = styled.img`
  margin-left: auto;
  border-radius: 1rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const StoreDescriptionImgTablet = styled.img`
  display: none;

  @media screen and (min-width: 376px) and (max-width: 768px) {
    display: block;
    border-radius: 1rem;
  }
`;

export const StoreDescriptionImgMobile = styled.img`
  border-radius: 1rem;

  @media screen and (min-width: 376px) {
    display: none;
  }
`;
