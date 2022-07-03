import styled from "styled-components";

export const HeadingSecondaryEl = styled.h2`
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 2px;

  &.featured {
    position: absolute;
    text-transform: uppercase;
    top: 100px;
    left: 95px;

    @media screen and (max-width: 768px) {
      left: 61px;
    }

    @media screen and (max-width: 690px) {
      font-size: 1.8rem;
    }

    @media screen and (max-width: 580px) {
      left: 40px;
    }

    @media screen and (max-width: 375px) {
      left: 24px;
      font-size: 28px;
    }

    @media screen and (max-width: 340px) {
      font-size: 1.8rem;
    }
  }

  &.featured--row-three {
    @media screen and (max-width: 880px) {
      left: 40px;
    }

    @media screen and (max-width: 375px) {
      left: 24px;
      font-size: 28px;
      top: 41px;
    }

    @media screen and (max-width: 340px) {
      font-size: 1.8rem;
    }
  }
`;
