import React from "react";
import Progress from "./index.js";
import { withKnobs, text, number } from "@storybook/addon-knobs";

export default { title: "Progress", decorators: [withKnobs] };

export const progress = () => {
  const progress = number("Progress", 20);
  return <Progress progress={progress} />;
};

export const ratio = () => {
  const done = number("done", 20);
  const total = number("total", 40);
  const context = text("context", "Progress");
  return <Progress done={done} total={total} context={context} />;
};
