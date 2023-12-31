import { useState } from "react"
import { useAuth } from "../../hooks/auth"
import { Link } from "react-router-dom"

import {Container, Form} from "./styles"

import {Input} from "../../components/Input"
import {Button} from "../../components/Button"
import {ButtonText} from "../../components/ButtonText"

import polygon from "../../assets/polygon.svg"

export function Signin(){
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    
    const { signIn } = useAuth();

    function handleSignIn(){
        signIn({email, password});
    }

    return(
        <Container>
            <div className="head">
                <img src={polygon} alt="imagem de um polígono" />
                <h1>food explorer</h1>
            </div>

            <Form>
                <h2>Faça login</h2>
                <p>Email</p>
                <Input placeholder="Exemplo: exemplo@exemplo.com.br" type="text" onChange={e => setEmail(e.target.value)}/>
                <p>Senha</p>
                <Input placeholder="No mínimo 6 caracteres" type="password" onChange={e => setPassword(e.target.value)}/>

                <Button title="Entrar" onClick={handleSignIn}/>

                <Link to="/register">
                    <ButtonText title="Criar uma conta"/>
                </Link>
            </Form>
        </Container>
    );
}