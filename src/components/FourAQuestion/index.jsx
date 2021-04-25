import React from 'react';
import { QuestionContainer, QuestionContent, QuestionNumber, QuestionTitle, QuestionImage, AnswerWrapper, AnswerButton } from './QuestionElements';

//import { Button, ButtonWrapper } from '../Button';

const FourAQuestion = ( {id, number, title, image, alt, answer1, answer2, answer3, answer4, answerVals} ) => {
    return (
        <QuestionContainer id={id}>
            
            <QuestionContent>

                <QuestionNumber>{number}</QuestionNumber>
                <QuestionTitle>{title}</QuestionTitle>
                <QuestionImage src={image} alt={alt} />

                <AnswerWrapper>
                    <AnswerButton onClick={() => click(answerVals[0])}>{answer1}</AnswerButton>
                    <AnswerButton onClick={() => click(answerVals[1])}>{answer2}</AnswerButton>
                    <AnswerButton onClick={() => click(answerVals[2])}>{answer3}</AnswerButton>
                    <AnswerButton onClick={() => click(answerVals[3])}>{answer4}</AnswerButton>
                </AnswerWrapper>



            </QuestionContent>

        </QuestionContainer>
    );
};
//function prints the the console the number passed through
function click(num){
    console.log(num);
}
export default FourAQuestion