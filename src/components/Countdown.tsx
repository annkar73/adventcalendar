import { useEffect, useState } from "react";
import { styled } from "styled-components";

const CountdownModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    backdrop-filter: blur(4px);
    z-index: 1000;
`;

const StyledCountdown = styled.div`
    font-size: 1.2rem;
    font-weight: bold;
    background: darkred;
    color: snow;
    padding: 50px 20px 30px 20px;
    border: 10px solid snow;
    border-radius: 8px;
    text-align: center;
    margin: 50px 20px 30px 20px;
    max-width: 80%;
`;

const CloseButton = styled.button`
    background: none;
    color: snow;
    border: 2px solid snow;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 20px;
    border-radius: 5px;

    &:hover {
        background: snow;
        color: darkred;
    }
`;

const Countdown = () => {
    const [timeLeftChristmas, setTimeLeftChristmas] = useState<{
        days: number;
        hours: number;
        minutes: number;
    } | null>(null);

    const [isModalOpen, setIsModalOpen] = useState(true);

    const calculateTimeLeft = (targetDate: Date) => {
        const now = new Date();
        const timeDiff = targetDate.getTime() - now.getTime();

        return {
            days: Math.floor(timeDiff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)),
        };
    };

    useEffect(() => {
        const updateCountdown = () => {
            const now = new Date();

            // Räkna ner till julafton
            let christmasDate = new Date(now.getFullYear(), 11, 24, 0, 0, 0);
            if (now > christmasDate) {
                christmasDate = new Date(now.getFullYear() + 1, 11, 24, 0, 0, 0);
            }
            setTimeLeftChristmas(calculateTimeLeft(christmasDate));
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 60000); // Uppdatera varje minut

        return () => clearInterval(interval);
    }, []);

    const handleClose = () => setIsModalOpen(false);

    if (!isModalOpen) return null;

    return (
        <CountdownModal>
            <StyledCountdown>
                <p>
                    {timeLeftChristmas && timeLeftChristmas.days === 0
                        ? "Idag är det julafton!"
                        : `Nu är det ${timeLeftChristmas?.days} dagar, ${timeLeftChristmas?.hours} timmar och ${timeLeftChristmas?.minutes} minuter kvar till julafton!`}
                </p>
                <CloseButton onClick={handleClose}>Stäng</CloseButton>
            </StyledCountdown>
        </CountdownModal>
    );
};

export default Countdown;
