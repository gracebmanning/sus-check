import styled from 'styled-components';

export const MainContainer = styled.div`
    background: #EDF5E1;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
`

export const MainLogo = styled.img`
    width: 60%;
    height: 60%;
`

export const MainContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TitleContainer = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    `

export const MainHeader = styled.h1`
    color: #05386B;
    font-size: 85px;
    text-align: center;
    font-family: 'Archivo Black', sans-serif;
    @media screen and (max-width: 768px) {
        font-size: 40px;
    }
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`
export const MainHeaderStrike = styled.h1`
    color: #05386B;
    font-size: 85px;
    text-align: center;
    text-decoration: line-through;
    font-family: 'Archivo Black', sans-serif;
    @media screen and (max-width: 768px) {
        font-size: 40px;
    }
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const MainTagline = styled.h3`
    margin-top: 24px;
    line-height: 10px;
    color: #05386B;
    font-size: 35px;
    font-family: 'Archivo', sans-serif;
    text-align: center;
    max-width: 600px;
    @media screen and (max-width: 768px) {
        font-size: 24px;
    }
    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`