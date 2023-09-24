import styled from "styled-components";


export const Container = styled.div`
    height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;

    .head{
        margin-top: 15.8rem;
        width: 278.05px;
        height: 44px;
        gap: 10px;
        display: flex;

        margin-bottom: 7.3rem;
    }

    /* media queries */
    @media (min-width: 700px){
            height: 100vh;
            width: 100vw;

            display: flex;
            flex-direction: row;
            align-items: start;
            justify-content: space-around;

            .head{
                margin-top: 34rem;
                display: flex;
                gap: 19px;
                width: 34rem;

                img{
                    height: 48px;
                    width: 50px;
                }

                h1{
                    font-weight: 700;
                    font-size: 4.2rem;
                    line-height: 4.9rem;
                }
            }
        }

`;

export const Form = styled.div` 
    width: 31.6rem;
     p{
        color: ${({theme}) => theme.COLORS.GRAY_200};
        margin-bottom: .8rem;
    }

    p:nth-child(4){
        margin-top: 3.2rem;
    }

    button{
        margin-top: 3.2rem;
    }

    h2{
        display: none;
    }

    @media (min-width: 700px){
        padding: 6.4rem;
        margin-top: 14.2rem;
        width: 47.6rem;
        border-radius: 16px;
        gap: 32px;
        
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

        h2{
            width: 100%;
            display: flex;
            justify-content: center;
            //styleName: Poppins/400-medium;
            font-family: 'Poppins', sans-serif;
            font-size: 32px;
            font-weight: 500;
            line-height: 45px;

            margin-bottom: 3.2rem;
        }

        p:nth-child(4){
            margin-top: 3.2rem;
        }

        input{
            background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
            border: 1px solid ${({theme}) => theme.COLORS.WHITE};
            border-radius: 5px;
        }
    }
`;
