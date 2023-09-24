import { Container, Search} from "./styles";

import { FiMenu } from "react-icons/fi";

import { Input } from "../Input";
import { Button } from "../Button";

import { PiReceiptBold , PiSignOut} from "react-icons/pi"
import { IoIosSearch } from "react-icons/io"

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth"
import { useState } from "react";

import polygon from "../../assets/polygon.svg"

import { USER_ROLE } from "../../utils/roles";

export function Header(){
    const {user, signOut , setSearch, search} = useAuth();
    const [newSearch, setNewSearch ] = useState(search);

    const navigate = useNavigate();
    
    function handleMenu(){
        setSearch("");
        navigate(`/menu`)
    }
  
    function handleNewProduct(){
        navigate(`/new`)
    }

    function handleSignOut(){
        navigate("/");
        signOut();
    }

    function handleUpdateSearch(e){
        setNewSearch(e);
    }
    

    function handleHomeAndUpdateSearch(e){
        setSearch(e);
        navigate(`/`)
    }

    return(
        <Container>
            <main>

                <button id="buttonMenu" onClick={() => handleMenu()}><FiMenu /></button>

                <div className="title">
                    <img src={polygon} alt="imagem de um polígono" />
                    <div className="title-admin">
                        <h1>food explorer</h1>
                        {
                            [USER_ROLE.ADMIN].includes(user.role) &&        
                            <span>admin</span>
                        }
                    </div>
                </div>


                
                <Search>
                        <div className="inputSearch">
                            <Input id="inputHeader" placeholder="Busque por pratos ou ingredientes" icon={IoIosSearch} value={newSearch}  onIconClick={() => handleHomeAndUpdateSearch(newSearch)} onChange={(e) => handleUpdateSearch(e.target.value)} onBlur={() => handleHomeAndUpdateSearch(newSearch)}/>
                        </div>
                </Search>

                {
                    [USER_ROLE.CUSTOMER].includes(user.role) &&         
                    
                    <div className="news">
                        <p>0</p>
                        <PiReceiptBold/>
                    </div>
                }

                {
                    [USER_ROLE.ADMIN].includes(user.role) && 
                    <Button className="newProduct" title="Novo prato" onClick={() => handleNewProduct()}/>
                }

                {
                    [USER_ROLE.CUSTOMER].includes(user.role) && 
                    <Button className="pedido" icon={PiReceiptBold} title="Pedidos (0)"/>
                }
                <PiSignOut id="iconSignOut" onClick={() => handleSignOut()}/>
            </main>
        </Container>
    );
}