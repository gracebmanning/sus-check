import React from 'react';
import { QuestionContainer, QuestionContent, QuestionNumber, QuestionTitle, QuestionImage, AnswerWrapper, AnswerButton } from './QuestionElements';

//import { Button, ButtonWrapper } from '../Button';

const TwoAQuestion = ( {id, number, title, image, alt, answer1, answer2} ) => {
    return (
        <QuestionContainer id={id}>
            
            <QuestionContent>

                <QuestionNumber>Question {number}</QuestionNumber>
                <QuestionTitle>{title}</QuestionTitle>
                <QuestionImage src={image} alt={alt} />

                <AnswerWrapper>
                    <AnswerButton>{answer1}</AnswerButton>
                    <AnswerButton>{answer2}</AnswerButton>
                </AnswerWrapper>

            </QuestionContent>

        </QuestionContainer>
    );
};

export default TwoAQuestion