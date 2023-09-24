import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100%;
`;


export const Brand = styled.div`
    max-width: 37.6rem;
    height: 12rem;
    border-radius: 2.92px;
    
    margin-top: 44px;
    margin-left: 36px;
    margin-bottom: 62px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    

    font-family: 'Poppins', sans-serif;
    color: ${({theme}) => theme.COLORS.GRAY_100};

    > img{
            left: 6px;
            margin-top: -29px;
            position: absolute;
            width: 19.1rem;
            height: 14.9rem;
        }

    > .info{

        max-width: 215px;

        margin-left: 150px;
        padding-top: 36px;
        height: 100%;

        display: flex;
        flex-direction: column;
        
        > h2{
            font-weight: 600;
            font-size: 18px;
            line-height: 25.2px;
        }

        > p{
            
            font-weight: 400;
            font-size: 12px;
            line-height: 16.8px;
        }

    }

    @media (min-width: 700px) {
        max-width: 1120px;
        height: 260px;
        border-radius: 8px;
        
        margin: 0 auto;
        margin-top: 164px;
        margin-bottom: 63px;

        background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    
        font-family: 'Poppins', sans-serif;
        color: ${({theme}) => theme.COLORS.GRAY_100};

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 12px;

        > img{  
                position: relative;
                width: 632px;
                height: 406px;
                opacity: 80%;
                margin-top: -147px;
                margin-left: -240px;
            }

        > .info{
            width: 542px;
            height: 260px;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 88px;
            
            > h2{
                width: 542px;
                font-weight: 500;
                font-size: 40px;
                line-height: 56px;
            }

            > p{
                font-family: 'Roboto Slab', serif;
                width: 542px;
                font-weight: 400;
                font-size: 16px;
                line-height: 16px;
            }

        }

    }

    
`;

export const Main = styled.div`
    margin-left: 24px;
    height: 100%;

    @media (min-width: 700px){
        margin-left: 0;
        width: 100vw;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;
