import React from 'react';
import Main from '../components/Main';
import TwoAQuestion from '../components/TwoAQuestion';
import FourAQuestion from '../components/FourAQuestion';
import { Question1, Question5, Question6 } from '../components/TwoAQuestion/data';
import { Question2, Question3, Question4, Question7 } from '../components/FourAQuestion/data';
import Result from '../components/Results';
import { Grade1, Grade2, Grade3, Grade4 } from '../components/Results/data';
import Footer from '../components/Footer';
// import Quiz from '../components/BuzzfeedQuiz';
// put in <Quiz /> component to use buzzfeed quiz

//needa fix grades to be conditional
class Home extends React.Component {
    render() {
        var counter = 0;
        return (
            <>
            <Main />
            <TwoAQuestion  {...Question1} />
            <FourAQuestion {...Question2} />
            <FourAQuestion {...Question3} />
            <FourAQuestion {...Question4} />
            <TwoAQuestion  {...Question5} />
            <TwoAQuestion  {...Question6} />
            <FourAQuestion {...Question7} />
            <Result {...Grade1}/>
            <Footer />
            </>
        );
    }
};


export default Home