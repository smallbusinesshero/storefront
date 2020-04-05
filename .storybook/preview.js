import { addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import "../components/global.scss";
import "focus-visible/dist/focus-visible.min.js";

addDecorator(withKnobs);
addDecorator(withA11y);
