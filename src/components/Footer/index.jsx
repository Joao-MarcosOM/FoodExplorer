import { Container } from "./styles";

import polygonFooter from "../../assets/polygonFooter.svg"

export function Footer(){
    return(
        <Container>
            <span><img src={polygonFooter} alt="Imagem de um polígono" />food explorer</span>
            <p>© 2023 - Todos os direitos reservados.</p>
        </Container>
    )
}