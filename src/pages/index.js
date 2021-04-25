import React from 'react';
import Main from '../components/Main';
import Question from '../components/Question';
import { Question1, Question2 } from '../components/Question/data';
import Result from '../components/Results';
import { Grade1, Grade2, Grade3, Grade4 } from '../components/Results/data';
// import Quiz from '../components/BuzzfeedQuiz';
// put in <Quiz /> component to use buzzfeed quiz

//needa fix grades to be conditional
const Home = () => {

    return (
        <>
        <Main />
        <Question {...Question1}/>
        <Question {...Question2}/>
        <Result {...Grade1}/>
        </>
    );

};

export default Home