import React, { useState } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  hidden,
  switchText,
  switchStateOn,
  switchStateOff,
  slider,
  btn,
  switch as switchClass,
} from "./Switch.scss";
import clsx from "clsx";

export interface SwitchProps {
  stateLabels?: {
    on: string;
    off: string;
  };
  onChange: (value: boolean) => void;
  state: boolean;
}

export const Switch: React.FC<SwitchProps> = ({
  stateLabels = {},
  onChange,
  state,
}) => {
  const { on = "ON", off = "OFF" } = stateLabels;

  return (
    <>
      <label className={switchClass}>
        <button
          role="switch"
          className={btn}
          aria-checked={state}
          onClick={(e) => {
            e.preventDefault();
            onChange && onChange(!state);
          }}
        />
        <span className={clsx(slider)}></span>

        <span className={clsx(switchText, switchStateOn, state ? "" : hidden)}>
          {on}
        </span>
        <span className={clsx(switchText, switchStateOff, state ? hidden : "")}>
          {off}
        </span>
      </label>
    </>
  );
};
