import React from 'react';
import { Grade1, Grade2, Grade3, Grade4 } from './data';
import { ResultsContainer, ResultContent, ResultIntro } from './ResultElements';
//import { Button, ButtonWrapper } from '../Button';

const Results = ({counter, grade}) => {

    return (
        <ResultsContainer id="end">
            
            <ResultContent>
                <ResultIntro>You are... {grade.title}</ResultIntro>
                <h3>your score is {counter}</h3> 

            </ResultContent>

        </ResultsContainer>
    );
};

export default Results