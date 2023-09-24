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
import { useState, useEffect } from "react";

import { api } from "../../services/api";

import { useAuth } from "../../hooks/auth";

export function EditProduct(){
    const params = useParams();
    const navigate = useNavigate();

    const { updateProduct } = useAuth();

    const [data, setData] = useState(null);
    const [description, setDescription] = useState();
    const [tags, setTags] = useState([]);
    const [newTag , setNewTag] = useState("");
    const [name, setName] = useState();
    const [category, setCategory] = useState();
    const [price, setPrice] = useState();

    const [imageProductFile, setImageProductFile] = useState(null);

    function handleBack() {
        navigate("/");
      }

    async function handleRemove(){
        const confirm = window.confirm("Deseja realmente remover o produto?");

        if(confirm){
            await api.delete(`products/${params.id}`);
            navigate(-1);
        }
    }

    function handleChangeImageProduct(event) {
        const file = event.target.files[0];
        setImageProductFile(file); //Aqui eu estou guardando o arquivo selecionado
    }

    async function handleUpdate() {
        const updated = {
            id: params.id,
            name: name ? name : data.name,
            category: category ? category : data.category,
            price: price ? price : data.price,
            description: description ? description : data.description,
            tags: tags ? tags : data.tags,
        }
    
        if (!data) {
            console.error('Nenhum dado disponível para atualização.');
            return;
        }
    
        await updateProduct({ data: updated, productFile: imageProductFile });

    }
    
    
    
    function handleAddTag(){
        setTags(prevState => [...prevState, newTag]); //Aqui eu estou atualizando o vetor de links
        setNewTag("");
        console.log(tags);

    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    useEffect(() => {
        async function fetchProduct() {
          const response = await api.get(`/products/${params.id}`);
          setData(response.data);
          let tagList = [];
          response.data.tags.map((item) => {
            tagList.push(item.title)
          });
          setTags([...tagList]);
        }
        fetchProduct();
      }, []);
    return(
        <Container>
            <Header />


            <main>
                <div className="return" onClick={() => handleBack()}>
                    <PiCaretLeftBold />
                    <ButtonText title="Voltar"/>
                </div>

                <Form>
                    <h2>Editar prato</h2>
                    
                    <div className="productRow">
                        <div className="inputSection">
                            <p>Imagem do prato</p>
                            <label htmlFor="productImage">
                                <PiUploadSimpleBold />
                                <p>{window.innerWidth >= 700 ? "Selecione imagem" : "Selecione imagem para alterá-la"}</p>
                                <input id="productImage" type="file" name="image_url" onChange={handleChangeImageProduct}/>
                            </label>
                        </div>
                        
                        {data &&
                            <div className="inputSection">
                                <p>Nome</p>
                                <Input id="InputName" placeholder={data.name} value={name} onChange={e => setName(e.target.value)}/>
                            </div>
                        }

                        {data &&
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
                        }
                    </div>
                    
                    <div className="productRow">
                        {data &&
                            <div className="inputSection">
                            <p>Ingredientes</p>
                            <div className="tags">
                                {tags && tags.map((tag, index) => (
                                    <ProductItem key={String(index)} value={tag} onClick={() => handleRemoveTag(tag)} />
                                    ))}
                                <ProductItem isNew placeholder="Adicionar" value={newTag} onChange={e => setNewTag(e.target.value)} onClick={handleAddTag} />
                            </div>
                            </div>
                        }

                        {data &&
                            <div className="inputSection">
                                <p>Preço</p>
                                <Input id="InputPrice" placeholder={`R$ ${data.price}`} value={price} onChange={e => setPrice(e.target.value)}/>
                            </div>
                        }
                    </div>
                    
                    {data  &&
                    <div className="inputSection">
                            <p>Descrição</p>
                            <Textarea placeholder={data.description}  value={description} onChange={e => setDescription(e.target.value)}/>
                    </div>
                    }
                    
                    <div className="actionButtons">
                        <Button title="Excluir prato" onClick={handleRemove}/>
                        <Button title="Salvar alterações" onClick={handleUpdate}/>
                    </div>

                </Form>
            </main>

            <Footer />
        </Container>
    );
};