import styled from "styled-components";

export const HeadingPrimaryEl = styled.h1`
  color: var(--color-white);
  font-size: 56px;
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 5.8rem;
  margin-bottom: 2.5rem;

  @media screen and (max-width: 500px) {
    font-size: 36px;
  }

  &.featured {
    position: absolute;
    right: 54px;
    top: 133px;
    max-width: 390px;
    z-index: 1;

    @media screen and (max-width: 1150px) {
      position: static;
    }
  }
`;
