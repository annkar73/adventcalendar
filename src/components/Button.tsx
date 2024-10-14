import { styled } from "styled-components";

const Button = styled.button`
background-color: darkred;
color: snow;
border: none;
border-radius: 8px;
padding: 10px 20px;
cursor: pointer;
font-size: 1rem;
transition: background-color 0.3s;

&:hover {
    background-color: #a50000;
}

&:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(225, 255, 255, 0.5);
}

`;


export default Button;