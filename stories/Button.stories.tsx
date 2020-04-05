import React from "react";
import { action } from "@storybook/addon-actions";
import {
  Button,
  ButtonVariant,
  IconPosition,
} from "../components/atoms/Button";
import { text, radios, boolean, number } from "@storybook/addon-knobs";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function actionWithoutPayload(name: string) {
  return () => action(name)();
}

export const Primary = () => (
  <>
    <Button
      onClick={actionWithoutPayload("clicked")}
      variant={ButtonVariant.Primary}
    >
      {text("Label", "Login")}
    </Button>
  </>
);

export const Secondary = () => (
  <>
    <Button
      onClick={actionWithoutPayload("clicked")}
      variant={ButtonVariant.Secondary}
    >
      {text("Label", "Cancel")}
    </Button>
  </>
);

const label = "Icon position";
const options = {
  Left: IconPosition.Left,
  Right: IconPosition.Right,
};
const defaultValue = IconPosition.Left;

export const Icon = () => (
  <>
    <Button
      onClick={actionWithoutPayload("clicked")}
      variant={ButtonVariant.Secondary}
      icon={faPlus}
      iconPos={radios(label, options, defaultValue)}
    >
      {<>{text("Label", "Add user")}</>}
    </Button>
  </>
);

export const Link = () => (
  <>
    <Button
      onClick={actionWithoutPayload("clicked")}
      variant={ButtonVariant.Link}
    >
      Passwort vergessen
    </Button>
  </>
);

export default {
  title: "Button",
};
