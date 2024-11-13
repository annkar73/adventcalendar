import { useEffect, useState } from "react";
import { styled } from "styled-components";
import Modal from "./Modal";

const DayButton = styled.button<{ bgcolor: string }>`
    background-color: ${({ bgcolor }) => bgcolor};
    color: snow;
    font-weight: bold;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    border: 2px solid transparent;
    border-radius: 8px;
    padding: 22px;
    cursor: pointer;
    font-size: 1.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transition: transform 0.2s;
    height: 100%;
    width: 100%;
    margin: 0;

    &:hover {
        background-color: gold;
        color: darkred;
        border: 2px solid transparent;
        transform: translateY(-2px);
    }

    @media (max-width: 768px) {
        padding: 20px 10px;
        font-size: 1.2rem;
        height: 100%;
        width: 100%;
    }
    @media (max-width: 480px) {
        padding: 10px 5px;
        height: 60px;
        width: 60px;
        
    }

`;

interface DayProps {
    day: number;
    color: string;
}

const Day = ({ day, color }: DayProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAllowed, setIsAllowed] = useState(true);

    // isDevelopmentMode constant
    // Set this to true for development purposes to allow access to all doors regardless of the current date
    // Set to false before deploying to restrict access to the doors based on the date
    const isDevelopmentMode = false; 

    useEffect(() => {
        if (!isDevelopmentMode) {
            const today = new Date();
            const todayDay = today.getDate();
            const todayMonth = today.getMonth() + 1;

            if (todayMonth === 12 && todayDay >= day) {
                setIsAllowed(true)
            } else {
                setIsAllowed(false)
            }
        }
    }, [day, isDevelopmentMode]);

    const handleOpen = () => {
        if (isAllowed || isDevelopmentMode) {
        setIsOpen(true);
        }
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
        <DayButton onClick={handleOpen} bgcolor={color}>{day}</DayButton>
        {isOpen && <Modal day={day} onClose={handleClose} />}
        </>

    );

};
export default Day;