import styled from 'styled-components'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';



function Header() {

    return (
        <Nav>
            <Link href='/'>
                {/* <Logo src="/images/MyLogo.png" /> */}
                <a>
                    <Image src="/images/MyLogo.png" width="80px" height="40px" />
                </a>
            </Link>
            <NavMenu>
                <div>
                    <Link href='/'>
                        <img src="/images/home-icon.svg" />
                    </Link>
                    <Link href='/'>
                        <span>Home</span>
                    </Link>
                </div>
                <div>
                    <Link href='/about'>
                        <img src="/images/original-icon.svg" />
                    </Link>
                    <Link href='/about'>
                        <span>About Me</span>
                    </Link>
                </div>
                <div>
                    <a href='https://www.linkedin.com/in/innosufiyan/' target='_blank' rel="noopener noreferrer">
                        <span>Linkedin</span>
                    </a>
                </div>
                <div>
                    <a href='https://github.com/InnoSufiyan' target='_blank' rel="noopener noreferrer">
                        <span>Github</span>
                    </a>
                </div>
            </NavMenu>
            <Link href='/about'>
                <Image className='profile-pic' src="/images/unnamed.jpg" width="48px" height="48px" />
                {/* <UserImg src="https://yt3.ggpht.com/ytc/AKedOLQADltt0SdHv64U08B5zuCISyIJjy4wgorAHTdhtw=s900-c-k-c0x00ffffff-no-rj" /> */}
            </Link>
        </Nav>
    )
}



export default Header


const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x : hidden;
    justify-content: space-between;
    position: relative;
    z-index: 1;

    .profile-pic {
        border-radius: 50%;
    cursor : pointer;
    }

    a {
        cursor: pointer;
    }
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left : 20px;
    align-items: center;
    div {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor : pointer;
        text-decoration: none;
        color: white;
        img {
            height: 20px;
        }
        span {
            font-size : 13px;
            letter-spacing: 1.42px;
            position : relative;
            &:after {
                content : "";
                background-color : white;
                height : 2px;
                position : absolute;
                left : 0;
                right : 0;
                bottom : -6px;
                opacity : 0;
                transform-origin :  left center;
                transition: all 250ms cubic-bezier(0.25 , 0.46, 0.45, 0.94) 0s;
                transform : scaleX(0);
            }
        }
        &:hover {
            span:after {
                transform : scaleX(1);
                opacity : 1;
            }
        }
    }   
    @media (max-width: 768px) {
        display: none;
    }
`

const UserImg = styled.img`
    height : 48px;
    width : 48px;
`