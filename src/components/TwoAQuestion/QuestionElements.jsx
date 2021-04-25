import styled from 'styled-components';
import { Link } from 'react-scroll';

export const QuestionContainer = styled.div`
    background: ${({ lightbg }) => (lightbg ? '#8EE4AF' : '#379683')};
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
`

export const QuestionContent = styled.div`
    background: #EDF5E1;
    border-radius: 15px;
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    margin: auto;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 70vh;
    width: 60vw;
`

export const QuestionNumber = styled.p`
    color: #05386B;
    font-size: 20px;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 10px;
    font-family: 'Archivo Black', sans-serif;
`

export const QuestionTitle = styled.h1`
    color: #05386B;
    font-size: 35px;
    text-align: center;
    padding-top: 10px;
    font-family: 'Archivo Black', sans-serif;
    
    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const QuestionImage = styled.img`
    height: 45%;
    width: 40%;
`


export const AnswerWrapper = styled.div`
    padding: 10px;
    display: flex;
    justify-content: center;
`

export const AnswerButton = styled(Link)`
    background: #379683;
    color: #EDF5E1;
    width: 250px;
    height: 60px;
    border-radius: 25px;
    font-family: 'Archivo', sans-serif;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;

    @media screen and (max-width: 768px){
        width: 150px;
        font-size: 16px;
    }

    &:hover {
        transform: scale(1.03);
        transition: all 0.3s ease-in-out;
        background: #05386B;
        cursor: pointer;
    }
`