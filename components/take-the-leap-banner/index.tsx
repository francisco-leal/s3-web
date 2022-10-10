import { useMemo, useRef } from "react";
import { COPY } from "copy";
import { Typography } from "shared-ui";
import {
  Container,
  InnerContainer,
  InputWrapper,
  PurpleText,
  StyledWrapper,
  StyledInput,
  StyledButton,
  ButtonWrapper,
  StyledButtonWrapper,
  Slider,
  SliderContainer,
} from "./styled";

const AMOUNT_OF_SLIDER_ENTRIES = 250;

export const TakeTheLeapBanner = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const sliderContent = useMemo(
    () =>
      new Array(AMOUNT_OF_SLIDER_ENTRIES)
        .fill(null)
        .map((_, index) => (
          <>
            <Typography
              type="h3"
              key={`slider-piece-${index}`}
              text={COPY.TAKE_THE_LEAP_BANNER.SLIDER}
            />
            <Typography
              type="h3"
              key={`slider-piece-suffix-${index}`}
              text={COPY.TAKE_THE_LEAP_BANNER.SLIDER_SUFFIX}
              color="LIGHT_PURPLE"
            />
          </>
        )),
    []
  );
  return (
    <>
      <Container>
        <InnerContainer>
          <Typography type="h2">
            <>
              {COPY.TAKE_THE_LEAP_BANNER.TITLE_BLACK1}
              <br />
              <PurpleText>
                {COPY.TAKE_THE_LEAP_BANNER.TITLE_PURPLE1}
              </PurpleText>
            </>
          </Typography>
          <Typography
            type="body1"
            text={COPY.TAKE_THE_LEAP_BANNER.SUBTITLE}
          />
          <InputWrapper>
            <StyledWrapper>
              <StyledInput
                ref={emailRef}
                placeholder={
                  COPY.TAKE_THE_LEAP_BANNER.INPUT_PLACEHOLDER
                }
              />
              <ButtonWrapper>
                <StyledButtonWrapper>
                  <StyledButton>--E</StyledButton>
                </StyledButtonWrapper>
              </ButtonWrapper>
            </StyledWrapper>
          </InputWrapper>
        </InnerContainer>
      </Container>
      <SliderContainer>
        <Slider>{sliderContent}</Slider>
      </SliderContainer>
    </>
  );
};