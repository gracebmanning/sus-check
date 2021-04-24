import React from 'react';
import Main from '../components/Main';
import Question from '../components/Question';
import { Question1, Question2 } from '../components/Question/data';
// import Quiz from '../components/BuzzfeedQuiz';
// put in <Quiz /> component to use buzzfeed quiz

const Home = () => {

    return (
        <>
        <Main />
        <Question {...Question1}/>
        <Question {...Question2}/>
        </>
    );

};

export default Home