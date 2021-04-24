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
                    <Button>Take Quiz!</Button>
                </ButtonWrapper>

            </MainContent>

        </MainContainer>
    );
};

export default Main