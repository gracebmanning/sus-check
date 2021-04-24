import styled from 'styled-components';

export const QuestionContainer = styled.div`
    background: #8EE4AF;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
`

export const QuestionContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const QuestionTitle = styled.h1`
color: #05386B;
font-size: 48px;
text-align: center;
font-family: 'Archivo Black', sans-serif;
@media screen and (max-width: 768px) {
    font-size: 40px;
}
@media screen and (max-width: 480px) {
    font-size: 32px;
}
`