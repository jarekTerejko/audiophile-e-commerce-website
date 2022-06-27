import styled from "styled-components";

export const HeroWrapper = styled.header`
  margin-top: -9.7rem;
  background: var(--color-dark);
  margin-bottom: 20rem;

  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
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

  @media screen and (max-width: 768px) {
    background-image: ${({ heroTabletBg }) =>
      heroTabletBg ? `url(${heroTabletBg})` : `url('')`};
  }
`;

export const HeroContent = styled.div`
  padding-top: 22.5rem;
  max-width: 50rem;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    text-align: center;
    padding-top: 216px;
  }
`;
