import { COPY } from "copy";
import { Button, LabelTag, Typography } from "shared-ui";
import {
  ActionArea,
  ButtonIcon,
  Container,
  ContentArea,
  ImageHolder,
  InnerContainer,
} from "./styled";

export const ProfileSection = () => (
  <Container>
    <InnerContainer>
      <ContentArea>
        <LabelTag text={COPY.PROFILE_HERO.TAG} type="secondary" />
        <Typography
          type="h2"
          text={COPY.PROFILE_HERO.TITLE}
          color="WHITE"
        />
        <Typography
          type="body2"
          text={COPY.PROFILE_HERO.TEXT}
          color="WHITE"
        />
        <ActionArea>
          <Button
            text={COPY.PROFILE_HERO.BUTTON}
            type="link"
            variant="tertiary"
          >
            <ButtonIcon>--E</ButtonIcon>
          </Button>
        </ActionArea>
      </ContentArea>
      <ImageHolder></ImageHolder>
    </InnerContainer>
  </Container>
);