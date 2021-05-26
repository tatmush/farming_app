import React from "react";
import imageDictionary from "../../utils/imageDictionary.js";
import { Container, BigText, BigIcon, Description } from "./Styles";

const Loading = (props) => {
  return (
    <Container>
      <BigText>Welcome!</BigText>
      <BigIcon source={imageDictionary["01d"]} />
      <Description>Loading...</Description>
      <Description>Grace HIT 400</Description>
    </Container>
  );
};
export default Loading;
