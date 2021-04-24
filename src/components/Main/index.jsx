import React from 'react';
import { MainContainer, MainContent, MainHeader, MainTagline } from './MainElements';
import { Button, ButtonWrapper } from '../Button';

const Main = () => {
    return (
        <MainContainer id="home">
            
            <MainContent>
                <MainHeader>Sus Check</MainHeader>
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