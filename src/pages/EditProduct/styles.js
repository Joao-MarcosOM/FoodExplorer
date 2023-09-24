import styled from "styled-components";


export const Container = styled.div` 
  width: 100%;
  height: 100vh;

  > main .return {
    margin-top: 11px;
    margin-left: 32px;
    margin-bottom: 22px;
    display: flex;
    justify-content: left;

    svg {
      width: 22px;
      height: 22px;
    }

    button {
      width: 49px;
      height: 23px;
      font-weight: 500;
      font-size: 16.5px;
      line-height: 23.16px;
    }
  }

  @media (min-width: 700px) {
    > main{
      width: 1120px;
      margin: 0 auto;
    }

    > main .return {
      margin-top: 40px;
      svg {
        width: 32px;
        height: 32px;
      }

      button {
        width: 74px;
        height: 34px;
        font-weight: 700;
        font-size: 24px;
        line-height: 33.6px;
      }
    }
  }
`;

export const Form = styled.form`
    margin-left: 32px;
    margin-right: 32px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 53px;

    > .inputSection {
          p{
            font-family: 'Roboto Slab', serif;
            font-weight: 400;
            font-size: 16px;
            line-height: 16px;
            color: ${({theme}) => theme.COLORS.GRAY_200};
            margin-bottom: 16px;
        }
    }    
    
    
    > .productRow {
        display: flex;
        flex-direction: column;
        gap: 24px;

        .inputSection {

          p{
            font-family: 'Roboto Slab', serif;
            font-weight: 400;
            font-size: 16px;
            line-height: 16px;
            color: ${({theme}) => theme.COLORS.GRAY_200};
        }
        
        p:nth-child(1){
          margin-bottom: 16px;
        }
        
        .tags {
          display: flex;
          flex-wrap: wrap; /* Allows items to wrap onto multiple lines */
          gap: 16px;
          max-width: 364px;
          background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
          padding: 8px;
          align-items: center;
          justify-content: space-around;
          border-radius: 8px; 
          word-break: break-all; /* Allows words to break onto the next line */
        }
        
        label{
          height: 48px;
          background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          border-radius: 8px;
          
          svg{
            width: 24px;
            height: 24px;
            
          }
          
          input{
            display: none;
          }
          
          P{
            color: ${({theme}) => theme.COLORS.WHITE};
          }
          
        }
        
        select {
          width: 100%;
          padding: 16px;
          font-size: 14px;
          border-radius: 8px;
          background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
          color: ${({ theme }) => theme.COLORS.GRAY_200};
          border: none;
          appearance: none; 
          }
        }
      }
      
      .custom-select {
        position: relative;
        display: inline-block;
        width: 100%;
      }
      
      .custom-icon {
        width: 24px;
        height: 24px;
        position: absolute;
        top: 50%;
        right: 16px; 
        transform: translateY(-50%);
      }
    

      >  .actionButtons{    
        display: flex;
        gap: 32px;
  
        button:nth-child(1){
          background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
        }
  
        button{
          background-color: ${({theme}) => theme.COLORS.PINK};
        }
      }
      
      @media (min-width: 700px) {
        width: 1120px;
        display: flex;
        flex-direction: column;
        gap: 32px;
        margin-bottom: 53px;

        
        > h2{
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          font-size: 32px;
          line-height: 44.8px;
        }
            
        > .productRow{
          display: flex;
          flex-direction: row;
          gap: 32px;

          .inputSection {
              display: flex;
              flex-direction: column;
              gap: 16px;
              
            .tags {
              gap: 16px;
              min-width: 837px;
              display: flex;
              justify-content: start;
            }
            
            label{
              width: 229px;
              
              P{
                font-weight: 500;
                font-size: 14px;
                line-height: 24px;
              }
              
            }

            #InputName{
              width: 463px;
            }

            #InputPrice{
              width: 251px;
            }
    
            select {
              width: 364px;

              background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
            }
          }
          
        }


      > .actionButtons{
        display: flex;
        justify-content: end;
        gap: 32px;
  
        button{
          width: 172px;
        }

        button:nth-child(1){
          width: 135px;
        }
  
      }
      
    }
    
    `;
