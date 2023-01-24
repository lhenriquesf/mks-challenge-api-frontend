import styled from "styled-components";

export const Container = styled.header`
    height: 101px;
    background-color: ${({theme})=>theme.COLORS.BLUE};

    .title_header{
        display: flex;
        gap: 10px;
        padding-top: 38px;
        padding-left: 65px;

        >h1{
            font-weight: 600;
            font-size: 40px;
            line-height: 19px;
        }

        >h3{
            font-weight: 300;
            font-size: 20px;
            line-height: 19px;
            padding-top: 4px;
        }
    }

    .items_header{
        display: flex;
        justify-content: space-between;
    }

    button{
        width: 90px;
        height: 45px;

        border-radius: 8px;
        border: none;

        margin-top: 29px;
        margin-right: 88px;

        font-weight: 700;
        font-size: 18px;
        line-height: 22px;

        color: ${({theme})=> theme.COLORS.BLACK};

        >img{
            padding-right: 15px;
        }
    }

`;