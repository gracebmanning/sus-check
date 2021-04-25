import React from 'react';
import Main from '../components/Main';
import TwoAQuestion from '../components/TwoAQuestion';
import FourAQuestion from '../components/FourAQuestion';
import { Question1 } from '../components/TwoAQuestion/data';
import { Question2 } from '../components/FourAQuestion/data';
// import Quiz from '../components/BuzzfeedQuiz';
// put in <Quiz /> component to use buzzfeed quiz

const Home = () => {

    return (
        <>
        <Main />
        <TwoAQuestion {...Question1}/>
        <FourAQuestion {...Question2}/>
        </>
    );

};

export default Home