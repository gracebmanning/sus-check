import React from 'react';
import { QuestionContainer, QuestionContent, QuestionTitle } from './QuestionElements';

//import { Button, ButtonWrapper } from '../Button';

const Question = ( {id, title} ) => {
    return (
        <QuestionContainer id={id}>
            
            <QuestionContent>

                <QuestionTitle>{title}</QuestionTitle>

            </QuestionContent>

        </QuestionContainer>
    );
};

export default Question