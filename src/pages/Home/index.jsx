import { Container, Brand, Main} from "./styles";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Product } from "../../components/Product";
import { Footer } from "../../components/Footer";

import macaron from "../../assets/macaron.png";

import { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { useAuth } from "../../hooks/auth"

export function Home(){
    const [products, setProducts] = useState([]);

    const {search} = useAuth();

    useEffect(() =>{
        async function fetchProducts(){
            const responseWithProductName = await api.get(`/products?name=${search}`);
            const responseWithProductIngredient = await api.get(`/products?name&tags=${search}`)
            if(responseWithProductName.data.length == 0){
                setProducts(responseWithProductIngredient.data)
            }else{
                setProducts(responseWithProductName.data);
            }
        }

        fetchProducts()
    }, []); 


    return(
        <Container>
            <Header />

            <Brand>
                <img src={macaron} alt="Imagem de vários macarons de diversas cores" />

                <div className="info">
                    <h2>Sabores inigualáveis</h2>
                    <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                </div>
            </Brand>

            <Main>
                <Section title="Refeições">
                    {products &&
                        products.map((product) =>
                        product.category === "Refeições" ? (
                            <Product
                            key={String(product.id)} 
                            data={{
                                image: `${api.defaults.baseURL}/files/${product.image_url}`,
                                title: product.name,
                                price: product.price,
                                description: product.description,
                                id: product.id
                            }}
                            />
                        ) : null
                        )}
                </Section>

                <Section title="Pratos principais">
                    {products &&
                        products.map((product) =>
                        product.category === "Pratos principais" ? (
                            <Product
                            key={String(product.id)} 
                            data={{
                                image: `${api.defaults.baseURL}/files/${product.image_url}`,
                                title: product.name,
                                price: product.price,
                                description: product.description,
                                id: product.id
                            }}
                            />
                        ) : null
                        )}
                </Section>

                <Section title="Bebidas">
                    {products &&
                        products.map((product) =>
                        product.category === "Bebidas" ? (
                            <Product
                            key={String(product.id)} 
                            data={{
                                image: `${api.defaults.baseURL}/files/${product.image_url}`,
                                title: product.name,
                                price: product.price,
                                description: product.description,
                                id: product.id
                            }}
                            />
                        ) : null
                        )}
                </Section>

            </Main>

            <Footer />
        </Container>
    )
}