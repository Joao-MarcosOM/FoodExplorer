import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

    color: ${({theme}) => theme.COLORS.GRAY_300};

    border-radius: 8px;

    > svg{
            margin-left: 14px;
            width: 24px;
            height: 24px;
    }

    > input{
        height: 4.8rem;
        width: 100%;
        
        @media (max-width: 700px) {
            width: 100vw;
        }

        font-weight: 400;

        padding: 1.4rem 1.2rem;

        color: ${({theme}) => theme.COLORS.WHITE};
        background: transparent;
        border: 0;

        &::placeholder{
            color: ${({theme}) => theme.COLORS.GRAY_300}
        }  

        &:focus {
            outline: none;
        }
    }
`;