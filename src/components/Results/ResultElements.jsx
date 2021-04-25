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
    color: #379683;
    font-family: 'Archivo', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 50px;

    position: absolute;
    left: 200px;
    top: 100px;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`
export const ResultGrade = styled.h1`
    color: #2E824E;
    font-family: 'Archivo', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 55px;

    position: relative;
    left: 250px;
    top: 180px;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const ResultDesc = styled.p`
    color: #2E824E;
    font-family: 'Archivo', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;

    position: relative;
    left: 250px;
    top: 200px;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const ResourcesIntro = styled.h1`
    color: #2D9CDB;
    font-family: 'Archivo', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 50px;

    position: absolute;
    width: 426px;
    height: 104px;
    left: 200px;
    top: 400px;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const ResourcesInfo = styled.a`
    color: #05386B;
    font-family: 'Archivo', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;

    position: relative;
    left: 250px;
    top: 380px;
    margin-bottom: 10px;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const ImageStorage = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
    height: 50vh;
`