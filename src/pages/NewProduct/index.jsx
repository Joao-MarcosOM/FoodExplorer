import { Container, Form } from "./styles"

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { ProductItem } from "../../components/ProductItem";
import { Footer } from "../../components/Footer";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";

import { PiCaretLeftBold, PiUploadSimpleBold } from "react-icons/pi";
import { FiChevronDown } from "react-icons/fi";

import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

import { api } from "../../services/api";


export function NewProduct(){
    const params = useParams();
    const navigate = useNavigate();


    const [description, setDescription] = useState();
    const [tags, setTags] = useState([]);
    const [newTag , setNewTag] = useState("");
    const [name, setName] = useState();
    const [category, setCategory] = useState("Refeições");
    const [price, setPrice] = useState();

    const [imageProductFile, setImageProductFile] = useState(null);

    function handleBack() {
        navigate("/");
    }

    function handleChangeImageProduct(event) {
        const file = event.target.files[0];
        setImageProductFile(file); //Aqui eu estou guardando o arquivo selecionado
    }

    async function handleNewProduct(){
        if(!name){
            return alert("Digite o nome da prato.");
        }
        if(!description){
            return alert("Insira uma descrição para o prato.");
        }
        if(!price){
            return alert("Insira um preço para o prato.");
        }
        if(newTag){
            return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio");
        }

        const product = await api.post("/products" , {name, description, tags, category, price});

        if(imageProductFile){
            const fileUploadForm = new FormData();
            fileUploadForm.append("image_url", imageProductFile);
    
            await api.patch(`/products/image/${product.data}`, fileUploadForm);
        }

        alert("Produto criado com sucesso!")
        navigate("/")
    }
    
    
    
    function handleAddTag(){
        setTags(prevState => [...prevState, newTag]); //Aqui eu estou atualizando o vetor de links
        setNewTag("");
        console.log(tags);

    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }
    return(
        <Container>
            <Header />

            <main>

                <div className="return" onClick={() => handleBack()}>
                    <PiCaretLeftBold />
                    <ButtonText title="Voltar"/>
                </div>

                <Form>
                    <h2>Novo prato</h2>

                    <div className="productRow">

                        <div className="inputSection">
                            <p>Imagem do prato</p>
                            <label htmlFor="productImage" id="imageCamp">
                                <PiUploadSimpleBold />
                                <p>Selecione imagem</p>
                                <input id="productImage" type="file" name="image_url" onChange={handleChangeImageProduct}/>
                            </label>
                        </div>
                        
                        <div className="inputSection">
                            <p>Nome</p>
                            <Input id="InputName" placeholder="Ex.: Salada Ceasar" value={name} onChange={e => setName(e.target.value)}/>
                        </div>
                        

                    
                        <div className="inputSection">
                            <p>Categoria</p>
                            <div className="custom-select">
                                <select value={category} onChange={e => setCategory(e.target.value)}>
                                    <option value="Refeições">Refeições</option>
                                    <option value="Pratos principais">Pratos principais</option>
                                    <option value="Bebidas">Bebidas</option>
                                </select>
                                <FiChevronDown className="custom-icon" />
                            </div>
                        </div>
                    
                    </div>

                    <div className="productRow">
                        <div className="inputSection">
                        <p>Ingredientes</p>
                        <div className="tags">
                            {tags && tags.map((tag, index) => (
                                <ProductItem key={String(index)} value={tag} onClick={() => handleRemoveTag(tag)} />
                                ))}
                            <ProductItem isNew placeholder="Adicionar" value={newTag} onChange={e => setNewTag(e.target.value)} onClick={handleAddTag} />
                        </div>
                        </div>
                        

                        
                        <div className="inputSection">
                            <p>Preço</p>
                            <Input id="InputPrice" placeholder="R$ 00,00" value={price} onChange={e => setPrice(e.target.value)}/>
                        </div>
                    </div>
                    
                    
                    <div className="inputSection">
                            <p>Descrição</p>
                            <Textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"  value={description} onChange={e => setDescription(e.target.value)}/>
                    </div>
                    
                    
              
                    <Button id="saveButton" title="Salvar alterações" onClick={handleNewProduct}/>
                

                </Form>
            </main>

            <Footer />
        </Container>
    );
};