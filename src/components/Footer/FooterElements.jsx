import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FooterContainer = styled.footer`
    background-color: #05386B;
    color: #EDF5E1;
    padding: 35px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`

export const LinksContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const FooterLogo = styled.img`
    width: 7%;
    height: 7%;
`

export const FooterTitle = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: centered;
    margin-bottom: 16px;
    font-weight: bold;
    font-family: "Archivo Black", sans-serif;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;
    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
    padding: 10px;
`