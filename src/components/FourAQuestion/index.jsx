import React from 'react';
import { QuestionContainer, QuestionContent, QuestionNumber, QuestionTitle, QuestionImage, AnswerWrapper, AnswerButton } from './QuestionElements';

//import { Button, ButtonWrapper } from '../Button';

class FourAQuestion extends React.Component {
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
                    <AnswerButton onClick={() => click(this.props.answerVals[2])}>{this.props.answer3}</AnswerButton>
                    <AnswerButton onClick={() => click(this.props.answerVals[3])}>{this.props.answer4}</AnswerButton>
                </AnswerWrapper>



            </QuestionContent>

        </QuestionContainer>
        )
    }
}

//function prints the the console the number passed through
function click(num){
    console.log(num);
}
export default FourAQuestion