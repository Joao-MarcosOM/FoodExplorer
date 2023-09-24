import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > .return {
    margin-top: 36px;
    margin-left: 56px;
    margin-right: 56px;
    margin-bottom: 16px;
    display: flex;
    justify-content: left;

    svg {
      width: 32px;
      height: 32px;
    }

    button {
      width: 70px;
      font-weight: 500;
      font-size: 24px;
      line-height: 33.6px;
    }
  }

  @media (min-width: 700px) {

    display: flex;
    flex-direction: column;
    height: 100vh;

    > .return {
      width: 1122px;
      margin: 0 auto;
      margin-top: 24px;
      margin-bottom: 42px;
      display: flex;
      justify-content: left;

      svg {
        width: 32px;
        height: 32px;
      }

      button {
        width: 70px;
        font-weight: 700;
        font-size: 24px;
        line-height: 33.6px;
      }
    }

  }
`;

export const Main = styled.div`
  margin-left: 56px;
  margin-right: 56px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  > img {
    width: 264px;
    height: 264px;
    border-radius: 999px;
    margin-bottom: 16px;
  }

  > .infoProduct {

    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 24px;
      margin-bottom: 24px;
      
      h2 {
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-size: 27px;
        line-height: 37px;
        color: ${({theme}) => theme.COLORS.GRAY_100};
        
      }
      
      p{
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: ${({theme}) => theme.COLORS.GRAY_100};
      }
    }
    
    .tags {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 24px;
      text-align: start;
      width: 100vw;
    }
    
    .space {
      height: 24px;
    }
    
    > .counter{
      max-width: 316px;
      margin: 0 auto;
      margin-top: 48px;
      margin-bottom: 54px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 14px;
      color: "GRAY_100";
      font-weight: 700;
      font-family: 'Roboto Slab', serif;
      font-size: 22.6px;
      line-height: 36px;
      
      svg{
        width: 27px;
        height: 27px;
      }
      
      button{
        width: 188px;
      }
    }
    
    > .editProduct{
      margin-top: 48px;
      margin-bottom: 54px;
      width: 100%;
    }
  }
    
    @media (min-width: 700px) {
      width: 1122px;
      margin: 0 auto;
      display: flex;
      flex-direction: row; 
      gap: 47px;

      flex: 1;

      > img {
        width: 390px;
        height: 390px;
        border-radius: 999px;
      }

      > .infoProduct {
        width: 687px;

        .content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: start;
          text-align: start;
          gap: 24px;
          margin-bottom: 24px;
          
          h2 {
            font-family: "Poppins", sans-serif;
            font-weight: 500;
            font-size: 40px;
            line-height: 56px;
            color: ${({theme}) => theme.COLORS.GRAY_100};
            
          }
          
          p{
            font-family: "Poppins", sans-serif;
            font-weight: 400;
            font-size: 24px;
            line-height: 33px;
            color: ${({theme}) => theme.COLORS.GRAY_100};
          }
        }
        
        .tags {
          display: flex;
          justify-content: start;
          text-align: start;
          gap: 12px;
          width: 100%;
        }
        
        .space {
          display: none;
        }
        
        .counter{
          margin: 0;
          margin-top: 48px;
          font-weight: 700;
          font-family: 'Roboto Slab', serif;
          font-size: 20px;
          line-height: 32px;
          
          svg{
            width: 24px;
            height: 24px;
            cursor: pointer;
          }
          
          button{
            width: 162px;

            svg{
              display: none;
            }
          }
        }
        
        > .editProduct{
          margin-top: 48px;
          width: 131px;
        }
      }
  }
`;
