import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import sanityClient from "../Client";
import imageUrlBuilder from "@sanity/image-url";
import {
  selectFilter,
  selectPortfolios,
} from "../features/portfolio/portfolioSlice";
import Link from "next/link";
import Image from "next/image";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

function Movies({ data }) {
  const dataa = useSelector(selectPortfolios);
  const filter = useSelector(selectFilter);

  return (
    <Container>
      <h4>
        {filter === ""
          ? "All Projects"
          : "animation" == filter.toLowerCase()
            ? "All Animation Projects"
            : "websites" == filter.toLowerCase()
              ? "All Website Projects"
              : "All Mobile App Projects"}
      </h4>
      <Content>
        {dataa
          ?.filter((item) =>
            filter === "" ? item : item.postType == filter.toLowerCase()
          )
          ?.map((item, index) => (
            <Link key={index} href={`/detail/${item?._id}`}>
              <Wrap>
                {/* <div> */}
                  <Image src={urlFor(item?.cardImg).width(3200).url()} width="350" height="200" objectFit="cover" layout="responsive" />
                {/* </div> */}
                {/* <img src={urlFor(item?.cardImg).width(3200).url()} /> */}
              </Wrap>
            </Link>
          ))}
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div`
  padding: 0 50px 70px 50px;
  @media (max-width: 768px) {
    padding: 0;
  }
`;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
const Wrap = styled.div`
  border-radius: 10px;
  /* overflow : hidden; */
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
