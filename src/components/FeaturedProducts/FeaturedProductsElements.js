import styled from "styled-components";

export const FeaturedWrapper = styled.section`
  margin-bottom: 20rem;
  
  @media screen and (max-width: 768px) {
    margin-bottom: 96px;
  }
`;

export const FeaturedContent = styled.div`
  display: grid;
  gap: 48px;

  @media screen and (max-width: 768px) {
    gap: 32px;
  }
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

  @media screen and (max-width: 768px) {
    padding-top: 353px;
    padding-bottom: 64px;
  }

  @media screen and (max-width: 580px) {
    padding-left: 24px;
    padding-right: 24px;
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

    @media screen and (max-width: 768px) {
      background-position-y: -288px;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${({ desktopZX9SpeakerBg }) =>
      desktopZX9SpeakerBg ? `url(${desktopZX9SpeakerBg})` : `url('')`};
    background-repeat: no-repeat;
    background-size: 34%;
    background-position: 140px 114px;

    @media screen and (max-width: 1150px) {
      background-position-x: center;
      background-position-y: 40px;
    }

    @media screen and (max-width: 768px) {
      background-image: ${({ tabletZX9SpeakerBg }) =>
        tabletZX9SpeakerBg ? `url(${tabletZX9SpeakerBg})` : `url('')`};
      background-size: 182px;
      background-position-y: 61px;
    }
  }
`;

export const FeaturedRowTwo = styled.div`
  min-height: 32rem;
  position: relative;
  background-image: ${({ desktopZX7SpeakerBg }) =>
    desktopZX7SpeakerBg ? `url(${desktopZX7SpeakerBg})` : `url('')`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 1rem;

  @media screen and (max-width: 768px) {
    background-image: ${({ tabletZX7SpeakerBg }) =>
      tabletZX7SpeakerBg ? `url(${tabletZX7SpeakerBg})` : `url('')`};
  }
`;

export const FeaturedRowThree = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 30px;
  @media screen and (max-width: 768px) {
    column-gap: 12px;
  }
  @media screen and (max-width: 580px) {
    row-gap: 12px;
    grid-template-columns: 1fr;
  }
`;

export const FeaturedRowThreeColLeft = styled.div`
  min-height: 32rem;
  background-image: ${({ desktopYX1EarphonesBg }) =>
    desktopYX1EarphonesBg ? `url(${desktopYX1EarphonesBg})` : `url('')`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 1rem;

  @media screen and (max-width: 768px) {
    background-image: ${({ tabletYX1EarphonesBg }) =>
      tabletYX1EarphonesBg ? `url(${tabletYX1EarphonesBg})` : `url('')`};
  }
`;

export const FeaturedRowThreeColRight = styled.div`
  border-radius: 1rem;
  position: relative;
  background: var(--color-light-grey);

  @media screen and (max-width: 580px) {
    min-height: 32rem;
  }
`;
