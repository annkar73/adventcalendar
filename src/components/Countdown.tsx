import { useEffect, useState } from "react";
import { styled } from "styled-components";

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5); /* Halvgenomskinlig bakgrund */
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(4px); /* Lägger till en suddig effekt */
    z-index: 1000; /* Placera ovanpå annat innehåll */
`;

const StyledCountdown = styled.div`
    font-size: 1.2rem;
    font-weight: bold;
    background: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    margin: 20px;
    max-width: 80%;
`;

const Countdown = () => {
    const [timeLeftChristmas, setTimeLeftChristmas] = useState<{
        days: number;
        hours: number;
        minutes: number;
    } | null>(null);

    const [timeLeftDecember, setTimeLeftDecember] = useState<{
        days: number;
        hours: number;
        minutes: number;
    } | null>(null);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();

            // Nedräkning till julafton, och sedan till 15 januari
            let targetDate = new Date(now.getFullYear(), 11, 24, 0, 0, 0); // 24 december
            if (now > targetDate) {
                targetDate = new Date(now.getFullYear() + 1, 0, 15, 0, 0, 0); // 15 januari nästa år
            }

            const timeDiffChristmas = targetDate.getTime() - now.getTime();
            const daysToChristmas = Math.floor(timeDiffChristmas / (1000 * 60 * 60 * 24));
            const hoursToChristmas = Math.floor((timeDiffChristmas % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutesToChristmas = Math.floor((timeDiffChristmas % (1000 * 60 * 60)) / (1000 * 60));

            setTimeLeftChristmas({ days: daysToChristmas, hours: hoursToChristmas, minutes: minutesToChristmas });

            // Nedräkning till 1 december
            const decemberFirst = new Date(now.getFullYear(), 11, 1, 0, 0, 0);
            if (now > decemberFirst) {
                decemberFirst.setFullYear(decemberFirst.getFullYear() + 1); // Om efter 1 december, sätt till nästa år
            }
            const timeDiffDecember = decemberFirst.getTime() - now.getTime();
            const daysToDecember = Math.floor(timeDiffDecember / (1000 * 60 * 60 * 24));
            const hoursToDecember = Math.floor((timeDiffDecember % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutesToDecember = Math.floor((timeDiffDecember % (1000 * 60 * 60)) / (1000 * 60));

            setTimeLeftDecember({ days: daysToDecember, hours: hoursToDecember, minutes: minutesToDecember });
        };

        calculateTimeLeft();
        const interval = setInterval(calculateTimeLeft, 1000 * 60); // Uppdatera varje minut

        return () => clearInterval(interval);
    }, []);

    if (timeLeftChristmas === null || timeLeftDecember === null) {
        return <p>Laddar nedräkning...</p>;
    }

    const { days: daysToChristmas, hours: hoursToChristmas, minutes: minutesToChristmas } = timeLeftChristmas;
    const { days: daysToDecember, hours: hoursToDecember, minutes: minutesToDecember } = timeLeftDecember;

    return (
        <ModalOverlay>
            <StyledCountdown>
                {daysToDecember > 0 ? (
                    <p>Om {daysToDecember} dagar, {hoursToDecember} timmar och {minutesToDecember} minuter kan du öppna första luckan!</p>
                ) : null}
                <p>
                    {daysToChristmas === 0
                        ? "Idag är det julafton!"
                        : `Nu är det ${daysToChristmas} dagar, ${hoursToChristmas} timmar och ${minutesToChristmas} minuter kvar till ${
                              new Date().getMonth() === 0 && new Date().getDate() >= 15 ? "nästa jul" : "julafton"
                          }!`}
                </p>
            </StyledCountdown>
        </ModalOverlay>
    );
};

export default Countdown;
