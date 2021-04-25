import {useState, useEffect} from 'react';
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
function Home() {
    
    const [counter, setCounter] = useState(0)
    
    useEffect(function(){
        console.log(counter)
    }, [counter])

    return (
        <>
        <Main />
        <TwoAQuestion  {...Question1} setCounter={setCounter} />
        <FourAQuestion {...Question2} setCounter={setCounter} />
        <FourAQuestion {...Question3} setCounter={setCounter} />
        <FourAQuestion {...Question4} setCounter={setCounter} />
        <TwoAQuestion  {...Question5} setCounter={setCounter} />
        <TwoAQuestion  {...Question6} setCounter={setCounter} />
        <FourAQuestion {...Question7} setCounter={setCounter} />
        <Result {...Grade1}/>
        <Footer />
        </>
    );
};


export default Home