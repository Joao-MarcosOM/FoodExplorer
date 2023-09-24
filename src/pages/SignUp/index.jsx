// useState é um hook para que possamos criar estados, nesse caso será utilizado para capturar oq o usuário digitou naquele momento
// Criaremos um estado para capturar essa informação de forma dinâmica
import { useState } from "react";

import { api } from "../../services/api";

import { Container, Form } from "./styles"

import { Link , useNavigate } from "react-router-dom"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button";

import polygon from "../../assets/polygon.svg"

export function SignUp(){
    //Aqui eu estou criando um estado
    const [ name , setName ] = useState("");
    const [ email , setEmail ] = useState("");
    const [ password , setPassword ] = useState("");

    const navigate = useNavigate();

    function handleSignUp(){
        if(!name || !email || !password){
            return alert("Preencha todos os campos!");
        }

        if(password.length < 6){
            return alert("A senha precisa ter no mínimo 6 caracteres.")
        }

        api.post("/users", { name, email, password })
        .then(() => {
            alert("Usuário cadastrado com sucesso!");
            //O navigate é utilizado para fazer o usuário voltar para a Home nesse caso
            navigate("/");
        })
        .catch(error => {
            if(error.response){
                alert(error.response.data.message);
            }else{
                alert("Não foi possível cadastrar");
            }
        });
    }

    return(
        <Container>
            <div className="head">
                <img src={polygon} alt="imagem de um polígono" />
                <h1>food explorer</h1>
            </div>

            <Form>
                <h2>Crie sua conta</h2>
                <p>Seu nome</p>
                <Input placeholder="Exemplo: Maria da Silva" type="text" onChange={e => setName(e.target.value)}/>
                <p>Email</p>
                <Input placeholder="Exemplo: exemplo@exemplo.com.br" type="text" onChange={e => setEmail(e.target.value)}/>
                <p>Senha</p>
                <Input placeholder="No mínimo 6 caracteres" type="password" onChange={e => setPassword(e.target.value)}/>

                <Button title="Criar conta" onClick={handleSignUp}/>

                <Link to="/">Já tenho uma conta</Link>
            </Form>
        </Container>
    );
}