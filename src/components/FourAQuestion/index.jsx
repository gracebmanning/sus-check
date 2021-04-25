import React from 'react';
import { QuestionContainer, QuestionContent, QuestionNumber, QuestionTitle, QuestionImage, AnswerWrapper, AnswerButton } from './QuestionElements';

//import { Button, ButtonWrapper } from '../Button';

function FourAQuestion(props) {
        return (
            <QuestionContainer id={props.id} lightbg={props.lightbg}>
            
            <QuestionContent>

                <QuestionNumber>Question {props.number}</QuestionNumber>
                <QuestionTitle>{props.title}</QuestionTitle>
                <QuestionImage src={props.image} alt={props.alt} />

                <AnswerWrapper>
                    <AnswerButton onClick={ () => {props.setCounter(counter => counter + props.answerVals[0])} }>{props.answer1}</AnswerButton>
                    <AnswerButton onClick={ () => {props.setCounter(counter => counter + props.answerVals[1])} }>{props.answer2}</AnswerButton>
                    <AnswerButton onClick={ () => {props.setCounter(counter => counter + props.answerVals[2])} }>{props.answer3}</AnswerButton>
                    <AnswerButton onClick={ () => {props.setCounter(counter => counter + props.answerVals[3])} }>{props.answer4}</AnswerButton>
                </AnswerWrapper>

            </QuestionContent>

        </QuestionContainer>
        )
}

export default FourAQuestion