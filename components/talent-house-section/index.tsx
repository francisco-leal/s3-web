import Image from "next/image";
import { COPY } from "copy";
import { Button, LabelTag, Typography } from "shared-ui";
import scholarshipImage from "./assets/scholarship.png";
import {
  ActionArea,
  ButtonIcon,
  Container,
  ContentArea,
  ImageHolder,
  InnerContainer,
  Title,
} from "./styled";

export const TalentHouseSection = () => (
  <Container>
    <InnerContainer>
      <ImageHolder>
        <Image priority src={scholarshipImage} alt="scholarship" />
      </ImageHolder>
      <ContentArea>
        <LabelTag
          text={COPY.TALENT_HOUSE_SECTION.TAG}
          type="tertiary"
        />
        <Title>{COPY.TALENT_HOUSE_SECTION.TITLE}</Title>
        <Typography
          type="body2"
          text={COPY.TALENT_HOUSE_SECTION.TEXT}
          color="LIGHT_YELLOW"
        />
        <ActionArea>
          <Button
            text={COPY.TALENT_HOUSE_SECTION.BUTTONS[0]}
            type="link"
            variant="pentanary"
            href="https://talenthouse.talentprotocol.com/"
          >
            <ButtonIcon>--E</ButtonIcon>
          </Button>
          <Button
            text={COPY.TALENT_HOUSE_SECTION.BUTTONS[1]}
            type="link"
            variant="hexanary"
            href="https://www.youtube.com/c/TalentProtocol/featured"
          >
            <ButtonIcon>--E</ButtonIcon>
          </Button>
        </ActionArea>
      </ContentArea>
    </InnerContainer>
  </Container>
);
