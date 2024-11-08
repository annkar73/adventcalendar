import { styled } from "styled-components";

const FooterContainer = styled.div`
    width: 100vw;
    height: auto;
    background-color: #730808;
    color: snow;
    display: flex;
    flex-direction: column;
    border-top: 2px solid #2e3a4a;
    position: fixed;
    bottom: 0;
    left: 0;
    justify-content: center;
    padding: 10px auto;
`;

const FooterP = styled.p`
    color: snow;
    margin: 5px auto;
    padding: 10px auto;
    font-style: italic;
    font-size: 0.7em;
`;

const Footer = () => {
    return (
        <>
        
        <FooterContainer> 
           
            <FooterP>Den här kalendern är ett hobbyprojekt, som enbart länkar till gratis förslag på pyssel, recept mm för skojs skull. </FooterP>
            </FooterContainer>
        
        </>
    )
};

export default Footer;