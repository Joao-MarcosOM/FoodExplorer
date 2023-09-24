import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${ ({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.GRAY_400};
    color: ${({theme, isNew}) => isNew ? theme.COLORS.GRAY_300 : theme.COLORS.WHITE};

    border: ${ ({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

    height: 32px;
    max-width: 120px;
    
    border-radius: 10px;
    padding-right: 16px;

    font-weight: 400;
    font-size: 16px;
    line-height: 16px;

    > button{
        display: flex;
        align-items: center;
        border: none;
        background: none;
        
        svg{
            margin-left: 5px;
            width: 15px;
            height: 15px;
        }
    }

    .button-delete{
        color: ${({theme}) => theme.COLORS.WHITE};
    }

    .button-add{
        color: ${({theme}) => theme.COLORS.GRAY_300};
    }

    > input{
        margin-left: 16px;
        display: flex;
        height: 32px;
        width: 80px;

        color: ${({theme}) => theme.COLORS.WHITE};
        background: transparent;

        border: none;
        
        &::placeholder{
            color: ${({theme}) => theme.COLORS.GRAY_300};
        }
    }
`;