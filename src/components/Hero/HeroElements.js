import styled from "styled-components";

export const HeroWrapper = styled.header`
  margin-top: -9.7rem;
  background: var(--color-dark);
`;

export const HeroBg = styled.div`
  min-height: 72.9rem;
  max-width: 144rem;
  margin: 0 auto;
  background-image: ${({ heroDesktopBg }) =>
    heroDesktopBg ? `url(${heroDesktopBg})` : `url('')`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const HeroContent = styled.div`
   padding-top: 22.5rem;
   max-width: 50rem;
`;
export const HeroColLeft = styled.div``;
export const HeroColRight = styled.div``;