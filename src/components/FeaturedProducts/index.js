import { ContainerEl } from "../Container/ContainerElement";
import {
  FeaturedContent,
  FeaturedRowOne,
  FeaturedRowThree,
  FeaturedRowThreeColLeft,
  FeaturedRowThreeColRight,
  FeaturedRowTwo,
  FeaturedWrapper,
} from "./FeaturedProductsElements";
import PatternCircles from "../../assets/pattern-circles.svg";
import { HeadingPrimaryEl } from "../HeadingPrimary/HeadingPrimaryEl";
import { DescriptionTextEl } from "../DescriptionText/DescriptionTextEl";
import { LinkRouter } from "../LinkRouter/LinkRouterEl";
import { HeadingSecondaryEl } from "../HeadingSecondary/HeadingSecondaryEl";

const FeaturedProducts = ({ data }) => {
  // console.log(data.featured);
  return (
    <>
      <FeaturedWrapper>
        <ContainerEl>
          <FeaturedContent>
            <FeaturedRowOne
              PatternCircles={PatternCircles}
              desktopZX9SpeakerBg={data.featured[0].image.desktop}
              tabletZX9SpeakerBg={data.featured[0].image.tablet}
              mobileZX9SpeakerBg={data.featured[0].image.mobile}
            >
              <HeadingPrimaryEl className="featured">
                {data.featured[0].name}
              </HeadingPrimaryEl>
              <DescriptionTextEl className="featured">
                {data.featured[0].description}
              </DescriptionTextEl>
              <LinkRouter className="featured" to={data.featured[0].slug}>
                see product
              </LinkRouter>
            </FeaturedRowOne>
            <FeaturedRowTwo
              desktopZX7SpeakerBg={data.featured[1].image.desktop}
              tabletZX7SpeakerBg={data.featured[1].image.tablet}
              mobileZX7SpeakerBg={data.featured[1].image.mobile}
            >
              <HeadingSecondaryEl className="featured">
                {data.featured[1].name}
              </HeadingSecondaryEl>
              <LinkRouter
                to={data.featured[1].slug}
                className="featured featured--bordered"
              >
                see product
              </LinkRouter>
            </FeaturedRowTwo>
            <FeaturedRowThree>
              <FeaturedRowThreeColLeft
                desktopYX1EarphonesBg={data.featured[2].image.desktop}
                tabletYX1EarphonesBg={data.featured[2].image.tablet}
                mobileYX1EarphonesBg={data.featured[2].image.mobile}
              ></FeaturedRowThreeColLeft>
              <FeaturedRowThreeColRight>
                <HeadingSecondaryEl className="featured featured--row-three">
                  {data.featured[2].name}
                </HeadingSecondaryEl>
                <LinkRouter
                  to={data.featured[2].slug}
                  className="featured featured--bordered featured--row-three"
                >
                  see product
                </LinkRouter>
              </FeaturedRowThreeColRight>
            </FeaturedRowThree>
          </FeaturedContent>
        </ContainerEl>
      </FeaturedWrapper>
    </>
  );
};

export default FeaturedProducts;
