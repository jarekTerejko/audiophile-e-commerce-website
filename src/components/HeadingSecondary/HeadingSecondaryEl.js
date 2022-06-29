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
  }

  &.featured--row-three {
    @media screen and (max-width: 880px) {
      left: 40px;
    }
  }
`;
