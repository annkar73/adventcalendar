import { styled } from "styled-components";

// Grundläggande beskrivningstext
export const Description = styled.p`
    font-size: 1rem;
    line-height: 1.5;
    color: #333;
    margin-bottom: 20px;
`;

// En rubrik för större textblock
export const Heading = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    color: darkgreen;
    margin-bottom: 10px;
`;

// En mindre underrubrik
export const SubHeading = styled.h2`
    font-size: 1.5rem;
    color: darkolivegreen;
    margin-bottom: 15px;
`;

// Textblock med anpassad stil
export const HighlightText = styled.div`
    font-size: 0.5;
    line-height: 1.5;
    color: darkred;
    background-color: "#ffffff";
    padding: 0px;
    border: 5px dotted darkred;
    border-radius: 8px;
    box-sizing: border-box;
`;

// Om du vill skapa en komponent med flera textblock
const Texts = () => {
    return (
        <div>
            <Heading></Heading>
            <Description>
                
            </Description>
            <HighlightText>
                
            </HighlightText>
        </div>
    );
};

export default Texts;
