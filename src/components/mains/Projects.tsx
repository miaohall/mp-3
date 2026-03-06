import {Link} from "react-router";
import {useState} from "react";
import styled from "styled-components";

const ProjStyle = styled.div`
    padding: 2% 4%;
    text-align: left;
    width: 70%;
    height: 100vh;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1000px){
        width: 100%;
    }
`;

const PageTitle = styled.div`
    color: #113f67;
    font-weight: bold;
    font-size: calc(2px + 2vw);
    padding-top: 1%;
    padding-bottom: 1%;
`;

const ProjName = styled.div`
    padding-top: 0.8%;
    padding-bottom: 0.8%;
    color: #38598b;
    font-weight: bold;
    font-size: calc(2px + 1.6vw);
`;

const Subheaders = styled.div`
    font-weight: bold;
    font-size: calc(2px + 1.4vw);
    padding-top: 0.8%;
    padding-bottom: 0.5%;
`;

const Content = styled.div`
    padding-top: 0.8%;
    font-size: calc(2px + 1.1vw);
`;

const LinkStyle = styled(Link)`
    background-color: #a2a8d3;
    font-size: calc(2px + 1.3vw);
    color: White;
    padding: 1.7%;
    margin: 3% 0;
    border-style: solid;
    border-color: #113f67;
    border-radius: 20px;
    text-decoration: none;
    text-align: center;
    
    &:hover {
        color: #38598b;
        font-size: calc(2px + 1.3vw);
        text-decoration: none;
        background-color: #e7eaf6;
        border-color: #38598b;
    }

    @media screen and (max-width: 1000px){
        font-size: calc(2px + 1.3vw);
    }
`;

const CalcButtons = styled.button`
    background-color: #a2a8d3;
    font-size: calc(2px + 1.5vw);
    color: white;
    padding: 1% 4%;
    margin: 1% 2%;
    text-align: center;
    border-radius: 20px;
    border-color: #38598b;
    border-style: dotted;
    border-width: thick;

    &:hover {
        background-color: #e7eaf6;
        color: #38598b;
        border-color: #38598b;
        border-width: thick;
    }
`;

const ClearButton = styled.button`
    background-color: #38598b;
    border-color: #a2a8d3;
    border-width: thick;
    border-style: solid;
    border-radius: 20px;
    color: white;
    font-size: calc(2px + 1.5vw);
    padding: 1% 4%;
    margin: 1% 2%;

    &:hover {
        background-color: #e7eaf6;
        color: #38598b;
        border-color: #38598b;
        border-width: thick;
    }
`;

const StyledOutput = styled.div`
    text-align: center;
    font-size: calc(2px + 1.5vw);
    font-weight: bold;
    color: ${(props) =>props.theme===true ? "red" : "black"};
`;

const AllButtons = styled.div`
    padding: 2.5% 0;
    align-items: center;
`;

export default function Projects() {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [output, setOutput] = useState(0);

    function addition(){
        setOutput(Number(input1)+Number(input2));

    }

    function minus() {
        setOutput(Number(input1)-Number(input2));
    }

    function multiply() {
        setOutput(Number(input1)*Number(input2));
    }

    function divide() {
        if (Number(input2)=== 0) {
            setOutput(NaN)
        }
        else {
            setOutput(Number(input1)/Number(input2));

        }
    }

    function power() {
        let result = 1;
        for (let i=0; i<Number(input2); i++) {
            result*=Number(input1);
        }
        setOutput(result);
    }

    function reset(){
        setInput1("");
        setInput2("");
        setOutput(0);
    }

    return (
        <ProjStyle>
            <PageTitle>PROJECTS</PageTitle>
            <ProjName>Predicting Phishing Scams Based on URL Features</ProjName>
            <Subheaders>Spring 2024</Subheaders>
            <Content>This project is a Python analysis of whether a phishing scam can be
                    detected by it's URL contents.
                    It utilized supervised machine learning techniques (K Nearest Neighbors and Random Forest
                    classification models) with Scikit-Learn, to classify URLs as phishing or non-phishing based on
                    certain features, including URL parameters, path level, and security protocol.
                    We conducted statistical analyses, such as t-tests and correlation studies using Matplotlib, SciPy,
                    and NumPy.
                    We created visualizations including feature importance plots, bar charts, box plots, scatter plots,
                    and histograms using Matplotlib, NumPy and Seaborn.
            </Content>

            <LinkStyle to="https://github.com/miaohall/Phishing-URL-Scam-Detector-Analysis.git">Check it out here!</LinkStyle>

            <ProjName>Calculator</ProjName>

            <label htmlFor="first">First Number:</label>
            <input
                id={`first`}
                value={input1}
                placeholder={`Enter a number`}
                onChange={(e) => setInput1(e.target.value)}
            />
            <br/>
            <br/>
            <label htmlFor="second">Second Number:</label>
            <input
                id={`second`}
                value={input2}
                placeholder={`Enter a number`}
                onChange={(e)=>setInput2(e.target.value)}
            />

            <br/>
            <AllButtons>
                <CalcButtons onClick={addition}>+</CalcButtons>
                <CalcButtons onClick={minus}>-</CalcButtons>
                <CalcButtons onClick={multiply}>*</CalcButtons>
                <CalcButtons onClick={divide}>/</CalcButtons>
                <CalcButtons onClick={power}>**</CalcButtons>
                <ClearButton onClick={reset}>Clear</ClearButton>
            </AllButtons>
            <br/>
            <StyledOutput theme={output< 0 ? true: false}>Answer: {output}</StyledOutput>
        </ProjStyle>
    );
}