import React, { Component } from "react";
import styled from "styled-components";
import patagonia from "./../../images/patagonia.jpg";
import LocationGrid from "./../modules/LocationGrid";

const HeaderImg = styled.img.attrs({
  src: "image url here"
})`
  width: 1420px;
  height: 700px;
`;

class HomePage extends Component {
  render() {
    return (
      <div>
        <HeaderImg img src={patagonia} alt="patagonia" />
        <LocationGrid />
      </div>
    );
  }
}

export default HomePage;
