import React from 'react';
import { QuestionContainer, QuestionContent, QuestionNumber, QuestionTitle, QuestionImage, AnswerWrapper, AnswerButton } from './QuestionElements';

//import { Button, ButtonWrapper } from '../Button';

const TwoAQuestion = ( {id, lightbg, number, title, image, alt, answer1, answer2, answerVals} ) => {
    return (
        <QuestionContainer id={id} lightbg={lightbg}>
            
            <QuestionContent>

                <QuestionNumber>Question {number}</QuestionNumber>
                <QuestionTitle>{title}</QuestionTitle>
                <QuestionImage src={image} alt={alt} />

                <AnswerWrapper>
                    <AnswerButton onClick={() => click(answerVals[0])}>{answer1}</AnswerButton>
                    <AnswerButton onClick={() => click(answerVals[1])}>{answer2}</AnswerButton>
                </AnswerWrapper>

            </QuestionContent>

        </QuestionContainer>
    );
};

function click(num){
    console.log(num);
}

export default TwoAQuestion