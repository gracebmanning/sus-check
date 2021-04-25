import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
    background: #379683;
    white-space: nowrap;
    font-size: 25px;
    padding: 12px 30px;
    color: #EDF5E1;
    margin: 0px 10px;
    border-radius: 50px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #05386B;
    }
`

export const ButtonWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    align-items: center;
`