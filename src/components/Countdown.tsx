import { useEffect, useState } from "react";
import { styled } from "styled-components";

const StyledCountdown = styled.div`
    font-size: 0.5;
    font-weight: bold;
    border-radius: 8px;
    text-align: center;
    margin: 20px;
`;

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState<{
        days: number;
        hours: number;
        minutes: number;
    } | null>(null);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            const christmas = new Date(now.getFullYear(), 11, 24, 0, 0, 0);

            if (now > christmas) {
                christmas.setFullYear(christmas.getFullYear() + 1);
            }

            const timeDifference = christmas.getTime() - now.getTime();
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

            setTimeLeft({ days, hours, minutes });
        };

        calculateTimeLeft();
        const interval = setInterval(calculateTimeLeft, 1000 * 60); // Uppdaterar varje minut

        return () => clearInterval(interval);
    }, []);

    if (timeLeft === null) {
        return <p>Laddar nedräkning...</p>;
    }

    const { days, hours, minutes } = timeLeft;

    return (
        <StyledCountdown>
            {days === 0
                ? "Idag är det julafton!"
                : `Nu är det ${days} dagar, ${hours} timmar och ${minutes} minuter kvar till julafton!`}
        </StyledCountdown>
    );
};

export default Countdown;
