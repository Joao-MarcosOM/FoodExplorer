import { styled } from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.RED};
    color: ${({ theme }) => theme.COLORS.WHITE};

    height: 48px;
    border: 0;
    padding: 12 16px;
    border-radius: 5px;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    svg{
        width: 21.63px;
        height: 21.63px;

    }

    &:disabled{
        opacity: 0.5;
    }
`;