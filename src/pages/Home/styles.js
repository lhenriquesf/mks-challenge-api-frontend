import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    .grid{
        width: 938px;
        height: 601px;

        margin: 116px auto;

        display: grid;

        grid-template-areas: 
        "gridA gridB gridC gridD" 
        "gridE gridF gridG gridH";
    }

    .grid:nth-child(1) {
        grid-area: gridA;
    }

    .grid:nth-child(2) {
        grid-area: gridB;
    }

    .grid:nth-child(3) {
        grid-area: gridC;
    }

    .grid:nth-child(4) {
        grid-area: gridD;
    }

    .grid:nth-child(5) {
        grid-area: gridE;
    }

    .grid:nth-child(6) {
        grid-area: gridF;
    }

    .grid:nth-child(7) {
        grid-area: gridG;
    }

    .grid:nth-child(8) {
        grid-area: gridH;
    }
`;