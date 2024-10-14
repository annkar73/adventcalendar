import { styled } from "styled-components";
import { ReactNode } from "react";

// Stilar för TextWrapper
const StyledTextWrapper = styled.div<{ bgcolor?: string }>`
    background-color: ${(props) => props.bgcolor || 'snow'};
    color: darkred;
    font-weight: bold;
    border: 5px dotted darkred;
    border-radius: 8px;
    text-align: center;
    width: auto;
    margin: 5px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 480px) {
        max-height: 220px;
        justify-content: flex-start;
        padding: 10px;
    }
`;

// Props för TextWrapper-komponenten
interface TextWrapperProps {
    children: ReactNode;
    bgcolor?: string;
}

// TextWrapper-komponent som använder StyledTextWrapper
const TextWrapper = ({ children, bgcolor }: TextWrapperProps) => {
    return <StyledTextWrapper bgcolor={bgcolor}>{children}</StyledTextWrapper>;
};

export default TextWrapper;
