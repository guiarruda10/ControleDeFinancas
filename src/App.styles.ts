import styled from "styled-components";

export const Container = styled.div`
    
`;

export const Header = styled.div`
    background-color: #27445D;
    height: 150px;
    text-align: center;
`;

export const HeaderText = styled.h1`
    margin: 0;
    padding: 0;
    color: #EAEAEA;
    padding-top: 30px;
`;


export const Body = styled.div`
    margin: auto;
    max-width: 980px;z
    margin-bottom: 50px;
`;

export const EditForm = styled.div`
    margin: 20px 0;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;

    h2 {
        margin-bottom: 20px;
    }

    label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
    }

    input, select {
        width: 100%;
        padding: 8px;
        margin-bottom: 15px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
`;

export const FormButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;

    button {
        padding: 8px 16px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    button:first-child {
        background-color: #ccc;
        &:hover {
            background-color: #bbb;
        }
    }

    button:last-child {
        background-color: #007bff;
        color: white;
        &:hover {
            background-color: #0056b3;
        }
    }
`;