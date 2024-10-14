import styled from "styled-components";
import Day from "./Day";
import { useEffect, useState } from "react";

const CalendarContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    justify-content: center;
    align-items: flex-start;
    gap: 15px;
    padding: 25px;
    margin: 20px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
        padding: 10px;
        margin: 5px;
    }

    @media (max-width: 480px) {
        grid-template-columns: repeat(4, 1fr);
        gap: 8px;
        padding: 5px;
    }
    
`;

const shuffleArray = (array: number[]) => {
    return array
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
};

const colors = ["darkred", "darkgreen", "darkorange", "indigo", "teal"];

const Calendar = () => {
    const [shuffledDays, setShuffledDays] = useState<number[]>([]);  

    useEffect(() => {
        const days = Array.from({ length: 24 }, (_, i) => i + 1);
        setShuffledDays(shuffleArray(days));
    }, []);

const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
};

    return (
        <>
        <CalendarContainer>
            {shuffledDays.map(day => (
                <Day key={day} day={day} color={getRandomColor()} />
            ))}
        </CalendarContainer>
        </>
    );
};
export default Calendar;