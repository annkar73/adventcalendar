import { styled } from "styled-components";
import Button from "./Button";
import { calendarContent } from "../helpers/content";

const ModalOverlay = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(0, 0, 0, 0.5);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const ModalContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    max-width: 80%;
    overflow: auto;
`;

const StyledImage = styled.img`
    max-width: 100%;
    max-height: 200px;
    width: auto;
    height: auto;
    object-fit: contain;
    margin-bottom: 20px;
    border-radius: 8px;

`

interface ModalProps {
    day: number;
    onClose: () => void;
}

const Modal = ({ day, onClose }: ModalProps) => {
    const content = calendarContent[day - 1];
    return (
        <>
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <h2>{content.date}</h2>
                {content.image && <StyledImage src={content.image} alt={`Bild för ${content.date}`} style={{ maxWidth: '100%', height: 'auto'}} />}
                <p>{content.text}</p>
                <p>
                {content.link && <a href={content.link} target="_blank" rel="noopener noreferrer">Gå till sidan</a>}
                </p>
               
                <Button onClick={onClose}>Stäng</Button>
            </ModalContent>
        </ModalOverlay>
        </>
    );
};

export default Modal;