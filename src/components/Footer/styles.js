import styled from "styled-components";

export const Container = styled.section`
    width: 100vw;
    height: 77px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    flex-direction: row;
    justify-content: space-around;

    > span {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Roboto Slab', serif;
        font-weight: 700;
        font-size: 15px;
        line-height: 17.88px;
        gap: 6px;
        color: ${({ theme }) => theme.COLORS.GRAY_500};
    }

    > p {
        color: ${({ theme }) => theme.COLORS.WHITE_100};
        font-family: 'DM Sans', sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 15.62px;
        display: flex;
        align-items: center;
    }

    @media (min-width: 700px) {
        > span {

            font-size: 24px;
            line-height: 28.13px;
            gap: 11px;
            color: ${({ theme }) => theme.COLORS.GRAY_500};

            img{
                width: 29px;
                height: 29px;
            }
        }

        > p {
            font-family: 'Roboto Slab', serif;
            font-size: 14px;
            line-height: 22.4px;
        }

    } 
`;
