import styled from 'styled-components';

export const Container = styled.section`
    > h2 {
        margin-top: 24px;
        margin-bottom: 23px;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 18px;
        line-height: 25.2px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    > .listItens {
        display: flex;
        gap: 16px;
        overflow-x: scroll;
        padding-bottom: 10px;
        
    }

    @media (max-width: 700px) {
        > .gradientLeft, .gradientRight {
                display: none;
        }
        
    }

  @media (min-width: 700px) {
    width: 1122px;
    max-height: 530px;
    margin-bottom: 48px;

    > h2 {
      font-size: 32px;
      line-height: 44.8px;
    }

    > .listItens {
      gap: 27px;
      scroll-behavior: smooth;
      padding-bottom: 10px;
      overflow-x: hidden;
    }

    > .gradientLeft{
        height: 470px;
        width: 300px;
        background: linear-gradient(90deg, rgba(0,10,15,1) 0%, rgba(255,255,255,0) 35%);        
        position: relative;
        top: -475px;
        display: flex;
        justify-content: start;
        align-items: center;
    }

    > .gradientLeft #leftArrow {
        display: flex;
        width: 40px;
        height: 40px;
        cursor: pointer;
        top: 180px;
    }

    > .gradientRight{
        height: 470px;
        width: 350px;
        background: linear-gradient(270deg, rgba(0,10,15,1) 0%, rgba(255,255,255,0) 35%);        
        position: relative;
        top: -950px;
        left: 780px;
        display: flex;
        justify-content: end;
        align-items: center;
    }

    > .gradientRight #rightArrow {
        display: flex;
        width: 40px;
        height: 278px;
        cursor: pointer;
    }  
  }

`;
