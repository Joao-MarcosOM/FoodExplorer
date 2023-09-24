import { createContext , useContext, useState, useEffect} from "react";

import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }){
    const [data , setData] = useState({});
    const [search, setSearch] = useState("");

    //Aqui eu estou criando a função de autenticação
    async function signIn({ email, password}){
        try{
            const response = await api.post("/session", {email , password});
            const { user, token} = response.data;

            localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
            localStorage.setItem("@foodexplorer:token", token);

            //Aqui eu estou adicionando no cabeçalho de todas as minhas requisições o token de autorização do usuário
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            setData({ user , token});
        }catch(e){
            if(e.response){
                alert(e.response.data.message);
            }else{
                alert("Não foi possível entrar");
            }
        }
    }
    
    function signOut(){
        localStorage.removeItem("@foodexplorer:user");
        localStorage.removeItem("@foodexplorer:token");

        setData({});
    }

    async function updateProduct({ data, productFile }) {
        try {
            const { id } = data;
            if (productFile) {
                const fileUploadForm = new FormData();
                fileUploadForm.append("image_url", productFile);
    
                const response = await api.patch(`/products/image/${id}`, fileUploadForm);
                data.image_url = response.product.image_url;
            }
    
            await api.put(`/products/${id}`, data);
            alert("Produto atualizado!");
        } catch (e) {
            alert("Produto atualizado!");
        }
    }
    

    useEffect(() => {
        const token = localStorage.getItem("@foodexplorer:token");
        const user = localStorage.getItem("@foodexplorer:user");

        if(token && user){
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            setData({
                token,
                user: JSON.parse(user)
            })
        }
    }, []);

    return(
        <AuthContext.Provider value={{signIn, user:data.user, signOut, updateProduct, search, setSearch}}>
            {children}
        </AuthContext.Provider>
    )
}

//Aqui eu estou criando o hook
function useAuth(){
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider , useAuth};