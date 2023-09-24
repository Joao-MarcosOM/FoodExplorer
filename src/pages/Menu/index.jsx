import { Container , Search, Options} from "./styles"

import { Input } from "../../components/Input"
import { Footer} from "../../components/Footer"
import { ButtonText } from "../../components/ButtonText";

import { IoCloseOutline  } from "react-icons/io5"
import { IoIosSearch } from "react-icons/io"

import { useAuth } from "../../hooks/auth"

import { useNavigate } from "react-router-dom";
import { useState , useEffect} from "react";

import { USER_ROLE } from "../../utils/roles"

export function Menu(){
    const {user, signOut , setSearch, search} = useAuth();
    const [newSearch, setNewSearch ] = useState(search);

    const navigate = useNavigate();

    function handleUpdateSearch(e){
        setNewSearch(e);
    }

    function handleSignOut(){
        navigate("/");
        signOut();
    }

    function handleHome(){
        navigate(`/`)
    }

    function handleNew(){
        navigate(`/new`)
    }

    function handleHomeAndUpdateSearch(e){
        setSearch(e);
        navigate(`/`)
    }
    
    
    return(
        <Container>
            <div className="content">
                <div className="head">
                    <button onClick={() => handleHome()}><IoCloseOutline /></button>
                    <h2>Menu</h2>
                </div>

                <Search>
                    <Input placeholder="Busque por pratos ou ingredientes" icon={IoIosSearch} value={newSearch}  onIconClick={() => handleHomeAndUpdateSearch(newSearch)} onChange={(e) => handleUpdateSearch(e.target.value)}/>
                </Search>

                <Options>
                    {
                        [USER_ROLE.CUSTOMER].includes(user.role) &&  
                        <div className="option">
                            <ButtonText title="Sair" onClick={() => handleSignOut()}/>
                        </div>
                    }

                    {
                        [USER_ROLE.ADMIN].includes(user.role) &&  
                        <>
                            <div className="option">
                                <ButtonText title="Novo prato" onClick={() => handleNew()}/>
                            </div>
                            <div className="option">
                                <ButtonText title="Sair" onClick={() => handleSignOut()}/>
                            </div>
                        </>
                    }
                </Options>
            </div>

            <div className="footer">
                <Footer />
            </div>
        </Container>
    )
};