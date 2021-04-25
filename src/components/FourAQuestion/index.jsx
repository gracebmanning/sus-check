import React from 'react';
import { QuestionContainer, QuestionContent, QuestionNumber, QuestionTitle, QuestionImage, AnswerWrapper, AnswerButton } from './QuestionElements';

//import { Button, ButtonWrapper } from '../Button';

const FourAQuestion = ( {id, number, title, image, alt, answer1, answer2, answer3, answer4} ) => {
    return (
        <QuestionContainer id={id}>
            
            <QuestionContent>

                <QuestionNumber>{number}</QuestionNumber>
                <QuestionTitle>{title}</QuestionTitle>
                <QuestionImage src={image} alt={alt} />

                <AnswerWrapper>
                    <AnswerButton>{answer1}</AnswerButton>
                    <AnswerButton>{answer2}</AnswerButton>
                    <AnswerButton>{answer3}</AnswerButton>
                    <AnswerButton>{answer4}</AnswerButton>
                </AnswerWrapper>



            </QuestionContent>

        </QuestionContainer>
    );
};

export default FourAQuestion