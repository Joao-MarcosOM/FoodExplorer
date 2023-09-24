import styled from "styled-components";

export const Container = styled.span`
    font-size: 14px;
    padding: 4px 8px;
    border-radius: 5px;
    margin-right: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
`;