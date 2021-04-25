import styled from 'styled-components';

export const ResultsContainer = styled.div`
    background: #EDF5E1;
    display: flex;
    height: 100vh;
    justify-content: left;
    align-items: flex-start;
    position: relative;
    z-index: 1;
`

export const ResultContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-center;
`

export const ResultIntro = styled.h1`
    color: #8EE4AF;
    font-family: 'Archivo', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 96px;

    position: absolute;
    width: 426px;
    height: 104px;
    left: 200px;
    top: 100px;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }

`