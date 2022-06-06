import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'


function About() {
    return (
        <>
            <Container>
                <Cta>
                    <Image src="/images/cta-logo-onee copy.png" width="500%" height="100%"  alt="logo one" />
                    <Signup>Get All There</Signup>
                    <Description>
                        I&apos;m an Animator/Motion Graphics Artist and a Web developer, based in Karachi, Pakistan, I have serious Passion for UI Effects, Animations and I really love to Code.
                    </Description>
                    <Image src="/images/cta-logo-twoo.png" width="500%" height="40%" alt="logo two" />
                </Cta>
            </Container>
        </>
    )
}

export default About

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;
    &:before {
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background-image : url("/images/login-background2.jpg");
        content: "";
        position: absolute;
        opacity: 0.7;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 0;
    }
`
const Cta = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
    z-index : 2;
`
const Description = styled.p`
    font-size: 11px;
    line-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`
const Signup = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0px;
    color: #f9f9f9;
    border-radius: 4px;
    text-align : center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;
    &:hover {
        background : #0483ee;
    }
`