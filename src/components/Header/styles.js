import styled from "styled-components";

export const Container = styled.header`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    width: 100vw;
    height: 11.4rem;

    > main{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        
        @media (min-width:700px) {
            display: flex;
            gap: 32px;
            justify-content: center;
        }

        > #iconSignOut{
            width: 32px;
            height: 32px;
            cursor: pointer;
            @media(max-width:700px) {
                display: none;
            }
        }
    
        > #buttonMenu{
            margin-left: 28px;
            background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
            border: none;
            width: 3.2rem;
            height: 3.2rem; 
            
            color: ${({theme}) => theme.COLORS.WHITE};
    
            svg{
                width: 100%;
                height: 100%;
            }
    
            @media (min-width: 700px) {
                display: none;
            }   
        }
    
        > .pedido{
            width: 216px;
            height: 56px;

            svg{
                width: 32px;
                height: 32px;
            }
    
            @media(max-width:700px) {
                display: none;
            }
        }


        > .newProduct{
            width: 216px;
            height: 48px;
            
            @media (max-width:700px) {   
                display: none;
            }
        }
    
        > .title{
            width: 70vw;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;
    
            img{
                width: 24.61px;
                height: 24.61px;
            }
            
            .title-admin{
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 8px;
            }
    
            .title-admin h1{
                font-size: 21px;
                font-weight: 700;
                line-height: 25px;
            }
    
            .title-admin span{
                color: ${({theme}) => theme.COLORS.BLUE};
                font-family: 'Roboto Slab', serif;
                font-weight: 400;
                font-size: 12px;
                line-height: 19.2px;
            }
    
            @media (min-width: 700px) {
                width: 197px;
                display: flex;
                justify-content: center;
                align-items: start;
                gap: 10px;

                .title-admin{ 
                    height: 39px;
                    display: flex;
                    flex-direction: column;
                    align-items: end;
                    justify-content: start;
                }
    
                img{
                    width: 30px;
                    height: 30px;
                }
    
                .title-admin h1{
                    font-size: 24px;
                    font-weight: 700;
                    line-height: 28px;
                }
    
                .title-admin span{
                    color: ${({theme}) => theme.COLORS.BLUE};
                    font-family: 'Roboto Slab', serif;
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 19.2px;
                }
                
            }
        }
    
        > .news {
            width: 37.54px;
            height: 38px;
    
            @media (min-width: 700px) {
                display: none;
            }   
            
            p{
                position: absolute;
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                
                font-family: 'Poppins', sans-serif;
                font-weight: 500;
                font-size: 14px;
                line-height: 24px;
    
                margin-left: 17.5px;
                border-radius: 99px;
                padding: 5.5px;
    
                background-color: ${({theme}) => theme.COLORS.RED};
            }
    
            svg{
                width: 32px;
                height: 32px;
            }
        }
    }


    

`;


export const Search = styled.div`
    padding-left: 28px;
    padding-right: 28px;
    padding-bottom: 36px;
    width: 581px;
    height: 100%;

    display: flex;
    align-items: end;

    .inputSearch{
        width: 100%;
        svg{
                margin-left: 100px;
                width: 24px;
                height: 24px;
        }
    }
    
    @media (max-width: 700px) {
        display: none;
    }   
`;
