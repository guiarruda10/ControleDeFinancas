import styled from "styled-components";

export const Container = styled.div`
    background-color: #FFF;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin-top: -40px;
    display: flex;
    align-items: center;
`;

export const MonthArea = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

export const MonthArrow = styled.div`
    width: 40px;               
    height: 40px;              
    display: flex;           
    align-items: center;       
    justify-content: center;   
    font-size: 25px;           
    cursor: pointer;          
    border: 2px solid #ccc;   
    border-radius: 8px;        
    padding: 5px;              
    transition: background-color 0.3s; 

    &:hover {
        background-color: #f0f0f0; 
    }
`;


export const MonthTitle = styled.div`
    flex: 1;
    text-align: center;
`;

export const ResumeArea = styled.div`
    flex: 2;
    display: flex;
`;