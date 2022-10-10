import styled from "styled-components";
import { HeroSection } from "components/hero-section";
import { COLORS, fontNormal } from "shared-ui";

export const Container = styled(HeroSection)`
  background-color: ${COLORS.DARK_BLUE};
`;

export const InnerContainer = styled.div`
  max-width: 1024px;
  margin: auto;
  display: flex;
  gap: 128px;
`;

export const ContentArea = styled.div`
  flex-basis: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

export const ActionArea = styled.div`
  margin-top: 30px;
  align-items: flex-start;
  display: flex;
  gap: 16px;
`;

export const ButtonIcon = styled.span`
  ${fontNormal}
  margin-left: 8px;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
`;

export const ImageHolder = styled.div`
  flex-grow: 1;
`;