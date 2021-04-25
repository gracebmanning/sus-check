import React from 'react';
import logo from '../../images/suscheck_logo.png';
import {animateScroll as scroll} from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {FooterContainer, FooterLogo, LinksContainer, SocialMediaWrap, FooterTitle, SocialIconLink} from './FooterElements';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>

            <FooterLogo src={logo}/>
            <FooterTitle to="/" onClick={toggleHome}>sus check</FooterTitle>

            <LinksContainer>

                <SocialMediaWrap>
                    Grace Manning
                    <SocialIconLink href="https://www.github.com/gracebmanning" target="_blank" aria-label="GitHub">
                        <FaGithub />
                    </SocialIconLink>
                    <SocialIconLink href="https://www.linkedin.com/in/grace-manning/" target="_blank" aria-label="LinkedIn">
                        <FaLinkedin />
                    </SocialIconLink>
                </SocialMediaWrap>

                <SocialMediaWrap>
                    Kaitlyn Suzuki
                    <SocialIconLink href="https://www.github.com/gracebmanning" target="_blank" aria-label="GitHub">
                        <FaGithub />
                    </SocialIconLink>
                    <SocialIconLink href="https://www.linkedin.com/in/grace-manning/" target="_blank" aria-label="LinkedIn">
                        <FaLinkedin />
                    </SocialIconLink>
                </SocialMediaWrap>

                <SocialMediaWrap>
                    Vivian Lin
                    <SocialIconLink href="https://www.github.com/gracebmanning" target="_blank" aria-label="GitHub">
                        <FaGithub />
                    </SocialIconLink>
                    <SocialIconLink href="https://www.linkedin.com/in/grace-manning/" target="_blank" aria-label="LinkedIn">
                        <FaLinkedin />
                    </SocialIconLink>
                </SocialMediaWrap>

            </LinksContainer>

        </FooterContainer>
    );
};

export default Footer