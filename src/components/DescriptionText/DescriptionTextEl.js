import styled from "styled-components";

export const DescriptionTextEl = styled.p`
  color: var(--color-light-grey);
  letter-spacing: -0.3px;
  line-height: 2.4rem;
  max-width: 37rem;
  margin-bottom: 4.2rem;
  opacity: 0.8;

  &.featured {
    position: absolute;
    right: 74px;
    top: 273px;
    z-index: 1;

    @media screen and (max-width: 1150px) {
      position: static;
    }
  }
`;
