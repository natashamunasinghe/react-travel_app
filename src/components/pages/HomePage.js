import React, { Component } from "react";
import styled from "styled-components";
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
        <HeaderImg
          img
          src="https://s3-ap-southeast-2.amazonaws.com/reactchileapp/patagonia.jpg"
          alt="patagonia"
        />
        <LocationGrid />
      </div>
    );
  }
}

export default HomePage;
