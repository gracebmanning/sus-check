import React from 'react';
import { QuestionContainer, QuestionContent, QuestionNumber, QuestionTitle, QuestionImage, AnswerWrapper, AnswerButton } from './QuestionElements';

//import { Button, ButtonWrapper } from '../Button';

function TwoAQuestion(props) {
    
    return (
        <QuestionContainer id={props.id} lightbg={props.lightbg}>
            
            <QuestionContent>

                <QuestionNumber>Question {props.number}</QuestionNumber>
                <QuestionTitle>{props.title}</QuestionTitle>
                <QuestionImage src={props.image} alt={props.alt} />

                <AnswerWrapper>
                    <AnswerButton 
                        to={props.to} smooth={true} duration={500} spy={true} exact='true'
                        onClick={ () => {props.setCounter(counter => counter + props.answerVals[0])} }>{props.answer1}
                    </AnswerButton>
                    
                    <AnswerButton
                        to={props.to} smooth={true} duration={500} spy={true} exact='true'
                        onClick={ () => {props.setCounter(counter => counter + props.answerVals[1])} }>{props.answer2}
                    </AnswerButton>
                </AnswerWrapper>

            </QuestionContent>

        </QuestionContainer>
    );
};


export default TwoAQuestion