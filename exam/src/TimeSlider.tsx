import { Slider } from "@mui/material";
import React from "react";

//you can develope this option for your app
setInterval(() => {});
export const TimeSlider: React.FC<{}> = ({}): React.ReactNode => {
  return <Slider max={300} min={0} size="small" disabled></Slider>;
};
