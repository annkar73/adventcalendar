import { styled } from "styled-components";

const HeaderContainer = styled.div`
    width: 100vw;
    height: 100px;
    background-color: #31511e;
    border-bottom: 2px solid #fcf7df;
    color: snow;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    justify-content: center;
`;

const HeaderTitle = styled.h2`
    color: snow;
    margin-bottom: 0;
`;

const HeaderP = styled.p`
    color: snow;
    margin-top: 0;
    font-size: 0.9em;
`;

const Header = () => {
    return (
        <>
        
        <HeaderContainer> 
            <HeaderTitle>Annas Adventskalender</HeaderTitle>
            <HeaderP>Ett nytt pyssel, recept eller liknande per dag.<br /> Men bara en lucka om dagen!</HeaderP>
            </HeaderContainer>
        
        </>
    )
};

export default Header;