import { IntroTextEl } from "../IntroText/IntroTextEl";
import { HeroBg, HeroContent, HeroWrapper } from "./HeroElements";
import { ContainerEl } from "../Container/ContainerElement";
import { HeadingPrimaryEl } from "../HeadingPrimary/HeadingPrimaryEl";
import { DescriptionTextEl } from "../DescriptionText/DescriptionTextEl";
import { LinkRouter } from "../LinkRouter/LinkRouterEl";

const Hero = ({ data }) => {
  // console.log(data);
  return (
    <>
      <HeroWrapper>
        <HeroBg heroDesktopBg={data[6].hero.images.desktop}>
          <ContainerEl>
            <HeroContent>
              <IntroTextEl colorWhite>New product</IntroTextEl>
              <HeadingPrimaryEl>{data[6].hero.heading}</HeadingPrimaryEl>
              <DescriptionTextEl>{data[6].hero.description}</DescriptionTextEl>
              <LinkRouter to={data[3].slug}>See product</LinkRouter>
            </HeroContent>
          </ContainerEl>
        </HeroBg>
      </HeroWrapper>
    </>
  );
};

export default Hero;
