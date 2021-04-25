import React from 'react';
import { QuestionContainer, QuestionContent, QuestionNumber, QuestionTitle, QuestionImage, AnswerWrapper, AnswerButton } from './QuestionElements';

//import { Button, ButtonWrapper } from '../Button';

class TwoAQuestion extends React.Component {
    render() {
        return (
            <QuestionContainer id={this.props.id} lightbg={this.props.lightbg}>
                
                <QuestionContent>

                    <QuestionNumber>Question {this.props.number}</QuestionNumber>
                    <QuestionTitle>{this.props.title}</QuestionTitle>
                    <QuestionImage src={this.props.image} alt={this.props.alt} />

                    <AnswerWrapper>
                        <AnswerButton onClick={() => click(this.props.answerVals[0])}>{this.props.answer1}</AnswerButton>
                        <AnswerButton onClick={() => click(this.props.answerVals[1])}>{this.props.answer2}</AnswerButton>
                    </AnswerWrapper>

                </QuestionContent>

            </QuestionContainer>
        );
    };
};

function click(num){
    console.log(num);
}

export default TwoAQuestion