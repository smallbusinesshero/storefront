import React, { useState } from "react";
import { Link } from "../components/atoms/Link";
import { Switch } from "../components/atoms/Switch";
import { text, radios, boolean, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export const Default = () => {
  const [state, setState] = useState(false);
  return (
    <>
      <Switch
        onChange={(value) => {
          action("clicked")(value);
          setState(value);
        }}
        state={state}
      />
    </>
  );
};

export const CustomLabels = () => {
  const [state, setState] = useState(false);
  return (
    <>
      <Switch
        state={state}
        onChange={(value) => {
          action("clicked")(value);
          setState(value);
        }}
        stateLabels={{
          on: text("On text", "An"),
          off: text("Off text", "Aus"),
        }}
      />
    </>
  );
};

export default {
  title: "Switch",
};
