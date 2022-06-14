import styled from "styled-components";

export const IntroTextEl = styled.h4`
  color: ${({ colorWhite }) => (colorWhite ? `var(--color-dark-grey)` : "")};
  font-weight: 300;
  letter-spacing: 1rem;
  text-transform: uppercase;
  font-size: 1.4rem;
  margin-bottom: 2.4rem;
`;
