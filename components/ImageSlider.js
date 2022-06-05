import React, { useEffect } from 'react'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sanityClient from '../Client'
import imageUrlBuilder from "@sanity/image-url";
import { useSelector } from 'react-redux';
import { selectSlider } from '../features/portfolio/portfolioSlice';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source);
}

function ImgSlider() {
    
    const sliderss = useSelector(selectSlider)

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", right: 35}}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", left: 35, zIndex: 2}}
                onClick={onClick}
            />
        );
    }

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };



    useEffect(() => {
    }, [])


    return (
        <Carousel {...settings}>
            {
                sliderss?.map((item, index) => (
                    <Wrap>
                        <img src={urlFor(item?.slider).width(3200).url()} />
                    </Wrap>
                ))
            }
        </Carousel>
    )
}

export default ImgSlider


const Carousel = styled(Slider)`
    /* margin-top: 20px; */
    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }
    li.slick-active button:before {
        color : white;
    }
    .slick-list {
        overflow: hidden;
    }
    button {
        z-index : 1;
    }
`

const Wrap = styled.div`
cursor : pointer;
    img {
        border : 4px solid transparent;
        width : 100%;
        height : 100%;
        border-radius : 4px;
        box-shadow : rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb( 0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration : 300ms;
        &:hover {
            border : 4px solid rgba(249, 249, 249, 0.8);
        }
    }
`