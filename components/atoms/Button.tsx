import React, { MouseEventHandler } from "react";
import {
  iconLeft,
  iconRight,
  primary,
  secondary,
  button,
  link,
} from "./Button.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import clsx from "clsx";

export interface ButtonProps {
  onClick?: MouseEventHandler;
  variant?: ButtonVariant;
  iconPos?: IconPosition;
  icon?: IconProp;
}

export enum IconPosition {
  Left = "left",
  Right = "right",
}

export enum ButtonVariant {
  Primary = "primary",
  Secondary = "secondary",
  Link = "link",
}

function getClassForVariant(variant: ButtonVariant) {
  switch (variant) {
    case ButtonVariant.Primary:
      return primary;
    case ButtonVariant.Secondary:
      return secondary;
    case ButtonVariant.Link:
      return link;
  }
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  icon,
  variant = ButtonVariant.Secondary,
  iconPos = IconPosition.Left,
}) => {
  const variantClass = getClassForVariant(variant);

  return (
    <button
      className={clsx(
        button,
        variantClass,
        iconPos === IconPosition.Left ? iconLeft : iconRight
      )}
      onClick={onClick}
    >
      {iconPos === IconPosition.Right ? (
        <>
          {children}
          <FontAwesomeIcon className={clsx(icon, iconRight)} icon={icon} />
        </>
      ) : (
        <>
          <FontAwesomeIcon className={clsx(icon, iconLeft)} icon={icon} />
          {children}
        </>
      )}
    </button>
  );
};
