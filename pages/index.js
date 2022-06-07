import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import ImgSlider from '../components/ImageSlider'
import styles from '../styles/Home.module.css'
import sanityClient from '../Client'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setPortfolios, setSlider } from '../features/portfolio/portfolioSlice'
import Viewers from '../components/Viewer'
import Movies from '../components/Movies'
import { fetchSlider } from '../utils/fetchSlider'
import { fetchPosts } from '../utils/fetchPosts'

export default function Home({ posts, slider }) {

  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(setPortfolios(posts))
    dispatch(setSlider(slider))
  })


  return (
    <>
      <Head>
        <title>Inno Sufiyan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ImgSlider posts={posts} sliderss={slider} />
      <Viewers />
      <Movies />
    </>
  )
}

export const getServerSideProps = async (context) => {

  // const posts = await fetchPosts();
  // const slider = await fetchSlider();

  const query = `
  *[_type == "post"] {
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
  }`;
  const query2 = `
  *[_type == "slider"] {
    slider
  }`;

  const posts = await sanityClient.fetch(query);
  const slider = await sanityClient.fetch(query2);

  

  return {
    props: {
      posts,
      slider
    }
  }
}