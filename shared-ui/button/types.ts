export enum ButtonTypeEnum {
  DEFAULT = "default",
  LINK = "link",
}

export type ButtonType = "default" | "link";

export enum VariantTypeEnum {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
  QUATERNARY = "quaternary",
  PENTANARY = "pentanary",
  HEXANARY = "hexanary",
}

export type VariantType =
  | "primary"
  | "secondary"
  | "tertiary"
  | "quaternary"
  | "pentanary"
  | "hexanary";

export interface Props {
  text: string;
  type: ButtonType;
  variant: VariantType;
  href?: string;
  children?: JSX.Element;
}

export interface StyledButtonProps {
  variant: VariantType;
}
