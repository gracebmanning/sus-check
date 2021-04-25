import React from 'react';
import { Grade1, Grade2, Grade3, Grade4 } from './data';
import { ResultsContainer, ResultContent, ResultIntro, ResultGrade, ResultDesc, ResourcesIntro, ResourcesInfo, ImageContainer, ImageStorage } from './ResultElements';
//import { Button, ButtonWrapper } from '../Button';

const Results = ({counter, grade}) => {

    return (
        <ResultsContainer id="end">
            
            <ResultContent>
                <ResultIntro>Your sus has been checked... </ResultIntro>
                <ResultGrade>{grade.title}</ResultGrade>
                <ResultDesc>{grade.describe}</ResultDesc>

                <ResourcesIntro>Resources: </ResourcesIntro>
                <ResourcesInfo href="https://policy.ucop.edu/doc/3100155/SustainablePractices#:~:text=The%20Sustainable%20Practices%20Policy%20(%E2%80%9CPolicy,sustainable%20foodservice%2C%20sustainable%20water%20systems" target="_blank" >UCI's Sustainable Practices</ResourcesInfo>
                <ResourcesInfo href="https://directory.goodonyou.eco/" target="_blank" >Discover Ethical and Sustainable Fashion</ResourcesInfo>
                <ResourcesInfo href="https://learn.eartheasy.com/guides/the-best-eco-friendly-alternatives-for-the-plastic-in-your-life/ " target="_blank" >Alternatives to Plastic</ResourcesInfo>
                <ResourcesInfo href="https://www.watercalculator.org/footprint/water-footprint-beef-industrial-pasture/" target="_blank" >Water Footprint of Beef</ResourcesInfo>
                <ResourcesInfo href="https://sustainabletravel.org/" target="_blank" >Sustainable Travel</ResourcesInfo>
                <ResourcesInfo href="https://www.epa.gov/recycle" target="_blank" >Reduce, Reuse, Recycle</ResourcesInfo>

            </ResultContent>
            <ImageStorage src={require('../../images/sustainable.png').default} />
        </ResultsContainer>

    );
};

export default Results