import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setFilter } from "../features/portfolio/portfolioSlice";

function Viewers() {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("");

  const submitHandler = (dt) => {
    setSelected(dt);
    dispatch(setFilter(dt));
  };
  return (
    <Container>
      <Wrap
        style={{
          transform: selected == "" ? "scale(1.05)" : "",
          borderColor: selected == "" ? "rgba(249, 249, 249, 0.8)" : "",
          boxShadow:
            selected == ""
              ? "rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 /72%) 0px 30px 22px -10px"
              : "",
        }}
        onClick={() => submitHandler("")}
      >
        <img src="/images/All.png" />
        <video muted={true} autoPlay={true} loop={true} playsInLine={true}>
          <source
            src="/videos/Showreel-2015-2016-(540p).mp4"
            type="video/mp4"
          />
        </video>
      </Wrap>
      <Wrap
        style={{
          transform: selected == "Animation" ? "scale(1.05)" : "",
          borderColor:
            selected == "Animation" ? "rgba(249, 249, 249, 0.8)" : "",
          boxShadow:
            selected == "Animation"
              ? "rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 /72%) 0px 30px 22px -10px"
              : "",
        }}
        onClick={() => submitHandler("Animation")}
      >
        <img src="/images/Animation.png" />
        <video muted={true} autoPlay={true} loop={true} playsInLine={true}>
          <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap
        style={{
          transform: selected == "websites" ? "scale(1.05)" : "",
          borderColor: selected == "websites" ? "rgba(249, 249, 249, 0.8)" : "",
          boxShadow:
            selected == "websites"
              ? "rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 /72%) 0px 30px 22px -10px"
              : "",
        }}
        onClick={() => submitHandler("websites")}
      >
        <img src="/images/websites.png" />
        <video muted={true} autoPlay={true} loop={true} playsInLine={true}>
          <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap
        style={{
          transform: selected == "mobile-apps" ? "scale(1.05)" : "",
          borderColor:
            selected == "mobile-apps" ? "rgba(249, 249, 249, 0.8)" : "",
          boxShadow:
            selected == "mobile-apps"
              ? "rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 /72%) 0px 30px 22px -10px"
              : "",
        }}
        onClick={() => submitHandler("mobile-apps")}
      >
        <img src="/images/mobileapps.png" />
        <video muted={true} autoPlay={true} loop={true} playsInLine={true}>
          <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
        </video>
      </Wrap>
    </Container>
  );
}

export default Viewers;

const Container = styled.div`
  margin-top: 36px;
  display: grid;
  grid-gap: 25px;
  padding: 30px 50px 26px 50px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 30px 0px 26px;
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) opx 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.26);
  border: 3px solid rgba(249, 249, 249, 0.1);
  video {
    width: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }
  img {
    /* width : 100%;
        height : 100%;
        object-fit : cover; */
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 /72%) 0px 30px 22px -10px;
    video {
      opacity: 1;
      z-index: 1;
    }
  }
`;
