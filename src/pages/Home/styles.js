import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;
`;

export const Products = styled.div`
    width: 938px;
    height: 601px;

    margin: 116px auto;

    display: grid;

    grid-template-areas: 
    "gridA gridB gridC gridD" 
    "gridE gridF gridG gridH";


    div:nth-child(1) {
        grid-area: gridA;
    }

    div:nth-child(2) {
        grid-area: gridB;
    }

    div:nth-child(3) {
        grid-area: gridC;
    }

    div:nth-child(4) {
        grid-area: gridD;
    }

    div:nth-child(5) {
        grid-area: gridE;
    }

    div:nth-child(6) {
        grid-area: gridF;
    }

    div:nth-child(7) {
        grid-area: gridG;
    }

    div:nth-child(8) {
        grid-area: gridH;
    }
`;