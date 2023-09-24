//Aqui eu importaria as bibliotecas
import { Routes, Route } from "react-router-dom";

//Aqui eu importarei minhas páginas
import { Home } from "../pages/Home";
import { Details } from "../pages/Details"
import { Menu } from "../pages/Menu";
import { NewProduct } from "../pages/NewProduct";
import { EditProduct } from "../pages/EditProduct";

export function AdminRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/menu" element={<Menu />}/>
            <Route path="/details/:id" element={<Details />}/>
            <Route path="/new" element={<NewProduct />}/>
            <Route path="/edit/:id" element={<EditProduct />}/>
        </Routes>
    )
}