import styled from "styled-components";

export const Container = styled.div`
    width: 217px;
    height: 285px;

    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;

    background-color: ${({theme})=>theme.COLORS.WHITE};

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .desc_price, p{
        margin-left: 14px;
    } 

    >img{

        margin: 18px 0 0 53px;
        width: 111px;
        height: 138px;
    }

    .desc_price{
        max-width: 190px;

        display: flex;
    }
    .desc_price span{
        background-color: ${({theme})=>theme.COLORS.GRAY_800};
        color: ${({theme})=>theme.COLORS.WHITE};

        display: inline-block;

        border-radius: 5px;

        padding: 4px;

        font-weight: 700;
        font-size: 15px;
        line-height: 15px;

        width: 64;
        height: 26px;
    }

    h2, p{
        color: ${({theme})=>theme.COLORS.GRAY_900};
    }
    h2 {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
    }
    p{
        font-weight: 300;
        font-size: 10px;
        line-height: 12px;
    }

    button{
        background-color: ${({theme})=>theme.COLORS.BLUE};
        color: ${({theme})=>theme.COLORS.WHITE};
        border: none;

        border-radius: 0px 0px 8px 8px;

        font-weight: 600;
        font-size: 14px;
        line-height: 18px;

        width: 100%;
        height: 32px;

        display: flex;
        justify-content: space-around;
        padding: 0px 50px;
        align-items: center;


        >img {
            width: 14px;
            height: 16px;
        }
    }
`;