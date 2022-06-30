import styled from "styled-components";

export const ContainerEl = styled.div`
  margin: 0 auto;
  max-width: 114rem;
  padding: 0 1.5rem;

  @media screen and (max-width: 768px) {
    padding: 0 4rem;
  }
  
  @media screen and (max-width: 375px) {
    padding: 0 24px;
  }
`;
