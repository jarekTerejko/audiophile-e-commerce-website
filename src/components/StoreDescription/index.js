import { ContainerEl } from "../Container/ContainerElement";
import { DescriptionTextEl } from "../DescriptionText/DescriptionTextEl";
import {
  StoreDescriptionContent,
  StoreDescriptionContentColLeft,
  StoreDescriptionContentColRight,
  StoreDescriptionHeading,
  StoreDescriptionImgDesktop,
  StoreDescriptionImgMobile,
  StoreDescriptionImgTablet,
  StoreDescriptionWrapper,
} from "./StoreDescriptionElements";

const StoreDescription = ({ data }) => {
  // console.log(data);
  return (
    <>
      <StoreDescriptionWrapper>
        <ContainerEl>
          <StoreDescriptionContent>
            <StoreDescriptionContentColLeft>
              <StoreDescriptionHeading>
                Bringing you the{" "}
                <span style={{ color: "var(--color-orange)" }}>best</span> audio
                gear
              </StoreDescriptionHeading>
              <DescriptionTextEl className="store-description">
                {data.storeDescription[0].description}
              </DescriptionTextEl>
            </StoreDescriptionContentColLeft>
            <StoreDescriptionContentColRight>
              <StoreDescriptionImgDesktop
                src={data.storeDescription[0].image.desktop}
              />
              <StoreDescriptionImgTablet
                src={data.storeDescription[0].image.tablet}
              />
              <StoreDescriptionImgMobile
                src={data.storeDescription[0].image.mobile}
              />
            </StoreDescriptionContentColRight>
          </StoreDescriptionContent>
        </ContainerEl>
      </StoreDescriptionWrapper>
    </>
  );
};

export default StoreDescription;
