import { Container } from "./styles";

import { FiHeart , FiPlus, FiMinus} from "react-icons/fi";
import { PiPencilSimpleBold } from "react-icons/pi";

import {Button} from "../Button";
import {ButtonText} from "../ButtonText";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";

import { useState } from "react";

export function Product( {data, ...rest}){
    const {user, setSearch} = useAuth();

    const [heartClicked, setHeartClicked] = useState(false);
    const [counter, setCounter] = useState(0);


    const navigate = useNavigate();
    
    function handleDetails(id){
        setSearch("");
        navigate(`/details/${id}`)
    }

    function handleEditProduct(id){
        navigate(`/edit/${id}`);
    }

    function handleIncrement() {
        setCounter(prevCounter => Math.min(prevCounter + 1, 99)); 
      }
    
      function handleDecrement() {
        setCounter(prevCounter => Math.max(prevCounter - 1, 0)); 
      }
    

    return(
        <Container {...rest}>
            {
                [USER_ROLE.CUSTOMER].includes(user.role) &&         
                    <FiHeart onClick={() => setHeartClicked(!heartClicked)}
                    fill={heartClicked ? `#E1E1E6` : 'none'} />            
            }

            {
                [USER_ROLE.ADMIN].includes(user.role) &&         
                    <PiPencilSimpleBold onClick={e => handleEditProduct(data.id)}/>            
            }

            <img src={data.image}/>
                
            <div className="linkToDetails">
                <ButtonText title={data.title + " >"} onClick={() => handleDetails(data.id)}/>
            </div>
            
            <div className="details">
                <p>{data.description}</p>
            </div>

            <span>{"R$ " + data.price}</span>
            
            { 
                [USER_ROLE.CUSTOMER].includes(user.role) && 
                <div className="footer">
                    <div className="counter">
                        <FiMinus onClick={handleDecrement} />
                        {counter}
                        <FiPlus onClick={handleIncrement} />
                    </div>

                    <Button title="Incluir"/>
                </div>
            }

        </Container>
    );
}