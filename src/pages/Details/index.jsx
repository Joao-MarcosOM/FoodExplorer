import { Container, Main } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Tag } from "../../components/Tag";
import { Footer } from "../../components//Footer"
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { PiCaretLeftBold, PiReceiptBold } from "react-icons/pi";
import { FiPlus, FiMinus} from "react-icons/fi"
import { api } from "../../services/api";

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";

export function Details() {
  const {user} = useAuth();
  const [data, setData] = useState(null);
  const [counter, setCounter] = useState(0);
  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
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

  const tagGroups = [];

  if (data) {
    data.tags.forEach((tag, index) => {
      if (index % 3 === 0) {
        tagGroups.push([tag]);
      } else {
        tagGroups[tagGroups.length - 1].push(tag);
      }
    });
  }
  
  useEffect(() => {
    async function fetchProduct() {
      const response = await api.get(`/products/${params.id}`);
      setData(response.data);
    }
    fetchProduct();
  }, []);
  return (
    <Container>
      <Header />
      <div className="return" onClick={() => handleBack()}>
        <PiCaretLeftBold />
        <ButtonText title="Voltar"/>
      </div>

      <Main>
        {data && <img src={`${api.defaults.baseURL}/files/${data.image_url}`} />}

        <div className="infoProduct">
          {data && (
            <div className="content">
              <h2>{data.name}</h2>
              <p>{data.description}</p>
            </div>
          )}

          {data && (
            <div className="tags">
              {tagGroups.map((tagGroup, groupIndex) => (
                <div key={groupIndex} className="tag-group">
                  {tagGroup.map((tag, index) => (
                    <Tag key={String(tag.id)} title={tag.title} />
                    ))}
                </div>
              ))}
            </div>
          )}

          {data && [USER_ROLE.CUSTOMER].includes(user.role) && (
            <div className="counter">
                <FiMinus onClick={handleDecrement} />
                {counter}
                <FiPlus onClick={handleIncrement} />
                <Button id="requestButton" icon={PiReceiptBold} title={
                  window.innerWidth >= 700
                  ? `incluir - R$ ${data.price}`
                  : `pedir ∙ R$ ${data.price}`
                }/>
              </div>
          )}

          {data && [USER_ROLE.ADMIN].includes(user.role) && (
            <div className="editProduct">
                <Button  title="Editar prato" onClick={() => handleEditProduct(data.id)}/>
              </div>
          )}
        </div>
      </Main>

      <Footer />
      
    </Container>
  );
}
