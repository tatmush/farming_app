import React from "react";
import { Day, SmallIcon, SmallText } from "./Styles";

export default function Card({ name, icon, temp, weather }) {
  return (
    <Day>
      <SmallIcon source={icon} />
      <SmallText>{name}</SmallText>
      <SmallText>{temp}°C</SmallText>
      <SmallText>{weather}</SmallText>
    </Day>
  );
}
