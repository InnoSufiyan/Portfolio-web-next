import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import sanityClient from '../../Client'
import { useRouter } from 'next/router';

import imageUrlBuilder from "@sanity/image-url";
import { selectPortfolio, setPortfolio } from '../../features/portfolio/portfolioSlice';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source);
}


function Detail() {
    const dispatch = useDispatch()
    const dataa = useSelector(selectPortfolio)

    const router = useRouter()
    console.log(router)

    const { Slug } = router.query

    console.log(Slug)

    useEffect(() => {

        sanityClient.fetch(
            `
            *[_type=="post" && _id == "${Slug}" ] {
                _id,
  title,
  slug,
  subTitle,
  titleImg,
  backgroundImage,
  cardImg,
  publishedAt,
  description,
  postType,
  webLink,
  portfolioLink
              }
            `
        ).then((data) => dispatch(setPortfolio((data))))
            .catch(console.error)
    }, [])

    return (
        <Container>
            {
                dataa?.filter((item) => item?._id == Slug)?.map((item, index) => (
                    <>
                        <Background>
                            <img src={urlFor(item.backgroundImage).width(3200).url()} />
                        </Background>

                        <ImageTitle>
                            <img src={urlFor(item.titleImg).width(400).url()} />
                        </ImageTitle>
                        <Controls>
                            <a href={item?.webLink} target='_blank'>

                                <PlayButton>
                                    <img src="/images/play-icon-black.png" />
                                    <span>Play</span>
                                </PlayButton>
                            </a>
                            <a href={item?.portfolioLink} target='_blank'>
                                <TrailerButton>
                                    <img src="/images/play-icon-white.png" />
                                    <span>Behance</span>
                                </TrailerButton>
                            </a>
                            <AddButton>
                                <span>+</span>
                            </AddButton>
                            <GroupWatchButton>
                                <img src="/images/group-icon.png" />
                            </GroupWatchButton>
                        </Controls>
                        <SubTitle>
                            {item?.subTitle}
                        </SubTitle>
                        <Description>
                            {item?.description[0].children[0].text}
                        </Description>
                    </>
                ))
            }


        </Container>
    )
}

export default Detail


const Container = styled.div`
    min-height : calc(100vh - 70px);
    padding : 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    bottom : 0;
    right: 0;
    left : 0;
    z-index : -1;
    opacity: 0.8;
    img {
        width: 100%;
        height : 100%;
        object-fit : cover;
        @media (max-width: 768px) {
            width: initial;
        }
    }
`

const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;
    margin : 60px 0;
    img {
        // width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
    
    a {
        text-decoration: none;
        list-style: none
    }
`
const PlayButton = styled.button`
    border-radius : 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right : 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background : rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;
    &:hover {
        background-color : rgb(198,198,198);
    }
    @media (max-width: 768px) {
        height: 45px;
        padding: 0px 12px;
        font-size: 12px;
        margin: 0px 10px 0px 0px;
        img {
            width: 25px;
        }
    }
`
const TrailerButton = styled(PlayButton)`
    background-color : rgb(0,0,0, 0.3);
    color : white;
    border : 1px solid rgb(249,249,249);
    text-transform : uppercase;
`
const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    span {
        font-size: 30px;
        color: white;
    }
`
const GroupWatchButton = styled(AddButton)`
    background : rgb(0,0,0)
`
const SubTitle = styled.div`
    color: rgb(249,249,249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
    @media (max-width: 768px) {
        font-size: 12px
    }
`
const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249,249,249);
    max-width: 760px;
    @media (max-width: 768px) {
        font-size: 14px
    }
`