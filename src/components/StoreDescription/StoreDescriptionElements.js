import styled from "styled-components";

export const StoreDescriptionWrapper = styled.section`
  margin-bottom: 20rem;
`;

export const StoreDescriptionContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 30px;
`;

export const StoreDescriptionContentColLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StoreDescriptionContentColRight = styled.div``;

export const StoreDescriptionHeading = styled.h2`
  font-size: 4rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  word-spacing: 3px;
  max-width: 40rem;
  line-height: 44px;
  margin-bottom: 3.2rem;
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
