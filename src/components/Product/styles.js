                                     import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_1000};
    min-width: 210px;
    height: 292px;
    padding: 24px;
    border-radius: 8px;
    border: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_1100};
    gap: 12px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;

    > img{
        width: 88px;
        height: 88px;
        border-radius: 99px;
    }

    > svg {
        width: 24px;
        height: 22px;
        position: absolute; /* Position the heart icon */
        top: 10px; /* Adjust the top position */
        right: 10px; /* Adjust the right position */
        cursor: pointer;
    }

    > span{
        font-family: 'Roboto Slab', serif;
        color: ${({theme}) => theme.COLORS.BLUE};
        font-weight: 400;
        font-size: 16px;
        line-height: 16px;
    }

    > .linkToDetails{
        display: flex;
        justify-content: center;
        align-items: center;

        button{
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            font-size: 14px;
            line-height: 24px;
            color: ${({theme}) => theme.COLORS.GRAY_100};
        }

    }

    > .footer{
        width: 100%;
        display: flex;
        gap: 16px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .counter{
            display: flex;
            gap: 14px;
    
            svg{
                width: 24px;
                height: 24px;
            }
        }
    } 
    



    @media (max-width: 700px){
        > .details {
            display: none;
        }
    }

    @media (min-width: 700px){
        min-width: 304px;
        height: 462px;

        padding: 24px;
        gap: 15px;

        > img{
            width: 176px;
            height: 176px;
            border-radius: 99px;
        }

        > svg {
            width: 24px;
            height: 22px;
            position: absolute; 
            top: 10px; 
            right: 10px;
        }

        > span{
            font-family: 'Roboto Slab', serif;
            color: ${({theme}) => theme.COLORS.BLUE};
            font-weight: 400;
            font-size: 32px;
            line-height: 51px;
        }

        > .linkToDetails{
            width: 256px;
            height: 34px;

            button{
                font-weight: 700;
                font-size: 24px;
                line-height: 33px;
                color: ${({theme}) => theme.COLORS.GRAY_100};

            }

        }

        > .details {
            width: 256px;
            text-align: center;

            p{
                font-family: 'Roboto Slab', serif;
                color: ${({theme}) => theme.COLORS.GRAY_200};
                font-size: 14px;
                line-height: 22px;
            }
        }

        > .footer{
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: center;
            align-items: center;

            button{
                width: 92px;
            }
        }

        > .footer .counter{
            display: flex;
            gap: 14px;
            width: 100px;

            svg{
                width: 24px;
                height: 24px;
                cursor: pointer;
            }
        }
    }

`;