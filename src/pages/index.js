import {useState, useEffect} from 'react';
import Main from '../components/Main';
import TwoAQuestion from '../components/TwoAQuestion';
import FourAQuestion from '../components/FourAQuestion';
import { Question1, Question5, Question6, Question9 } from '../components/TwoAQuestion/data';
import { Question2, Question3, Question4, Question7, Question8, Question10 } from '../components/FourAQuestion/data';
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
    
    function calculate(){
        if (counter <= 5){
            return Grade1;
        }
        if (counter <= 10){
            return Grade2;
        }
        if (counter <= 20){
            return Grade3;
        }
        else{
            return Grade4;
        }
    }

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
        <FourAQuestion {...Question8} setCounter={setCounter} />
        <TwoAQuestion  {...Question9} setCounter={setCounter} />
        <FourAQuestion {...Question10} setCounter={setCounter}/>
        <Result {...Grade1} counter={counter} grade={calculate()}/>
        <Footer />
        </>
    );
};


export default Home