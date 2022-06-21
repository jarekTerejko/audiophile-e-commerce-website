import styled from "styled-components";

export const FeaturedWrapper = styled.section`
  margin-bottom: 20rem;
`;

export const FeaturedContent = styled.div`
  display: grid;
  gap: 48px;
`;

export const FeaturedRowOne = styled.div`
  min-height: 56rem;
  background: var(--color-orange);
  border-radius: 1rem;
  position: relative;

  @media screen and (max-width: 1150px) {
    padding-bottom: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50vw;
    text-align: center;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${({ PatternCircles }) =>
      PatternCircles ? `url(${PatternCircles})` : `url('')`};
    background-repeat: no-repeat;
    background-position: -149px -36px;
    z-index: 0;

    @media screen and (max-width: 1150px) {
      background-position-x: center;
      background-position-y: -300px;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${({ DesktopZX9SpeakerBg }) =>
      DesktopZX9SpeakerBg ? `url(${DesktopZX9SpeakerBg})` : `url('')`};
    background-repeat: no-repeat;
    background-size: 34%;
    background-position: 140px 114px;

    @media screen and (max-width: 1150px) {
      background-position-x: center;
      background-position-y: 40px;
    }
  }
`;

export const FeaturedRowTwo = styled.div`
  min-height: 32rem;
  position: relative;
  background-image: ${({ DesktopZX7SpeakerBg }) =>
    DesktopZX7SpeakerBg ? `url(${DesktopZX7SpeakerBg})` : `url('')`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 1rem;
`;

export const FeaturedRowThree = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 30px;
`;

export const FeaturedRowThreeColLeft = styled.div`
  min-height: 32rem;
  background-image: ${({ DesktopYX1EarphonesBg }) =>
    DesktopYX1EarphonesBg ? `url(${DesktopYX1EarphonesBg})` : `url('')`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 1rem;
`;

export const FeaturedRowThreeColRight = styled.div`
  border-radius: 1rem;
  position: relative;
  background: var(--color-light-grey);
`;
