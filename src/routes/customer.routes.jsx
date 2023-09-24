//Aqui eu importaria as bibliotecas
import { Routes, Route } from "react-router-dom";

//Aqui eu importarei minhas páginas
import { Home } from "../pages/Home";
import { Details } from "../pages/Details"
import { Menu } from "../pages/Menu";

export function CustomerRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/menu" element={<Menu />}/>
            <Route path="/details/:id" element={<Details />}/>
        </Routes>
    )
}