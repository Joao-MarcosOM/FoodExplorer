import styled from "styled-components";

export const Container = styled.div` 
    display: flex;
    flex-direction: column;
    height: 100vh;

    > .content{
        flex: 1
    }

    > .content .head{
        width: 428px;
        height: 114px;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

        margin-bottom: 36px;
        
        display: flex;
        align-items: center;
        gap: 16px;
        
        button{
            background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
            border: none;
            width: 28px;
            height: 28px;
            margin-left: 26px;
        }

        svg{
            color: ${({theme}) => theme.COLORS.WHITE};
            width: 100%;
            height: 100%;

        }

        h2{
            font-family: 'Roboto Slab', serif;
            font-size: 21px;
            font-weight: 400;
            line-height: 25px;
        }
    }

    > .footer{
        flex-shrink: 0;
    }

   
`;

export const Search = styled.div`
    padding-left: 28px;
    padding-right: 28px;
    padding-bottom: 36px;
`;

export const Options = styled.div`
    width: 372px;
    margin-left: 28px;
    
    > .option{
        width: 100%;
        height: 54px;
        border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_500};
        margin-bottom: 10px;
        button{
            display: flex;
            justify-content: start;
            font-family: 'Poppins', sans-serif;
            font-size: 24px;
            font-weight: 300;
            line-height: 34px;
            color: ${({theme}) => theme.COLORS.GRAY_100};
        }

    }
`;