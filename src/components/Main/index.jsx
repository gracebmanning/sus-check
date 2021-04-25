import React from 'react';
import logo from '../../images/suscheck_logo.png';
import { MainContainer, MainLogo, MainContent, TitleContainer, MainHeader, MainHeaderStrike, MainTagline } from './MainElements';
import { Button, ButtonWrapper } from '../Button';

const Main = () => {
    return (
        <MainContainer id="home">
            <MainContent>
            <MainLogo src={logo}/>
                <TitleContainer className='rows'>
                <MainHeader className='row'>sus <MainHeaderStrike className='row'>vibe</MainHeaderStrike> check</MainHeader>
                </TitleContainer>
                
                <MainTagline>How sus(tainable) are you?</MainTagline>

                <ButtonWrapper>
                    <Button to="question1" smooth={true} duration={500} spy={true} exact='true'>
                        Take Quiz!
                    </Button>
                </ButtonWrapper>

            </MainContent>

        </MainContainer>
    );
};

export default Main